import { Table, TableCell, TableHead, TableRow ,TableBody, Paper,TableContainer } from "@material-ui/core"
import {useEffect,  useState } from "react"
import {getUsers} from "../ServiceFile/axios";
import { Link } from "react-router-dom";

function FormGrid({ refreshTrigger }) {

   const [inputval,setinputVal]=useState([])


  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      console.log('res :', res);
      setinputVal(res);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
    useEffect(() => {
fetchUsers()  

}, [refreshTrigger])

  return (
    <div>
        <h1>Form Validate</h1>
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Name </TableCell>
              <TableCell >username</TableCell>
              <TableCell >website</TableCell>
              <TableCell >phone</TableCell>
              <TableCell>email&nbsp;(s)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inputval.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">
                  {row.website}
                  </TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
    
  )
}

export default FormGrid