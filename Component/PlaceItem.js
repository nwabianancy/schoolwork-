function PlaceItem(props) {
    let place=props.itemdata;
    return (
        <div key={place.id} className='place-item'>
            <h3>{place.name}</h3>
            <h3>{place.address}</h3>
            <p>{place.description}</p>
            <img src={place.image_url}/>
        </div>
    );
  }
  
  export default PlaceItem;