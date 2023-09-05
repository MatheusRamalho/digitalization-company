interface SectionTitleProps {
    sobtitle: string
    title: string
    subtitle: string
}

export const SectionTitle = ({ sobtitle, title, subtitle }: SectionTitleProps) => {
    return (
        <header className="mb-12">
            <h5 className="text-primary-400 uppercase text-2xl tracking-widest"> {sobtitle} </h5>
            <h2 className="text-gray-100 font-bold text-7xl leading-[120%]"> {title} </h2>
            <h2 className="text-gray-100 font-bold text-7xl leading-[120%]">
                {subtitle}
                <span className="text-primary-400">.</span>
            </h2>
        </header>
    )
}
