import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '2165a6d469msh5e8c16f84ee6c79p1ad00cjsn57b2695d06fe',
    },
  })
  return data
}
