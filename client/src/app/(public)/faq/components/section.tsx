import { ReactNode } from "react"


export default function Section({ children, id }: { children: ReactNode, id?: string }) {
    return (
        <section className="bg-white p-10 rounded-lg shadow-lg" id={id}>
            {children}
        </section>
    )
}

export function SectionHeader({ children }: { children: ReactNode }) {
    return (
        <h1 className="text-blue-900 text-3xl font-semibold mb-5 font-montserat">{children}</h1>
    )
}

export function SectionBody({ children }: { children: ReactNode }) {
    return (
        <div className="font-montserat">{children}</div>
    )
}