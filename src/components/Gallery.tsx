import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Icon } from './Icon'

interface GalleryProps {
    image: StaticImageData
    link: string
}

export const Gallery = ({ image, link }: GalleryProps) => {
    return (
        <article className="relative flex-1 h-[31.5rem] group">
            <Link
                href={link}
                className="absolute inset-0 bg-zinc-950/80 flex items-center justify-center invisible group-hover:visible"
            >
                <Icon name="plus-circle" size={60} className="text-orange-500" />
            </Link>

            <Image src={image} alt="" className="h-full object-cover" />
        </article>
    )
}
