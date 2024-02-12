import { LabelHTMLAttributes, ReactNode } from 'react'

interface FormFieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children?: ReactNode
}

export function FormFieldLabel({ children, ...props }: FormFieldLabelProps) {
    return (
        <label
            className="relative block w-full mb-2 tracking-widest text-left text-base font-bold text-gray-500 dark:text-gray-300"
            {...props}
        >
            {children}
        </label>
    )
}
