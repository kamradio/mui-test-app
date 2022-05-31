import {Box, Button, Divider, FormControlLabel, Switch, Typography} from "@mui/material";
import {MdAddToQueue, MdChecklist} from "react-icons/md";
import React, {useState} from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export function SuccessBlock() {

  const [priLoading, setPriLoading] = useState(true);

  return (
    <>
      <Box mb={16} mt={8}>

        <Typography variant="h2" gutterBottom color={'success'}>Success</Typography>

        <Box mb={6}>
          <FormControlLabel
            control={ <Switch checked={priLoading} onChange={() => setPriLoading(!priLoading)} name="loading" /> }
            label="Loading…"
          />
        </Box>

        <Box mb={6}>
          <Button color={'success'} variant={'contained'}>Success contained</Button>{' '}
          <Button color={'success'} variant={'contained'} disabled>Success contained disabled</Button>{' '}
          <Button color={'success'} variant={'contained'} startIcon={<MdAddToQueue />}>Success contained with icon before</Button>{' '}
          <Button color={'success'} variant={'contained'} endIcon={<MdChecklist />} >Success with icon after</Button>{' '}
          <LoadingButton color={'success'} variant={'contained'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Box mb={6}>
          <Button color={'success'} variant={'text'}>Success text</Button>{' '}
          <Button color={'success'} variant={'text'} disabled>Success text disabled</Button>{' '}
          <Button color={'success'} variant={'text'} startIcon={<MdAddToQueue />}>Success text with icon before</Button>{' '}
          <Button color={'success'} variant={'text'} endIcon={<MdChecklist />} >Success with icon after</Button>{' '}
          <LoadingButton color={'success'} variant={'text'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Box mb={6}>
          <Button color={'success'} variant="outlined">Primary outlined</Button>{' '}
          <Button color={'success'} variant={'outlined'} disabled>Primary outlined disabled</Button>{' '}
          <Button color={'success'} variant={'outlined'} startIcon={<MdAddToQueue />}>Primary outlined with icon before</Button>{' '}
          <Button color={'success'} variant={'outlined'} endIcon={<MdChecklist />} >Primary outlined with icon after</Button>{' '}
          <LoadingButton color={'success'} variant={'outlined'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Divider light />

      </Box>
    </>
  );
}
