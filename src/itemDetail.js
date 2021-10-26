import React, { useState, useEffect } from "react";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const response = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );

    const item = await response.json();
    console.log(item);
  };

  return (
    <div>
      <h1>sss</h1>
    </div>
  );
}

export default ItemDetail;
