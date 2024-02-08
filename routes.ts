export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/auth/reset",
  "/api/uploadthing"
];

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password"
]

/**
 * Prefix para API para rotas de autenticação
 * APIs que começam com esse prefixo tem o próposito de autenticação.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";


/**
 * A página padrão de redirecionamento ao efetuar login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/home";