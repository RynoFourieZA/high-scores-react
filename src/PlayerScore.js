import React from "react";

const PlayerScore = ({name, score}) => {
return (
    <tr className="innerBorder">
        <td className="column1"> {name} </td>
        <td className="column2">{score} </td>
    </tr>
)
}

export default PlayerScore;