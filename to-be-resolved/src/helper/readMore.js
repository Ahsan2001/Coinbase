import React , { useState } from "react";


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };



    return (
      <>
        {isReadMore ? text.slice(0, 1000) : text}
        <span onClick={toggleReadMore} style={{fontWeight: 600,  cursor: "pointer",  color: "#000000"}}>
          {isReadMore ? "...read more" : " show less"}
        </span>
      </>
    );
  };
  

export default ReadMore;