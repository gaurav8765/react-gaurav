import React, { useEffect, useState } from "react";
import TableComponent from "../../atom/table/table";
import { ITable } from "../../atom/table/ITable";
import { ColumnDefinition } from "../../atom/table/columnDefenition";
export const Home = ()=>{
    const columns: ColumnDefinition<ITable, keyof ITable>[] = [
        {
            header: "Name",
            key: "name"
        },
        {
            header: "email",
            key: "email"
        },
        {
            header: "City",
            key: "city"
        },
        {
            header: "Company",
            key: "company"
        },
        {
            header: "Name",
            key: "name"
        },

    ]
    const [data, SetData] = useState<ITable[]>([]);
    useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=> res.json())
            .then((res : any[])=>{
                const tableData: ITable[] = [];
                res.forEach((row,i)=>{
                    tableData.push(
                        {
                            city: res[i]?.address?.city,
                            company:res[i]?.company?.name,
                            email:res[i]?.email,
                            name:res[i]?.name
                        }
                    )
                })
                SetData(tableData);
            }) 
    },[])

    return(
        <>
        <div>Home Page</div>
        <div>
        <TableComponent data={data} columns={columns}  />
        </div>
        </>

    )
}