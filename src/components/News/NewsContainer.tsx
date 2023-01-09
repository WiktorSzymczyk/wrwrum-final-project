import {useEffect, useState} from "react";
import {getNews} from "../../services/newsApi";
import SingleNews from "../News/SingleNews"

export interface Content {
    news:
        {
        index: number;
        content: string;
        link: string;
        title: string;}[]
}

const NewsContainer = () => {

    const [allNews, setAllNews] = useState<Content["news"] | null>();

    useEffect(() => {
        getNews().then((result) => setAllNews(result))
    }, [])

    console.log(allNews)

    

    // const renderList = () : JSX.Element[] => {
    //     return allNews.map((article) => {
    //         return(
    //             <h1>{article.title}</h1>
    //         )
    //     })
    // }

    const threePost = allNews?.slice(0, 3);


  return (
    <div>
         {threePost ? threePost.map((article) => (
            <a key={article.index} href={article.link} target='_blank'>
                <div className="modalSmall">
                    <div>
                        <h3>{article.title}</h3>
                    </div>
                </div>
            </a>
         )
          ) : null}

    </div>
  )
}

export default NewsContainer
