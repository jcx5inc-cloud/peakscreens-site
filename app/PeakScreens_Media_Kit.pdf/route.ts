import { NextResponse } from 'next/server';
export function GET(req: Request) {
  return NextResponse.redirect(new URL('/media-kit', req.url), 308);
}
