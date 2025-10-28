import { Table, TableCell, TableHead, TableRow ,TableBody, Paper } from "@material-ui/core"
import {useEffect,  useState } from "react"

function FormGrid() {

   const [inputval,setinputVal]=useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((e)=>e.json()).then((res)=>setinputVal(res)).catch((re)=>re)
  }, [])
console.log('res :', inputval);
  return (
    <div>
        <h1>Form Validate</h1>
        <Paper>
          <Table>
              <TableHead>

                  <TableRow>
                      {inputval.map((res) => (
                          //console.log('res :', res);
                          <TableCell key={res.id}>{res.name}</TableCell>
                      ))

                      }


                  </TableRow>
                <TableBody>
          {inputval.map(row => (
            <TableRow key={row.id}>
            
              <TableCell >{row.name}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
              </TableHead>
          </Table>
          </Paper>

    </div>
    
  )
}

export default FormGrid