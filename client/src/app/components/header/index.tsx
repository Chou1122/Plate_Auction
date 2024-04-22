import Nav from "./components/nav";

interface IProps {
    className?: string;
    type?: "transparent" | "default"
}

export default function Header({ className, type }: IProps) {
    return (
        <header
            className={
                " px-10 md:px-16 " +
                (type === "transparent"
                    ? ""
                    : "bg-white shadow-sm sticky top-0 left-0 z-50 ") +
                className}>
            <Nav lightMode={type === "transparent"} />
        </header>
    )
}