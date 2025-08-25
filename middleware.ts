import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/libs/auth";

export async function middleware(request: NextRequest, response:NextResponse) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  // if there's no any user sign in, direct them to sign in page
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url))
  }

  return NextResponse.next();
}

export const config = {
  // Configure which routes the middleware should run on
  // This regex pattern matches all routes EXCEPT:
  // - /api/* (API routes)
  // - /_next/static/* (Next.js static files)
  // - /_next/image/* (Next.js image optimization)
  // - /favicon.ico (favicon file)
  // - /sign-in (authentication page)
  // - /assets/* (static assets like images, videos, etc.)
  // The middleware will run on all other routes for authentication/protection
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};