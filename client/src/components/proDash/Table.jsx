import React, { useState, useEffect } from "react"



export default function Table() {
    const [fetchedData, setFetchedData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [detail, setDetail] = useState(null)

    const toggleDetails = (index) => {
        if(index!=selectedRow){
            setSelectedRow(index);
            setDetail(fetchedData[index])
            // console.log(detail)
        }else{
            setSelectedRow(null)
        }
    };

    function handleStatus(e, index){
        fetch(`http://localhost:7700/appointment/status/${fetchedData[index]._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({status: e.target.value})
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setFetchedData([...fetchedData], fetchedData[index].status=e.target.value)
            })
            .catch((err) => console.log(err))
    }

    function handleDelete(e, index){
        
    }

    useEffect(() => {
        fetch(`http://localhost:7700/appointment/`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.appointments)
                setFetchedData(data.appointments)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="table">
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
                                        <div className={el.status} id="statusBox"><td>{el.status}</td></div>
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
                                                    <button onClick={(e)=>handleDelete(e, index)}>Delete</button>
                                    
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}




