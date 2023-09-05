import { ReactNode } from 'react'

interface OrganizationalCultureCardProps {
    title: string
    description?: string
    children?: ReactNode
}

export const OrganizationalCultureCard = ({ title, description, children }: OrganizationalCultureCardProps) => {
    return (
        <article className="w-96 m-2 py-10 px-4 rounded-lg border-2 border-dashed border-gray-800 flex flex-col items-center justify-start text-center gap-6 hover:scale-105">
            <h6 className="font-bold text-3xl text-gray-300 leading-8"> {title} </h6>

            {description && <p className="text-gray-500 leading-7"> {description} </p>}

            {children}
        </article>
    )
}
