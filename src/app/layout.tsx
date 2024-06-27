import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import '@/styles/globals.css'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Digitaliza Tecnologia',
    description:
        'Somos uma empresa focada em Digitalização de Documentos e Desenvolvimento de Websites Pessoais ou Corporativos, visando a melhor experiência para o usuário.',
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`bg-white dark:bg-zinc-900 ${roboto.className}`}>
                <div className="relative w-full min-h-screen before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:size-80 before:rounded-full before:bg-green-500 before:blur-[200px]">
                    {children}
                </div>
            </body>
        </html>
    )
}
