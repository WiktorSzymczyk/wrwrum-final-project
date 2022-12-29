import React from 'react'

export default function NewsCard(title: string, date: string, description: string) {
  return (
    <div>
        <img src='' alt='' />
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{description}</p>
    </div>
  )
}
