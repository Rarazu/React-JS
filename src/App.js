import Balok from "./pages/Balok"
import Buku from "./pages/Buku"
import Book from "./pages/Book"
import Student from "./pages/Student"
import Avarage from "./pages/Avarage"
import Market from "./pages/Market"
import Navbar from "./components/Navbar"

import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App(){
  return(
    <BrowserRouter basename="/my-react">
    {/* BrowserRouter adalah element yg digunakan untuk mengatur
    tampilan pada halaman web berdasarkan path atau url yg ditentukan 
    oleh user */}
    <Navbar />
      <Routes>
        {/* Routes = grouping path-path atau url yg didefinisikan */}
        <Route path="/balok" element={<Balok />} /> {/* Route = pendefinisian satu jalur */}
        <Route path="/buku" element={<Buku/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/avarage" element={<Avarage/>} />
        <Route path="/market" element={<Market/>} />
      </Routes>
    </BrowserRouter>
  )
}