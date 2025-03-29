import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Ensure environment variables are set
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function middleware(req) {
  const { data: { user } } = await supabase.auth.getUser();

  const url = req.nextUrl.clone();

  if (user) {
    // Redirect logged-in users from landing page ("/") to dashboard
    if (url.pathname === "/") {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
  } else {
    // Redirect unauthenticated users from protected pages
    if (url.pathname.startsWith("/dashboard")) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// ✅ Replace `export const config` with new `runtime` segment config
export const runtime = "edge"; // Ensures middleware runs on Edge functions
