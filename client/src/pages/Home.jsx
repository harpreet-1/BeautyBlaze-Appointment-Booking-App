import "../Styling/App.css";
import Main from "../components/home/Main";
const Home = () => {
  return (
    <>
      <div className="video-container">
        <video playsInline autoPlay muted loop className="video">
          <source
            src="https://booksy-public.s3.amazonaws.com/horizontal_.webm"
            type="video/webm"
          />
          <source
            src="https://booksy-public.s3.amazonaws.com/US.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <Main />
    </>
  );
};

export default Home;
