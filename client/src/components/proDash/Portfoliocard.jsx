import React, { useState, useEffect } from 'react';

function Portfoliocard(){
    const [fetchData, setfetchdata] = useState(null)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    // dynamic token- coming from login page
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiZWF1dHlQcm9mZXNzaW9uYWxJZCI6IjY0OGVmMTg0ZjIwNTJlYTNkY2I2ZjIwNCIsImlhdCI6MTY4NzA5MjQ5OSwiZXhwIjoxNjg3Njk3Mjk5fQ.zdftj1h5VjUlmLt-PZh4-bxS0PtlDSpsLghyA8huHeo";

    fetch(`http://localhost:7700/professional/profile`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setfetchdata(data)
        setloading(false)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return loading || 
  <div className="portCard-cont">
    {
        fetchData.portfolio.map((el, idx)=>{
            return <div className="portCard" key={el._id}>
                        <img src={el.imageUrl} alt="" />
                        <h1>{el.title}</h1>
                        <h5>{el.description}</h5>
                    </div>
        })
    }
    
  </div>
}


export default Portfoliocard;