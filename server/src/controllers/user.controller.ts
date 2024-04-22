import AuthModel from "@/models/auth.model";
import TokenModel from "@/models/token.model";
import UserModel from "@/models/user.model";
import { Request, Response } from "@/types/controller";
import { generatePassword } from "@/utils/generate";
import handleError from "@/utils/handle_error";
import UserValidator, { CreateUserBody, DeleteUserBody, UpdateUserBody } from "@/validators/user.validator";
import { UserGender } from "@prisma/client";

export default class UserController {
    static createUser(req: Request, res: Response) {
        const data = <CreateUserBody>req.body;

        handleError(res, async () => {
            UserValidator.validateCreate(data);
            const password = generatePassword();

            const user = await UserModel.addUser({
                cid: undefined,
                phone: undefined,
                email: data.email,
                password: password,
                fullname: data.fullname,
                role: data.role
            });

            res.json({
                message: "Create successfully",
                data: {
                    id: user.id,
                    email: user.email,
                    fullname: user.fullname,
                    role: user.role,
                    password: password
                }
            })
        });
    }

    static deleteUser(req: Request, res: Response) {
        const data = <DeleteUserBody>req.params;

        handleError(res, async () => {
            UserValidator.validateDelete(data);
            await UserModel.removeUser(data.id);
            await TokenModel.revokeAllDevices(data.id);
            res.sendStatus(200);
        });
    }

    static updateUser(req: Request, res: Response) {
        const id = <string>req.params.id;
        const data = <UpdateUserBody>req.body;

        handleError(res, async () => {
            UserValidator.validateUpdate(data);
            await UserModel.updateUser(id, data);
            res.sendStatus(200);
        });
    }

    static rePasswordUser(req: Request, res: Response) {
        const id = <string>req.params.id;

        handleError(res, async () => {
            UserValidator.validateGeneratePasswordUser({ id });
            const password = generatePassword();
            await UserModel.setPasswordUser(id, password);

            res.json({
                message: "Create successfully",
                data: {
                    id: id,
                    password: password
                }
            })
        });
    }

    // static getUser(req: Request, res: Response) {
    //     const id = <string>req.params.id;
    //     handleError(res, async () => {
    //         const user = await UserModel.getUser(id);
    //         if (user) {
    //             res.json({
    //                 message: "Ok",
    //                 data: {
    //                     user: {
    //                         id: user.id,
    //                         email: user.email,
    //                         fullname: user.fullname,
    //                         gender: user.gender,
    //                         role: user.role,
    //                         avatar: user.avatar
    //                     }
    //                 }
    //             })
    //         } else {
    //             res.status(400).json({
    //                 message: "No exist user",
    //                 data: {
    //                     user: null
    //                 }
    //             })
    //         }
    //     })
    // }

    static getAllUser(req: Request, res: Response) {
        handleError(res, async () => {
            const users = await UserModel.getAuthorityUser();
            res.json({
                message: "Ok",
                data: { users }
            });
        });
    }
}