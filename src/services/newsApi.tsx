import axios from "axios"

export const newsUrl = `https://${process.env.REACT_APP_NEWS_API}`

export const getNews = async () => {
try { 
  const result = await axios(newsUrl) 
.then(
    (res) => (res.data));
    if(!result)
    throw new Error(
      `Fail to get datas with a status of ?`
    );
      return result
} catch (error) {
  console.warn(error);
}
}





