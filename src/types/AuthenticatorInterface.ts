export interface AuthenticatorInterface {
    getUsername(): Promise<string>;
}