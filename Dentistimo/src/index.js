import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Map from './map/index';


  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map/>} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
