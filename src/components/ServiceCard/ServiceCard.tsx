import dynamicIconImports from 'lucide-react/dynamicIconImports'

import { Icon } from '@/components/Icon'

interface ServiceCardProps {
    title: string
    description: string
    icon: keyof typeof dynamicIconImports
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <article className="w-full md:w-80 lg:w-96 py-10 px-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center gap-4 hover:scale-105">
            <div className="w-14 h-full border-r-2 border-gray-200 dark:border-gray-600 flex items-center justify-center">
                <Icon name={icon} className="size-8 text-green-500" />
            </div>

            <div className="flex-1">
                <h6 className="font-bold text-xl text-gray-600 dark:text-gray-100 leading-8">
                    {title}
                </h6>

                <p className="text-gray-400 leading-7"> {description} </p>
            </div>
        </article>
    )
}
