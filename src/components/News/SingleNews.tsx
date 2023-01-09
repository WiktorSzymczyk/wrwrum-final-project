import { prependOnceListener } from 'process';
import React from 'react'
import {Content as IProps} from "./NewsContainer";

// interface IProps {
//     news:
//         {content: string;
//         link: string;
//         title: string;}[]
// }

const SingleNews: React.FC<IProps> = ({news}) => {
    console.log(news)

//     const renderNews = (): JSX.Element => {
//     return news.map((article) => {
//         return(
//             <h1>{article.title}</h1>
//         )
//     })
//  }

  return (
    <div>
        try
    </div>
  )
}

export default SingleNews
