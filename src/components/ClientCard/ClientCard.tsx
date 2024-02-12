import Image, { StaticImageData } from 'next/image'

interface ClientCardProps {
    image: StaticImageData
    name: string
}

export function ClientCard({ image, name }: ClientCardProps) {
    return (
        <article
            className="w-80 py-8 px-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center hover:scale-105"
            title={name}
        >
            <Image src={image} alt={name} />
        </article>
    )
}
