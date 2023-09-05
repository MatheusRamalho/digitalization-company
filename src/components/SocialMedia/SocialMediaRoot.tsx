import { ReactNode } from 'react'

interface SocialMediaRootProps {
    children: ReactNode
}

export const SocialMediaRoot = ({ children }: SocialMediaRootProps) => {
    return <ul className="px-2 flex items-center justify-center gap-3"> {children} </ul>
}
