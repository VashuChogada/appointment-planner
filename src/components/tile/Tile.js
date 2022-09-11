import React from "react";

export const Tile = ({item, index}) => {

  let array = Object.values(item);

  return (
    <div className="tile-container" key={index}>
      {array.map(value => {
        // validates if its the first item in the array
        if(value === array[0]){
          return (
            <p key={value} className="tile-title">
             {value} 
            </p>
          )
        }

        // returns value of array for all other items
        return(
          <p key={value} className="tile">
            {value}
          </p> 
        )
      })}
    </div>
  );
};
