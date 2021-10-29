import React, { useState, useEffect } from "react";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );

    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };
  if (Object.keys(item).length == 0) return <div>Hello</div>;
  return (
    <div>
      <h1>{item.data.item.name}</h1>
      <img src={item.data.item.images.icon} alt="" />
      <p>{item.data.item.description}</p>
    </div>
  );
}

export default ItemDetail;
