# Accueil / Home

<div class="grid cards" markdown>

-   🇫🇷 __Français__

    ---

    Documentation en français

    [:octicons-arrow-right-24: Accéder](fr/index.md)

-   🇬🇧 __English__

    ---
    
    Documentation in English

    [:octicons-arrow-right-24: Access](en/index.md)

- 🔗 Liens / Link 

    ---
    
    Liste de tous les liens
    List of all links

    [:octicons-arrow-right-24: Accéder / Access](liens.md)

</div>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    padding: 1rem;
}
.cards {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.card {
    border: 0.1rem solid var(--md-default-fg-color--lightest);
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: border 0.25s;
}
.card:hover {
    border-color: var(--md-accent-fg-color);
}
.card__content {
    flex-grow: 1;
    padding: 1rem;
}
.card__image {
    padding-top: 0.6rem;
    width: 100%;
}
.card__image > img {
    display: block;
    width: auto;
    height: auto;
    margin: 0 auto;
}
</style>