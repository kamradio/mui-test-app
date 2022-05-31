import React, {useState} from "react";

import {Box, Button, Divider, Typography, Switch, FormControlLabel} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {MdAddToQueue, MdChecklist} from "react-icons/md";

export function PrimaryBlock() {

  const [priLoading, setPriLoading] = useState(true);

  return (
    <Box mb={16} mt={8}>

      <Typography variant="h2" gutterBottom color={'primary'}>Primary</Typography>

      <Box mb={6}>
        <FormControlLabel
          control={ <Switch checked={priLoading} onChange={() => setPriLoading(!priLoading)} name="loading" /> }
          label="Loading…"
        />
      </Box>

      <Box mb={6}>
        <Button color={'primary'} variant={'contained'}>Primary contained</Button>{' '}
        <Button color={'primary'} variant={'contained'} disabled>Primary contained disabled</Button>{' '}
        <Button color={'primary'} variant={'contained'} startIcon={<MdAddToQueue />}>Primary contained with icon before</Button>{' '}
        <Button color={'primary'} variant={'contained'} endIcon={<MdChecklist />} >Primary with icon after</Button>{' '}
        <LoadingButton color={'primary'} variant={'contained'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
      </Box>

      <Box mb={6}>
        <Button color={'primary'} variant={'text'}>Primary text</Button>{' '}
        <Button color={'primary'} variant={'text'} disabled>Primary text disabled</Button>{' '}
        <Button color={'primary'} variant={'text'} startIcon={<MdAddToQueue />}>Primary text with icon before</Button>{' '}
        <Button color={'primary'} variant={'text'} endIcon={<MdChecklist />} >Primary with icon after</Button>{' '}
        <LoadingButton color={'primary'} variant={'text'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
      </Box>

      <Box mb={6}>
        <Button color={'primary'} variant="outlined">Primary outlined</Button>{' '}
        <Button color={'primary'} variant={'outlined'} disabled>Primary outlined disabled</Button>{' '}
        <Button color={'primary'} variant={'outlined'} startIcon={<MdAddToQueue />}>Primary outlined with icon before</Button>{' '}
        <Button color={'primary'} variant={'outlined'} endIcon={<MdChecklist />} >Primary outlined with icon after</Button>{' '}
        <LoadingButton color={'primary'} variant={'outlined'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
      </Box>

      <Divider light />

    </Box>
  );
}
