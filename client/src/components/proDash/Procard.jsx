import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Icon } from 'react-icons-kit';
import { mail } from 'react-icons-kit/feather/mail';
import { phone } from 'react-icons-kit/feather/phone';



function Procard() {
    const [fetchData, setfetchdata] = useState(null)

    const iconStyle = {
      color: 'red', // Set the desired color here
      fontSize: '15px', // Set the desired font size here
    };

    useEffect(()=>{
        fetch(`http://localhost:7700/professional/profile`)
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data)
          setfetchdata(data[0])
        })
        .catch((err)=>console.log(err))
    }, [])

  return (
    <div className='procard'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body id='card'>
          {
            (fetchData) ? <div><img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h1>{fetchData.name}</h1>
            <h4>{fetchData.bussinessName}</h4>

            <p><Icon icon={mail} style={iconStyle} /> {fetchData.email}</p>
            <pre><Icon icon={phone} style={iconStyle} /> {fetchData.phone}</pre>

            <h5>Address:</h5>
            <p>{fetchData.address}</p>
            
            <h5>Bio:</h5>
            <Card.Text>{fetchData.bio}</Card.Text>

            <h5>Hours:</h5>
            <pre>Monday     8AM - 5pm</pre>
            <pre>Tuesday    8AM - 5pm</pre>
            <pre>Wenessday  8AM - 5pm</pre>
            <pre>Thrushday  8AM - 5pm</pre>
            <pre>Friday     8AM - 5pm</pre>
            <pre>Saturday   8AM - 5pm</pre>
</div> : <h1>no data</h1>
          }
            

        </Card.Body>
        </Card>
    </div>
  );
}

export default Procard;