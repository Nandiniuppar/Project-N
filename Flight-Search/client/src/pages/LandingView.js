import { Stack } from "@mui/system";
import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Paper, TextField , Button, Container, Box} from "@mui/material";


export default function LandingView (props) {


     const [travelDate, setTravelDate] = useState(new Date())
     const [returnDate, setReturnDate] = useState(new Date())



   return(
       <div>
        <Stack direction="column" justifyContent="center">
        <Container maxWidth="sm">
          <Paper elevation={6}>

          <h3>Enter Search Criteria to find Flights</h3>
            <div className="inner-search-form">
            <FormControl>
              <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  defaultValue="oneWay"
                  name="controlled-radio-buttons-group" 
              >
                 <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
                 <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
             </RadioGroup>
             </FormControl>


            <div>
             <TextField
                 //onChange={(event) => handlerFirstNameChange(event.target.value)}
                 label="From"
                 variant="outlined"
                 //helperText = {firstNameError}
             />
             &nbsp;
              <TextField
                 //onChange={(event) => handlerFirstNameChange(event.target.value)}
                 label="To"
                 variant="outlined"
                 //helperText = {firstNameError}
              />
            </div>
            <br/>
            <div>
              <Stack direction="row">
               <TextField
                 onChange={(event) => setTravelDate(event.target.value)}
                 label="Date"
                 variant="outlined"
                 type="date"
                 value={travelDate}
                 //helperText = {firstNameError}
               />
                &nbsp;
               <TextField
                 onChange={(event) => setReturnDate(event.target.value)}
                 label="Return date"
                 variant="outlined"
                 type="date"
                 value={returnDate}
                 //helperText = {firstNameError}
               />
               &nbsp;

               <TextField
                 //onChange={(event) => handlerFirstNameChange(event.target.value)}
                 label="# Travellers"
                 variant="outlined"
                 //helperText = {firstNameError}
               />
              </Stack>
            </div>
              <br/>

               <div>
                <Button size='large' variant="contained" color="success">Search</Button>
               </div>


           </div>
          </Paper>
        </Container> 

            <div>
             <Stack direction="column" justifyContent="center">
              <Container maxWidth="xl">
               <Paper elevation={6}> 
                <h3>Recommendations</h3>
                <div style={{padding :'10px'}}>  

                 <Stack direction="row" justifyContent="center" spacing={3}>                      
                    <Box
                    sx={{
                      width: 200,
                      height: 200,
                      border : 'solid 2px orange'
                    }}
                    />
                    <br/>

                    <Box
                    sx={{
                      width: 200,
                      height: 200,
                      border : 'solid 2px orange'
                    }}
                    />
                    <br/>

                    <Box
                    sx={{
                      width: 200,
                      height: 200,
                      border : 'solid 2px orange'
                    }}
                    />
                    <br/>
                    
                    <Box
                    sx={{
                      width: 200,
                      height: 200,
                      border : 'solid 2px orange'
                    }}
                    />
                 </Stack> 
                </div>
               </Paper>
              </Container>
             </Stack>
            </div>
          
        </Stack>
       </div>
   )
}