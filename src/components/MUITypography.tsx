import { Typography } from '@mui/material';
import React from 'react';

const MUITypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' component={'h1'} gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus
        alias, veniam laudantium eius ullam dolore veritatis neque fuga sequi
        numquam eum vitae aspernatur vel quidem autem et officia optio.
      </Typography>
      <Typography variant='body2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed
        officiis neque! Ratione accusamus deleniti modi quas repudiandae libero
        debitis quos laboriosam accusantium. Possimus, doloribus sunt veritatis
        non corporis quia?
      </Typography>
    </div>
  );
};

export default MUITypography;
