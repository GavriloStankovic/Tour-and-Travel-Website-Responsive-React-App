import React from "react";
import "./HomePage.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/5.jpg";
import img4 from "../../assets/8.jpg";
import france from "../../assets/6.jpg";
import indonesia from "../../assets/10.jpg";
import malesia from "../../assets/img.jpg";

const HomePage = () => {
  return (
    <div className="homepage-main">
      <div className="homepage-text">
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
        <a href="/">Travel Plan</a>
      </div>
      <div className="popular-destinations">
        <h1>Popular Destinations</h1>
        <h3>
          Tours give you the opportunity to see a lot, within a time frame.
        </h3>
        <div className="destinations-description">
          <div className="destination-text">
            <h1>Taal Volcano, Batangas</h1>
            <p>
              One of the most iconic views in Luzon, Mt. Taal boasts a volcano
              inside a lake inside an island. If you fancy a closer look, the
              hike up to the crater is a mere 45 minutes, and is easy enough for
              beginners. Guides will assist you most of the way, and you’ll see
              the peculiar environment found on an active volcano, including
              volcanic rocks and steam vents. The hike can be dusty and hot, so
              plan for an early morning trip, and then unwind with some bulalo
              before heading back home!
            </p>
          </div>
          <div className="destination-img">
            <img src={img1} alt="slika1" />
            <img src={img2} alt="slika2" />
          </div>
        </div>
        <div className="destinations-description">
          <div className="destination-img">
            <img src={img3} alt="slika3" />
            <img src={img4} alt="slika4" />
          </div>
          <div className="destination-text">
            <h1>Mt. Daguldul, Batangas</h1>
            <p>
              If you’re looking for a hike that’s a little more challenging but
              still good for a beginner mountaineer, check out Mt. Daguldul in
              San Juan, Batangas. You’ll start your hike from the beach and pass
              through tropical forest, different rock formations, and small
              streams. There’s a small store halfway up the trail where you can
              take a break and drink buko juice, and though the summit itself
              may not have the best view, the breeze is fantastic. Once you’ve
              made it back down, head straight to the beach for a refreshing,
              well-deserved swim.
            </p>
          </div>
        </div>
      </div>
      <div className="recent-trips">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="trips-cards">
          <div className="card">
            <div className="image-div">
              <img src={indonesia} alt="indonezija" />
            </div>
            <h2>Trip in Indonesia</h2>
            <p>
              Indonesia, officially the Republic of Indonesia, is a country in
              Southeast Asia and Oceania between the Indian and Pacific oceans.
              It consists of over 17,000 islands, including Sumatra, Java,
              Sulawesi, and parts of Borneo and New Guinea.
            </p>
          </div>
          <div className="card">
            <div className="image-div">
              <img src={malesia} alt="malezija" />
            </div>
            <h2>Trip in Malaysia</h2>
            <p>
              Malaysia is a Southeast Asian country occupying parts of the Malay
              Peninsula and the island of Borneo. It's known for its beaches,
              rainforests and mix of Malay, Chinese, Indian and European
              cultural influences.
            </p>
          </div>
          <div className="card">
            <div className="image-div">
              <img src={france} alt="frncuska" />
            </div>
            <h2>Trip in France</h2>
            <p>
              France, in Western Europe, encompasses medieval cities, alpine
              villages and Mediterranean beaches. Paris, its capital, is famed
              for its fashion houses, classical art museums including the Louvre
              and monuments like the Eiffel Tower.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
