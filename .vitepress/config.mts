import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "CentralCorp Docs",
    description: "Documentation du CentralCorp Launcher",

    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }]
    ],

    locales: {
        fr: {
            label: 'Français',
            lang: 'fr',
            link: '/fr/',
            themeConfig: {
                nav: [
                    { text: 'Accueil', link: '/fr/' },
                    { text: 'Aperçu', link: '/fr/preview' },
                    { text: 'Installation', link: '/fr/install/prerequis' }
                ],
                sidebar: {
                    '/fr/install/': [
                        {
                            text: 'Installation',
                            items: [
                                { text: 'Prérequis', link: '/fr/install/prerequis' },
                                { text: 'Étape 1 - GitHub', link: '/fr/install/step1' },
                                { text: 'Étape 2 - Configuration', link: '/fr/install/step2' },
                                { text: 'Étape 3 - Panel', link: '/fr/install/step3' },
                                { text: 'Étape 4 - Config Panel', link: '/fr/install/step4' },
                                { text: 'Étape 5 - Compilation', link: '/fr/install/step5' }
                            ]
                        }
                    ]
                },
                outline: { label: 'Sur cette page' },
                docFooterText: {
                    prev: 'Précédent',
                    next: 'Suivant'
                },
                sidebarMenuLabel: 'Menu',
                returnToTopLabel: 'Retour en haut',
                darkModeSwitchLabel: 'Thème'
            }
        },
        en: {
            label: 'English',
            lang: 'en',
            link: '/en/',
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Preview', link: '/en/preview' },
                    { text: 'Installation', link: '/en/install/prerequis' }
                ],
                sidebar: {
                    '/en/install/': [
                        {
                            text: 'Installation',
                            items: [
                                { text: 'Prerequisites', link: '/en/install/prerequis' },
                                { text: 'Step 1 - GitHub', link: '/en/install/step1' },
                                { text: 'Step 2 - Configuration', link: '/en/install/step2' },
                                { text: 'Step 3 - Panel', link: '/en/install/step3' },
                                { text: 'Step 4 - Panel Config', link: '/en/install/step4' },
                                { text: 'Step 5 - Build', link: '/en/install/step5' }
                            ]
                        }
                    ]
                }
            }
        }
    },

    themeConfig: {
        logo: '/img/logo.png',

        socialLinks: [
            { icon: 'github', link: 'https://github.com/CentralCorp' },
            { icon: 'discord', link: 'https://discord.gg/VCmNXHvf77' }
        ],

        search: {
            provider: 'local'
        },

        footer: {
            message: 'Made with ❤️ by CentralCorp Team',
            copyright: '© 2026 CentralCorp'
        }
    },

    markdown: {
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        }
    }
})
