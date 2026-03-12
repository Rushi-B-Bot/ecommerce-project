import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../../components/Login/Login.jsx'
import Home from "../../components/Home/Home.jsx";
import ErrorCompoent from "../../components/Error/ErrorCompoent.jsx";
export default function Approuter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<ErrorCompoent />} />
      </Routes>
    </Router>
  )
}
