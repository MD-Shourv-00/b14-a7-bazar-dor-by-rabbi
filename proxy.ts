import { NextRequest, NextResponse } from "next/server";
import { auth } from "./app/lib/auth";

export async function proxy(request: NextRequest) {
    // session 
    const session = await auth.api.getSession({
        headers: request.headers,
    });

    const pathname = request.nextUrl.pathname;
    const id = pathname.slice(1);

    // Check whether the pathname is a positive integer ID
    const isNumericId =
        id !== "" &&
        Number.isInteger(Number(id)) &&
        Number(id) > 0;

    // Protect details page
    if (isNumericId) {
        if (!session) {
            return NextResponse.redirect(
                new URL("/sign-in", request.url),
            );
        }
    }

    // protect profile page
    if (pathname === "/profile") {
        if (!session) {
            return NextResponse.redirect(
                new URL("/sign-in", request.url),
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/:path*"],
};
