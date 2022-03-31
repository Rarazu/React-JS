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
    let [editId, setEditId] = useState(true)
    
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
        setEditId(true)
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
        } else if (action === `edit`) {
            // store data students to temp
            let temp = [...students]

            // find index of selected data by id
            let index = temp.findIndex(item => item.id === id)

            // update data based on founded index 
            temp[index].name = name
            temp[index].birthdate = birthdate

            // restore to student from temp
            setStudents(temp)
        }
    }

    let editStudent = item => {
        // open the modal
        modalStudent.show()
        setId(item.id)
        setName(item.name)
        setBirthdate(item.birthdate)
        setAction(`edit`)
        setEditId(false)
    }
    
    let deleteStudent = item => {
        if (window.confirm(`Bener mau dihapus?`)) {
            //store array students to temp
            let temp = [...students]

           //find index of selected data in array
           let index = temp.findIndex(siswa => siswa.id === item.id)
           
           //delete ndata from array based foounded index
           temp.splice(index, 1)

           //restore ke array students
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
                            <div className="col-2">
                                <small>Action</small> <br />
                                {/** edit button */}
                                <button className="btn btn-info mx-1"
                                onClick={() => editStudent(item)}>
                                    Edit
                                </button>

                                {/** delete button */}
                                <button className="btn btn-danger mx-1"
                                onClick={() => deleteStudent(item)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    {/** button add data */}
                    <button className="btn btn-warning"
                    onClick={() => addStudent()}>
                        Add
                    </button>

                    {/**create dropdown using name */}
                    <select>
                        {students.map(sis => (
                            <option value={sis.id}>
                                {sis.name}
                            </option>
                        ))}
                    </select>

                     {/**create radio button */}
                    {students.map(sis => (
                        <div>
                            <input type={`radio`} name={`name`}
                            value={sis.id}/>
                            <label>{sis.name} (Tgl : {sis.birthdate})</label>
                        </div>
                    ))}
                    
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
                                    onChange={ev => setId(ev.target.value)}
                                    readOnly={!editId}/>
                                    {/** saat add student maka nilai edit Id = true
                                     * oleh karena itu readOnly harus bernilai false
                                     * 
                                     * saat add student maka nilai edit Id = false
                                     * oleh karena itu readOnly harus bernilai true
                                     */}

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