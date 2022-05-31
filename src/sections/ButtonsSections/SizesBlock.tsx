import React from "react";
import {Box, Button, Divider, Typography} from "@mui/material";
import {MdAddToQueue} from "react-icons/md";

export function SizesBlock() {
  return (
    <>
      <Typography variant="h4" gutterBottom pb={3}>Sizes</Typography>

      <Box mb={5}>
        <Button size={'small'} color={'secondary'} variant={'contained'} startIcon={<MdAddToQueue />}>Small</Button>{' '}
        <Button size={'medium'} color={'secondary'} variant={'contained'} startIcon={<MdAddToQueue />}>Medium</Button>{' '}
        <Button size={'large'} color={'secondary'} variant={'contained'} startIcon={<MdAddToQueue />}>Large</Button>{' '}
      </Box>

      <Divider light />
    </>
  )
}
