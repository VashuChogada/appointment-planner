import React from "react";

export const Tile = ({item, key}) => {

  let array = Object.values(item);

  return (
    <div className="tile-container" key={key}>
      {array.map(value => {
        // validates if its the first item in the array
        if(value === array[0]){
          return (
            <p className="tile-title">
             {value} 
            </p>
          )
        }

        // returns value of array for all other items
        return(
          <p className="tile" key={value}>
            {value}
          </p>
        )
      })}
    </div>
  );
};
