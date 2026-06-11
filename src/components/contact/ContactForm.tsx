import { useState, type FormEvent } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { useTranslation } from '@/i18n/LanguageProvider'
import { ContactSendError, sendContactEmail, validateContactPayload } from '@/lib/contact'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const { t } = useTranslation()
  const { contact } = t

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [feedback, setFeedback] = useState('')

  const fields = [
    {
      id: 'name' as const,
      label: contact.nameLabel,
      type: 'text',
      placeholder: contact.namePlaceholder,
      value: name,
      onChange: setName,
    },
    {
      id: 'email' as const,
      label: contact.emailLabel,
      type: 'email',
      placeholder: contact.emailPlaceholder,
      value: email,
      onChange: setEmail,
    },
  ]

  const resolveErrorMessage = (code: string) => {
    switch (code) {
      case 'VALIDATION':
        return contact.errorValidation
      case 'NETWORK':
        return contact.errorNetwork
      case 'MISSING_KEY':
        return contact.errorMissingKey
      default:
        return contact.errorGeneric
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFeedback('')

    const payload = { name, email, message }
    const validationError = validateContactPayload(payload)
    if (validationError) {
      setStatus('error')
      setFeedback(contact.errorValidation)
      return
    }

    setStatus('loading')

    try {
      await sendContactEmail(payload)
      setStatus('success')
      setFeedback(contact.successMessage)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      setStatus('error')
      if (error instanceof ContactSendError) {
        setFeedback(resolveErrorMessage(error.code))
      } else {
        setFeedback(contact.errorGeneric)
      }
    }
  }

  const isLoading = status === 'loading'

  return (
    <Reveal className="lg:col-span-7 relative w-full min-w-0 max-w-full">
      <div className="hidden sm:block absolute -top-4 -left-4 w-12 h-12 border-t border-l border-outline-variant opacity-30" />
      <div className="hidden sm:block absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-outline-variant opacity-30" />
      <div className="bg-surface-container-low/80 backdrop-blur-xl border border-white/10 rounded-xl p-5 sm:p-8 lg:p-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] w-full min-w-0 max-w-full overflow-hidden">
        <div className="mb-6 sm:mb-8 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
          <h3 className="font-code-label text-[11px] sm:text-code-label text-on-surface uppercase tracking-wide sm:tracking-widest flex items-center gap-2 min-w-0 flex-1">
            <span className="material-symbols-outlined text-[16px] shrink-0">terminal</span>
            <span className="truncate">{contact.formTitle}</span>
          </h3>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-outline-variant/30" />
            <div className="w-3 h-3 rounded-full bg-outline-variant/30" />
            <div className="w-3 h-3 rounded-full border border-primary-container/50" />
          </div>
        </div>

        {feedback && (
          <div
            role="alert"
            className={`mb-6 flex items-start gap-3 rounded-lg border px-4 py-3 font-code-label text-code-label text-sm ${
              status === 'success'
                ? 'border-primary-container/40 bg-primary-container/10 text-primary-container'
                : 'border-error/40 bg-error/10 text-error'
            }`}
          >
            <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">
              {status === 'success' ? 'check_circle' : 'error'}
            </span>
            <span className="break-words min-w-0">{feedback}</span>
          </div>
        )}

        <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit} noValidate>
          {fields.map((field) => (
            <div key={field.id} className="relative group min-w-0">
              <label
                htmlFor={field.id}
                className="block font-terminal-small text-[11px] sm:text-terminal-small text-text-muted mb-1 uppercase group-focus-within:text-primary-container transition-colors break-words tracking-wide sm:tracking-normal"
              >
                {field.label}
              </label>
              <div className="flex items-center">
                <span className="text-primary-container font-code-label mr-2 opacity-50">&gt;</span>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  disabled={isLoading}
                  required
                  className="terminal-input w-full min-w-0 py-2 font-code-label text-[13px] sm:text-code-label text-on-surface placeholder:text-outline-variant bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary-container disabled:opacity-50"
                  placeholder={field.placeholder}
                />
              </div>
            </div>
          ))}
          <div className="relative group min-w-0">
            <label
              htmlFor="message"
              className="block font-terminal-small text-[11px] sm:text-terminal-small text-text-muted mb-1 uppercase group-focus-within:text-primary-container transition-colors break-words tracking-wide sm:tracking-normal"
            >
              {contact.messageLabel}
            </label>
            <div className="flex items-start mt-2">
              <span className="text-primary-container font-code-label mr-2 mt-2 opacity-50">&gt;</span>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isLoading}
                required
                className="terminal-input w-full min-w-0 py-2 font-code-label text-[13px] sm:text-code-label text-on-surface placeholder:text-outline-variant bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary-container resize-none disabled:opacity-50"
                placeholder={contact.messagePlaceholder}
              />
            </div>
          </div>
          <div className="pt-4 sm:pt-6 flex justify-stretch sm:justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="btn-liquid w-full sm:w-auto border border-primary-container text-primary-container px-6 sm:px-8 py-3.5 sm:py-3 font-code-label text-code-label uppercase tracking-widest inline-flex items-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed sm:min-w-[200px] justify-center rounded-xl"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  <span>{contact.submitting}</span>
                </>
              ) : (
                <>
                  <span>{contact.submit}</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </Reveal>
  )
}
