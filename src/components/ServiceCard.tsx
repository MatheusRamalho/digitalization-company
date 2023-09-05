import { Icon } from './Icon'

interface ServiceCardProps {
    title: string
    description: string
    icon: any
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
    return (
        <article className="w-96 m-2 py-10 px-4 rounded-lg border-2 border-dashed border-gray-800 flex items-center justify-center gap-4 hover:scale-105">
            <div className="w-14 h-full border-r-2 border-gray-800 flex items-center justify-center">
                <Icon name={icon} size={32} className="text-primary-500" />
            </div>

            <div className="flex-1">
                <h6 className="font-bold text-xl text-gray-300 leading-8"> {title} </h6>
                <p className="text-gray-500 leading-7"> {description} </p>
            </div>
        </article>
    )
}
