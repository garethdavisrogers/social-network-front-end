import type { ApiResult } from "../../types/api/ApiResult";
import { extractErrors } from "../extractErrors";

export async function requestJson<T>(
  url: string,
  init?: Omit<RequestInit, "body"> & { body?: unknown }
): Promise<ApiResult<T>> {
  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    body: init?.body === undefined ? undefined : JSON.stringify(init.body),
  });

  const ct = res.headers.get("content-type") ?? "";
  const body: unknown = ct.includes("application/json")
    ? await res.json().catch(() => null)
    : await res.text().catch(() => null);

  if (!res.ok) {
    return { ok: false, status: res.status, errors: extractErrors(body) };
  }

  return { ok: true, status: res.status, data: body as T };
}
