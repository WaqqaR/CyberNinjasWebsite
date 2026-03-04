import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host.includes("pepper.tech")) {
    const url = request.nextUrl.clone();
    url.pathname = "/pepper-redirect";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!pepper-redirect|_next/static|_next/image|api|favicon.ico).*)"],
};
