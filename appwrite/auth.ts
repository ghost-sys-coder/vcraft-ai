"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "./server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// get the loggedin user
export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        return await account.get(); 
    } catch (error) {
        console.log("Error getting logged in user:", error);
        return null;
    }
}

// create a signup function with appwrite 
export async function signupWithEmail(formData:FormData) {

    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;
    const name = formData.get("name") as string | null;

    if (!email || !password || !name) {
        throw new Error("All fields (email, password, name) are required.");
    }

    const { account } = await createAdminClient();

    await account.create(ID.unique(), email, password, name);

    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("vcraft-appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true
    });

    return {
        success: true
    }
}

// create a signin function with appwrite
export default async function signinWithEmail(formData: FormData) {
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;

    if (!email || !password) {
        throw new Error("All fields (email, password) are required.")
    }

    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);

    if (!session) {
        throw new Error("Session not created!");
    }

    (await cookies()).set("vcraft-appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true
    });

    return {
        success: true
    }
}

// sign out function
export async function signOut() {
    const cookieStore = cookies();
    const session = (await cookieStore).get("vcraft-appwrite-session");

    if (!session || !session.value) {
        console.warn("No session found during signout");
        redirect("/sign-in")
    }

    const { account } = await createAdminClient();
    
    try {
        await account.deleteSession("current");
    } catch (error) {
        console.log("SignOut error:", error);
    }

    (await cookieStore).set("vcraft-appwrite-session", "", {
        maxAge: 0,
        path: "/"
    });

    redirect("/sign-in");
}