import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase();
  if (host === 'www.bitdepthaiconsulting.com') {
    const nextUrl = request.nextUrl.clone();
    nextUrl.host = 'bitdepthaiconsulting.com';
    nextUrl.protocol = 'https';
    return NextResponse.redirect(nextUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
