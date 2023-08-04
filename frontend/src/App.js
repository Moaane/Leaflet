import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaceList from "./pages/placeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/placelist" element={<PlaceList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;