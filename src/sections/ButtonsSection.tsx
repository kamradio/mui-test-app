import React, {useState} from 'react';
import {Container, Box, Typography, Divider} from '@mui/material';
import {BaseBlock, PrimaryBlock, SecondaryBlock, SuccessBlock, ErrorBlock, BoldBlock, SizesBlock} from "./ButtonsSections";

export function ButtonsSection() {

  return (
    <Container>
      <Box px={3} pt={16}>

        <Typography variant="h1" gutterBottom>
          Buttons
        </Typography>

        <Divider/>

        <PrimaryBlock />
        <SecondaryBlock />
        <SuccessBlock />
        <ErrorBlock />
        <BoldBlock />
        <BaseBlock />

        <SizesBlock />


      </Box>
    </Container>
  );
}
