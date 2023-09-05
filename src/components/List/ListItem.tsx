import Link from 'next/link'

import { Icon } from '../Icon'

interface ListItemProps {
    iconName: any
    name: string
    link?: string
}

export const ListItem = ({ name, iconName, link }: ListItemProps) => {
    return (
        <li className="w-full my-3 flex items-center gap-2">
            {link ? (
                <Link className="w-full leading-7 flex items-center gap-2" href={link}>
                    <Icon name={iconName} size={20} className="fill-gray-400 inline-block" />
                    {name}
                </Link>
            ) : (
                <>
                    <Icon size={20} name={iconName} />
                    {name}
                </>
            )}
        </li>
    )
}
