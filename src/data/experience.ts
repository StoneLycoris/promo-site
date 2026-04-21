  import type { ExperienceItem } from '@/types/experience'

  export const experience: ExperienceItem[] = [
    {
      id: '1',
      company: 'IT-Экспертиза',
      location: 'Москва, Россия',
      position: 'Frontend Developer',
      period: 'Ноябрь 2024 — Ноябрь 2025',
      summary:
        'Спроектировала frontend-архитектуру и ключевые UI-модули для платформы безопасности, улучшив производительность и стабильность продукта.',

      projects: [
        {
          name: 'Платформа информационной безопасности (NDA)',
          stack: ['Vue 3', 'TypeScript', 'Pinia'],
          libraries: ['Custom UI kit (Vuetify-based)'],
          testing: ['Vitest'],
          achievements: [
            'Спроектировала и внедрила FSD-архитектуру, повысив масштабируемость и предсказуемость фронтенда.',
            'Разработала кастомный UI kit на базе Vuetify как дизайн‑систему для продукта.',
            'Реализовала сложные таблицы и дашборды (14k+ строк) с оптимизацией производительности и UX.',
            'Оптимизировала производительность: -23% изначальный размер бандла, -18% LCP.',
            'Увеличила покрытие unit-тестами с ~19% до ~61%.',
            'Усилила безопасность фронтенда: -41% уязвимости.',
          ],
        },
      ],
    },

    {
      id: '2',
      company: 'FlyCode',
      location: 'Тамбов, Россия',
      position: 'Frontend Developer',
      period: 'Январь 2022 — Июль 2024',
      summary:
        'Разработала и масштабировала SPA-приложения, ускорив time-to-market и улучшив UX метрики.',

      projects: [
        {
          name: 'Календарь красоты и здоровья',
          stack: ['Vue 3', 'Nuxt', 'TypeScript', 'Pinia'],
          libraries: ['Bootstrap 5'],
          testing: ['Jest'],
          achievements: [
            'Инициировала и разработала SPA с нуля (Vue 3, TypeScript, Pinia).',
            'Снизила пользовательские ошибки планирования на ~ 24%, реализовав сложную логику дат (Rrule, Vue Datepicker)',
            'Внедрила i18n (5 языков) и централизованную обработку HTTP-ошибок.',
            'Реализовала passwordless-аутентификацию по токену.',
          ],
        },
        {
          name: 'Логистическая платформа',
          stack: ['Vue 2', 'JavaScript', 'Vuex'],
          achievements: [
            'Расширила модуль транспорта (нестандартные габариты), увеличив покрытие бизнес-кейсов на ~26%',
            'Провела рефакторинг легаси-кода.',
          ],
        },
      ],
    },

    {
      id: '3',
      company: 'Demis Group',
      location: 'Тамбов, Россия',
      position: 'Frontend Developer',
      period: 'Декабрь 2021 — Июнь 2022',
      summary:
        'Разработала адаптивные интерфейсы и оптимизировала web-проекты, улучшив производительность и доступность',

      projects: [
        {
          name: 'Web projects (landing pages, e-commerce, clinics)',
          stack: ['HTML', 'CSS', 'JavaScript'],
          achievements: [
            'Увеличила accessibility score с 34 до 62 (WCAG AA).',
            'Оптимизировала производительность, кроссбраузерную совместимость и базовые SEO-показатели сайтов.',
            'Настроила аналитику (Яндекс.Метрика, Google Analytics).',
          ],
        },
      ],
    },
  ]