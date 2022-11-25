import getConfig, { setConfig } from "next/config";
import { NextRequest, NextResponse } from "next/server";
import nuxtConfig from "../next.config";

export function middleware(request: NextRequest) {
  if (typeof window !== "undefined") {
    return;
  }
  const publicRuntimeConfig = nuxtConfig?.publicRuntimeConfig ?? {};

  if (request.nextUrl.pathname.startsWith("/api/wagtail-v2")) {
    const baseUrl = new URL(publicRuntimeConfig.apiBaseUrl);

    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = baseUrl.protocol;
    redirectUrl.host = baseUrl.host;
    return NextResponse.redirect(redirectUrl);
  }
}
