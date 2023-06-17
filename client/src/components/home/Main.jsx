import React from "react";
import Carousel1 from "../Carousel1";
import data2 from "../../../db";
function Main() {
  return (
    <>
      <main className="main-container">
        <section>
          <Carousel1 data={undefined} />
        </section>
        <section className="location-container">
          <div>
            <div>
              <img
                src="https://res.cloudinary.com/dmskljxga/image/upload/v1686826761/mobile-location_epwkvh.svg"
                alt="mobile image"
              />
            </div>
            <div>
              <h2>Turn on location services</h2>
              <p>
                Get recommendations of great businesses! Turn on location
                services so we can show you what's nearby.
              </p>
              <button>SEARCH NEAR ME</button>
              <button>NOT NOW</button>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h1>Get inspired With Beauty Beast</h1>
            <p>Read thousands of professional articles</p>

            <div>
              <div>{/*carousel2*/}</div>
            </div>
          </div>
        </section>

        <section className="first-container">
          <div>
            <h1>Find & book an appointment</h1>
            <p>
              Cut the phone tag.Find your next appointment and
              <b> book instangly</b>
              anytime, anywhere.
            </p>
            <div>
              <input type="text" placeholder="Your phone number" />

              <button>DOWNLOAD</button>
            </div>

            <div className="first-container__img">
              <img
                src="https://res.cloudinary.com/dmskljxga/image/upload/v1686827585/customer-app-en.d0ba412_syvyuy.webp"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1>Beauty Beast for your business</h1>
            <p>
              Get started with Booksy to run your business, <b>better</b>.
              Calendar, Booking, Marketing, and Payments all in one.
            </p>
            <button>Grow My Business</button>

            <div className="first-container__img">
              <img
                src="https://res.cloudinary.com/dmskljxga/image/upload/v1686827762/biz-app-en.5ad249f_kkxgtn.webp"
                alt=""
              />
            </div>
          </div>
        </section>

        <section>
          <div className="second-container">
            <div>
              <h1>Appointments done better</h1>
              <p>
                Looking for your next appointment with a local barber, hair
                stylist, massage therapist or nail artist? Need appointment
                booking for a beard trim, an eyebrow wax, or a deep tissue
                massage?
                <br />
                <br />
                Booksy is a free beauty scheduling app and makes appointments
                easy to find and book within seconds. No more phone tag. Book
                anytime, from anywhere, 24/7.
                <br />
                <br />
                <b>
                  Discover top businesses in your area and book instantly with
                  Booksy.
                </b>
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dmskljxga/image/upload/v1686833151/vector8_ckqpcl.svg"
                alt="img1"
              />
            </div>
          </div>

          <div className="second-container row-reverse">
            <div>
              <h1>Something come up? We've got you.</h1>
              <p>
                Download Beauty Blaze, a free online appointment booking app,
                and manage your appointments from anywhere. Reschedule or cancel
                without picking up the phone.
                <br />
                /&gt;And because we know life gets busy, we’ll send you
                reminders. You’ll never forget or miss out on another
                appointment.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dmskljxga/image/upload/v1686827471/vector10_r6otxj.svg"
                alt=""
              />
            </div>
          </div>

          <div className="second-container">
            <div>
              <h1>Book with the best,near you</h1>
              <p>
                Take a scroll around the block to see top health and beauty
                businesses on Booksy’s marketplace. <br />
                <br />
                Check out their vibe from their business profile and hear what
                other people are saying with verified reviews. You can even look
                through their portfolio of work.
                <br />
                <br />
                Save time and leave the stress to someone else. With Booksy,
                setting up your next beauty appointment is free and easy.
              </p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dmskljxga/image/upload/v1686833151/vector9_hpqpvr.svg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="c">
          <h1>Recommended for you</h1>
          <Carousel1 data={data2} />
        </section>
      </main>
    </>
  );
}

export default Main;
