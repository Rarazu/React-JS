function Test(props) {
    return(
        <div style={ {color: props.fontColor, fontFamily:`Tahoma`} }>
            <img src={props.avatar}
            style={{width: `100px`, height: `100px`, borderRadius: '50%'}}>
            </img>
            <h4>Name : {props.name}</h4>
            <h4>City : {props.city}</h4>
            <p>
                {props.children} 
            </p>
        </div>
    )
}
// props.children = memanggil komponen properti anak

export default Test; // agar bisa dipanggil file lain