interface SectionTitleProps {
    sobtitle: string
    title: string
    subtitle: string
}

export function SectionTitle({ sobtitle, title, subtitle }: SectionTitleProps) {
    return (
        <header className="mb-12">
            <h5 className="text-green-400 uppercase text-2xl tracking-widest mb-4">
                {sobtitle}
            </h5>

            <h2 className="text-gray-700 dark:text-gray-100 font-bold break-words text-4xl sm:text-7xl leading-[120%]">
                {title}
            </h2>

            <h2 className="text-gray-700 dark:text-gray-100 font-bold break-words text-4xl sm:text-7xl leading-[120%]">
                {subtitle}
                <span className="text-green-400">.</span>
            </h2>
        </header>
    )
}
