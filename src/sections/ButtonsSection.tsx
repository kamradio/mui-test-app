import React from 'react';
import {Container, Box, Typography, Grid, Button, Divider} from '@mui/material';
import { MdAccessTimeFilled, MdCheckCircle, MdAddToQueue, MdChecklist } from 'react-icons/md';

export function ButtonsSection() {
  return (
    <Container>
      <Box px={3}>
        <Typography variant="h1" gutterBottom pb={3}>
          Buttons
        </Typography>

        <Typography variant="h4" gutterBottom pb={3}>Base</Typography>

        <Box>
          <Button color={'base'} variant={'contained'} startIcon={<MdAccessTimeFilled />}>Base contained button</Button>{' '}
          <Button color={'base'} endIcon={<MdCheckCircle />} >Base with icon</Button>{' '}
          <Button disabled={true} color={'base'} >Base disabled</Button>{' '}
          <Button color={'base'} >Base without icon</Button>{' '}
          <Button color={'base'} variant="outlined">Outlined</Button>{' '}
        </Box>

        <Box py={4}>
          <Divider />
        </Box>

        <Typography variant="h4" gutterBottom pb={3}>Primary</Typography>

        <Box mb={5}>
          <Button color={'primary'} variant={'contained'} startIcon={<MdAddToQueue />}>Primary contained button</Button>{' '}
          <Button color={'primary'} endIcon={<MdChecklist />} >Primary with icon</Button>{' '}
          <Button disabled={true} color={'primary'} >Primary disabled</Button>{' '}
          <Button color={'primary'} >Primary without icon</Button>{' '}
          <Button color={'primary'} variant="outlined">Outlined primary</Button>{' '}
        </Box>

        <Box py={4}>
          <Divider />
        </Box>

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


      </Box>
    </Container>
  );
}
