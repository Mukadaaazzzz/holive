import { NextResponse } from "next/server";
import { supabase } from "./lib/supabaseClient";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // List of pages that don't require authentication
  const publicPages = ["/", "/login", "/signup", "/holive-partnership", "/about"];

  // Allow access to static assets (images, styles, scripts, icons, etc.)
  if (
    pathname.match(/\.(png|jpe?g|gif|svg|css|js|ico|woff2|ttf|eot|mp4|webp|json)$/) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") // API requests should not be blocked
  ) {
    return NextResponse.next();
  }

  // Allow access to public pages
  if (publicPages.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if the user is authenticated
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to all routes except static assets
export const config = {
  matcher: "/((?!_next|api).*)",
};
