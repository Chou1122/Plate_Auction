import { AuthModel } from "@/models/auth.model";
import OTPModel from "@/models/otp.model";
import TokenModel from "@/models/token.model";
import { Request, Response } from "@/types/controller";
import generateOTP from "@/utils/generate";
import handleError from "@/utils/handle_error";
import { sendOTP } from "@/utils/send_mail";
import { generateToken, setToken } from "@/utils/token";
import AuthValidator, { LoginBody, LogoutBody, OTPBody, RegisterBody } from "@/validators/auth.validator";

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
            } else {
                res.status(401).json({
                    message: "Invalid email/phone or password",
                    name: "email"
                })
            }
        })
    }

    static logout(req: Request, res: Response) {
        const data = <LogoutBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateLogout(data);
            const { user, device } = res.locals;
            console.log(res.locals);

            await TokenModel.removeDevice(user.id, device);
            setToken(res, false, null);
        });
    }

    static register(req: Request, res: Response) {
        const data = <LoginBody>req.body;
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
            // if (OTPModel.verifyOtp(data.device, data.otp)) {
                const acc = AuthModel.addUser({
                    cid: data.cid,
                    email: data.email,
                    password: data.password,
                    phone: data.phone,
                    fullname: data.fullname,
                    role: data.role
                });
            // }
            // else throw new Error("Invalid OTP")
        });
    }
}