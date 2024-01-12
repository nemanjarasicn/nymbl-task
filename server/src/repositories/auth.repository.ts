import connection from "../db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/auth.model";

interface IUser {
  username: string;
  password: string;
}

interface IAuthRepository {
  authLogin(
    credentials: IUser,
    callback: (error: string, token?: string | null, user?: User) => void
  ): void;
}

class AuthRepository implements IAuthRepository {
  authLogin(
    credentials: IUser,
    callback: (error: string, token?: string | null, user?: User) => void
  ): void {
    try {
      const query = "SELECT * FROM users WHERE email = ?";
      const jwtSecret = process.env.JWTSECRET;

      // Execute the query with the provided username and password
      connection.query(query, [credentials.username], async (error, rows) => {
        if (error) {
          console.error(error);
          return callback("Some error occurred while conecting database ");
        }

        // Check if the user exists in the database
        const user = rows[0];

        if (user) {
          // Compare the hashed password
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isPasswordValid) {
            // If the password is valid, generate a JWT token
            const token = jwt.sign({ username: user.username }, jwtSecret, {
              expiresIn: "1h",
            });
            callback(null, token, user);
          } else {
            // If password is invalid, return null
            callback("Some error occurred while try to validate user", null);
          }
        } else {
          // If user does not exist, return null
          callback("User does not exist", null);
        }
      });
    } catch (error) {
      console.error(error);
      callback(error);
    }
  }
}

export default new AuthRepository();
