import React, { useState } from "react";
import PlacesAutocomplete,{geocodeByAddress,getLatLng} from "react-places-autocomplete";


function App() {
  const [address,setAddress] = useState("")

  const handleSelect = async (value)=>{

  }
  return (
    <div >
     <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
      {({getInputProps,suggestions,getSuggestionItemProps,loading}) => 
      <div>
        <input {...getInputProps({placeholder:"Type Address"})}/>
        <div>
          {loading ? <div>...loading</div> : null}
          {suggestions.map((suggestion)=>{
            return <div>
              {console.log("🚀 ~ file: App.js ~ line 24 ~ {suggestions.map ~ suggestion", suggestion)}
              {suggestion.description}
            </div>
          })}
        </div>
        </div>}
     </PlacesAutocomplete>
    </div>
  );
}

export default App;
