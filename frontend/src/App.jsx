import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer'
import {useRef} from "react"

function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:8000/uploads/courses/9c516965-ae99-40e4-902a-be7d1ed9c86c/index.m3u8"
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }
  return (
    <>

    </>
  )
}

export default App
