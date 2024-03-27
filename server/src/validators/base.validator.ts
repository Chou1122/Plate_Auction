import { InputError } from "@/types/controller";

export default abstract class Validator {
    protected static checkEmail(email: string) {
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

        if (!emailRegex.test(email))
            throw new InputError("Invalid email pattern", "email", email);
    }

    protected static checkPassword(password: string) {
        const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "gm");

        if (!passwordRegex.test(password))
            throw new InputError("Invalid password pattern", "password", password);
    }
}