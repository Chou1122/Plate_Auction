import { NextRequest, NextResponse } from "next/server";
import { IResponse } from "./configs/axios";

export const config = {
    matcher: [
        "/",
        "/user/(.*)",
        "/faq/(.*)",
        "/admin/(.*)",
        "/room/(.*)"
    ]
}

export default async function middleware(request: NextRequest) {
    try {
        const response = await fetch("http://localhost:8000/v1/auth", {
            method: "GET",
            credentials: "include",
            headers: {
                Cookie: request.cookies.toString()
            }
        });

        if (response.status === 200) {
            const data = await response.json() as IResponse<{ user: any, device: string }>;

            const headers = new Headers(request.headers);
            headers.set('x-user', JSON.stringify(data));

            return NextResponse.next({ headers });
        } else throw new Error("Unauthenticated");

    } catch (error) {
        const pathname = request.nextUrl.pathname;

        if (pathname.startsWith("/admin") ||
            pathname.startsWith("/user") ||
            pathname.startsWith("/room"))
            return NextResponse.redirect(new URL("/login?next=" + pathname, request.url));
    }
}