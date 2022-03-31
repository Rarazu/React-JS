import { useState, useEffect } from "react";
import { Modal } from "bootstrap";
import MarketList from "../components/MarketList";

export default function Market(props){
    let [penjualan, setPenjualan] = useState([])

    useEffect(() => {
        let arrayPenjualan = [
            {
                id: 1,
                tgl: "01-03-2022",
                stokAwal: 100,
                terjual: 85,
                rusak: 5,
                hargaDasar: 3000,
                hargaJual: 4500
            },
            {
                id: 2,
                tgl: "04-03-2022",
                stokAwal: 50,
                terjual: 40,
                rusak: 5,
                hargaDasar: 3500,
                hargaJual: 4500
            },
            {
                tgl: "10-03-2022",
                stokAwal: 70,
                terjual: 60,
                rusak: 10,
                hargaDasar: 4000,
                hargaJual: 5000
            }
        ]
        setPenjualan(arrayPenjualan)
    }, [])

    let keuntungan = (hargaJual, terjual, hargaDasar, stokAwal) => {
        let count = Number((hargaJual*  terjual) - (hargaDasar * stokAwal))
        return count
    }

    let presentase = (hargaDasar, stokAwal) => {
        let untung = keuntungan()
        let modal = Number(hargaDasar * stokAwal)
        let persen = Number(untung / modal * 100 / 100)
        return persen
    }

    return (
        <div className="col-lg-10 mx-auto">
            <div className="card-header bg-success text-warning text-center">
                <h4>Rarazu's Market</h4>
            </div>

            <div className="card-body">
                {penjualan.map(item => (
                    <MarketList
                        key={`key-${item.id}`}
                        tgl= {item.tgl}
                        stokAwal={item.stokAwal}
                        terjual={item.terjual}
                        rusak={item.rusak}
                        hargaDasar={item.hargaDasar}
                        hargaJual={item.hargaJual}
                        keuntungan={keuntungan(item.hargaJual, item.terjual, item.hargaDasar, item.stokAwal)}
                        presentase={presentase(item.hargaDasar, item.stokAwal)}>
                    </MarketList>
                ))}
            </div>
        </div>
    )
}