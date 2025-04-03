import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import PostContext from "./contexts/PostContext"
import HomePage from "./pages/HomePage"
import PostLists from "./pages/PostLists"
import Prodotto from "./pages/Prodotto"
import ChiSiamo from "./pages/ChiSiamo"
import DefoultLayout from "./layout/DefoultLayout"

export default function App() {
  const [postLists, setPostLists] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/posts', {})
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPostLists(data)
      })
  }, [])

  return (

    <PostContext.Provider value={{ postLists: postLists }}>
      <BrowserRouter>

        <Routes>
          <Route Component={DefoultLayout}>

            <Route path="/" Component={HomePage} />
            <Route path="/postlist" Component={PostLists} />
            <Route path="/prodotto/:slug" Component={Prodotto} />
            <Route path="/chisiamo" Component={ChiSiamo} />

          </Route>
        </Routes>

      </BrowserRouter>

    </PostContext.Provider>
  )
}

