import { NextRequest, NextResponse } from 'next/server';
import { PUBLIC_ROUTES } from './app/shared/constants/routes';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;
  const pathname = request.nextUrl.pathname;
  if (!token && pathname.startsWith('/user')) {
    return NextResponse.redirect(new URL(PUBLIC_ROUTES.LOGIN, request.url));
  }

  if (token && pathname === PUBLIC_ROUTES.LOGIN) {
    return NextResponse.redirect(new URL(PUBLIC_ROUTES.HOME, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/user/:path*', '/login'],
};
