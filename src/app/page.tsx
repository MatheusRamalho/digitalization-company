import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ClientCard } from '@/components/ClientCard'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import { Gallery } from '@/components/Gallery'
import { Icon } from '@/components/Icon'
import { OrganizationalCultureCard } from '@/components/OrganizationalCultureCard'
import { OurNumbers } from '@/components/OurNumbers'
import { Section } from '@/components/Section'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceCard } from '@/components/ServiceCard'

import testeImg from '@/assets/imgs/image.jpg'
import brandImg from '@/assets/imgs/logo.png'

export default function Home() {
    return (
        <>
            <Section id="section-hero" name="Hero">
                <div className=""></div>

                <SectionTitle
                    sobtitle="Digitaliza Tecnologia"
                    title="Digitalização &"
                    subtitle="Desenvolvimento web visual"
                />

                <p className="text-gray-500 dark:text-gray-400 text-xl sm:text-2xl leading-[200%]">
                    Somos uma empresa focada em digitalização de documentos
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-xl sm:text-2xl leading-[200%]">
                    e desenvolvimento web, visando a melhor experiência para o
                    usuário
                </p>
            </Section>

            <Section
                id="section-about"
                name="Sobre"
                customClass="border-b border-b-gray-50 dark:border-b-gray-700"
            >
                <div className="flex flex-col items-center justify-center gap-20 relative md:flex-row md:items-start">
                    <div className="flex-1 order-2 md:order-1">
                        <SectionTitle
                            sobtitle="Quem Somos"
                            title="Digitaliza"
                            subtitle="Tecnologia"
                        />

                        <p className="text-gray-500 dark:text-gray-400 text-xl leading-[200%]">
                            Fundada em 28 de setembro de 2017, em Teófilo Otoni
                            - MG, a Digitaliza surgiu com a finalidade de
                            facilitar o trabalho de pequenas e grandes empresas,
                            públicas e privadas.
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 text-xl leading-[200%]">
                            A DIGITALIZA busca oferecer a prestação de serviços
                            com alto nível de profissionalismo, realizando todas
                            as suas tarefas de forma competente e responsável.
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 text-xl leading-[200%]">
                            A empresa busca cumprir as tarefas que lhe foram
                            designadas, com vistas no êxito dos resultados
                            alcançados.
                        </p>

                        <p className="text-gray-500 dark:text-gray-400 text-xl leading-[200%]">
                            Com muito empenho, a empresa dedica-se a atender a
                            demanda permanente com superação de expectativas.
                        </p>

                        <div className="mt-10">
                            <Button name="Conhecer mais" />
                        </div>
                    </div>

                    <div className="relative w-full h-96 sm:size-96 md:size-[31.5rem] rounded-2xl order-1 md:order-2 mb-20">
                        <div className="absolute top-[-50px] left-0 sm:left-[-24px] w-10 sm:w-16 h-[15.5rem] bg-orange-500" />

                        <Image
                            src={testeImg}
                            alt=""
                            className="h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </Section>

            <Section
                id="section-service"
                name="Serviços"
                customClass="border-b border-b-gray-50 dark:border-b-gray-700"
            >
                <SectionTitle
                    sobtitle="Especialidades"
                    title="Serviços"
                    subtitle="& Portifólio"
                />

                <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                    <ServiceCard
                        title="Digitalização"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        icon="scan"
                    />

                    <ServiceCard
                        title="GED"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        icon="folder-open"
                    />

                    <ServiceCard
                        title="5S"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        icon="settings"
                    />

                    <ServiceCard
                        title="Desenvolvimento"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        icon="code"
                    />

                    <ServiceCard
                        title="Design"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        icon="pen-tool"
                    />
                </div>

                <div className="flex items-center justify-center mt-24">
                    <Gallery image={testeImg} link="#" />
                    <Gallery
                        image={testeImg}
                        link="#"
                        customClass="!hidden md:!flex"
                    />
                    <Gallery
                        image={testeImg}
                        link="#"
                        customClass="!hidden md:!flex"
                    />
                </div>

                <div className="mt-10 flex items-center justify-center">
                    <Button name="Ver galeria" />
                </div>
            </Section>

            <Section
                id="section-about-plus"
                name="Mais sobre"
                customClass="border-b border-b-gray-50 dark:border-b-gray-700"
            >
                <SectionTitle
                    sobtitle="Mais sobre à Digitaliza"
                    title="Confiança"
                    subtitle="& Honestidade"
                />

                <p className="text-gray-500 dark:text-gray-400 text-xl sm:text-2xl leading-10 sm:leading-[200%]">
                    Entenda por que somos os melhores do mercado no que fazemos,
                    e por que você cliente deve escolher a Digitaliza para
                    melhorar o seu negócio, a sua empresa.
                </p>

                <div className="flex flex-col justify-center gap-y-4 gap-x-2 sm:flex-row sm:flex-wrap mt-10 lg:gap-x-4">
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
                            <li className="text-gray-500 dark:text-gray-400 leading-7">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Obcaecati, quae.
                            </li>

                            <li className="text-gray-500 dark:text-gray-400 leading-7">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Obcaecati, quae.
                            </li>

                            <li className="text-gray-500 dark:text-gray-400 leading-7">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Obcaecati, quae.
                            </li>
                        </ul>
                    </OrganizationalCultureCard>
                </div>

                <div className="text-center mt-20">
                    <h3 className="font-bold text-gra-600 dark:text-gray-200 text-5xl">
                        Nossos números
                    </h3>

                    <div className="flex items-center justify-center lg:justify-between flex-wrap gap-3 mt-14">
                        <OurNumbers number={1000} text="Clientes" />
                        <OurNumbers number={1000} text="Digitalizacões" />
                        <OurNumbers number={1000} text="Papeis" />
                        <OurNumbers number={1000} text="Clientes" />
                    </div>
                </div>
            </Section>

            <Section
                id="section-clients"
                name="Clientes"
                customClass="border-b border-b-gray-50 dark:border-b-gray-700"
            >
                <SectionTitle
                    sobtitle="Row"
                    title="Clientes"
                    subtitle="& Parceiros"
                />

                <div className="flex flex-wrap gap-4 justify-center xl:justify-between">
                    <ClientCard name="Nome do cliente" image={brandImg} />
                    <ClientCard name="Nome do cliente" image={brandImg} />
                    <ClientCard name="Nome do cliente" image={brandImg} />
                    <ClientCard name="Nome do cliente" image={brandImg} />
                    <ClientCard name="Nome do cliente" image={brandImg} />
                    <ClientCard name="Nome do cliente" image={brandImg} />
                    <ClientCard name="Nome do cliente" image={brandImg} />
                    <ClientCard name="Nome do cliente" image={brandImg} />
                </div>

                <div className="flex items-center justify-center mt-10">
                    <Button name="Todos os clientes" />
                </div>
            </Section>

            <Section id="section-contact" name="Contato">
                <div className="relative mb-32 flex flex-col md:flex-row">
                    <div className="relative flex-1 h-[500px] bg-gray-50 dark:bg-zinc-950 rounded-l-xl order-2 md:order-1">
                        <div className="absolute inset-0 bg-gray-50 dark:bg-zinc-950" />

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.2430929363563!2d-41.511492800000006!3d-17.874083199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb376a54dbea7c5%3A0x9bfa55f7124643d0!2sR.%20Carlos%20Alberto%20da%20Cunha%20Mello%2C%20170%20-%20Apto%20101%20-%20Dr.%20Laerte%20Laender%2C%20Te%C3%B3filo%20Otoni%20-%20MG%2C%2039803-079!5e0!3m2!1spt-BR!2sbr!4v1683585735956!5m2!1spt-BR!2sbr"
                            loading="lazy"
                            className="border-none w-full h-96 md:h-full grayscale rounded-xl md:rounded-none md:rounded-l-xl"
                        />

                        <div className="absolute bottom-[-24px] left-20 h-8 md:h-14 w-40 md:w-[15.5rem] bg-orange-500" />
                    </div>

                    <div className="flex-1 h-[500px] bg-gray-50 dark:bg-zinc-950 p-10 rounded-r-xl order-1 md:order-2">
                        <h2 className="text-gray-700 dark:text-gray-100 font-bold text-5xl leading-[120%]">
                            Contate-nos
                            <span className="text-orange-400">.</span>
                        </h2>

                        <p className="mt-5 mb-10 text-xl text-gray-400">
                            Entre em contato conosco ou faça uma visita
                        </p>

                        <ul className="">
                            <li className="my-6">
                                <div className="flex gap-3 uppercase tracking-wider text-gray-400 dark:text-gray-300">
                                    <Icon
                                        name="phone"
                                        className="size-5 text-orange-500"
                                    />
                                    Telefone
                                </div>

                                <Link
                                    className="block text-md text-gray-500 dark:text-gray-400 pl-10 hover:text-orange-200"
                                    href="tel:3399999999"
                                    target="_blank"
                                >
                                    +55 (33) 9999-9999
                                </Link>
                            </li>

                            <li className="my-6">
                                <div className="flex gap-3 uppercase tracking-wider text-gray-400 dark:text-gray-300">
                                    <Icon
                                        name="message-square"
                                        className="size-5 text-orange-500"
                                    />
                                    WhatsApp
                                </div>

                                <Link
                                    className="block text-md text-gray-500 dark:text-gray-400 pl-10 hover:text-orange-200"
                                    href="https://api.whatsapp.com/send?phone=553399999999&"
                                    target="_blank"
                                >
                                    +55 (33) 9 9999-9999
                                </Link>
                            </li>

                            <li className="my-6">
                                <div className="flex gap-3 uppercase tracking-wider text-gray-400 dark:text-gray-300">
                                    <Icon
                                        name="mail"
                                        className="size-5 text-orange-500"
                                    />
                                    E-mail
                                </div>

                                <Link
                                    className="block text-md text-gray-500 dark:text-gray-400 pl-10 hover:text-orange-200"
                                    href="mailto:contato@email.com.br"
                                    target="_blank"
                                >
                                    contato@email.com.br
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center">
                    <SectionTitle
                        sobtitle="Entre em contato"
                        title="Preencha"
                        subtitle="o formulário"
                    />
                </div>

                <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
                    Entre em contato conosco, tire dúvidas e/ou ocntrate um
                    serviço,
                </p>

                <p className="text-lg text-gray-500 dark:text-gray-400 text-center">
                    estamos a disposição para lhe atender
                </p>

                <ContactForm />
            </Section>

            <Footer />
        </>
    )
}
