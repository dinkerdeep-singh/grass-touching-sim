import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseComponent from "./components/BaseComponent";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
