import React from "react";
import allCountryScores from "./Scores";
import "./index.css";
const HighScores = () => {
  return (
    <div className="outsideBorder">
      <div className="countryBorder">
        <h1 id="highScoreHeader">High Scores per Country</h1>
        {allCountryScores.map((country) => {
          return (
            
              <div className="middleBorder">
                <h1 id="countryNameHeader">High Scores: {country.name}</h1>
                <table className="table">
                    {country.scores.map((names) => {
                      console.log(names.s);
                      return (
                          <tr className="innerBorder">
                            <td className="column1"> {names.n} </td>
                            <td className="column2"> {names.s} </td>
                          </tr>
                      )
                    })}
                </table>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighScores;
