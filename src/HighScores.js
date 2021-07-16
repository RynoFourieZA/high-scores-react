import React from "react";
import allCountryScores from "./Scores";
import "./index.css";
const HighScores = () => {
  /**
 * Function to sort alphabetically an array of objects by some specific key.
 * 
 * @param {String} property Key of the object to sort.
 */
function dynamicSort(property) {
  var sortOrder = 1;

  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }

  return function (a,b) {
      if(sortOrder === -1){
          return b[property].localeCompare(a[property]);
      }else{
          return a[property].localeCompare(b[property]);
      }        
  }
}


  return (
    <div className="outsideBorder">
      <div className="countryBorder">
        <h1 id="highScoreHeader">High Scores per Country</h1>
        {allCountryScores.sort(dynamicSort("name")).map((country) => {
          return (
            <div className="middleBorder">
              <h1 id="countryNameHeader">High Scores: {country.name}</h1>
              <table className="table">
                {country.scores.sort((x,y) => x.s - y.s).map((names) => {
                  console.log(names.s);
                  return (
                    <tr className="innerBorder">
                      <td className="column1"> {names.n} </td>
                      <td className="column2"> {names.s} </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default HighScores;
