import config from "@/configs/env";
import AuthModel from "@/models/auth.model";
import OTPModel from "@/models/otp.model";
import TokenModel from "@/models/token.model";
import UserModel from "@/models/user.model";

import { InputError, Request, Response } from "@/types/controller";
import { generateOTP } from "@/utils/generate";
import handleError from "@/utils/handle_error";
import { sendOTP, sendResetPassword } from "@/utils/send_mail";
import { generateReset, generateToken, setToken } from "@/utils/token";
import AuthValidator, {
    LoginBody, LogoutBody, OTPBody,
    RegisterBody, ResetBody, SetPassword,
    UpdateMeBody
} from "@/validators/auth.validator";

export default class AuthController {
    static login(req: Request, res: Response) {
        const data = <LoginBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateLogin(data);
            const user = await AuthModel.verifyLogin(data.email, data.password);

            if (user) {
                await TokenModel.addDevice(user.id, data.device, data.device_info);
                const token = generateToken({ user, device: data.device, remember: data.remember });
                setToken(res, data.remember, token);
                res.sendStatus(200);
            } else {
                throw new InputError("Invalid email/phone or password", "email")
            }
        })
    }

    static logout(req: Request, res: Response) {
        const data = <LogoutBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateLogout(data);
            const { user, device } = res.locals;

            await TokenModel.removeDevice(user.id, device);
            setToken(res, false, null);
            res.sendStatus(200);
        });
    }

    static sendOTP(req: Request, res: Response) {
        const data = <OTPBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateOTP(data);
            const OTP = generateOTP();
            await OTPModel.createOTP(data.device, OTP);

            sendOTP(data.email, OTP);
            res.sendStatus(200);
        });
    }

    static signup(req: Request, res: Response) {
        const data = <RegisterBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateRegister(data);
            if (await OTPModel.verifyOtp(data.device, data.otp)) {
                await UserModel.addUser({
                    cid: data.cid,
                    email: data.email,
                    password: data.password,
                    phone: data.phone,
                    fullname: data.fullname,
                });

                res.sendStatus(200);
            }
            else throw new InputError("Invalid OTP", "otp", data.otp);
        });
    }

    static async checkLogin(req: Request, res: Response) {
        const { user, device } = res.locals;
        const signed_in = await TokenModel.hasDevice(user.id, device);

        if (signed_in) {
            res.json({
                message: "Ok",
                data: {
                    user,
                    device
                }
            })
        } else res.sendStatus(401);
    }

    /**
    * =================
    * Handle me
    * =================
    */
    static getMe(req: Request, res: Response) {
        const user = res.locals.user;

        handleError(res, async () => {
            const { user: userData, setting: userSetting } = await UserModel.getUser(user.id);

            res.json({
                message: "Ok",
                data: {
                    user: userData,
                    setting: userSetting
                }
            })
        })
    }

    static updateMe(req: Request, res: Response) {
        const user = res.locals.user;
        const data = <UpdateMeBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateUpdateMe(data);
            UserModel.updateMe(user.id, data);
            res.sendStatus(200);
        })
    }

    /**
    * =================
    * Reset password
    * =================
    */
    static reset(req: Request, res: Response) {
        const data = <ResetBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateReset(data);
            const user = await AuthModel.verifyReset(data.email);

            if (user) {
                const token = generateReset({ user, device: "", remember: false });
                sendResetPassword(data.email, user.fullname, token.token);
                res.sendStatus(200);
            } else {
                throw new InputError("No user linked with the email", "email")
            }
        })
    }

    static saveToken(req: Request, res: Response) {
        const query = req.query;
        const email = req.query.email;

        query.token && setToken(res, false, { token: query.token });
        res.redirect(config.FRONTEND + "/pass?email=" + email);
    }

    static resetPassword(req: Request, res: Response) {
        const data = <SetPassword>req.body;
        const user = res.locals.user;

        handleError(res, async () => {
            AuthValidator.validateSetPassword(data);
            AuthModel.forceChangePassword(user.id, data.password);
            res.sendStatus(200);
        })
    }
}