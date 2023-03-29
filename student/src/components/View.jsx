import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addstudent from './Addbook'

const View = () => {
  var [update, setUpdate] = useState(false)
  var [selected, setSelected] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3005/books")
      .then(response => {
        setBooks(setBooks = response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))

  }, [])
  const updateValues = (value) => {
    setSelected(value);
    setUpdate(true);
  }
  const deleteValues = (id) => {
    console.log("delete clicked" + id)
    axios.delete("http://localhost:3005/books/" + id)
      .then((response) => {
        console.log(response.idvalue);
        alert("sucessfully deleted");
        window.location.reload(false);

      })

  }
  var finalJSX = <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>



          <TableCell>GENRE</TableCell>
          <TableCell>BOOK</TableCell>
          <TableCell>PUBLISHED BY</TableCell>
          <TableCell>Delete</TableCell>
          <TableCell>Update</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((value, index) => {
          return <TableRow key={index}>
            <TableCell>{value.id}</TableCell>
            <TableCell>{value.name}</TableCell>
            <TableCell>{value.grade}</TableCell>
            <TableCell>{value.delete}</TableCell>
            <TableCell>{value.update}</TableCell>
            <TableCell>

              <Button
                color='error'
                onClick={() => deleteValues(value.id)}>Delete</Button>
              <Button
                color='success'
                onClick={() => updateValues(value)}>update</Button>
            </TableCell>

          </TableRow>
        })}
      </TableBody>
    </Table>
  </TableContainer>

  if (update)
    finalJSX = <Addstudent data={selected} method="put" />



  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      {finalJSX}
    </div>

  )
}

export default View
