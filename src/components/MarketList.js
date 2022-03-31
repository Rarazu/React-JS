export default function MarketList(props) {
    let presentase = () => {
        let untung = props.keuntungan
        let modal = Number(props.hargaDasar * props.stokAwal)
        let persen = Number(untung / modal * 100)
        return Math.round(persen)
    }

    return (
        <div className="m-2 p-2" style={{ border: `2px solid green` }}>
            <div className="row">
                <div className="col-lg-3 p-2">
                    <div className="p-2" style={{ border: `1px solid gray` }}>
                        <small>Tanggal</small>
                        <h6>{props.tgl}</h6>
                    </div>
                </div>
                <div className="col-lg-3 p-2">
                    <div className="bg-info p-2" style={{ border: `1px solid gray` }}>
                        <small>Stok Awal</small>
                        <h6>{props.stokAwal}</h6>
                    </div>
                </div>
                <div className="col-lg-3 p-2">
                    <div className="p-2 bg-success text-white" style={{ border: `1px solid gray` }}>
                        <small>Terjual</small>
                        <h6>{props.terjual}</h6>
                    </div>
                </div>
                <div className="col-lg-3 p-2">
                    <div className="p-2 bg-danger text-white" style={{ border: `1px solid gray` }}>
                        <small>Rusak</small>
                        <h6>{props.rusak}</h6>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-6 p-2">
                    <div className="p-2 text-white bg-secondary" style={{ border: `1px solid gray` }}>
                        <small>Keuntungan</small>
                        <h6>Rp{props.keuntungan}</h6>
                    </div>
                </div>
                <div className="col-lg-6 p-2">
                    <small>Presentase Keuntungan :</small>
                    <div className="progress">
                        <div className="progress-bar"
                            role="progress"
                            aria-valuenow={presentase(props.keuntungan)}
                            style={{ width: `${presentase(props.keuntungan)}%` }}
                            aria-valuemin="0"
                            aria-valuemax="100">
                            {`${presentase(props.keuntungan)}%`}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}