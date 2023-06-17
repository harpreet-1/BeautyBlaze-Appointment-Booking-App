import "../../Styling/home/footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <div className="fx jsb ac">
            <div className="fx" style={{ gap: "0.75rem" }}>
              <span>Blog</span>
              <span>About us</span>
              <span>FAQ</span>
              <span>Privacy policy</span>
              <span>Term of Services</span>
              <span>Carreers</span>
              <span>Contacts</span>
            </div>
            <div className="fx ac">
              <div>
                <img
                  src="https://res.cloudinary.com/dmskljxga/image/upload/v1686920117/vector12_mt8dse.svg"
                  alt=""
                />
              </div>

              <div>
                <img
                  src="https://res.cloudinary.com/dmskljxga/image/upload/v1686920117/vector11_ihu9mv.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="fx jsb">
            <div className="fx ac" style={{ gap: "0.75rem" }}>
              <h3>Beauty Blaze</h3>
              <p>&#169; 2023 Beauty Blaze inc. All rights reversed.</p>
            </div>
            <div className="fx socials">
              <div>
                <a href="">
                  <img
                    src="https://res.cloudinary.com/dmskljxga/image/upload/v1686920399/vector_gdwuzy.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <img
                    src="https://res.cloudinary.com/dmskljxga/image/upload/v1686920280/vector3_h2zqk6.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="
              "
                >
                  <img
                    src="https://res.cloudinary.com/dmskljxga/image/upload/v1686920280/vector2_mbxrsi.svg"
                    alt=""
                    style={{ color: "white" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
