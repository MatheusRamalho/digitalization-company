'use client'

import { useEffect } from 'react'

import { usePersistedState } from '@/hooks/userPersistedState'
import { Icon } from '../Icon'

export function SwitchTheme() {
    const [theme, setTheme] = usePersistedState('checkout-theme', 'light')
    const html = document.documentElement

    const handleToggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            html.classList.remove('dark')
        }

        if (theme === 'light') {
            setTheme('dark')
            html.classList.add('dark')
        }
    }

    useEffect(() => {
        if (theme === 'dark') {
            html.classList.add('dark')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])

    return (
        <button
            data-testid="switch-theme"
            type="button"
            title="Mudar tema"
            className="w-fit py-2 px-4 rounded bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 flex items-center justify-center gap-2 group"
            onClick={handleToggleTheme}
        >
            <Icon
                name={theme === 'dark' ? 'sun' : 'moon'}
                className="text-gray-500 dark:text-gray-300 group-hover:text-orange-500"
            />

            {theme === 'dark' ? 'Claro' : 'Escuro'}
        </button>
    )
}
