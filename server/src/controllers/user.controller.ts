import { AuthModel } from "@/models/auth.model";
import { Request, Response } from "@/types/controller";
import { generatePassword } from "@/utils/generate";
import handleError from "@/utils/handle_error";
import AuthValidator, { CreateUserBody, DeleteUserBody, UpdateUserBody } from "@/validators/auth.validator";
import { UserGender } from "@prisma/client";

export default class UserController {
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
                avatar: "",
                address: "",
                gender: UserGender.OTHER
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

    static getUser(req: Request, res: Response) {
        const id = <string>req.params.id;
        handleError(res, async () => {
            const user = await AuthModel.getUser(id);
            if (user) {
                res.json({
                    message: "Ok",
                    data: {
                        user: {
                            id: user.id,
                            email: user.email,
                            fullname: user.fullname,
                            gender: user.gender,
                            role: user.role,
                            avatar: user.avatar
                        }
                    }
                })
            } else {
                res.status(400).json({
                    message: "No exist user",
                    data: {
                        user: null
                    }
                })
            }

        })
    }
}