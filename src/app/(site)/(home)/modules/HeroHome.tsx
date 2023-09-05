import { Section } from '@/components/Section'
import { SectionTitle } from '@/components/SectionTitle'

export const HeroHome = () => {
    return (
        <Section id="section-hero" name="Hero">
            <div className=""></div>

            <SectionTitle
                sobtitle="Digitaliza Tecnologia"
                title="Digitalização &"
                subtitle="Desenvolvimento web visual"
            />

            <p className="text-gray-500 text-2xl leading-[200%]">
                {' '}
                Somos uma empresa focada em digitalização de documentos{' '}
            </p>

            <p className="text-gray-500 text-2xl leading-[200%]">
                {' '}
                e desenvolvimento web, visando a melhor experiência para o usuário{' '}
            </p>
        </Section>
    )
}
