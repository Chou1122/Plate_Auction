import { DotenvParseOutput, config as _conf } from 'dotenv';
import path from 'path';

interface ENV_VAL extends DotenvParseOutput {
    ENV: "dev" | "prod"
    APP_NAME: string
    BACKEND: string
    FRONTEND: string
    PORT: string
    CORS_ORIGIN: string

    RD_PORT: string
    RD_HOST: string

    JWT_KEY: string
    JWT_REFRESH_KEY: string
    JWT_RESET_KEY: string

    MAIL_SERVICE: string
    MAIL_USER: string
    MAIL_PASSWORD: string
}
const { NODE_ENV, ..._override } = process.env;
const override = _override ? _override as Object : {};

const data = _conf(
    NODE_ENV === "dev"
        ? { path: path.resolve(process.cwd(), '.env.dev') }
        : undefined
).parsed

const config = {
    ...data,
    ENV: process.env.NODE_ENV,
    ...override
} as ENV_VAL;

export const env = process.env.NODE_ENV

export default config;