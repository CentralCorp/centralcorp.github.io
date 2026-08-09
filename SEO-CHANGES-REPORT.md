# Third Pass — CentralCorp Website Brand Rebalance

## Brand issue

The French and English homepages already displayed the CentralCorp name, but their titles, hero copy, feature labels and first content headings were led by generic Minecraft launcher and panel queries. This preserved search intent but could make CentralCorp look like the name of a single “Minecraft Launcher Panel” rather than the parent brand.

The homepages were rebalanced so CentralCorp is the first element in titles, social titles and the hero. The existing SEO sections about launcher customization, Azuriom, Forge, Fabric, files, mods, builds, self-hosting, installation and FAQs remain in place. Dedicated intent-first landing pages retain their URLs, titles, H1s, descriptions and substantive content.

## French homepage branding

- Previous title: `Launcher Minecraft avec panel web`
- New title: `CentralCorp — Launcher Minecraft, Panel Web & Installer`
- Previous hero: `CentralCorp` followed by `Launcher Minecraft avec panel web`
- New hero: `CentralCorp` followed by `Votre launcher. Votre panel. Votre infrastructure.`
- H1 rendered by the VitePress hero now starts with `CentralCorp`.
- Primary CTA changed from `Utiliser CentralCorp` to `Installer CentralCorp`.
- Secondary CTAs are now `Voir le Launcher` and `Découvrir le Panel`, both pointing to existing internal routes.
- A new early `L’écosystème CentralCorp` section presents Launcher, Panel, Installer and Documentation before the detailed SEO sections.
- Existing sections were retained and renamed where useful: `Votre launcher Minecraft, sous votre contrôle`, `CentralCorp Panel : gérez votre launcher depuis le web`, `Installer l’écosystème CentralCorp` and `Du déploiement au lancement`.
- Generic wording in the hero and feature titles was replaced with `CentralCorp Launcher`, `CentralCorp Panel` and `CentralCorp Installer`. The important `Minecraft Launcher Panel` occurrence remains in the FAQ and internal SEO link text.

## English homepage branding

- Previous title: `Minecraft launcher with a self-hosted web panel`
- New title: `CentralCorp — Minecraft Launcher, Web Panel & Installer`
- Previous hero: `CentralCorp` followed by `Minecraft launcher with a web panel`
- New hero: `CentralCorp` followed by `Your launcher. Your panel. Your infrastructure.`
- H1 rendered by the VitePress hero now starts with `CentralCorp`.
- Primary CTA changed from `Use CentralCorp` to `Install CentralCorp`.
- Secondary CTAs are now `View the Launcher` and `Explore the Panel`, both pointing to existing internal routes.
- A new early `The CentralCorp ecosystem` section presents Launcher, Panel, Installer and Documentation before the detailed SEO sections.
- Existing sections were retained and renamed where useful: `Your Minecraft launcher, under your control`, `CentralCorp Panel: manage your launcher from the web`, `Install the CentralCorp ecosystem` and `From deployment to launch`.
- Generic feature labels were replaced with the product names while natural Minecraft launcher and web panel terminology remains throughout the SEO content.

## CentralCorp ecosystem positioning

- `CentralCorp Launcher` is presented as the player-facing desktop application that authenticates accounts, synchronizes files and starts Minecraft.
- `CentralCorp Panel` is presented as the Laravel web component that manages and publishes launcher configuration.
- `CentralCorp Installer` is presented as the deployment and hosting-check tool used before installing the panel release.
- `Documentation CentralCorp` is presented as the French and English installation, configuration and build guidance.

The four components are introduced together near the top of each homepage, before their detailed technical sections.

## Minecraft Launcher Panel SEO preservation

FR URL unchanged:
YES

EN URL unchanged:
YES

FR title preserved/optimized:
YES

EN title preserved/optimized:
YES

H1 still targeted:
YES

Meta still targeted:
YES

Internal links preserved:
YES

The landing introductions now explicitly identify CentralCorp Panel as the web component that configures CentralCorp Launcher. Their intent-first titles, H1s, meta descriptions, detailed sections, keywords and URLs remain unchanged.

The French `/fr/launcher-minecraft-gratuit` and English `/en/free-minecraft-launcher-panel` pages also remain intent-first. Their introductions now position Launcher, Panel and Installer as parts of the CentralCorp ecosystem without duplicating the homepage.

## Navigation changes

Final French menu:

`Accueil` → `Launcher` → `Panel` → `Installation` → `Aperçu` → `GitHub`

Final English menu:

`Home` → `Launcher` → `Panel` → `Installation` → `Preview` → `GitHub`

`Launcher` points to the existing preview route. `Panel` points to the existing `/fr/minecraft-launcher-panel` or `/en/minecraft-launcher-panel` SEO landing. No route was renamed or created.

## Structured data branding

- Organization name: `CentralCorp`
- WebSite name: `CentralCorp`
- Organization logo: `https://centralcorp.github.io/icon-512.png` (`ImageObject`, 512 × 512)
- SoftwareApplication name: `CentralCorp Launcher`

These names were already correct and were preserved. No artificial entity was added.

## Brand rebalance SEO QA

Build:
SUCCESS — `npm run docs:build` completed with 0 errors and 0 warnings.

Sitemap:
SUCCESS — required FR/EN home, panel and free-launcher routes are present; redirect aliases and the root redirect are excluded.

Robots:
SUCCESS — `Allow: /` and `https://centralcorp.github.io/sitemap.xml` are present in the built file.

Canonical:
SUCCESS — all 23 generated content/redirect HTML pages contain a canonical; the two aliases point to their intended destinations.

Hreflang:
SUCCESS — all 20 translated pages contain FR, EN and x-default alternates.

Titles:
SUCCESS — no missing or duplicate generated titles; both homepage titles begin with CentralCorp and landing titles remain query-targeted.

Descriptions:
SUCCESS — no missing or duplicate generated descriptions; both homepage descriptions introduce CentralCorp immediately.

H1:
SUCCESS — all generated content pages contain an H1; homepage heroes begin with CentralCorp and both panel landing H1s remain targeted.

Internal links:
SUCCESS — 0 broken root-relative links detected across the generated HTML.

JSON-LD:
SUCCESS — homepage WebSite/Organization and panel SoftwareApplication data parse successfully with the expected CentralCorp names.

OpenGraph:
SUCCESS — all generated content/redirect pages contain OpenGraph and Twitter title, description and image metadata. Homepage social titles are brand-first; landing social titles remain SEO-first.

## Brand QA

Homepage FR brand-first: YES
Homepage EN brand-first: YES
CentralCorp ecosystem clear: YES
Launcher identified as component: YES
Panel identified as component: YES
Installer identified as component: YES
Minecraft Launcher Panel landing preserved: YES

## Git summary

- No commit or push was performed.
- No URL or SEO landing page was added, removed or renamed.
- Final `git diff --check`: SUCCESS, no whitespace errors.
- Final tracked diff stat: 8 files changed, 93 insertions, 53 deletions.
- Final working tree: 8 modified tracked files and this untracked root report; nothing staged.
