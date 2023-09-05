import Image from 'next/image'
import Link from 'next/link'

import { SocialMedia } from './SocialMedia'
import { List } from './List'

import logoPng from '@/assets/imgs/logo.png'
import { Icon } from './Icon'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full p-8 bg-black text-gray-500 text-sm">
            <div className="container mx-auto">
                <Image
                    src={logoPng}
                    alt="Logo marca da Digitaliza tecnologia, nuvem em tons de laranja com o texto Digitaliza Tecnologia"
                />

                <div className="flex justify-between gap-10 my-8">
                    <address className="flex-1 px-2 not-italic">
                        <h5 className="tracking-widest text-zinc-400 font-bold uppercase mb-6"> Onde estamos. </h5>

                        <p className="leading-7"> Rua fulano de tal, 15, Apto. 01, Ciclano - Teófilo Otoni/MG </p>
                        <p className="leading-7"> Segunda à sexta das 07:00 às 18:00 horas. </p>

                        <Link
                            className="w-full mt-3 flex items-center gap-2 leading-7 hover:text-orange-500"
                            href="https://goo.gl/maps/4TTMMLfZT7wDmpeK9"
                            target="_blank"
                            rel="noopener"
                        >
                            <Icon size={20} name="map-pin" />
                            Localização{' '}
                        </Link>
                    </address>

                    <List.Root title="Fale conosco.">
                        <List.Item name="+55 (33) 3521-0086" iconName="phone" />
                        <List.Item name="+55 (33) 9 88827-5215" iconName="smartphone" />
                        <List.Item name="contato@digitalzia.com.br" iconName="mail" />
                    </List.Root>
                </div>

                <div className="w-full border-t border-t-zinc-900 py-4 flex items-center justify-between gap-4">
                    <p className="text-xs text-gray-600">
                        {' '}
                        {currentYear} &copy; Digitaliza Tecnologia. Todos os direitos reservados{' '}
                    </p>

                    <SocialMedia.Root>
                        <SocialMedia.Item name="WhatsApp" iconName="message-circle" link="" />
                        <SocialMedia.Item name="Instagram" iconName="instagram" link="" />
                        <SocialMedia.Item name="Facebook" iconName="facebook" link="" />
                    </SocialMedia.Root>
                </div>
            </div>
        </footer>
    )
}
