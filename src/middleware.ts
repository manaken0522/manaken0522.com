import { NextResponse } from 'next/server';

export function middleware(request: Request) {

    const request_headers = new Headers(request.headers);
    const url = new URL(request.url)
    request_headers.set('X-Hostname', url.hostname);

    return NextResponse.next({
        request: {
            headers: request_headers
        }
    });
}