import { TextareaHTMLAttributes } from 'react'

interface FormFieldTextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string
    customClass?: string
}

export const FormFieldTextarea = ({
    id,
    customClass,
    ...rest
}: FormFieldTextareaProps) => {
    return (
        <textarea
            id={id}
            className={`
                resize-none h-64 my-2 py-4 w-full px-4 text-gray-700 dark:text-gray-100 border border-solid border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700  rounded-xl
                focus-visible:outline-none focus-visible:border-gray-300 focus-visible:dark:border-gray-800
                placeholder:text-sm placeholder:text-gray-400
                disabled:cursor-not-allowed disabled:bg-gray-300 disabled:dark:bg-gray-900
                ${customClass}
            `}
            {...rest}
        ></textarea>
    )
}
