import {Box, Button, Divider, FormControlLabel, Switch, Typography} from "@mui/material";
import {MdAddToQueue, MdChecklist} from "react-icons/md";
import React, {useState} from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export function ErrorBlock() {
  const [priLoading, setPriLoading] = useState(true);

  return (
    <>
      <Box mb={16} mt={8}>

        <Typography variant="h2" gutterBottom color={'error'}>Error</Typography>

        <Box mb={6}>
          <FormControlLabel
            control={ <Switch checked={priLoading} onChange={() => setPriLoading(!priLoading)} name="loading" /> }
            label="Loading…"
          />
        </Box>

        <Box mb={6}>
          <Button color={'error'} variant={'contained'}>Error contained</Button>{' '}
          <Button color={'error'} variant={'contained'} disabled>Error contained disabled</Button>{' '}
          <Button color={'error'} variant={'contained'} startIcon={<MdAddToQueue />}>Error contained with icon before</Button>{' '}
          <Button color={'error'} variant={'contained'} endIcon={<MdChecklist />} >Error with icon after</Button>{' '}
          <LoadingButton color={'error'} variant={'contained'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Box mb={6}>
          <Button color={'error'} variant={'text'}>Error text</Button>{' '}
          <Button color={'error'} variant={'text'} disabled>Error text disabled</Button>{' '}
          <Button color={'error'} variant={'text'} startIcon={<MdAddToQueue />}>Error text with icon before</Button>{' '}
          <Button color={'error'} variant={'text'} endIcon={<MdChecklist />} >Error with icon after</Button>{' '}
          <LoadingButton color={'error'} variant={'text'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Box mb={6}>
          <Button color={'error'} variant="outlined">Primary outlined</Button>{' '}
          <Button color={'error'} variant={'outlined'} disabled>Primary outlined disabled</Button>{' '}
          <Button color={'error'} variant={'outlined'} startIcon={<MdAddToQueue />}>Primary outlined with icon before</Button>{' '}
          <Button color={'error'} variant={'outlined'} endIcon={<MdChecklist />} >Primary outlined with icon after</Button>{' '}
          <LoadingButton color={'error'} variant={'outlined'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Divider light />

      </Box>
    </>
  );
}
