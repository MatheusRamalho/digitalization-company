import Image, { StaticImageData } from 'next/image'

interface ClientCardProps {
    image: StaticImageData
    name: string
}

export const ClientCard = ({ image, name }: ClientCardProps) => {
    return (
        <article
            className="w-80 my-5 mx-2 py-8 px-4 rounded-lg border-2 border-dashed border-gray-800 flex items-center justify-center hover:scale-105"
            title={name}
        >
            <Image src={image} alt={name} />
        </article>
    )
}
