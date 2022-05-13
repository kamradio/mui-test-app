import React from 'react';
import {Container, Box, Typography, Grid, Button} from '@mui/material';
import { MdAccessTimeFilled } from 'react-icons/md';

export function ButtonsSection() {
  return (
    <Container>
      <Box px={3}>
        <Typography variant="h1" gutterBottom pb={1}>
          Buttons
        </Typography>

        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <Button startIcon={<MdAccessTimeFilled />}>Test button</Button>{' '}
            <Button startIcon={<MdAccessTimeFilled />} variant={'contained'}>Contained button</Button>{' '}
            <Button variant="outlined">Outlined</Button>{' '}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
