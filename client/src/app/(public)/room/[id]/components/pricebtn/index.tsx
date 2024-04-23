import Button from "@/app/components/form/button";

export default function PriceBtn() {
    return (
        <div className="mt-10 space-y-5">
            <Button title="Chốt giá 150.000.000 đ" color="primary" fullSized />
            <Button title="Set price" color="gray" fullSized />
        </div>
    )
}