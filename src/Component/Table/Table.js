import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

function LinearIndeterminate() {
  return (
    <Box sx={{ widTableCell: '100%' }}>
      <LinearProgress />
    </Box>
  );
}

function TableComponent(props) {
  const {data} = props
  console.log(data)
  return (
     <>
        {data.length==0 ? LinearIndeterminate(): <TableContainer component={Paper} onClick={(e)=>{console.log(e.target.id)}}> <Table sx={{minWidth:'650px'}}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        S.no
                    </TableCell>
                    <TableCell>
                        Image
                    </TableCell>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        Phone no
                    </TableCell>
                    <TableCell>
                        Open details
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((element,index)=>{
                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    {index+1}
                                </TableCell>
                                <TableCell>
                                    <img src={element.picture.thumbnail}/>
                                </TableCell>
                                <TableCell>
                                    {element.name.title} {element.name.last} {element.name.first}
                                </TableCell>
                                <TableCell>
                                    {element.email}
                                </TableCell>
                                <TableCell>
                                    {element.phone}
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" id={element.id.value}>Primary</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
        </TableContainer>
    }
    
    </>
  )
}

export default TableComponent