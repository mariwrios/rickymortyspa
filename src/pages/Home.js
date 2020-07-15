import getData from "../utils/getData"

const Home = async () => {

    const characters = await getData();
    const view = `
    <div class="Characters">
        ${characters.results.map(character => `
            <article Class="Character-item">
                <a class="home_card_img" href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                </a>
                <div class="tittle_name">
                    <h2 >${character.name}</h2>
                <div>
            </article>
        `).join('')}
    </div>
`;
return view;
};

export default Home;