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

export default class AuthController {
    static login(req: Request, res: Response) {
        const data = <LoginBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateLogin(data);
            const user = await AuthModel.verifyLogin(data.email, data.password);

            if (user) {
                await TokenModel.addDevice(user.id, data.device);
                const token = generateToken({ user, device: data.device, remember: data.remember });
                setToken(res, data.remember, token);
                res.end();
            } else {
                throw new InputError("Invalid email/phone or password", "email")
            }
        })
    }

    static isLogin(req: Request, res: Response) {
        const user = res.locals.user;
        res.json({
            message: "Ok",
            data: {
                user
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
                await AuthModel.addUser({
                    cid: data.cid,
                    email: data.email,
                    password: data.password,
                    phone: data.phone,
                    fullname: data.fullname,
                    role: "USER",
                    avatar: ""
                });

                res.sendStatus(200);
            }
            else throw new InputError("Invalid OTP", "otp", data.otp);
        });
    }

    static revoke(req: Request, res: Response) {
        const { device, user } = res.locals;

        handleError(res, async () => {
            await TokenModel.revokeDevice(user.id, device);
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
                res.end();
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
            res.end();
        })
    }

    /**
    * =================
    * User Admin
    * =================
    */

    static createUser(req: Request, res: Response) {
        const data = <CreateUserBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateCreate(data);

            const password = generatePassword();

            await AuthModel.addUser({
                cid: undefined,
                phone: undefined,
                email: data.email,
                password: password,
                fullname: data.fullname,
                role: data.role,
                avatar: ""
            });

            res.json({
                message: "Create successfully",
                data: {
                    email: data.email,
                    fullname: data.fullname,
                    role: data.role,
                    password: password
                }
            })
        });
    }

    static deleteUser(req: Request, res: Response) {
        const data = <DeleteUserBody>req.params;

        handleError(res, async () => {
            AuthValidator.validateDelete(data);
            await AuthModel.removeUser(data.id);
            res.sendStatus(200);
        });
    }

    static updateUser(req: Request, res: Response) {
        const id = <string>req.params.id;
        const data = <UpdateUserBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateUpdate(data);
            await AuthModel.updateUser(id, data);
            res.sendStatus(200);
        });
    }

    static generatePasswordUser(req: Request, res: Response) {
        const id = <string>req.params.id;

        handleError(res, async () => {
            AuthValidator.validateGeneratePasswordUser({ id });
            const password = generatePassword();

            await AuthModel.generatePasswordUser(id, password);

            res.json({
                message: "Create successfully",
                data: {
                    id: id,
                    password: password
                }
            })
        });
    }
}