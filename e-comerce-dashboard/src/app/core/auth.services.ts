import { Credentials, UserAuth } from "./core.models";
import authHttpClient from "./http-auth";

class AuthService {
  public authLogin(credentials: Credentials) {
    return authHttpClient.post<UserAuth>("auth/login", credentials);
  }
}

export default new AuthService();
