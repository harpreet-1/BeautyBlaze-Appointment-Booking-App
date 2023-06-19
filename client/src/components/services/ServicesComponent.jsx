import React, { useEffect, useState } from "react";
import "../../Styling/services/services.css";
import { useSearchParams } from "react-router-dom";
const url = "https://pear-splendid-bee.cyclic.app/services/";
import { useNavigate } from "react-router-dom";

function ServicesComponent() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(`${url}?q=${q}`);
    if (q) {
      fetch(`${url}?q=${q}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [q]);

  const handleBook = (e, id, professionalId) => {
    // e.preventDefault();
    navigate(`/single/${id}/${professionalId}`);
  };
  return (
    <div className="main-service-container">
      <div>
        <div className="header">
          <div>
            <button>Sort by: Recommended</button>
          </div>
          <div>
            <button>Map View</button>
          </div>
        </div>
        {data.length ? (
          data.map(
            ({ _id, name, pricing, duration, description, professional }) => {
              return (
                <div className="service-container" key={professional._id}>
                  <div>
                    <img src={professional.image} alt="img" />
                  </div>
                  <div>
                    <div className="shop-name">
                      <h1>{professional.bussinessName}</h1>
                      <p className="address">{professional.address}</p>
                      <p>{name}</p>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div>
                    <div className="price-info">
                      <div>
                        <p style={{ fontWeight: 600, marginBottom: "0" }}>
                          {`$ ${pricing}`}
                        </p>
                        <p style={{ fontSize: "14px", marginTop: "0" }}>
                          {`${duration} min`}
                        </p>
                      </div>
                      <button
                        onClick={(e) => handleBook(e, _id, professional._id)}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <h1>No service avilable</h1>
        )}
      </div>
    </div>
  );
}

export default ServicesComponent;
