import React, {useState,useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function GetFunction() {
//   const classes = useStyles2();

  const [data, setData] = useState([]);

 

  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((result) => setData(result))
        .catch((err) => console.log("error"));
    };
    fetchData();
    console.log(data)
  }, []);
  

  return (
    <TableContainer component={Paper}>
     
    <Link to="/Crud" style={{textDecoration:"none"}}> <Button variant="contained" color="primary" style={{marginLeft:"60%",marginTop:"10%"}}>
  Create form and post the data
</Button></Link>

      <Table  aria-label="custom pagination table" style={{marginTop:"100px"}}>
        <TableBody>
          <div>
       
       <>
    {
        data.map((data) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {data.userId}
              </TableCell>
              <TableCell component="th" scope="row">
                {data.id}
              </TableCell>
              <TableCell component="th" scope="row">
              {data.title}
              </TableCell>
              <TableCell component="th" scope="row">
              {data.body}
              </TableCell>
             
            </TableRow>
        ))}
            </>
    
     

         
          </div>
        </TableBody>

      </Table>
    </TableContainer>
  );
}
