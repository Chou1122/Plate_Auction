import { AuthModel } from "@/models/auth.model";
import { Request, Response } from "@/types/controller";
import handleError from "@/utils/handle_error";
import { generateToken, setToken } from "@/utils/token";
import AuthValidator, { LoginBody } from "@/validators/auth.validator";

class AuthController {
    static login(req: Request, res: Response) {
        const data = <LoginBody>req.body;

        handleError(res, async () => {
            AuthValidator.validateLogin(data);

            const user = await AuthModel.verifyLogin(data.email, data.password);
            if (user) {
                setToken(res, data.remember, generateToken(user));
            } else {
                res.status(401).json({
                    message: "Invalid email/phone or password",
                    name: "email"
                })
            }
        })
    }
}

export default new AuthController();