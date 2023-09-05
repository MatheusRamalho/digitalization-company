import { Button } from '@/components/Button'
import { ClientCard } from '@/components/ClientCard'
import { Section } from '@/components/Section'
import { SectionTitle } from '@/components/SectionTitle'

import Teste3Img from '@/assets/imgs/image3.png'

export const ClientsHome = () => {
    return (
        <Section id="section-clients" name="Clientes" customClass="border-b border-b-zinc-900">
            <SectionTitle sobtitle="Row" title="Clientes" subtitle="& Parceiros" />

            <div className="flex flex-wrap justify-between">
                <ClientCard name="Prefeitura de Rio do prado" image={Teste3Img} />
                <ClientCard name="Prefeitura de Rio do prado" image={Teste3Img} />
                <ClientCard name="Prefeitura de Rio do prado" image={Teste3Img} />
                <ClientCard name="Prefeitura de Rio do prado" image={Teste3Img} />
                <ClientCard name="Prefeitura de Rio do prado" image={Teste3Img} />
                <ClientCard name="Prefeitura de Rio do prado" image={Teste3Img} />
                <ClientCard name="Prefeitura de Rio do prado" image={Teste3Img} />
                <ClientCard name="Prefeitura de Rio do prado" image={Teste3Img} />
            </div>

            <div className="flex items-center justify-center mt-10">
                <Button name="Todos os clientes" />
            </div>
        </Section>
    )
}
