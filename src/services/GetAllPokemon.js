import axios from 'axios'



const GetAllPokemon = async (Url) => {
  try {
    const response = await axios.get(Url)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export default GetAllPokemon

