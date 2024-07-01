import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MUIButton = () => {
  const [formats, setFormats] = useState([]);
  const handleFormatChange = (_event, updatedFormats) => {
    setFormats(updatedFormats);
  };
  console.log(formats);
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={'row'}>
        <Button variant='text' href='https://www.google.com/'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
        <Button variant='contained' color='success'>
          Success
        </Button>
      </Stack>
      <Stack
        spacing={2}
        direction={'row'}
        // display={'block'}
        alignItems={'left'}
      >
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button
          variant='contained'
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert('test')}
        >
          Send
        </Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label='send' color='success' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction={'row'}>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          size='small'
          color='secondary'
          aria-label='btn group'
        >
          <Button
            onClick={() => {
              alert('Left');
            }}
          >
            Left
          </Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={'row'}>
        <ToggleButtonGroup
          aria-label='text formatting'
          value={formats}
          onChange={handleFormatChange}
          size='small'
          color='success'
          //   orientation='vertical'
          exclusive
        >
          <ToggleButton value={'bold'} aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={'italic'} aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={'underlined'} aria-label='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MUIButton;
