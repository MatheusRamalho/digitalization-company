interface OurNumbersProps {
    number: number
    text: string
}

export function OurNumbers({ number, text }: OurNumbersProps) {
    return (
        <article className="p-8 rounded-lg border-2 border-dashed border-transparent hover:border-gray-200 hover:dark:border-gray-600">
            <h4 className="text-5xl uppercase font-bold text-gray-600 dark:text-gray-300">
                {number}+
            </h4>

            <span className="block my-4 w-12 h-2 bg-orange-600 mx-auto" />

            <span className="text-xl uppercase font-medium text-gray-500 dark:text-gray-400">
                {text}
            </span>
        </article>
    )
}
