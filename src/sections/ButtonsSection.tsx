import React from 'react';
import {Container, Box, Typography, Button, Divider} from '@mui/material';
import { MdAddToQueue, MdChecklist } from 'react-icons/md';
import {Base, Primary} from "./ButtonsSectionBlocks";

export function ButtonsSection() {
  return (
    <Container>
      <Box px={3}>

        <Typography variant="h1" gutterBottom pb={5}>
          Buttons
        </Typography>

        <Base />
        <Primary />





        <Typography variant="h4" gutterBottom pb={3}>Secondary</Typography>

        <Box mb={5}>
          <Button color={'secondary'} variant={'contained'} startIcon={<MdAddToQueue />}>Secondary contained button</Button>{' '}
          <Button color={'secondary'} endIcon={<MdChecklist />} >Secondary with icon</Button>{' '}
          <Button disabled={true} color={'secondary'} >Secondary disabled</Button>{' '}
          <Button color={'secondary'} >Secondary without icon</Button>{' '}
          <Button color={'secondary'} variant="outlined">Outlined secondary</Button>{' '}
        </Box>

        <Box py={4}>
          <Divider />
        </Box>

        <Typography variant="h4" gutterBottom pb={3}>Success</Typography>

        <Box mb={5}>
          <Button color={'success'} variant={'contained'} startIcon={<MdAddToQueue />}>Success contained button</Button>{' '}
          <Button color={'success'} endIcon={<MdChecklist />} >Success with icon</Button>{' '}
          <Button disabled={true} color={'success'} >Success disabled</Button>{' '}
          <Button color={'success'} >Success without icon</Button>{' '}
          <Button color={'success'} variant="outlined">Outlined success</Button>{' '}
        </Box>

        <Box py={4}>
          <Divider />
        </Box>

        <Typography variant="h4" gutterBottom pb={3}>Error</Typography>

        <Box mb={5}>
          <Button color={'error'} variant={'contained'} startIcon={<MdAddToQueue />}>Error contained button</Button>{' '}
          <Button color={'error'} endIcon={<MdChecklist />} >Error with icon</Button>{' '}
          <Button disabled={true} color={'error'} >Error disabled</Button>{' '}
          <Button color={'error'} >Error without icon</Button>{' '}
          <Button color={'error'} variant="outlined">Outlined error</Button>{' '}
        </Box>

        <Box py={4}>
          <Divider />
        </Box>

        <Typography variant="h4" gutterBottom pb={3}>Bold</Typography>

        <Box mb={5}>
          <Button color={'bold'} variant={'contained'} startIcon={<MdAddToQueue />}>Error contained button</Button>{' '}
          <Button color={'bold'} endIcon={<MdChecklist />} >Error with icon</Button>{' '}
          <Button disabled={true} color={'bold'} >Error disabled</Button>{' '}
          <Button color={'bold'} >Error without icon</Button>{' '}
          <Button color={'bold'} variant="outlined">Outlined error</Button>{' '}
        </Box>

      </Box>
    </Container>
  );
}
