import React from 'react';
import axios from 'axios';
import { Label } from 'reactstrap';
import Button from '@material-ui/core/Button/Button';
import { TextField } from '@material-ui/core';

export default class PersonList extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      

      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Label>
            
            </Label>
            <TextField
            variant="outlined"
            margin="normal"
            label="User ID:"
            required
            fullWidth
            type="text" name="id" onChange={this.handleChange}
          
          />
         
          <br></br>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
           
            type="submit"
            
          >
            Delete
          </Button>
         
        </form>
      </div>
    )
  }
}