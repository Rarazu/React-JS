import { useState, useEffect } from "react"
/**
 * useState = untuk mendefisinikan state
 * useEffect = sebuah fungsi yang dijalankann (dieksekusi)
 * ketika komponennya telah ditampilkan
 */
import { Modal } from "bootstrap"
export default function Student(props){
    let [students, setStudents] = useState([])
    let [modalStudent, setModalStudent] = useState(null)
    let [id, setId] = useState(0)
    let [name, setName] = useState("")
    let [birthdate, setBirthdate] = useState("")
    let [action, setAction] = useState("")
    
    useEffect(() => {
        // inisiasi data array students
        let arrayStudents = [
            {id: 1, name:`Beomgyu`, birthdate: `13 Maret 2001`},
            {id: 2, name:`Rara`, birthdate: `11 Maret 2005`}
        ]
        setStudents(arrayStudents)

        //inisiasasi state modalStudent
        setModalStudent(new Modal(document.getElementById(`modal_student`)))
    }, [])

    //function addStudent
    let addStudent = () => {
        //open modal
        modalStudent.show()

        //reset isi dari setiap inputan
        setId(0)
        setName("")
        setBirthdate("")
        setAction("insert")
    }

    //function saveStudent
    let saveStudent = () => {
        // close modal
        modalStudent.hide()
        if (action === `insert`) {
            let newData = {
                id: id, name: name, birthdate: birthdate
            }

            //store array from students
            let temp = [...students]
            // add new data
            temp.push(newData)
            // store to students again
            setStudents(temp)
        }
    }

    return(
        <div>
            <div className="card col-10">
                <div className="card-header bg-secondary">
                    <h3 className="text-white">List students</h3>
                </div>
                <div className="card-body">
                    {students.map(item => ( 
                        // map() = fungsi untuk scanning isi array, map hanya bisa digunakan array
                        // item = perulangan setiap data array
                        <div className="row" key={`key${item.id}`}> 
                            <div className="col-2">
                                <small>ID</small>
                                <h5>{item.id}</h5>
                            </div>
                            <div className="col-4">
                                <small>Name</small>
                                <h5>{item.name}</h5>
                            </div>
                            <div className="col-4">
                                <small>Birthdate</small>
                                <h5>{item.birthdate}</h5>
                            </div>
                        </div>
                    ))}

                    {/** button add data */}
                    <button className="btn btn-warning"
                    onClick={() => addStudent()}>
                        Add
                    </button>
                    
                     {/** modal component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Form Student</h4>
                                </div>
                                <div className="modal-body">
                                    {/** input id, name, birthdate */}
                                    ID
                                    <input type={`number`} 
                                    className="form-control mb-2"
                                    value={id}
                                    onChange={ev => setId(ev.target.value)}/>

                                    Name
                                    <input type={`text`} 
                                    className="form-control mb-2"
                                    value={name}
                                    onChange={ev => setName(ev.target.value)}/>

                                    Birthdate
                                    <input type={`text`} 
                                    className="form-control mb-2"
                                    value={birthdate}
                                    onChange={ev => setBirthdate(ev.target.value)}/>

                                    <button className="btn btn-warning"
                                    onClick={() => saveStudent()}>
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