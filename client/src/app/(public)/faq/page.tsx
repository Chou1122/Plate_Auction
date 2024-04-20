import { Section, SectionBody, SectionHeader } from "@components/section";

export default function FAQ() {
    return (
        <div className="space-y-10">
            <Section id="gia-tri-khoi-diem">
                <SectionHeader>
                    Giá trị khởi điểm và giá trị tối đa của biển số xe ô tô đấu giá trực tuyến được tính ra sao?
                </SectionHeader>
                <SectionBody>
                    Hiện nay không có quy định về giá trị tối đa của biển số xe ô tô đấu giá trực tuyến. Về giá trị khởi điểm, theo quy định tại khoản 1 Điều 3 Nghị quyết số 73/2022/QH15 về thí điểm đấu giá biển số xe ô tô quy định: Giá khởi điểm của một biển số xe ô tô đưa ra đấu giá là 40.000.000 đồng.
                </SectionBody>
            </Section>

            <Section id="hinh-thuc-dau-gia-khac">
                <SectionHeader>
                    Biển số xe có đấu giá bằng hình thức khác ngoài đấu giá trực tuyến không?
                </SectionHeader>
                <SectionBody>
                    Theo quy định tại Khoản 1 Điều 4 Nghị quyết số 73/2022/QH15 về thí điểm đấu giá biển số xe ô tô quy định hình thức đấu giá biển số xe ô tô là hình thức đấu giá trực tuyến và không quy định hình thức khác. Do đó biển số xe ô tô chỉ đấu giá bằng hình thức đấu giá trực tuyến.
                </SectionBody>
            </Section>

            <Section id="so-bien-duoc-dang-ky">
                <SectionHeader>
                    Tôi có thể đăng ký đấu giá bao nhiêu biển số?
                </SectionHeader>
                <SectionBody>
                    Không có quy định về việc giới hạn số lượng biển số xe ô tô mà cá nhân/tổ chức có thể đăng ký đấu giá. Bạn có thể đăng ký đấu giá không giới hạn số lượng biển số, tuy nhiên các biển số bạn đăng ký đấu giá phải đáp ứng các quy định pháp luật về biển số xe ô tô đưa ra đấu giá, đã được công bố và cho phép đăng ký đấu giá trên trang đấu giá trực tuyến biển số xe ô tô.
                </SectionBody>
            </Section>

            <Section id="thanh-toan">
                <SectionHeader>
                    Làm thế nào để thanh toán cho biển số mình muốn đấu giá?
                </SectionHeader>
                <SectionBody>
                    Để thanh toán cho biển số muốn đấu giá, Quý khách hàng vui lòng lựa chọn mục “Thanh toán” trên trang đấu giá trực tuyến, lựa chọn biển số và thanh toán theo số tài khoản ngân hàng của tổ chức đấu giá được hiển thị
                </SectionBody>
            </Section>

            <Section id="so-lan-tra-gia">
                <SectionHeader>
                    Tôi có bị giới hạn số lần trả giá hay không?
                </SectionHeader>
                <SectionBody>
                    Theo quy định pháp luật về đấu giá trực tuyến biển số xe ô tô, hiện tại không có quy định giới hạn số lần trả giá trong cuộc đấu giá. Do đó bạn không bị giới hạn số lần trả giá.
                </SectionBody>
            </Section>

            <Section id="kiem-tra-lich-su">
                <SectionHeader>
                    Kiểm tra lịch sử đấu giá như thế nào?
                </SectionHeader>
                <SectionBody>
                    Để kiểm tra lịch sử đấu giá, bạn vui lòng bấm vào mục “Kết quả” trên trang đấu giá trực tuyến
                </SectionBody>
            </Section>


        </div>
    )
}