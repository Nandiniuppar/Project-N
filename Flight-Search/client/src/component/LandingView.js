import { Stack } from "@mui/system";
import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Paper } from "@mui/material";


export default function LandingView (props) {


   return(
       <div>
          <Stack direction="column" justifyContent="center">
          <Paper elevation={6}>
            <div className="ineer-search-form">
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
            </div>
          </Paper>
            <div>recomendations </div>
          
          </Stack>

       </div>
   )
}