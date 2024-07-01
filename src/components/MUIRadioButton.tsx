import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { useState } from 'react';

const MUIRadioButton = () => {
  const [value, setValue] = useState('');
  console.log({ value });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl error>
        <FormLabel id='job-experience-group-label'>
          Years of Experience
        </FormLabel>
        <RadioGroup
          name='job-experience-group'
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio />} label='0-2' value={'0-2'} />
          <FormControlLabel control={<Radio />} label='3-5' value={'3-5'} />
          <FormControlLabel control={<Radio />} label='6-10' value={'6-10'} />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MUIRadioButton;
