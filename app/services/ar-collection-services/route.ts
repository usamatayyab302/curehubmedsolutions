import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(
    new URL("/services/accounts-receivable-collection", request.url),
    308
  );
}
