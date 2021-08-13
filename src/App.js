import React, { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import { BASE_URL, API_KEY } from "./constants/constants"
import Date from "./components/date"

function App() {
  const [picture, setPicture] = useState({
    copyright: "Who made this?",
    title: "Picture of the day",
    explanation: "Details go here",
    hdurl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/1920px-Andromeda_Galaxy_560mm_FL.jpg",
    date: "captured date",
  })

  useEffect(() => {
    axios(`${BASE_URL}?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data)
        setPicture(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <h1>NASA picture of the day</h1>
      <h2>{picture.title}</h2>
      <div>
        <img src={picture.hdurl} />
        <div className="about">{picture.explanation}</div>
        <p>{picture.copyright}</p>
        <div>
          <Date date={picture.date} />
        </div>
      </div>
    </div>
  )
}

export default App
