import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    isFull?: boolean
}

export const Button = ({ name, isFull = false }: ButtonProps) => {
    return (
        <button
            className={`cursor-pointer h-14 my-2 px-14 border-none rounded-lg bg-primary-700 hover:bg-primary-600 text-gray-100 font-bold text-lg tracking-wider ${
                isFull ? 'w-full' : ''
            }`}
        >
            {name}
        </button>
    )
}
