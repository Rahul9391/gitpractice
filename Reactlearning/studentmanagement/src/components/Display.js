import React from 'react'
// import MyData from './MyData'

export default function Display(props) {
    return (
        <div>

            <div className="container">
                <div className="col">

                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title"><p>Student Info</p></h5>
                            <h6 className="card-subtitle mb-2 text-muted"><h2>{props.Std_name}</h2></h6>
                            <p className="card-text">age:{props.Std_age}<br/>class:{props.Std_class}<br/>
                               marks:{props.Std_marks}<br/>
                               Grade:{props.Std_grd}</p>


                            {/* <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a> */}


                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
