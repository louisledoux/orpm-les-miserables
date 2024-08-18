import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import RoutesPathEnum from '@/routes/Routes.enum';

export function GET(request: NextRequest) {
  draftMode().disable();
  return NextResponse.redirect(new URL(RoutesPathEnum.BLOG, request.url));
}
