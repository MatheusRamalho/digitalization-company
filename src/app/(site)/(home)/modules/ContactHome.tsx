import Link from 'next/link'

import { Section } from '@/components/Section'
import { SectionTitle } from '@/components/SectionTitle'
import { Icon } from '@/components/Icon'
import { ContactForm } from '@/components/ContactForm'

export const ContactHome = () => {
    return (
        <Section id="section-contact" name="Contato">
            <div className="mb-32 flex relative">
                <div className="relative flex-1 h-[500px] bg-zinc-950 rounded-l-xl">
                    <div className="absolute inset-0 bg-zinc-950" />

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.2430929363563!2d-41.511492800000006!3d-17.874083199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb376a54dbea7c5%3A0x9bfa55f7124643d0!2sR.%20Carlos%20Alberto%20da%20Cunha%20Mello%2C%20170%20-%20Apto%20101%20-%20Dr.%20Laerte%20Laender%2C%20Te%C3%B3filo%20Otoni%20-%20MG%2C%2039803-079!5e0!3m2!1spt-BR!2sbr!4v1683585735956!5m2!1spt-BR!2sbr"
                        loading="lazy"
                        className="border-none w-full h-full grayscale rounded-l-xl"
                    />

                    <div className="absolute bottom-[-24px] left-20 h-16 w-[15.5rem] bg-primary-500" />
                </div>

                <div className="flex-1 h-[500px] bg-zinc-900 p-10 rounded-r-xl">
                    <h2 className="text-gray-100 font-bold text-4xl leading-[120%]">
                        Contate-nos
                        <span className="text-primary-400">.</span>
                    </h2>

                    <p className="mt-5 mb-10 text-gray-400"> Entre em contato conosco ou faça uma visita </p>

                    <ul className="">
                        <li className="my-6">
                            <div className="flex gap-3 uppercase tracking-wider text-gray-300">
                                <Icon name="phone" size={20} className="text-primary-500" />
                                Telefone
                            </div>

                            <Link
                                className="block text-md text-gray-500 pl-10 hover:text-primary-200"
                                href="tel:3335210086"
                                target="_blank"
                            >
                                +55 (33) 3521-0086
                            </Link>
                        </li>

                        <li className="my-6">
                            <div className="flex gap-3 uppercase tracking-wider text-gray-300">
                                <Icon name="message-square" size={20} className="text-primary-500" />
                                WhatsApp
                            </div>

                            <Link
                                className="block text-md text-gray-500 pl-10 hover:text-primary-200"
                                href="https://api.whatsapp.com/send?phone=5533988275215&"
                                target="_blank"
                            >
                                +55 (33) 9 8827-5215
                            </Link>
                        </li>

                        <li className="my-6">
                            <div className="flex gap-3 uppercase tracking-wider text-gray-300">
                                <Icon name="mail" size={20} className="text-primary-500" />
                                E-mail
                            </div>

                            <Link
                                className="block text-md text-gray-500 pl-10 hover:text-primary-200"
                                href="mailto:contato@digitaliza.com.br"
                                target="_blank"
                            >
                                contato@digitaliza.com.br
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center">
                <SectionTitle sobtitle="Entre em contato" title="Preencha" subtitle="o formulário" />
            </div>

            <p className="text-lg text-gray-400 text-center">
                {' '}
                Entre em contato conosco, tire dúvidas e/ou ocntrate um serviço,{' '}
            </p>

            <p className="text-lg text-gray-400 text-center"> estamos a disposição para lhe atender </p>

            <ContactForm />
        </Section>
    )
}
