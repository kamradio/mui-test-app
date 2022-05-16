import {Box, Button, Divider, Typography} from "@mui/material";
import {MdAddToQueue, MdChecklist} from "react-icons/md";
import React from "react";

export function Primary() {
  return (
    <Box mb={8}>

      <Typography variant="h4" gutterBottom pb={3}>Primary</Typography>

      <Box mb={5}>
        <Button color={'primary'} variant={'contained'} startIcon={<MdAddToQueue />}>Primary contained button</Button>{' '}
        <Button disabled={true} color={'primary'} variant={'contained'} >Primary contained button</Button>{' '}
        <Button color={'primary'} endIcon={<MdChecklist />} >Primary with icon</Button>{' '}
        <Button disabled={true} color={'primary'} >Primary disabled</Button>{' '}
        <Button color={'primary'} >Primary without icon</Button>{' '}
        <Button color={'primary'} variant="outlined">Outlined primary</Button>{' '}
      </Box>

      <Divider />

    </Box>
  );
}
