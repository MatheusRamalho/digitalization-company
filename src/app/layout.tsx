import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

import '@/styles/globals.css'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
})

interface RootLayoutProps {
    children: ReactNode
}

export const metadata = {
    title: 'Digitaliza Tecnologia',
    description:
        'Somos uma empresa focada em Digitalização de Documentos e Desenvolvimento de Websites Pessoais ou Corporativos, visando a melhor experiência para o usuário.',
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={roboto.className}> {children} </body>
        </html>
    )
}
