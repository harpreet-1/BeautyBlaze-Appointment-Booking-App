
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState, useEffect } from 'react';



// function DashCorosal() {
//   const [fetchData, setfetchdata] = useState(null)
//   const [loading, setloading] = useState(true)

//   useEffect(() => {
//     // dynamic token- coming from login page
//     let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiZWF1dHlQcm9mZXNzaW9uYWxJZCI6IjY0OGVmMTg0ZjIwNTJlYTNkY2I2ZjIwNCIsImlhdCI6MTY4NzA5MjQ5OSwiZXhwIjoxNjg3Njk3Mjk5fQ.zdftj1h5VjUlmLt-PZh4-bxS0PtlDSpsLghyA8huHeo";

//     fetch(`http://localhost:7700/professional/profile`, {
//       method: "GET",
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json"
//       }
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setfetchdata(data)
//         setloading(false)
//         console.log(data)
//       })
//       .catch((err) => console.log(err))
//   }, [])

//   return (loading ||
//     <div className='DashCorosal'>
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={fetchData.portfolio[0].imageUrl}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>{fetchData.portfolio[0].title}</h3>
//             <p>{fetchData.portfolio[0].description}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img 
//             className="d-block w-50 h-50"
//             src={fetchData && fetchData.portfolio[1].imageUrl}
//             alt="Second slide"
//           />

//           <Carousel.Caption>
//             <h3>{fetchData.portfolio[1].title}</h3>
//             <p>{fetchData.portfolio[1].description}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// }

// export default DashCorosal;

