import axios from 'axios';

const GITHUB_API = 'https://api.github.com';

export const searchRepository = async (search: string) => {
  return await axios.get(`${GITHUB_API}/search/repositories?q=${search}&sort=stars&order=desc`)
}