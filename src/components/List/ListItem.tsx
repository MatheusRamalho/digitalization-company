import Link from 'next/link'

import { Icon } from '@/components/Icon'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface ListItemProps {
    iconName: keyof typeof dynamicIconImports
    name: string
    link?: string
}

export function ListItem({ name, iconName, link }: ListItemProps) {
    return (
        <li className="w-full my-3 flex items-center gap-2 text-gray-500 dark:text-gray-300 hover:!text-green-500">
            {link ? (
                <Link
                    className="w-full leading-7 flex items-center gap-2"
                    href={link}
                >
                    <Icon name={iconName} className="size-5 inline-block" />
                    {name}
                </Link>
            ) : (
                <>
                    <Icon name={iconName} className="size-5 inline-block" />
                    {name}
                </>
            )}
        </li>
    )
}
