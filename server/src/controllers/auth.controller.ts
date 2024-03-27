import { AuthModel } from "@/models/auth.model";
import TokenModel from "@/models/token.model";
import { Request, Response } from "@/types/controller";
import handleError from "@/utils/handle_error";
import { generateToken, setToken } from "@/utils/token";
import AuthValidator, { LoginBody, LogoutBody } from "@/validators/auth.validator";

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
}