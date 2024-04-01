import mailer from "@/configs/mail";
import env from "@/configs/env";
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

export const renderTemplate = (templatePath: string, replacements: object): string => {
    const filePath = path.join(path.resolve(), templatePath);
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = handlebars.compile(source);

    return template(replacements);
}

export async function sendMail(to: string, subject: string, body: any) {
    await mailer.sendMail({
        from: `"${env.APP_NAME}" <${env.MAIL_USER}>`,
        to, subject,
        html: body
    });
}

export async function sendForgetPasswordMail(user: any, token: string) {
    const path = env.ENV === "dev"
        ? "/src/templates/forgot-password-email.html"
        : "/templates/forgot-password-email"

    const body = renderTemplate(
        path,
        {
            url: `${env.BACKEND}/auth/reset?token=${token}`,
            name: user.username
        });

    return await sendMail(user.email, "Khôi phục mật khẩu trên " + env.APP_NAME, body)
}

export async function sendResetPasswordMail(user: any) {
    const path = env.ENV === "dev"
        ? "/src/templates/reset-password-email.html"
        : "/templates/reset-password-email"

    const body = renderTemplate(
        path,
        {
            name: user.username
        });

    return await sendMail(user.email, "Đã đặt lại mật khẩu trên " + env.APP_NAME, body)
}

export async function sendOTP(email: string, otp: string) {
    const path = env.ENV === "dev"
        ? "/src/templates/otp.html"
        : "/templates/otp.html"

    const body = renderTemplate(path, { code: otp });

    return await sendMail(email, "Yêu cầu mã OTP trên " + env.APP_NAME, body)
}

export async function startup() {
    return await sendMail(
        "fakenoname02@gmail.com",
        "Server started",
        "Server started now");
}