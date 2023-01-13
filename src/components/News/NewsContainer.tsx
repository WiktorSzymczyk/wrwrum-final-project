import {useEffect, useState} from "react";
import {getNews} from "../../services/newsApi";
import "../../assets/styles/news/news.scss"
import { v4 as uuidv4 } from 'uuid';
import React from "react";

uuidv4()

export interface Content {
    news:
        {
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
            <a key={uuidv4()} href={article.link} target='_blank' >
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
