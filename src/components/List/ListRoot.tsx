import { ReactNode } from 'react'

interface ListRootProps {
    title: string
    children: ReactNode
}

export function ListRoot({ title, children }: ListRootProps) {
    return (
        <ul className="w-fit px-2 sm:px-8">
            <h5 className="tracking-widest text-gray-500 dark:text-gray-200 font-bold uppercase mb-6">
                {title}
            </h5>

            {children}
        </ul>
    )
}
