import { ReactNode } from 'react'

interface SectionProps {
    id: string
    name: string
    children: ReactNode
    customClass?: string
}

export function Section({ id, name, children, customClass }: SectionProps) {
    return (
        <section
            className={`w-full h-auto py-20 md:py-40 px-4 md:px-8 ${customClass}`}
            id={id}
        >
            <h6 hidden> {name} </h6>

            <div className="container mx-auto"> {children} </div>
        </section>
    )
}
