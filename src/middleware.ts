import { NextResponse } from "next/server";

export function middleware() {
  // Middleware untuk next-intl akan dihandle otomatis oleh plugin
  // File ini bisa digunakan untuk custom logic tambahan
  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
