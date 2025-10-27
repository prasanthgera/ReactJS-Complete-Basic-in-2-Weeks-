import React from 'react'
import { TableCell, TableHead, TableRow  } from "@material-ui/core"

function FormGrid() {
     const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];
  return (
     <TableHead>
      <TableRow>
          {rows.map((res)=>{
            <TableCell key={res.id}></TableCell>
          })

          }


      </TableRow>
    </TableHead>
  )
}

export default FormGrid