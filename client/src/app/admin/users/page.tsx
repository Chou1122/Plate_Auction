import Button from "@/app/components/form/button";
import Input from "@/app/components/form/input";
import { Section, SectionBody, SectionHeader } from "@/app/components/section";
import { TbPlus, TbSearch } from "react-icons/tb";
import User from "./components/user";
import UserViewer from "./components/user_view";

export default function AccountPage() {
    return (
        <Section>
            <SectionHeader>
                Manage accounts
            </SectionHeader>
            <SectionBody>
                <UserViewer />
                
                <div className="flex items-center justify-between mb-5">
                    <p>Total 13 members</p>

                    <div className="flex items-center gap-3 rounded-lg">
                        <Input type="text" placeholder="Search" icon={TbSearch} noPadding />
                        <Button title="Add member" icon={TbPlus} size="sm" color="primary" className="h-fit" />
                    </div>
                </div>

                <div className="p-5 bg-gray-50 rounded-lg">
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                </div>
            </SectionBody>
        </Section>
    )
}