import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Fingerprint from '@mui/icons-material/Fingerprint';




const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

function valueLabelFormat(value: number) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function FormPropsTextFields() {
 
  return (
    <div>
      <h1>Put your farm information:</h1>
      <TextField
        id="outlined-helperText"
        label="Your Farm name"
        helperText="Some important text"
      /><br/>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-number-cow"
          label="Number of cow"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /><br/>
        <TextField
          id="outlined-number-sheep"
          label="Number of sheep"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /><br/> 
        <TextField
          id="outlined-number-chicken"
          label="Number of chicken"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /><br/>
        <TextField
          id="outlined-number-horse"
          label="Number of horse"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /><br/>
        <TextField
          id="outlined-number-donkey"
          label="Number of donkey"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /><br/>
        <TextField
          id="outlined-number-dog"
          label="Number of dog"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /><br/>
        <IconButton aria-label="fingerprint" color="secondary">
  <Fingerprint />
</IconButton /*onClick= { }*/>

      </Box>
    </div>
  );
}
