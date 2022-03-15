function Test(props) {
    return(
        <div className="card"  style={{width: `18rem`}}>
            <img className="card-img-top" src={props.avatar} alt="gagal ya? kasian"></img>

            <div className="card-body">
                <h6 className="text-success">{props.name}</h6>
                <h6 className="text-success">From {props.city}</h6>

                <p>
                    {props.children}
                </p>
            </div>
        </div>
    )
}
// props.children = memanggil komponen properti anak

export default Test; // agar bisa dipanggil file lain