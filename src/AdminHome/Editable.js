import React from "react";
import MaterialTable from "material-table";
//npm install material-table --save

export default function Editable() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: "BOOKID", field: "bookid", type: "numeric" },
    { title: "BOOKNAME", field: "bookname" },
    { title: "AUTHOR", field: "author" },
    { title: "EDITION", field: "edition", type: "numeric" },
    {
      title: "GENRE",
      field: "genre",
      lookup: {
        1: "THRILLER",
        2: "ROMANCE",
        3: "STUDY",
        4: "KIDS",
        5: "FANTASY",
      },
    },
  ]);

  const [data, setData] = useState([
    {
      bookid: "1",
      bookname: "The Chronicles of Narnia",
      author: "C. S. Lewis",
      edition: 7,
      genre: 5,
    },
    {
      bookid: "2",
      bookname: "HARRY PORTER",
      author: "J. K. Rowling",
      edition: 6,
      genre: 5,
    },
  ]);

  return (
    <MaterialTable
      title="UPDATE BOOKS"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
