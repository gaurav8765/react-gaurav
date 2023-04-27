import React from "react";
import { ColumnDefinition } from "./columnDefenition";
import TableHeader from "./tableHeader";
import TableRows from "./tableRow";

type TableProps<T, K extends keyof T> = {
    data: Array<T>;
    columns: Array<ColumnDefinition<T,K>>
}

const TableComponent = <T, K extends keyof T>({
    data,
    columns
}: TableProps<T,K>) : JSX.Element=> {
    return(
       <table>
         <TableHeader columns={columns} />
        <TableRows columns={columns} data={data}    />
       </table>
    )
} 

export default TableComponent;