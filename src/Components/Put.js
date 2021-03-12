import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:"30%"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forgotpassword: {
    //   backgroundColor: 'yellow',
      textAlign: 'right',
  }
}));
function PutFunction() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const data = { title, body };
    const requestOptions = {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch("https://jsonplaceholder.typicode.com/posts/1", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
      console.log(data)
  };

  return (
      <div className={classes.paper}>
         <form  noValidate className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="title Address"
            name="title"
            onChange={onTitleChange} required
            value={title}
            // autoComplete="email"
            // autoFocus
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="body"
            label="body"
            type="body"
            id="body"
            onChange={onBodyChange} required 
            value={body}
          
          />
         
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

            onClick={handleSubmit}
          >
            Edit
          </Button>
         </form>

        {/* <form>
          <input  placeholder="Title" value={title}
            onChange={onTitleChange} required />
          <textarea placeholder="Body" value={body}
            onChange={onBodyChange} required />
          <button type="submit" onClick={handleSubmit}>
           Create Post
          </button>
        </form> */}

      </div>
  );
}

export default PutFunction;