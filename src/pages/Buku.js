import { useState, useEffect } from "react"
/**
 * useState = untuk mendefisinikan state
 * useEffect = sebuah fungsi yang dijalankann (dieksekusi)
 * ketika komponennya telah ditampilkan
 */
import ListBuku from "../components/ListBuku"
import { Modal } from "bootstrap"
export default function Buku(props){
    let [buku, setBuku] = useState([])

    useEffect(() => {
        // inisiasi data array students
        let arrayBuku = [
            {
                isbn:`1`, title:`Bumi`, creator: `Tere Liye`, publisher: `Gramedia`, income:1000, rating: 3, progress: 95,
                cover: `https://upload.wikimedia.org/wikipedia/id/4/49/Bumi_%28sampul%29.jpg`
            },
            {
                isbn:`2`, title:`Evernight`, creator: `Claudia Gray`, publisher: `BIP`, income:1000, rating: 4, progress: 70,
                cover: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306376600l/2722413.jpg`
            }
        ]
        setBuku(arrayBuku)
    }, [])


    return(
       <div className="container-fluid">
           {buku.map(item => (
               <ListBuku
                    key={`key-${item.isbn}`} 
                    isbn={item.isbn}
                    title={item.title}
                    creator={item.creator}
                    publisher={item.publisher}
                    rating={item.rating}
                    cover={item.cover}
                    progress={item.progress}>
                </ListBuku>
           ))}
       </div>
    )
}