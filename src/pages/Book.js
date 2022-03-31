import { useState, useEffect } from "react"

import { Modal } from "bootstrap"

export default function Book(props){
    let [book, setBook] = useState([])
    let [modalBook, setModalBook] = useState(null)
    let [id, setId] = useState(0)
    let [judul, setJudul] = useState("")
    let [penulis, setPenulis] = useState("")
    let [penerbit, setPenerbit] = useState("")
    let [genre, setGenre] = useState("")
    let [halaman, setHalaman] = useState("")
    let [image, setImage] = useState("")
    let [action, setAction] = useState("")
    
    useEffect(() => {
        let arrayBook = [
            {id:`1`, judul:`Bumi`, penulis: `Tere Liye`, penerbit: `Gramedia`, genre:`Fantasi`, halaman: `327`,
            image : `https://upload.wikimedia.org/wikipedia/id/4/49/Bumi_%28sampul%29.jpg`},
            {id:`2`, judul:`Evernight`, penulis: `Claudia Gray`, penerbit: `BIP`, genre:`Fantasi`, halaman: `292`,
            image: `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306376600l/2722413.jpg`}
        ]
        setBook(arrayBook)

        setModalBook(new Modal(document.getElementById(`modal_book`)))
    }, [])

    let addBook = () => {
        modalBook.show()

        setId(0)
        setJudul("")
        setPenulis("")
        setPenerbit("")
        setGenre("")
        setHalaman("")
        setImage("")
        setAction("insert")
    }

    let saveBook = () => {
        modalBook.hide()
        if (action === `insert`) {
            let newData = {
                id: id, judul: judul, penulis: penulis, penerbit: penerbit, 
                genre: genre, halaman: halaman, image: image
            }

            let temp = [...book]
            temp.push(newData)
            setBook(temp)
        }
    }
    
    return(
        <div>
            <div className="card col-10 mx-auto">
                <div className="card-header bg-info">
                    <h3 className="text-white">List Book</h3>
                </div>
                <div className="card-body">
                    {book.map(item => ( 
                        <div className="row" key={`key${item.id}`}> 
                            <div className="col-3 my-2">
                                <img src = {item.image} alt="Can't load picture" style={{width: `13rem`}}/>
                            </div>
                            <div className="col-3">
                                <small className="fst-italic">Judul Buku</small>
                                <h5>{item.judul}</h5>

                                <small className="fst-italic">ID Buku</small>
                                <h6>{item.id}</h6>

                                <small className="fst-italic">Jumlah Halaman</small>
                                <h6>{item.halaman}</h6>
                            </div>
                            <div className="col-3">
                                <small className="fst-italic">Penulis</small>
                                <h6>{item.penulis}</h6>

                                <small className="fst-italic">Penerbit</small>
                                <h6>{item.penerbit}</h6>

                                <small className="fst-italic">Genre</small>
                                <h6>{item.genre}</h6>
                                
                            </div>
                            <div className="col-3">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary text-white" type="button">
                                        Edit
                                    </button>
                                    <button class="btn btn-danger" type="button">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/** button add data */}
                    <button className="btn btn-info my-2 text-white"
                    onClick={() => addBook()}>
                        Add
                    </button>

                    {/** modal component */}
                    <div className="modal" id="modal_book">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Book Form</h4>
                                </div>
                                <div className="modal-body">
                                    {/** input id, name, birthdate */}
                                    ID
                                    <input type={`number`} 
                                    className="form-control mb-2"
                                    value={id}
                                    onChange={ev => setId(ev.target.value)}/>

                                    Judul Buku
                                    <input type={`text`} 
                                    className="form-control mb-2"
                                    value={judul}
                                    onChange={ev => setJudul(ev.target.value)}/>

                                    Penulis
                                    <input type={`text`} 
                                    className="form-control mb-2"
                                    value={penulis}
                                    onChange={ev => setPenulis(ev.target.value)}/>

                                    Penerbit
                                    <input type={`text`} 
                                    className="form-control mb-2"
                                    value={penerbit}
                                    onChange={ev => setPenerbit(ev.target.value)}/>

                                    Genre
                                    <input type={`text`} 
                                    className="form-control mb-2"
                                    value={genre}
                                    onChange={ev => setGenre(ev.target.value)}/>   

                                    Jumlah Halaman
                                    <input type={`text`} 
                                    className="form-control mb-2"
                                    value={halaman}
                                    onChange={ev => setHalaman(ev.target.value)}/>

                                    Image
                                    <input type={`url`} 
                                    className="form-control mb-2"
                                    value={image}
                                    onChange={ev => setImage(ev.target.value)}/> 

                                    <button className="btn btn-success"
                                    onClick={() => saveBook()}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> {/** end of modal */}
                </div>
            </div>
        </div>
    )
}