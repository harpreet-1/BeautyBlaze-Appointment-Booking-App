import React, { useEffect, useState } from "react";
import "../../Styling/services/services.css";
import { useSearchParams } from "react-router-dom";
function ServicesComponent() {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  useEffect(() => {
    console.log(q);
    if (q) {
      fetch(`url?q=${q}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
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

        <div className="service-container">
          <div>
            <img
              src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/492972/biz_photo/8cbe88dbf462406cb0c16bda0215e2-african-twin-hair-hair-braidin-biz-photo-9a438b4584644c63b1c4e91c7bdbaf-booksy.jpeg?size=360x360"
              alt=""
            />
          </div>
          <div>
            <div className="shop-name">
              <h1>KD Cuts</h1>
              <p className="address">1332 Harding Pl., Charlotte, 28204</p>
              <p>Hair cutting</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum eum cumque, tempora eos dolore deserunt a illum quis
                magni repellat!
              </p>
            </div>
          </div>
          <div>
            <div className="price-info">
              <div>
                <p style={{ fontWeight: 600, marginBottom: "0" }}>400 Rs.</p>
                <p style={{ fontSize: "14px", marginTop: "0" }}>20min</p>
              </div>
              <button>Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
