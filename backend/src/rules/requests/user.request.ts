import { JwtPayload } from "jsonwebtoken";
import { RoleType, TokenType } from "~/constants/enums";
import z from "zod/v3";
import { loginSchema, refreshTokenSchema } from "../auth/auth.schema";

export type LoginRequestBody = z.infer<typeof loginSchema>["body"];
export type RefreshTokenRequestBody = z.infer<typeof refreshTokenSchema>["body"];

export interface TokenPayload extends JwtPayload {
    userId: string;
    type: TokenType;
    role: RoleType;
    exp: number;
    iat: number;
}
