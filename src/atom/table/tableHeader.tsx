import React from "react";
import {ColumnDefinition} from "./columnDefenition";

type TableHeaderProps<T, K extends keyof T> = {
    columns: Array<ColumnDefinition<T,K>>
}
const TableHeader = <T, K extends keyof T>({
    columns
}:TableHeaderProps<T, K>) : JSX.Element => {
 const header = columns.map((column , index)=>{
    return(
        <th key={`headerCell-${index}`} >

                {
                    column.header
                }
        </th>
    )
 }) 
 
 return(
    <thead>
    <tr>{header}</tr>
    </thead>
)
}

export default TableHeader;