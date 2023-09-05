import { ReactNode } from 'react'

interface ListRootProps {
    title: string
    children: ReactNode
}

export const ListRoot = ({ title, children }: ListRootProps) => {
    return (
        <ul className="w-fit px-8">
            <h5 className="tracking-widest text-zinc-400 font-bold uppercase mb-6"> {title} </h5>

            {children}
        </ul>
    )
}
