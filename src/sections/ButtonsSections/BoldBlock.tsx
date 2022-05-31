import {Box, Button, Divider, FormControlLabel, Switch, Typography} from "@mui/material";
import {MdAddToQueue, MdChecklist} from "react-icons/md";
import React, {useState} from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export function BoldBlock() {
  const [priLoading, setPriLoading] = useState(true);

  return (
    <>
      <Box mb={16} mt={8}>

        <Typography variant="h2" gutterBottom color={'bold'}>Bold</Typography>

        <Box mb={6}>
          <FormControlLabel
            control={ <Switch checked={priLoading} onChange={() => setPriLoading(!priLoading)} name="loading" /> }
            label="Loading…"
          />
        </Box>

        <Box mb={6}>
          <Button color={'bold'} variant={'contained'}>Bold contained</Button>{' '}
          <Button color={'bold'} variant={'contained'} disabled>Bold contained disabled</Button>{' '}
          <Button color={'bold'} variant={'contained'} startIcon={<MdAddToQueue />}>Bold contained with icon before</Button>{' '}
          <Button color={'bold'} variant={'contained'} endIcon={<MdChecklist />} >Bold with icon after</Button>{' '}
          <LoadingButton color={'bold'} variant={'contained'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Box mb={6}>
          <Button color={'bold'} variant={'text'}>Bold text</Button>{' '}
          <Button color={'bold'} variant={'text'} disabled>Bold text disabled</Button>{' '}
          <Button color={'bold'} variant={'text'} startIcon={<MdAddToQueue />}>Bold text with icon before</Button>{' '}
          <Button color={'bold'} variant={'text'} endIcon={<MdChecklist />} >Bold with icon after</Button>{' '}
          <LoadingButton color={'bold'} variant={'text'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Box mb={6}>
          <Button color={'bold'} variant="outlined">Primary outlined</Button>{' '}
          <Button color={'bold'} variant={'outlined'} disabled>Primary outlined disabled</Button>{' '}
          <Button color={'bold'} variant={'outlined'} startIcon={<MdAddToQueue />}>Primary outlined with icon before</Button>{' '}
          <Button color={'bold'} variant={'outlined'} endIcon={<MdChecklist />} >Primary outlined with icon after</Button>{' '}
          <LoadingButton color={'bold'} variant={'outlined'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Divider light />

      </Box>
    </>
  );
}
