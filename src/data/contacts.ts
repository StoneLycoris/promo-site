import type { Contact } from '@/types/contact'

import emailIcon from '@/assets/icons/contacts/mail.svg'
import githubIcon from '@/assets/icons/contacts/github.svg'
import linkedinIcon from '@/assets/icons/contacts/linkedin.svg'
import telegramIcon from '@/assets/icons/contacts/telegram.svg'

export const contacts: Contact[] = [
  {
    id: 'email',
    label: 'Email',
    value: 'zhilinskaia.elena@email.com',
    href: 'mailto:your@email.com',
    icon: emailIcon,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/StoneLycoris',
    href: 'https://github.com/StoneLycoris',
    icon: githubIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/elena-zhilinskaia/',
    href: 'https://linkedin.com/in/elena-zhilinskaia/',
    icon: linkedinIcon,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@StoneLily',
    href: 'https://t.me/StoneLily',
    icon: telegramIcon,
  },
]