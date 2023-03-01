import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    // method: 'GET', we don't need to specify this because we are going to do that in our axios call
    url: BASE_URL,
    params: {
      maxResults:'500'
    },
    headers: {
      'X-RapidAPI-Key': 'e1d03a4e1bmsh1f56c1c43046008p10f3bbjsnef693f1f45b6',
       

      'X-RapidAPI-Host':
       'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchFromApi = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options);
//    const data = response.json()
   return data;
  }