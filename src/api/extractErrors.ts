export function extractErrors(body: unknown): string[] {
  if (!body) return ["Request failed"];

  if (typeof body === "string") return [body];

  if (typeof body === "object" && body !== null) {
    if ("errors" in body) {
      const e = (body as any).errors;

      if (Array.isArray(e)) return e.map(String);
      if (typeof e === "object")
        return Object.values(e).flat().map(String);
    }

    if ("message" in body && typeof (body as any).message === "string") {
      return [(body as any).message];
    }
  }

  return ["Request failed"];
}
