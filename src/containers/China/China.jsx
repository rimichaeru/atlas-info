import React, {useState, useEffect}  from "react";
import styles from "../../App.module.scss";
import SearchBar from "../../components/SearchBar";
import BriefCard from "../../components/BriefCard";

function China() {

  const [placeID, setPlaceID] = useState("");
  const [placeView, setPlaceView] = useState("");
  const [cardList, setCardList] = useState([])
  // const [fullInfo, setFullInfo] = useState("");

  const searchPlaceAPI = (searchText) => {

    const formattedID = searchText.split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");

    setPlaceView(formattedID);

    
    if (searchText.length < 2) {
      return;
    }

    fetch(`https://api.teleport.org/api/cities/?search=${searchText}&embed=city:search-results/city:item/city:urban_area/ua:scores/ua:item&embed=city:search-results/city:item/city:urban_area/ua:images`).then((response) => {
      return response.json();
    }).then((placeData) => {

      setCardList(placeData["_embedded"]["city:search-results"].map((place) => {
        try {
          const key = place["_embedded"]["city:item"]["geoname_id"] ? place["_embedded"]["city:item"]["geoname_id"] : "N/A";
          const fullName = place["_embedded"]["city:item"]["full_name"] ? place["_embedded"]["city:item"]["full_name"] : "N/A";
          const lat = place["_embedded"]["city:item"]["location"]["latlon"]["latitude"] ? place["_embedded"]["city:item"]["location"]["latlon"]["latitude"] : "N/A";
          const lon = place["_embedded"]["city:item"]["location"]["latlon"]["longitude"] ? place["_embedded"]["city:item"]["location"]["latlon"]["longitude"] : "N/A";
          const pop = place["_embedded"]["city:item"]["population"] ? place["_embedded"]["city:item"]["population"] : "N/A";
          const continent = place["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["continent"] ? place["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["continent"] : "N/A";
          const img = place["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:images"]["photos"][0]["image"]["mobile"] ? place["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:images"]["photos"][0]["image"]["mobile"] : "N/A";
          const summary = place["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:scores"]["summary"] ? place["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:scores"]["summary"] : "N/A";
          const score = place["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:scores"]["teleport_city_score"] ? place["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:scores"]["teleport_city_score"] : "N/A";
          const categories = place["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:scores"]["categories"] ? place["_embedded"]["city:item"]["_embedded"]["city:urban_area"]["_embedded"]["ua:scores"]["categories"] : "N/A";
  
          return <BriefCard key={key} fullName={fullName} lat={lat} lon={lon} pop={pop} continent={continent} img={img} summary={summary} score={score} categories={categories} />

        } catch (error) {
          
        }

      }))

    })

  }


  useEffect(() => {
    searchPlaceAPI("China");
  }, [])

  useEffect(() => {
    if (cardList.length === 0) {
      setCardList(
        <h1>Maybe on a different planet!</h1>
      )
    }
  }, [cardList])

  return (
    <div className={styles.app}>
      <div className={styles.line}></div>
      <header>
        <h3>You've searched for <span className={styles.place}>{placeView}</span></h3>
        <SearchBar updateSearch={searchPlaceAPI}/>
      </header>
      <div className={styles.line}></div>
      <div className={styles.cardContainer}>
        {cardList}
      </div>
      <div className={styles.footer}>
        <p>Information provided by the <a href="https://developers.teleport.org/">Teleport API</a></p>
        <p>Created By Lee-Michael D'Souza</p>
      </div>
    </div>
  );
}
export default China;
