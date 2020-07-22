const API = "https://rickandmortyapi.com/api/character/"

export const getData = async id => {
  const apiURL = id ? `${API}${id}` : API
  try {
    const response = await fetch(apiURL)
    const data = await response.json()
    return data
  } catch (error) {
    console.log("Fetch Error", error)
  }
}

export const getPage = async numPag => {
  const page = numPag ? `${API}?page=${numPag}` : API
  try {
    const response = await fetch(page)
    const pages = await response.json()
    console.log("pages", pages)
    return pages
  } catch (error) {
    console.log("Fetch Error", error)
  }
}
