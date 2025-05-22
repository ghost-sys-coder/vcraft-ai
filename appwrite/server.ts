"use server";
import { Client, Account, Databases } from "node-appwrite";
import { cookies } from "next/headers";


export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECTID!);

  const session = (await cookies()).get("vcraft-appwrite-session");
  if (!session || !session.value) {
    throw new Error("Session not found");
  }

  client.setSession(session.value);

  const account = new Account(client);
  const databases = new Databases(client);

  return { client, account, databases };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECTID!)
    .setKey(process.env.NEXT_PUBLIC_APPWRITE_API_SECRET!);

  const account = new Account(client);

  return { account };
}


