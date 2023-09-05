import { Gallery } from '@/components/Gallery'
import { Section } from '@/components/Section'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceCard } from '@/components/ServiceCard'

import TesteImg from '@/assets/imgs/image.jpg'

export const ServiceHome = () => {
    return (
        <Section id="section-service" name="Serviços" customClass="border-b border-b-zinc-900">
            <SectionTitle sobtitle="Especialidades" title="Serviços" subtitle="& Portifólio" />

            <div className="flex flex-wrap justify-center gap-8">
                <ServiceCard
                    title="Digitalização"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    icon="folder-open"
                />

                <ServiceCard
                    title="GED"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    icon="folder-open"
                />

                <ServiceCard
                    title="5S"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    icon="folder-open"
                />

                <ServiceCard
                    title="Desenvolvimento"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    icon="folder-open"
                />

                <ServiceCard
                    title="Design"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    icon="folder-open"
                />
            </div>

            <div className="flex items-center justify-center mt-24">
                <Gallery image={TesteImg} link="#" />
                <Gallery image={TesteImg} link="#" />
                <Gallery image={TesteImg} link="#" />
            </div>
        </Section>
    )
}
