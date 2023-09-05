import { LabelHTMLAttributes, ReactNode } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children?: ReactNode
}

export const FormFieldLabel = ({ children, ...props }: LabelProps) => {
    return (
        <label
            className="relative block w-full mb-2 tracking-widest text-left text-base font-bold text-gray-300"
            {...props}
        >
            {children}
        </label>
    )
}
