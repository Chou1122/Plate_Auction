import { InputError } from "@/types/controller";
import { UserRole } from "@prisma/client";

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

    protected static checkEmpty(text: string, name: string = "text") {
        if (!text || text.trim().length === 0)
            throw new InputError("Invalid empty string", name, text);
    }

    protected static checkOTP(otp: string) {
        const OTPReg = new RegExp(/^\d{6}$/);
        if (!OTPReg.test(otp))
            throw new InputError("Invalid OTP format", "otp", otp);
    }

    protected static checkCID(cid: string) {
        const CID = new RegExp(/^\d{12}$/);
        if (!CID.test(cid))
            throw new InputError("Invalid CID format", "cid", cid);
    }

    protected static checkPhone(phone: string) {
        const phoneRegex = new RegExp(/^[0-9]{10}$/);
        if (!phoneRegex.test(phone))
            throw new InputError("Invalid phone format", "phone", phone);
    }

    protected static checkRole(role: string) {
        const values = Object.values(UserRole);
        return values.includes(role as UserRole);
    }
}