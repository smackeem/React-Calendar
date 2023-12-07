import { useState } from "react";
import Weekday from './Weekday';

const Calendar = ({dates, days}) => {
    days = days.map((d)=> d.name);
    const datesCopy = dates;
    console.log(datesCopy)
    const chunkArray = (arr, size) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
          chunkedArray.push(arr.slice(i, i + size));
        }
        return chunkedArray;
      };
    const datesArr = chunkArray(datesCopy, 7);
    console.log(datesArr)
    const range = (n) => Array.from({ length: n }, (_, i) => i + 1);
    const weeks = 4;
    const weekdays = 7;
    
    return (
        <>
           <table>
                <tbody>
                    {range(weeks).map((r)=> (
                        <tr key={r}>
                            {range(weekdays).map((c)=> (
                            <td key={c}>
                                <button>
                                <div>
                                    <p>{days[c-1]}</p>
                                </div>
                                <div>
                                    <p>{datesArr[r-1][c-1]}</p>
                                </div>
                                </button>
                            </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
           </table>
        </>
    )
}

export default Calendar;