import pkceChallenge from "pkce-challenge";

export const { code_verifier, code_challenge } = pkceChallenge();

// export function generateCodeVerifier() {
//   return crypto.randomBytes(32).toString("base64url"); // Using Node.js' crypto
// }

// export function generateCodeChallenge(codeVerifier) {
//   return crypto.createHash("sha256").update(codeVerifier).digest("base64url");
// }
