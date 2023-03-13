import React from "react";
import Card from "react-bootstrap/Card";
import './PopulerProducts.css'
const PopulerProducts = (props) => {
  
  const {thumbnailUrl } = props.populer;
  return (
    <div>
      <Card  style={{ width: "16rem" }}>
        <Card.Img className="" variant="top" src={thumbnailUrl} />
        {/* <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}
      </Card>

      
    </div>
  );
};

export default PopulerProducts;
