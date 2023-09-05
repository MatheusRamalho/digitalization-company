import { ReactNode } from 'react'

interface RootProps {
    children: ReactNode
}

export const FormFieldRoot = ({ children }: RootProps) => {
    return <div className="flex-1 min-w-[13rem] my-8 mx-2"> {children} </div>
}
