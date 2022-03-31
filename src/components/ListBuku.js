export default function ListBuku(props){
    return (
        <div className="row m-2 p-2" style={{border: `1px solid lightgreen`}}>
            {/** cover area */}
            <div className="col-lg-3">
                <img 
                src={props.cover} 
                width={`160`}
                height={`220`} 
                alt={`Can't load cover`}/>
            </div>

            {/**labels area */}
            <div className="col-lg-9">
                <h5>ISBN : {props.isbn}</h5>
                Title : {props.title} <br />
                Creator : {props.creator} <br />
                Publisher : {props.publisher} <br />
                Rating : {[...Array(5)].map((item, index) => {
                    if (index < props.rating) {
                        return(
                            <b className="text-warning">
                                <i className="fa fa-star"></i>
                            </b>
                        )
                    }
                    return(
                        <b className="text-secondary">
                            <i className="fa fa-star"></i>
                        </b>
                    )
                })}  <br />
                Progress :
                <div className="progress">
                    <div className="progress-bar" 
                        role="progress" 
                        style={{width: `${props.progress}%`}} 
                        aria-valuenow={props.progress} 
                        aria-valuemin="0" 
                        aria-valuemax="100">
                        {`${props.progress}%`}     
                </div>
            </div>
        </div>
        </div>
    )
}