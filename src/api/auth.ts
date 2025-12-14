import { URLS } from "./routes";

export async function login(req: LoginRequest) {
  return requestJson<LoginResponse>(URLS.auth.login, {
    method: "POST",
    body: req,
  });
}

export async function register(req: LoginRequest) {
  return requestJson<void>(URLS.auth.register, {
    method: "POST",
    body: req,
  });
}
