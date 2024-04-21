import config from "@/configs/env";
import { AuthModel } from "@/models/auth.model";
import OTPModel from "@/models/otp.model";
import TokenModel from "@/models/token.model";
import { InputError, Request, Response } from "@/types/controller";
import { generateOTP, generatePassword } from "@/utils/generate";
import handleError from "@/utils/handle_error";
import { sendOTP, sendResetPassword } from "@/utils/send_mail";
import { generateReset, generateToken, setToken } from "@/utils/token";
import AuthValidator, { CreateUserBody, DeleteUserBody, LoginBody, LogoutBody, OTPBody, RegisterBody, ResetBody, SetPassword, UpdateUserBody } from "@/validators/auth.validator";
import { UserGender } from "@prisma/client";

export default class SessionController {
    static revoke(req: Request, res: Response) {
        const { device, user } = res.locals;

        handleError(res, async () => {
            await TokenModel.revokeDevice(user.id, device);
            res.sendStatus(200);
        })
    }
}