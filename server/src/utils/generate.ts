export function generateOTP() {
    var otp = Math.floor(Math.random() * 900000) + 100000;
    return otp.toString();
}

export function generatePassword() {
    const v = Math.random().toString(36).slice(-8);
    return "@A" + v;
}