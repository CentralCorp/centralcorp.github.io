import { defineConfig, type HeadConfig } from 'vitepress'

const siteUrl = 'https://centralcorp.github.io'
const socialImage = `${siteUrl}/img/image.png`

const translations: Record<string, { fr: string; en: string }> = {
    'fr/index.md': { fr: 'fr/index.md', en: 'en/index.md' },
    'en/index.md': { fr: 'fr/index.md', en: 'en/index.md' },
    'fr/preview.md': { fr: 'fr/preview.md', en: 'en/preview.md' },
    'en/preview.md': { fr: 'fr/preview.md', en: 'en/preview.md' },
    'fr/minecraft-launcher-panel.md': { fr: 'fr/minecraft-launcher-panel.md', en: 'en/minecraft-launcher-panel.md' },
    'en/minecraft-launcher-panel.md': { fr: 'fr/minecraft-launcher-panel.md', en: 'en/minecraft-launcher-panel.md' },
    'fr/launcher-minecraft-gratuit.md': { fr: 'fr/launcher-minecraft-gratuit.md', en: 'en/free-minecraft-launcher-panel.md' },
    'en/free-minecraft-launcher-panel.md': { fr: 'fr/launcher-minecraft-gratuit.md', en: 'en/free-minecraft-launcher-panel.md' },
    'fr/install/prerequis.md': { fr: 'fr/install/prerequis.md', en: 'en/install/prerequis.md' },
    'en/install/prerequis.md': { fr: 'fr/install/prerequis.md', en: 'en/install/prerequis.md' },
    'fr/install/step1.md': { fr: 'fr/install/step1.md', en: 'en/install/step1.md' },
    'en/install/step1.md': { fr: 'fr/install/step1.md', en: 'en/install/step1.md' },
    'fr/install/step2.md': { fr: 'fr/install/step2.md', en: 'en/install/step2.md' },
    'en/install/step2.md': { fr: 'fr/install/step2.md', en: 'en/install/step2.md' },
    'fr/install/step3.md': { fr: 'fr/install/step3.md', en: 'en/install/step3.md' },
    'en/install/step3.md': { fr: 'fr/install/step3.md', en: 'en/install/step3.md' },
    'fr/install/step4.md': { fr: 'fr/install/step4.md', en: 'en/install/step4.md' },
    'en/install/step4.md': { fr: 'fr/install/step4.md', en: 'en/install/step4.md' },
    'fr/install/step5.md': { fr: 'fr/install/step5.md', en: 'en/install/step5.md' },
    'en/install/step5.md': { fr: 'fr/install/step5.md', en: 'en/install/step5.md' }
}

function routeFromPath(relativePath: string): string {
    const route = relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    return route ? `/${route}` : '/'
}

function absoluteUrl(relativePath: string): string {
    return `${siteUrl}${routeFromPath(relativePath)}`
}

const redirectTargets: Record<string, string> = {
    'index.md': 'fr/index.md',
    'en/launcher-minecraft-gratuit.md': 'en/free-minecraft-launcher-panel.md',
    'fr/free-minecraft-launcher-panel.md': 'fr/launcher-minecraft-gratuit.md'
}

