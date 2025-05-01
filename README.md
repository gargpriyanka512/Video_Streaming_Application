# 🎥 Video Streaming Application

This is a full-stack video streaming application built using Node.js, Express, React, and Video.js. It allows users to upload MP4 videos, converts them into HLS format using **FFmpeg**, and streams them through a modern, responsive React frontend.
---

## 🚀 Features
- Upload MP4 videos via a simple HTTP API
- Automatic conversion of MP4 to HLS (`.m3u8` + `.ts` segments) using FFmpeg
- Stream videos with Video.js player in React
- Hot Module Replacement with Vite
- Cross-origin requests enabled (CORS)
- Video cleanup on unmount (disposal of player instance)
---

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Video.js
- **Backend**: Node.js, Express, Multer
- **Media Processing**: FFmpeg
- **Styling**: Video.js CSS
- **Tooling**: UUID, Nodemon, CORS
---
