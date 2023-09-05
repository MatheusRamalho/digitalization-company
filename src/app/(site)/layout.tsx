'use client'

import { ReactNode } from 'react'

interface SiteLayoutProps {
    children: ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
    return <div className="w-full h-full bg-zinc-950"> {children} </div>
}
