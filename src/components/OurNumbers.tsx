interface OurNumbersProps {
    number: number
    text: string
}

export const OurNumbers = ({ number, text }: OurNumbersProps) => {
    return (
        <article className="m-5 p-8 rounded-lg border-2 border-dashed border-transparent hover:border-gray-800">
            <h4 className="text-5xl uppercase font-bold text-gray-300"> {number}+ </h4>
            <span className="block my-4 w-12 h-3 bg-primary-600 mx-auto" />
            <span className="text-2xl uppercase font-bold text-gray-400"> {text} </span>
        </article>
    )
}
