import PlaceItem from './PlaceItem';
import PLACES_TO_VISIT from "./../data/places-to-visit.json";

function PlacesToVisit() {

  return (
    <div className='places-to-visit'>
        <h2>Places to visit</h2>
        <div className='places-container'>
            {PLACES_TO_VISIT.map((place) => (
                <PlaceItem itemdata={place}/>
            ))}
        </div>
    </div>
  );
}

export default PlacesToVisit;