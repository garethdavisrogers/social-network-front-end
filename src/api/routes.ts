// src/api/routes.ts

function trimTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

function trimLeadingSlash(s: string) {
  return s.startsWith("/") ? s.slice(1) : s;
}

function joinUrl(base: string, path: string) {
  return `${trimTrailingSlash(base)}/${trimLeadingSlash(path)}`;
}

// Read globals once
const API_BASE = trimTrailingSlash(__API_URL__);

// These are "paths" (no base), good for readability
export const ROUTES = {
  auth: {
    login: __LOGIN_URL__,       // e.g. "auth/login" or "/auth/login"
    register: __REGISTER_URL__, // e.g. "auth/register"
  },
  users: {
    byId: (id: string) => `user/${id}`,
  },
} as const;

// These are fully-qualified URLs (base + path), good for fetch()
export const URLS = {
  auth: {
    login: joinUrl(API_BASE, ROUTES.auth.login),
    register: joinUrl(API_BASE, ROUTES.auth.register),
  },
  users: {
    byId: (id: string) => joinUrl(API_BASE, ROUTES.users.byId(id)),
  },
} as const;

export { API_BASE };
