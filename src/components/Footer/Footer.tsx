import Image from 'next/image'

import { SocialMedia } from '../SocialMedia'
import { List } from '../List'
import { SwitchTheme } from '../SwitchTheme'

import logoPng from '@/assets/imgs/logo.png'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full p-8 border-t border-t-gray-100 dark:border-t-gray-600 text-gray-500 text-sm">
            <div className="container mx-auto">
                <Image
                    src={logoPng}
                    alt="Logo marca da Digitaliza tecnologia, nuvem em tons de laranja com o texto Digitaliza Tecnologia"
                />

                <div className="flex justify-between gap-10 flex-col sm:flex-row my-8">
                    <address className="flex-1 px-2 not-italic">
                        <h5 className="tracking-widest text-gray-500 dark:text-gray-200 font-bold uppercase mb-6">
                            Onde estamos.
                        </h5>

                        <p className="leading-7 text-gray-500 dark:text-gray-400">
                            Rua fulano de tal, 15, Apto. 01, Ciclano - Teófilo
                            Otoni/MG
                        </p>

                        <p className="leading-7 text-gray-500 dark:text-gray-400 mb-8">
                            Segunda à sexta das 07:00 às 18:00 horas.
                        </p>

                        <SocialMedia.Root>
                            <SocialMedia.Item
                                name="WhatsApp"
                                iconName="message-circle"
                                link=""
                            />
                            <SocialMedia.Item
                                name="Instagram"
                                iconName="instagram"
                                link=""
                            />
                            <SocialMedia.Item
                                name="Facebook"
                                iconName="facebook"
                                link=""
                            />
                        </SocialMedia.Root>
                    </address>

                    <List.Root title="Fale conosco.">
                        <List.Item
                            name="+55 (33) 9999-9999"
                            iconName="phone"
                            link="tel:3399999999"
                        />
                        <List.Item
                            name="+55 (33) 9 9999-9999"
                            iconName="smartphone"
                            link="https://api.whatsapp.com/send?phone=553399999999&"
                        />
                        <List.Item
                            name="contato@email.com.br"
                            iconName="mail"
                            link="mailto:contato@email.com.br"
                        />

                        <List.Item
                            name="Localizaçãor"
                            iconName="map-pin"
                            link="https://goo.gl/maps/4TTMMLfZT7wDmpeK9"
                        />
                    </List.Root>
                </div>

                <div className="w-full border-t border-t-gray-100 dark:border-t-gray-600 py-4 flex items-center justify-between gap-4 flex-col sm:flex-row">
                    <p className="text-xs text-gray-500 dark:text-gray-400 order-2 sm:order-1">
                        {currentYear} &copy; Matheus Ramalho. Todos os direitos
                        reservados
                    </p>

                    <div className="order-1 sm:order-2">
                        <SwitchTheme />
                    </div>
                </div>
            </div>
        </footer>
    )
}
