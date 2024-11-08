import Crewmates from "./../assets/crewmates.43d07b24.png";
import Ship from "./../assets/spaceship.3d8f767c.png";
import "./home.css";
const Home = () => {
  return (
    <div className="home-page text-white text-center">
      <h1 className="home-title">Welcome to the Crewmate Creator!</h1>
      <p className="home-subtitle">
        Here is where you can create your very own set of crewmates before sending them off into space!
      </p>

      <div className="home-images">
        <img src={Crewmates} alt="crewmates" className="home-crewmates" />
        <img src={Ship} alt="Ship" className="home-ship" />
      </div>
    </div>
  );
};

export default Home