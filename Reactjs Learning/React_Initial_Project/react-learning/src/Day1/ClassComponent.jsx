import React, { Component } from 'react'
import { TableCell, TableHead, TableRow  } from "@material-ui/core"


    const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];
export default class ClassComponent extends Component {
    state = {
        name: "State management",
        Forname:"write in class-component"
    }

  
    render() {
        return (
          <TableHead>
        <TableRow>
         
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
            // <div>
            //     <h1 style={{color:'red'}}>Welcome To ReactJS</h1>

            //     <h2 style={{ color: 'Green' }}>
            //          Class Component
            //     </h2>                <div>
            //         <h2>state Concept: {this.state.name} {this.state.Forname}</h2>
            //     </div>
            // </div>

        )
    }
}
