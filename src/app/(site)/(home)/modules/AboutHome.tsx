import Image from 'next/image'

import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionTitle } from '@/components/SectionTitle'

import TesteImg from '@/assets/imgs/image.jpg'

export const AboutHome = () => {
    return (
        <Section id="section-about" name="Sobre" customClass="border-b border-b-zinc-900">
            <div className="flex gap-20 relative">
                <div className="flex-1">
                    <SectionTitle sobtitle="Quem Somos" title="Digitaliza" subtitle="Tecnologia" />

                    <p className="text-gray-500 text-xl leading-[200%]">
                        {' '}
                        Fundada em 28 de setembro de 2017, em Teófilo Otoni - MG, a Digitaliza surgiu com a finalidade
                        de facilitar o trabalho de pequenas e grandes empresas, públicas e privadas.{' '}
                    </p>

                    <p className="text-gray-500 text-xl leading-[200%]">
                        {' '}
                        A DIGITALIZA busca oferecer a prestação de serviços com alto nível de profissionalismo,
                        realizando todas as suas tarefas de forma competente e responsável.{' '}
                    </p>

                    <p className="text-gray-500 text-xl leading-[200%]">
                        {' '}
                        A empresa busca cumprir as tarefas que lhe foram designadas, com vistas no êxito dos resultados
                        alcançados.{' '}
                    </p>

                    <p className="text-gray-500 text-xl leading-[200%]">
                        {' '}
                        Com muito empenho, a empresa dedica-se a atender a demanda permanente com superação de
                        expectativas.{' '}
                    </p>

                    <div className="mt-10">
                        <Button name="Conhecer mais" />
                    </div>
                </div>

                <div className="relative w-[31.5rem] h-[37.5rem] rounded-2xl">
                    <div className="absolute top-[-50px] left-[-24px] w-16 h-[15.5rem] bg-primary-500" />

                    <Image src={TesteImg} alt="" className="h-full object-cover rounded-2xl" />
                </div>
            </div>
        </Section>
    )
}
