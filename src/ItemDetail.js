import React, { useState, useEffect } from "react";
import "./App.css"; 


function ItemDetail({ match }) {
  useEffect(() => { 
      fetchItem();
      console.log(match);
      
  }, []);
  const [item, setItems] = useState({
      images: {}
  });

  const fetchItem = async ()=>{
      const fetchItem = await fetch(
        `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`
      );
      const item = await fetchItem.json();
      setItems(item);      
  }
  
  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparent} />
    </div>
  );
}
export default ItemDetail;
