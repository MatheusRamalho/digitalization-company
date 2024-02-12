import Link from 'next/link'

import { Icon } from '../Icon'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface SocialMediaItemProps {
    iconName: keyof typeof dynamicIconImports
    name: string
    link: string
}

export function SocialMediaItem({
    name,
    iconName,
    link,
}: SocialMediaItemProps) {
    return (
        <li className="w-fit text-gray-400 hover:text-orange-500">
            <Link
                className="w-full leading-7 flex items-center gap-2"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Icon name={iconName} className="size-6 text-gray-400" />

                {name}
            </Link>
        </li>
    )
}
