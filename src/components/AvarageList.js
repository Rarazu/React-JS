export default function AvarageList(props){
    let status = (rata) => {
        if (rata >= 75) {
            return (
                <span className="badge rounded-pill bg-success">Pass</span>
            )
        } else if (rata < 75) {
            return (
                <span className="badge rounded-pill bg-danger">Not Pass</span>
            )
        }
    }
    return(
        <div className="m-2 p-2" style={{border: `1px solid pink`}}>
            <div className="row">
                <div className="col-lg-3">
                    <h6>ID : {props.id}</h6>
                    <h5 className="fw-light">{props.name}</h5>
                </div>

                <div className="col-lg-1 text-center">
                    <small className="fst-italic">Math</small>
                    <h6>{props.math}</h6>
                </div>

                <div className="col-lg-1 text-center">
                    <small className="fst-italic">English</small>
                    <h6>{props.english}</h6>
                </div>

                <div className="col-lg-1 text-center">
                    <small className="fst-italic">Chemistry</small>
                    <h6>{props.chemistry}</h6>
                </div>

                <div className="col-lg-5 text-end">
                    <span class="badge bg-warning text-dark">Average</span> <br/>
                    <small className ="mx-4">{props.average}</small>
                </div>

                <div className="col-lg-1 text-center">
                    {status(props.average)}
                </div>
            </div>
        </div>
    )
}