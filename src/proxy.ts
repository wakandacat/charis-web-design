//only ever returns coming-soon page when site is in development mode
//flip the flag to false to allow access to the rest of the site
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEVELOPMENT_MODE = true; //set to TRUE to enable development mode, FALSE to disable

export function proxy(request: NextRequest) {
  
  //development mode OFF
  if (!DEVELOPMENT_MODE) {
    const { pathname } = request.nextUrl;

    if (pathname == "/coming-soon") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } //development mode ON
  else {
    const { pathname } = request.nextUrl;

    if (pathname !== "/coming-soon") {
      return NextResponse.redirect(new URL("/coming-soon", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|favicon.ico|icon.png).*)",
};