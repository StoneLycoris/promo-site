import type { Skill } from '@/types/skill'

export const skills: Skill[] = [
  {
    id: 'vue',
    name: 'Vue 3',
    description:
      'Composition API, реактивность, управление состоянием компонентов, оптимизация производительности рендеринга',
    color: '#42b883',
    icon: '/icons/vue.svg',
  },

  {
    id: 'ts',
    name: 'TypeScript',
    description:
      'Статическая типизация, generics, utility types, строгая типизация API и компонентов',
    color: '#3178c6',
    icon: '/icons/typescript.svg',
  },

  {
    id: 'pinia',
    name: 'Pinia',
    description:
      'Управление состоянием, модульная архитектура store, SSR-совместимость, замена Vuex',
    color: '#ffd859',
    icon: '/icons/pinia.svg',
  },

  {
    id: 'vite',
    name: 'Vite',
    description:
      'Быстрая сборка, HMR, оптимизированный dev-server, production bundle оптимизация',
    color: '#a855f7',
    icon: '/icons/vite.svg',
  },

  {
    id: 'vue-router',
    name: 'Vue Router',
    description:
      'Маршрутизация SPA, динамические маршруты, guards, lazy loading страниц',
    color: '#4f46e5',
    icon: '/icons/router.svg',
  },

  {
    id: 'nuxt3',
    name: 'Nuxt 3',
    description:
      'SSR/SSG, серверные API (Nitro), auto-imports, модульная архитектура',
    color: '#00dc82',
    icon: '/icons/nuxtjs.svg',
  },

  {
    id: 'vitest',
    name: 'Vitest',
    description:
      'Unit-тестирование компонентов и логики, быстрый тест-раннер на базе Vite',
    color: '#6ee7b7',
    icon: '/icons/vitest.svg',
  },

  {
    id: 'vue2',
    name: 'Vue 2',
    description:
      'Options API, mixins, lifecycle hooks, классическая архитектура Vue-приложений',
    color: '#41b883',
    icon: '/icons/vue.svg',
  },

  {
    id: 'vuex',
    name: 'Vuex',
    description:
      'Глобальное состояние приложения, actions/mutations, централизованный store',
    color: '#2c3e50',
    icon: '/icons/vuex.svg',
  },

  {
    id: 'nuxt4',
    name: 'Nuxt 4',
    description:
      'Следующее поколение Nuxt: улучшенный SSR, архитектурные оптимизации, Nitro runtime',
    color: '#00dc82',
    icon: '/icons/nuxt.svg',
  },

  {
    id: 'webpack',
    name: 'Webpack',
    description:
      'Сборка модулей, loaders, plugins, настройка сложных билд-конфигураций',
    color: '#1c78c0',
    icon: '/icons/webpack.svg',
  },

  {
    id: 'jest',
    name: 'Jest',
    description:
      'Unit и integration тестирование, mocking, snapshot testing',
    color: '#99425b',
    icon: '/icons/jest.svg',
  },

  {
    id: 'html',
    name: 'HTML5',
    description:
      'Семантическая верстка, кроссбраузерная вёрстка, a11y',
    color: '#e34c26',
    icon: '/icons/html.svg',
  },

  {
    id: 'css',
    name: 'CSS',
    description:
      'Адаптивный дизайн, Flexbox, Grid, анимации',
    color: '#e34c26',
    icon: '/icons/css.svg',
  },

  {
    id: 'js',
    name: 'JavaScript (ES6+)',
    description:
      'Асинхронность, event loop, прототипы, модули, современные ES стандарты',
    color: '#f7df1e',
    icon: '/icons/javascript.svg',
  },

  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description:
      'Utility-first подход, быстрый UI-дизайн, кастомизация дизайн-систем',
    color: '#38bdf8',
    icon: '/icons/tailwind.svg',
  },

  {
    id: 'vuetify',
    name: 'Vuetify',
    description:
      'Material Design компоненты, UI kit, быстрый прототипинг интерфейсов',
    color: '#1867c0',
    icon: '/icons/vuetify.svg',
  },

  {
    id: 'rest',
    name: 'REST API',
    description:
      'Проектирование и интеграция RESTful API, работа с HTTP протоколом',
    color: '#10b981',
    icon: '/icons/rest.svg',
  },

  {
    id: 'grpc',
    name: 'gRPC',
    description:
      'Высокопроизводительное RPC взаимодействие между сервисами',
    color: '#6366f1',
    icon: '/icons/grpc.svg',
  },

  {
    id: 'git',
    name: 'Git',
    description:
      'Контроль версий, branching strategies, code review, работа в команде',
    color: '#f05032',
    icon: '/icons/git.svg',
  },

  {
    id: 'docker',
    name: 'Docker',
    description:
      'Контейнеризация приложений, изоляция окружений, деплой и CI/CD',
    color: '#2496ed',
    icon: '/icons/docker.svg',
  },
]