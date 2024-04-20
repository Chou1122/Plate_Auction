import { Section, SectionBody, SectionHeader } from "@components/section";

export default function SecurityPage() {
    return (
        <>
            <Section>
                <SectionHeader>
                    CHÍNH SÁCH BẢO MẬT THÔNG TIN CỦA KHÁCH HÀNG
                </SectionHeader>
                <SectionBody>
                    <div className="mb-5">
                        <p className="font-semibold">Điều 1. Mục đích và phạm vi thu thập</p>
                        <ul className="list-decimal list-inside pl-5">
                            <li>
                                Việc thu thập dữ liệu chủ yếu trên trang điện tử, trên ứng dụng di động của Công ty Đấu giá hợp danh Việt Nam (Công ty) bao gồm:
                                <ul className="list-[lower-alpha] list-inside pl-5">
                                    <li>Đối với khách hàng là cá nhân bao gồm:
                                        <ul className="list-disc list-inside pl-5">
                                            <li>Họ và tên;</li>
                                            <li>Ngày, tháng, năm sinh;</li>
                                            <li>Số CCCD, ngày cấp, nơi cấp;</li>
                                            <li>Số điện thoại;</li>
                                            <li>Hòm thư điện tử;</li>
                                            <li>Địa chỉ liên lạc;</li>
                                            <li>Số tài khoản ngân hàng.</li>
                                        </ul>
                                    </li>

                                    <li>Đối với khách hàng là tổ chức bao gồm:
                                        <ul className="list-disc list-inside pl-5">
                                            <li>Tên tổ chức:</li>
                                            <li>Giấy phép hoạt động/đăng ký kinh doanh;</li>
                                            <li>Số CCCD của người đại diện pháp luật, ngày cấp, nơi cấp;</li>
                                            <li>Số điện thoại tổ chức;</li>
                                            <li>Số điện thoại người đại diện pháp luật;</li>
                                            <li>Hòm thư điện tử;</li>
                                            <li>Địa chỉ liên hệ</li>
                                            <li>Số tài khoản ngân hàng.</li>
                                        </ul>
                                    </li>

                                    Đây là các thông tin mà Công ty yêu cầu khách hàng cung cấp khi đăng ký tài khoản. Công ty xác minh tài khoản khi khách hàng đăng ký tham gia đấu giá trên Công ty nhằm đảm bảo quyền lợi cho các bên tham gia đấu giá trực tuyến biển số xe ô tô.
                                </ul>
                            </li>

                            <li>
                                Trong quá trình khách hàng tham gia đấu giá tại trang đấu giá trực tuyến, Công ty lưu trữ mọi thông tin về mức giá được trả trong cuộc đấu giá, người trả giá, thời gian trả giá và những thông tin cần thiết khác trong quá trình diễn ra cuộc đấu giá trực tuyến biển số xe ô tô.
                            </li>

                            <li>
                                Thông tin về tài khoản ngân hàng của khách hàng sử dụng để, nộp tiền hồ sơ, tiền đặt trước Công ty sẽ không lưu giữ.
                            </li>

                            <li>
                                Thông tin tài khoản ngân hàng của khách hàng cung cấp khi đăng ký tài khoản tham gia đấu giá biển số xe ô tô, Công ty sẽ hoàn trả tiền đặt trước thông qua tài khoản đã đăng ký này nếu không có yêu cầu sửa đổi của khách hàng.
                            </li>

                            <li>
                                Công ty được sử dụng thông tin nhận diện cá nhân của khách hàng và một số thông tin nhận diện phi cá nhân (như cookies, địa chỉ IP, loại trình duyệt, ngày tổng số, v.v.) để gia tăng khả năng đáp ứng của Trang thông tin đấu giá trực tuyến.
                            </li>

                            <li>
                                Công ty thực hiện thu thập, lưu trữ và bảo vệ dữ liệu thông tin khách hàng tham gia đấu giá biển số xe ô tô theo quy định của pháp luật.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <p className="font-semibold"> Điều 2. Trách nhiệm của Khách hàng trong việc bảo vệ thông tin</p>
                        <ul className="list-decimal list-inside pl-5">
                            <li>
                                Các khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hòm thư điện tử của mình.
                            </li>
                            <li>
                                Ngoài ra, khách hàng có trách nhiệm thông báo kịp thời cho Công ty về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
                            </li>
                            <li>
                                Khách hàng có trách nhiệm tôn trọng, bảo vệ dữ liệu cá nhân của người khác trong toàn bộ quá trình tham gia đấu giá.
                            </li>
                            <li>
                                Thực hiện nghiêm túc quy định của pháp luật về bảo vệ dữ liệu cá nhân.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <p className="font-semibold"> Điều 3. Phạm vi sử dụng thông tin</p>
                        Công ty sử dụng thông tin khách hàng cung cấp để:
                        <ul className="list-decimal list-inside pl-5">
                            <li>
                                Cung cấp các dịch vụ đến khách hàng;
                            </li>

                            <li>
                                Gửi các thông báo về hoạt động, trao đổi thông tin giữa khách hàng và Công ty;
                            </li>

                            <li>
                                Ngăn ngừa các hoạt động chống phá, huỷ hoại tài khoản người dùng hoặc các hoạt động giả danh, giả mạo khách hàng;
                            </li>

                            <li>
                                Liên lạc và giải quyết với khách hàng trong những trường hợp đặc biệt;
                            </li>

                            <li>
                                Không sử dụng thông tin của khách hàng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại Công ty.
                            </li>
                        </ul>
                        Trong trường hợp có yêu cầu của cơ quan chức năng, Công ty có trách nhiệm hợp tác cung cấp thông tin khách hàng khi có yêu cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, Toà án, cơ quan Công an điều tra, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng. Ngoài ra, không ai có quyền xâm phạm vào thông tin của khách hàng.
                    </div>

                    <div className="mb-3">
                        <p className="font-semibold">Điều 4. Thời gian lưu trữ thông tin</p>
                        Dữ liệu của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu huỷ bỏ của khách hàng trừ trường hợp pháp luật có quy định khác. Còn lại trong mọi trường hợp thông tin khách hàng sẽ được bảo mật trên máy chủ của Công ty.
                    </div>

                    <div className="mb-3">
                        <p className="font-semibold">Điều 5. Những chủ thể có quyền tiếp cận thông tin</p>
                        <ul className="list-decimal list-inside pl-5">
                            <li>
                                Công ty, Đấu giá viên và thành viên được phân công thực hiện cuộc đấu giá tài sản.
                            </li>
                            <li>
                                Khách hàng không thể lấy hoặc biết được thông tin cá nhân của những người cùng đăng ký tham gia đấu giá cuộc đấu giá biển số xe.
                            </li>
                            <li>
                                Công ty có quyền tiếp cận các thông tin cá nhân mà khách hàng đã đăng ký khi lập tài khoản.
                            </li>
                            <li>
                                Trong trường hợp có yêu cầu của cơ quan chức năng có thẩm quyền, Công ty có trách nhiệm hợp tác cung cấp thông tin cá nhân khách hàng khi có yêu cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao liên quan đến hành vi vi phạm pháp luật. Ngoài ra, không ai có quyền xâm phạm vào thông tin cá nhân của khách hàng.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <p className="font-semibold"> Điều 6. Địa chỉ của đơn vị thu thập và quản lý thông tin</p>
                        Công ty Đấu giá hợp danh Việt Nam, Địa chỉ: BT5-16(03), khu đô thị Văn Quán – Yên Phúc, phường Phúc La, quận Hà Đông, Hà Nội.
                    </div>

                    <div className="mb-3">
                        <p className="font-semibold">Điều 7. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình</p>
                        Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc huỷ bỏ thông tin của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin hoặc yêu cầu và chờ Công ty xét duyệt những thông tin chỉnh sửa này.
                    </div>

                    <div className="mb-3">
                        <p className="font-semibold">Điều 8. Cam kết bảo mật thông tin khách hàng</p>
                        <ul className="list-decimal list-inside pl-5">
                            <li>
                                Thông tin khách hàng trên Trang thông tin đấu giá trực tuyến được Công ty cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin.
                            </li>
                            <li>
                                Việc thu thập và sử dụng thông tin của mỗi khách hàng chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác.
                            </li>
                            <li>
                                Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin của khách hàng theo quy định của pháp luật.
                            </li>
                            <li>
                                Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu khách hàng, Công ty sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng kiểm tra xử lý kịp thời và thông báo cho khách hàng được biết.
                            </li>
                            <li>
                                Công ty yêu cầu các cá nhân, tổ chức khi đăng ký tài khoản phải cung cấp đầy đủ, chính xác thông tin có liên quan như: Họ và tên, địa chỉ liên lạc, email, số căn cước công dân, điện thoại..., và chịu trách nhiệm về tính chính xác, đầy đủ của những thông tin trên.
                            </li>
                            <li>
                                Công ty không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của khách hàng nếu xét thấy thông tin của khách hàng cung cấp khi đăng ký ban đầu là không chính xác.
                            </li>
                        </ul>
                    </div>

                </SectionBody>
            </Section>
        </>
    )
}