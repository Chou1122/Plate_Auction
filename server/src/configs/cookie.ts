import { CookieOptions } from "express";

export const cookieSecureOption: CookieOptions = {
    httpOnly: true, 
    secure: true
}

/**
 * Generate cookie option with time life in seconds
 * @param age 
 * @returns 
 */
export function withAge(age: number | undefined): CookieOptions {
    return {
        ...cookieSecureOption,
        maxAge: age * 1000
    }
}