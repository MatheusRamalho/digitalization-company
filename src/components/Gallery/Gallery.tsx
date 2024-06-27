import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Icon } from '@/components/Icon'

interface GalleryProps {
    image: StaticImageData
    link: string
    customClass?: string
}

export function Gallery({ image, link, customClass }: GalleryProps) {
    return (
        <article className={`relative flex-1 h-[31.5rem] group ${customClass}`}>
            <Link
                href={link}
                className="absolute inset-0 bg-zinc-950/80 flex items-center justify-center invisible group-hover:visible"
            >
                <Icon name="plus-circle" className="size-14 text-green-500" />
            </Link>

            <Image src={image} alt="" className="h-full object-cover" />
        </article>
    )
}
