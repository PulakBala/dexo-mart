import React from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import { AuthContext } from "../../context/UserContext";


const Commnet = ({ comment}) => {
   const {user} = useContext(AuthContext)
  return (
    <div className="comment">
      <p>
        {
          user?
          <>
          {comment}
          <Image src={user?.photoURL} roundedCircle style={{height:'40px'}}/>
          
          </>
          :
          <>
          
          </>
        }
      </p>
    </div>
  );
};

export default Commnet;
