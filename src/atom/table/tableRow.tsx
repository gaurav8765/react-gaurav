import React from "react";
import { ColumnDefinition } from "./columnDefenition";

type TableRowProps<T, K extends keyof T> = {
    data: Array<T>,
    columns : Array<ColumnDefinition<T,K>>
}

const TableRows = <T, K extends keyof T>({
    data,
    columns
}:TableRowProps<T, K>): JSX.Element  => {
const rows = data.map( (row, index) => {
    return(
        <tr key={`row-${index}`} >
            {
                columns.map((col, colIndex) => {
                    return (
                        <td key={`columns-${colIndex}`}>
                                {row[col.key] as string}
                        </td>
                    )
                })
            }
        </tr>
    )
})

return <tbody>{rows}</tbody>
}


export default TableRows;