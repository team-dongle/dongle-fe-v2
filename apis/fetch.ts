"use server";

import { headers as nextHeaders } from "next/headers";

/**
 * 기존 Javascript API에서 제공하는 Fetch API를 확장한 Fetch 함수 입니다.
 * Fetch 함수 실행 이후 Response 타입을 지정 가능합니다.
 *
 * @param url - Request를 보낼 URL 입니다.
 * @param options - Request Method, Header, Body, Caching을 지정합니다.
 */

export async function fetchData<T = unknown>(
  url: string,
  options: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS";
    headers?: HeadersInit;
    body?: FormData | Record<string, unknown>;
    cache?: RequestCache;
  },
) {
  const headerList = await nextHeaders();
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`;
  const { method, headers, body, cache } = options;
  const requestIp = (headerList.get("x-forwarded-for") ?? "127.0.0.1").split(
    ",",
  )[0];

  const _requestHeader: Headers = new Headers(headers);

  _requestHeader.set("x-forwarded-for", requestIp);

  const _response = await fetch(`${apiEndpoint}${url}`, {
    method: method,
    headers: _requestHeader,
    body: body instanceof FormData ? body : JSON.stringify(body),
    cache: cache,
  });

  return (await _response.json()) as Promise<T>;
}