export default defineConfig({
    title: 'CentralCorp',
    titleTemplate: ':title | CentralCorp',
    description: 'Créez et administrez un launcher Minecraft personnalisé avec le panel web auto-hébergé CentralCorp.',
    lang: 'fr',
    cleanUrls: true,
    lastUpdated: true,
    srcExclude: ['README.md', 'SEO-CHANGES-REPORT.md'],

    sitemap: {
        hostname: siteUrl,
        transformItems: (items) => {
            const redirectRoutes = ['', 'index.md', 'index.html', 'en/launcher-minecraft-gratuit', 'fr/free-minecraft-launcher-panel']
            const freeLauncherAlternates = [
                { lang: 'fr', url: 'fr/launcher-minecraft-gratuit' },
                { lang: 'en', url: 'en/free-minecraft-launcher-panel' }
            ]

            return items
                .filter((item) => {
                    const route = item.url.replace(siteUrl, '').replace(/^\/+|\/+$/g, '')
                    return !redirectRoutes.includes(route) && !route.endsWith('/README')
                })
                .map((item) => {
                    const route = item.url.replace(siteUrl, '').replace(/^\/+|\/+$/g, '')
                    if (['fr/launcher-minecraft-gratuit', 'en/free-minecraft-launcher-panel'].includes(route)) {
                        return { ...item, links: freeLauncherAlternates }
                    }
                    return item
                })
        }
    },

    head: [
        ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png', sizes: '48x48' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['meta', { name: 'theme-color', content: '#083838' }]
    ],

    transformHead({ pageData }): HeadConfig[] {
        const redirectTarget = redirectTargets[pageData.relativePath]
        const isRedirectPage = Boolean(redirectTarget)
        const canonical = absoluteUrl(redirectTarget || pageData.relativePath)
        const description = pageData.description || 'CentralCorp réunit un launcher Minecraft personnalisable, un panel web auto-hébergé, un installer et leur documentation.'
        const locale = pageData.relativePath.startsWith('en/') ? 'en_US' : 'fr_FR'
        const title = pageData.title
            ? pageData.title.startsWith('CentralCorp') ? pageData.title : `${pageData.title} | CentralCorp`
            : 'CentralCorp – Launcher Minecraft avec panel web'
        const head: HeadConfig[] = [
            ['link', { rel: 'canonical', href: canonical }],
            ['meta', { property: 'og:title', content: title }],
            ['meta', { property: 'og:description', content: description }],
            ['meta', { property: 'og:type', content: 'website' }],
            ['meta', { property: 'og:url', content: canonical }],
            ['meta', { property: 'og:image', content: socialImage }],
            ['meta', { property: 'og:image:alt', content: 'CentralCorp Minecraft Launcher home screen' }],
            ['meta', { property: 'og:locale', content: locale }],
            ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
            ['meta', { name: 'twitter:title', content: title }],
            ['meta', { name: 'twitter:description', content: description }],
            ['meta', { name: 'twitter:image', content: socialImage }]
        ]

        if (isRedirectPage) {
            head.push(
                ['meta', { name: 'robots', content: 'noindex,follow' }],
                ['meta', { 'http-equiv': 'refresh', content: `0; url=${canonical}` }]
            )
        }

        const translated = translations[pageData.relativePath]
        if (translated) {
            head.push(
                ['link', { rel: 'alternate', hreflang: 'fr', href: absoluteUrl(translated.fr) }],
                ['link', { rel: 'alternate', hreflang: 'en', href: absoluteUrl(translated.en) }],
                ['link', { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(translated.fr) }],
                ['meta', { property: 'og:locale:alternate', content: locale === 'fr_FR' ? 'en_US' : 'fr_FR' }]
            )
        }

        if (['fr/index.md', 'en/index.md'].includes(pageData.relativePath)) {
            const structuredData = [
                {
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'CentralCorp',
                    url: siteUrl,
                    description
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'CentralCorp',
                    url: siteUrl,
                    logo: {
                        '@type': 'ImageObject',
                        url: `${siteUrl}/icon-512.png`,
                        width: 512,
                        height: 512
                    },
                    sameAs: ['https://github.com/CentralCorp']
                }
            ]
            head.push(['script', { type: 'application/ld+json' }, JSON.stringify(structuredData)])
        }

        if (['fr/minecraft-launcher-panel.md', 'en/minecraft-launcher-panel.md'].includes(pageData.relativePath)) {
            const structuredData = {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'CentralCorp Launcher',
                applicationCategory: 'GameApplication',
                operatingSystem: 'Windows, Linux, macOS',
                url: canonical,
                description,
                codeRepository: 'https://github.com/CentralCorp/CentralCorp-Launcher',
                license: 'https://creativecommons.org/licenses/by-nc/4.0/'
            }
            head.push(['script', { type: 'application/ld+json' }, JSON.stringify(structuredData)])
        }

        return head
    },

    locales: {
        fr: {
            label: 'Français',
            lang: 'fr',
            link: '/fr/',
            themeConfig: {
                nav: [
                    { text: 'Accueil', link: '/fr/' },
                    { text: 'Launcher', link: '/fr/preview' },
                    { text: 'Panel', link: '/fr/minecraft-launcher-panel' },
                    { text: 'Installation', link: '/fr/install/prerequis' },
                    { text: 'Aperçu', link: '/fr/preview' },
                    { text: 'GitHub', link: 'https://github.com/CentralCorp' }
                ],
                sidebar: {
                    '/fr/install/': [
                        {
                            text: 'Installer CentralCorp',
                            items: [
                                { text: 'Prérequis', link: '/fr/install/prerequis' },
                                { text: 'Étape 1 - GitHub', link: '/fr/install/step1' },
                                { text: 'Étape 2 - Launcher', link: '/fr/install/step2' },
                                { text: 'Étape 3 - Panel', link: '/fr/install/step3' },
                                { text: 'Étape 4 - Configuration', link: '/fr/install/step4' },
                                { text: 'Étape 5 - Compilation', link: '/fr/install/step5' }
                            ]
                        }
                    ]
                },
                outline: { label: 'Sur cette page' },
                docFooter: { prev: 'Précédent', next: 'Suivant' },
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
                    { text: 'Launcher', link: '/en/preview' },
                    { text: 'Panel', link: '/en/minecraft-launcher-panel' },
                    { text: 'Installation', link: '/en/install/prerequis' },
                    { text: 'Preview', link: '/en/preview' },
                    { text: 'GitHub', link: 'https://github.com/CentralCorp' }
                ],
                sidebar: {
                    '/en/install/': [
                        {
                            text: 'Install CentralCorp',
                            items: [
                                { text: 'Prerequisites', link: '/en/install/prerequis' },
                                { text: 'Step 1 - GitHub', link: '/en/install/step1' },
                                { text: 'Step 2 - Launcher', link: '/en/install/step2' },
                                { text: 'Step 3 - Panel', link: '/en/install/step3' },
                                { text: 'Step 4 - Configuration', link: '/en/install/step4' },
                                { text: 'Step 5 - Build', link: '/en/install/step5' }
                            ]
                        }
                    ]
                }
            }
        }
    },

    themeConfig: {
        logo: '/img/centralcorp-logo.png',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/CentralCorp' },
            { icon: 'discord', link: 'https://discord.gg/VCmNXHvf77' }
        ],
        search: { provider: 'local' },
        footer: {
            message: 'CentralCorp — Launcher, Panel & Installer',
            copyright: '© 2026 CentralCorp'
        }
    },

    markdown: {
        image: {
            lazyLoading: true
        },
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        }
    }
})
