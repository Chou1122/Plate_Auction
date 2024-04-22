import { ReactNode } from "react"


export function Section({ children, id }: { children: ReactNode, id?: string }) {
    return (
        <section className="bg-white p-10 rounded-lg shadow-lg w-full" id={id}>
            {children}
        </section>
    )
}

export function SectionHeader({ children }: { children: ReactNode }) {
    return (
        <>
            <h1 className="text-2xl font-montserat font-semibold text-gray-700">{children}</h1>
            <hr className="my-2" />
        </>
    )
}

export function SectionBody({ children }: { children: ReactNode }) {
    return (
        <div className="font-montserat">{children}</div>
    )
}