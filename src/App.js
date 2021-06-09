import {useState, useEffect} from "react"
import './App.module.scss';
import SearchBar from "./components/SearchBar";
import BriefCard from "./components/BriefCard";

function App() {

  const [placeID, setPlaceID] = useState("nothing");
  const [geoLink, setGeoLink] = useState("");
  // const [fullInfo, setFullInfo] = useState("");


  const searchPlaceAPI = (searchText) => {
    
    fetch(`https://api.teleport.org/api/cities/?search=${searchText}`).then((response) => {
      return response.json();
    }).then((placeData) => {
      // console.log(placeData["_embedded"]["city:search-results"]); // array of matching areas, could display all names in a dropdown!
      // console.log(placeData["_embedded"]["city:search-results"][0]["_links"]["city:item"]["href"]); // link for geonameid, for next API call
      // console.log(placeData["_embedded"]["city:search-results"][0]["matching_full_name"]); // full location name

      // use the closest match [0] as an example
      setGeoLink(placeData["_embedded"]["city:search-results"][0]["_links"]["city:item"]["href"]);
      setPlaceID(placeData["_embedded"]["city:search-results"][0]["matching_full_name"]);



    }).catch(() => {
      console.log("Invalid place! Please try again.");
    });

    // fetch(`https://api.teleport.org/api/cities/?search=${searchText}&embed=city:search-results/city:item/city:urban_area/ua:scores`).then((response) => {
    //   return response.json();
    // }).then((placeInfo) => {
    //   console.log(placeInfo);
    // })
  }

  // 

  useEffect(() => {
    searchPlaceAPI("San Francisco");
  }, [])



  useEffect(() => {
    fetch(geoLink).then((response) => {
      return response.json();
    }).then((placeData) => {
      console.log(placeData);
    }).catch(() => {
      console.log("Invalid link! Please try again.");
    })
  }, [geoLink])


  return (
    <div className="App">
      <SearchBar />
      <h3>You've searched for {placeID}</h3>
    </div>
  );
}

export default App;
