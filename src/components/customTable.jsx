import React, { useState } from "react";

import MaterialTable from "material-table";
import columns from "../mock/table-columns";
import data from "../mock/table-data";

const CustomTable = () => {
    const [tableColumns, setColumns] = useState(columns);
    const [tableData, setData] = useState(data);

    return (
        <MaterialTable
            title="Editable Preview"
            columns={tableColumns}
            data={tableData}
            options={{
                exportButton: true
            }}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setData([...tableData, newData]);
                            resolve();
                        }, 1000);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...tableData];
                            const i = oldData.tableData.id;
                            dataUpdate[i] = newData;
                            setData([...dataUpdate]);

                            resolve();
                        }, 1000);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...tableData];
                            const i = oldData.tableData.id;
                            dataDelete.splice(i, 1);
                            setData([...dataDelete]);

                            resolve();
                        }, 1000);
                    })
            }}
        />
    );
};

export default CustomTable;
