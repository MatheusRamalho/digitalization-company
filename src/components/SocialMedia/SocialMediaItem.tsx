import Link from 'next/link'

import { Icon } from '../Icon'

interface SocialMediaItemProps {
    iconName: any
    name: string
    link: string
}

export const SocialMediaItem = ({ name, iconName, link }: SocialMediaItemProps) => {
    return (
        <li className="w-full my-3 hover:text-orange-500">
            <Link
                className="w-full leading-7 flex items-center gap-2"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Icon size={20} name={iconName} />

                {name}
            </Link>
        </li>
    )
}
