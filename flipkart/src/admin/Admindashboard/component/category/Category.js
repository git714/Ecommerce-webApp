import{useEffect, useState } from 'react';

import { Link } from 'react-router-dom'
import axios from 'axios';

import * as React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
export const Category = () => {
  
  const [repo,setRepo]=useState([])

  // subcategory demo array

// for deleting
const deleteCat=(id,e)=>{ 
  axios.get(`http://localhost:5000/users/category/delete/${id}`)
     .then((res) => {
      console.log(res);
            const myRepo=res.data;
            setRepo(myRepo);  
      
       
     })
     .catch(function (error) {
         console.log(error);
     })
    
   }
   
  
    // for finding
     const getRepo=()=>{ 
       axios.get('http://localhost:5000/users/category/find')
          .then((res) => {
            console.log(res);
            const myRepo=res.data;
            setRepo(myRepo);  
          })
          .catch(function (error) {
              console.log(error);
          })
         
        }
        useEffect(()=>{
          getRepo();

        },[])
  return (
    <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h3>Category</h3></TableCell>
            <TableCell><h3>Sub-Category1</h3></TableCell>
            <TableCell><h3>Sub-Category2</h3></TableCell>
            <TableCell><h3>Delete</h3></TableCell>
            <TableCell><h3>edit</h3></TableCell>
            <TableCell><Link to='/addcategory'><Button variant="contained">+Add Category</Button></Link></TableCell>
            
            

            
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {repo.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <h4>{row.name}</h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4>clothing</h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4>Accessories</h4>
              </TableCell>
              <TableCell component="th" scope="row">
              <Button variant="contained" color='error'onClick={(e)=>{deleteCat(row._id,e)}}>Delete</Button>
             
              </TableCell>
              <TableCell component="th" scope="row">
              <Link to='/updatecategory/${row.id}'><Button variant="contained">Edit</Button></Link>
              </TableCell>
             
              {/* <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
  )
}

