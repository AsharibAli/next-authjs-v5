// An Array of public routes that
// do not require authentication, and are publicly accessible.
export const publicRoutes = ["/"];

// An Array of auth routes that require authentication.
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

// The prefix for the API Authetication routes.
export const apiAuthPrefix = "/api/auth";

// The default redirect path after a successful login.
export const DEFAULT_LOGIN_REDIRECT = "/settings";
