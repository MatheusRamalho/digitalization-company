'use client'

import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../Button'
import { FormField } from '../FormField'

const contactSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    phone: zod.string().min(11).max(11),
    message: zod.string(),
})

type ContactData = zod.infer<typeof contactSchema> // infer - Apenas TS, não existe no JS...

export function ContactForm() {
    const { register, handleSubmit } = useForm<ContactData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    })

    const handleNewContact = (data: ContactData) => {
        console.log('contato', data)
    }

    return (
        <form
            className="w-full max-w-[900px] mx-auto"
            onSubmit={handleSubmit(handleNewContact)}
        >
            <fieldset className="border-none">
                <legend className="hidden"> Formulário de contato </legend>

                <FormField.Root>
                    <FormField.Label htmlFor="name">
                        Nome
                        <FormField.LabelMandatory />
                    </FormField.Label>

                    <FormField.Input
                        required
                        id="name"
                        type="text"
                        placeholder="Nome"
                        {...register('name')}
                    />
                </FormField.Root>

                <div className="flex flex-col sm:flex-row">
                    <FormField.Root>
                        <FormField.Label htmlFor="email">
                            E-mail
                            <FormField.LabelMandatory />
                        </FormField.Label>

                        <FormField.Input
                            required
                            id="email"
                            type="email"
                            placeholder="email@example.com"
                            {...register('email')}
                        />
                    </FormField.Root>

                    <FormField.Root>
                        <FormField.Label htmlFor="phone">
                            Telefone
                            <FormField.LabelMandatory />
                        </FormField.Label>

                        <FormField.Input
                            required
                            id="phone"
                            type="tel"
                            placeholder="(99) 99999-9999"
                            {...register('phone')}
                        />
                    </FormField.Root>
                </div>

                <FormField.Root>
                    <FormField.Label htmlFor="message">
                        Mensagem
                        <FormField.LabelMandatory />
                    </FormField.Label>

                    <FormField.Textarea
                        required
                        id="message"
                        placeholder="Mensagem"
                        {...register('message')}
                    />
                </FormField.Root>
            </fieldset>

            <Button isFull name="Enviar" />
        </form>
    )
}
