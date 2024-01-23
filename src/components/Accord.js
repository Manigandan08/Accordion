import React, { useState } from "react";
import { data } from "./Data";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Accordian = () => {
  const [selected, setselected] = useState();
  const [ismultiple, setismultiple] = useState(false);
  const [value, setvalue] = useState([]);


  const set = (i) => {
    const arr = [...value];

     arr[i] === true ? (arr[i] = false) : (arr[i] = true);
    setvalue(arr);
    console.log(arr);
  };

  const HandleClick = (id) => {
    setselected(selected === id ? null : id);
  };

  const Handlemultiple = () => {
    setismultiple(!ismultiple);
    
  };
  console.log(ismultiple);
  
  return (
    <div>
    <Container>
      <Typography variant="h3">Accordion Details</Typography>
      <Button variant="contained" sx={{ my: 2 }} onClick={Handlemultiple}>
        Muliple Selection {ismultiple?"ON":"OFF"}
      </Button>

      {data.length > 0 ? (
        data.map((item, i) => (
          <div key={i}>
          {(!ismultiple)?
            <Accordion expanded={selected === item.id} variant="outlined" >
              <AccordionSummary onClick={() => HandleClick(item.id)} expandIcon={<ArrowDropDownIcon/>}>
                <Typography variant="h5">{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails ><Typography variant="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography></AccordionDetails>
            </Accordion>
           : <Accordion expanded={value[i]}  variant="outlined">
              <AccordionSummary onClick={() =>set(i)} expandIcon={<ArrowDropDownIcon/>}>
              <Typography variant="h5">{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails><Typography variant="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography></AccordionDetails>
            </Accordion>
             } </div>
        ))
      ) : (
        <div>No data found</div>
      )}
      </Container> </div>
  );
};

export default Accordian;
