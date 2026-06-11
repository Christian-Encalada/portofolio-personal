import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export function ContactPage() {
  return (
    <main className="flex-grow z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-40 pb-24 relative">
      <div className="fixed top-1/4 left-0 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  )
}
