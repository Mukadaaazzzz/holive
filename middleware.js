// middleware.js
import { NextResponse } from "next/server";
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data: { session } } = await supabase.auth.getSession();

  const { pathname } = req.nextUrl;

  // Public paths list
  const publicPages = ["/", "/login", "/signup", "/holive-partnership", "/about"];

  // Allow static assets and API routes
  if (
    pathname.match(/\.(png|jpe?g|gif|svg|css|js|ico|woff2|ttf|eot|mp4|webp|json)$/) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api")
  ) {
    return res;
  }

  // Redirect unauthenticated users from protected routes
  if (!session && !publicPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: "/((?!_next|api).*)",
};