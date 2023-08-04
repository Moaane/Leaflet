import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { placeList } from "./pages/placeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/placelist" element={<placeList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;