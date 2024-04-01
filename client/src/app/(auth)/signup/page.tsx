import Button from "@/app/components/form/button";
import Checkbox from "@/app/components/form/checkbox";
import Link from "@/app/components/form/link";
import Input from "@components/form/input";
import FormTitle from "../components/title_form";

export default function Signup() {
    return (
        <>
            <FormTitle title="Fill up your information" subtitle="Provide some info for us to participate auction." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input placeholder="Đỗ Tuấn Nghĩa" title="Fullname" name="fullname" />
                <Input placeholder="Phone number" title="Phone number" name="phone" type="number" />
                <Input placeholder="Password" title="Password" name="password" type="password" />
                <Input placeholder="Password" title="Retype Password" name="re_password" type="password" />
                <Input placeholder="demo@gmail.com" title="Email" name="email" />
                <Input placeholder="OTP" title="OTP" name="otp" />
            </div>

            <div>
                <Checkbox name="remember">
                    <span className="ml-2 font-semibold font-montserat text-sm">
                        Tôi cam kết chịu trách nhiệm về các thông tin cá nhân đã kê khai, chính sách bảo mật thông tin khách hàng, cơ chế giải quyết tranh chấp, <Link title="quy chế hoạt động" href="#" /> tại Website. Đồng ý chia sẻ các thông tin đã cung cấp cho tổ chức đấu giá <Link title="tham chiếu theo nghị định 13/2023/NĐ-CP" href="#" />
                    </span>
                </Checkbox>
            </div>

            <div className="mt-5 text-xs">
                <p>Chú ý:</p>
                <ul className="list-disc list-inside">
                    <li>Căn cước công dân khi đăng ký sẽ không thể thay đổi</li>
                    <li>Các cá nhân/tổ chức/doanh nghiệp chỉ được đăng ký 1 tài khoản duy nhất và phải điền chính xác thông tin cần thiết để được tham chiếu đấu giá.</li>
                    <li>Tổ chức đấu giá có quyền từ chối tư cách người tham gia đấu giá nếu người tham gia cung cấp thông tin không chính xác.</li>
                </ul>
            </div>

            <div className="my-5">
                <Button color={"primary"} title="Đăng ký" fullWidth />
            </div>

            <div className="flex gap-2 justify-center font-montserat text-sm">
                <p>You have an account yet</p>
                <Link href="/login" title="Login now"></Link>
            </div>
        </>
    )
}