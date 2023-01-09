import {useEffect, useState} from "react";
import {getNews} from "../../services/newsApi";
import "../../assets/styles/news/news.scss"

export interface Content {
    news:
        {
        id: number ;
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
    <div className="news-modal-containter">
         {threePost ? threePost.map((article) => (
            <a key={article.id} href={article.link} target='_blank' >
                <div className="modalSmall">
                    <div>
                        <h3 className="news-modal-title">{article.title}</h3>
                    </div>
                </div>
            </a>
         )
          ) : null}

    </div>
  )
}

export default NewsContainer
