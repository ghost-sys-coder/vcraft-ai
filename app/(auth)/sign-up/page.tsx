"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { formFields } from "@/constants";
import { signupWithEmail } from "@/appwrite/auth";
import { Loader2 } from "lucide-react";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await signupWithEmail(formData);

      if(result.success) {
        window.location.href = "/generate";
      }
    } catch (error) {
      console.log("Handle submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 container mx-auto">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Create your VCraft AI account</h2>
          <p className="mt-2 text-sm text-gray-500">
            Already have an account? <Link href="/sign-in" className="text-blue-600 hover:underline">Sign in</Link>
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          ref={formRef}
          action={handleSubmit}
        >
          <div className="space-y-4">
            {formFields.map(({ field, type, required, placeholder, label}) => (
              <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                id={field}
                name={field}
                type={type}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            ))}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            {isSubmitting? (
              <>
              <Loader2 className="animate-spin mr-2"/>
                <span>Creating Account...</span>
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-400">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">Terms</Link> and{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
        </div>
      </div>
    </main>
  );
}
