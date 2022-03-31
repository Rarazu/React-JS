import { useEffect, useState } from "react";
import AvarageList from "../components/AvarageList";

export default function Avarage(props){
    let [siswa, setSiswa] = useState([])

    useEffect(() => {
        let arraySiswa = [
            { id: 1, name:`Aira Johnson`, math: 80, english: 90, chemistry: 70},
            { id: 2, name:`Scarlette Mahatam`, math: 40, english: 80, chemistry: 79},
            { id: 3, name:`Michael Oka Wahyu`, math: 50, english: 87, chemistry: 60},
            { id: 4, name:`Mama Zila`, math: 70, english: 78, chemistry: 80},
            { id: 5, name:`Essa Adilla Rahmandito`, math: 50, english: 80, chemistry: 56}
        ]
        setSiswa(arraySiswa)
    }, [])

    let count = (math, english, chemistry) => {
        let result = Number((math+english+chemistry)/3)
        return Math.round(result)
    }

    return(
        <div className="col-lg-10 mx-auto">
            <div className="card-header bg-danger text-white">
                <h3>Average Student Score</h3>
            </div>

            <div className="card-body">
                {siswa.map(item => (
                    <AvarageList
                        key={`key-${item.id}`}
                        id = {item.id}
                        name = {item.name}
                        math = {item.math}
                        english = {item.english}
                        chemistry = {item.chemistry}
                        average = {count(item.math, item.english, item.chemistry)}>
                    </AvarageList>
                ))}
            </div>
        </div>
    )
}

