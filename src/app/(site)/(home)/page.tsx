import { Footer } from '@/components/Footer'

import { AboutHome } from './modules/AboutHome'
import { ServiceHome } from './modules/ServiceHome'
import { AboutPlusHome } from './modules/AboutPlus'
import { ClientsHome } from './modules/ClientsHome'
import { ContactHome } from './modules/ContactHome'
import { HeroHome } from './modules/HeroHome'

export default function Home() {
    return (
        <>
            <HeroHome />
            <AboutHome />
            <ServiceHome />
            <AboutPlusHome />
            <ClientsHome />
            <ContactHome />
            <Footer />
        </>
    )
}
