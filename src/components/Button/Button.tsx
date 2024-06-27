import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    isFull?: boolean
}

export function Button({ name, isFull = false }: ButtonProps) {
    return (
        <button
            className={`cursor-pointer h-14 my-2 px-14 border-none rounded-lg bg-green-700 hover:bg-green-600 text-gray-100 font-bold text-lg uppercase ${
                isFull ? 'w-full' : ''
            }`}
        >
            {name}
        </button>
    )
}
