/**
 * Array of public routes that don't require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
  "/",
  "/internship-programs",
  "/services",
  "/internship-programs/cf",
];

/**
 * Array of authentication routes for login and registration
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth"];

/**
 * Array of private routes that require authentication
 * These routes will redirect unauthenticated users to the login page
 * @type {string[]}
 */
export const privateRoutes: string[] = ["/checkout", "/checkout/:paymentItem"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/";
