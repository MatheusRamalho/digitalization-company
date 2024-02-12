import { ReactNode } from 'react'

interface FormFieldRootProps {
    children: ReactNode
}

export function FormFieldRoot({ children }: FormFieldRootProps) {
    return <div className="flex-1 min-w-[13rem] my-8 mx-2"> {children} </div>
}
