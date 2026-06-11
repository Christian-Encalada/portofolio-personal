import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export function ContactPage() {
  return (
    <main className="flex-grow z-10 w-full min-w-0 max-w-container-desktop mx-auto px-margin-mobile md:px-margin-desktop pt-28 pb-16 lg:pt-40 lg:pb-24 relative">
      <div className="hidden md:block absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="hidden md:block absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start relative z-10 w-full min-w-0">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  )
}
