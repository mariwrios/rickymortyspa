import { getData, getPage } from "../utils/getData"

const Home = async () => {
  const characters = await getData()
  const num = await getPage()

  const view = `
    <div class="Characters">
        ${characters.results
          .map(
            character => `
            <article Class="Character-item">
                <div class="home_card_img" >
                    <img src="${character.image}" alt="${character.name}">
                </div>
                <a class="tittle_name" href="#/${character.id}/">
                    <h2 >${character.name}</h2>
                </a>
            </article>
        `
          )
          .join("")}
           <div class="buttonContainer">
            <button class="button" ><</button>
            <button class="button" >></button>
      </div>
    </>
`
  return view
}

export default Home
