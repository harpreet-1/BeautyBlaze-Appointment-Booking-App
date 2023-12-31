import React, { useState, useEffect } from "react";

export default function Table() {
    const [fetchedData, setFetchedData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [detail, setDetail] = useState(null)
    const [loading, setloading] = useState(true)

    const toggleDetails = (index) => {
        if(index!=selectedRow){
            setSelectedRow(index);
            setDetail(fetchedData[index])
            // console.log(detail)
        }else{
            setSelectedRow(null)
        }
    };

 useEffect(() => {
        fetch(`http://localhost:7700/appointment/`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.appointments)
                setFetchedData(data.appointments)
                setloading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="table">
            {
                loading ?
            
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Service</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        fetchedData.map((el, index) => {

                            return (
                                <React.Fragment key={index}>
                                    <tr key={el._id}>
                                        <td>{el.customerID.name}</td>
                                        <td>{el.date.substring(0, 10)}</td>
                                        <td>{el.time}</td>
                                        <td>{el.service ? el.service.name: "facial"}</td>
                                        <td><div className={el.status} id="statusBox">{el.status}</div></td>
                                        <td><button id={el._id} onClick={(e) => { toggleDetails(index) }}>{selectedRow === index ? "Hide" : "Show"}</button></td>
                                    </tr>

                                    {selectedRow === index && (
                                        <tr>
                                            <td colSpan="3">
                                                <div className="details-box">
                                                    <pre>Email: {fetchedData[selectedRow].customerID.email}</pre>
                                                    <pre>Service: {detail.service ? detail.service.name : "Facial"}</pre>
                                                    <select name="status" id="status" onChange={(e)=>{
                                                        handleStatus(e, index)
                                                    }}>
                                                        <option value="">--select status---</option>
                                                        <option value="completed">completed</option>
                                                        <option value="pending">pending</option>
                                                        <option value="cancelled">cancelled</option>
                                                    </select>
                                                    <button>Delete</button>
                                    
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>

                            )
                        }) 
                    }
                </tbody>
            </table>  : <h1>No Appointments</h1>

            }
        </div>
    )

}
