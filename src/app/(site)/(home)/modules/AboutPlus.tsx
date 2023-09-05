import { OrganizationalCultureCard } from '@/components/OrganizationalCultureCard'
import { OurNumbers } from '@/components/OurNumbers'
import { Section } from '@/components/Section'
import { SectionTitle } from '@/components/SectionTitle'

export const AboutPlusHome = () => {
    return (
        <Section id="section-about-plus" name="Mais sobre" customClass="border-b border-b-zinc-900">
            <SectionTitle sobtitle="Mais sobre Digitaliza" title="Confiança" subtitle="& Honestidade" />

            <p className="text-gray-500 text-2xl leading-[200%]">
                {' '}
                Entenda por que somos os melhores do mercado no que fazemos, e por que você cliente deve escolher a
                Digitaliza para melhorar o seu negócio, a sua empresa.{' '}
            </p>

            <div className="flex justify-center mt-10">
                <OrganizationalCultureCard
                    title="Missão"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae."
                />

                <OrganizationalCultureCard
                    title="Visão"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae."
                />

                <OrganizationalCultureCard title="Valores">
                    <ul>
                        <li className="text-gray-500 leading-7">
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae.{' '}
                        </li>

                        <li className="text-gray-500 leading-7">
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae.{' '}
                        </li>

                        <li className="text-gray-500 leading-7">
                            {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quae.{' '}
                        </li>
                    </ul>
                </OrganizationalCultureCard>
            </div>

            <div className="text-center mt-16">
                <h3 className="font-bold text-gray-200 text-5xl"> Nossos números </h3>

                <div className="flex items-center justify-between mt-14">
                    <OurNumbers number={1000} text="Clientes" />
                    <OurNumbers number={1000} text="Digitalizacões" />
                    <OurNumbers number={1000} text="Papeis" />
                    <OurNumbers number={1000} text="Clientes" />
                </div>
            </div>
        </Section>
    )
}
