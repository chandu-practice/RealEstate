import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url)=>{
    const { data } = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'df3eb9701dmsh469762128043243p15db26jsn518c67fbaf24'
          }         
    });

    return data;
}


