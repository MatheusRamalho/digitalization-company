import { ReactNode } from 'react'

interface SocialMediaRootProps {
    children: ReactNode
}

export function SocialMediaRoot({ children }: SocialMediaRootProps) {
    return (
        <ul className="w-fit px-2 flex items-center justify-center gap-3 flex-col sm:flex-row">
            {children}
        </ul>
    )
}
