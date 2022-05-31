import React, {useState} from "react";
import {Box, Button, Divider, FormControlLabel, Switch, Typography} from "@mui/material";
import {MdAddToQueue, MdChecklist} from "react-icons/md";
import LoadingButton from "@mui/lab/LoadingButton";

export function SecondaryBlock() {

  const [priLoading, setPriLoading] = useState(true);

  return (
    <>
      <Box mb={16} mt={8}>

        <Typography variant="h2" gutterBottom color={'secondary'}>Secondary</Typography>

        <Box mb={6}>
          <FormControlLabel
            control={ <Switch checked={priLoading} onChange={() => setPriLoading(!priLoading)} name="loading" /> }
            label="Loading…"
          />
        </Box>

        <Box mb={6}>
          <Button color={'secondary'} variant={'contained'}>Secondary contained</Button>{' '}
          <Button color={'secondary'} variant={'contained'} disabled>Secondary contained disabled</Button>{' '}
          <Button color={'secondary'} variant={'contained'} startIcon={<MdAddToQueue />}>Secondary contained with icon before</Button>{' '}
          <Button color={'secondary'} variant={'contained'} endIcon={<MdChecklist />} >Secondary with icon after</Button>{' '}
          <LoadingButton color={'secondary'} variant={'contained'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Box mb={6}>
          <Button color={'secondary'} variant={'text'}>Secondary text</Button>{' '}
          <Button color={'secondary'} variant={'text'} disabled>Secondary text disabled</Button>{' '}
          <Button color={'secondary'} variant={'text'} startIcon={<MdAddToQueue />}>Secondary text with icon before</Button>{' '}
          <Button color={'secondary'} variant={'text'} endIcon={<MdChecklist />} >Secondary with icon after</Button>{' '}
          <LoadingButton color={'secondary'} variant={'text'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Box mb={6}>
          <Button color={'secondary'} variant="outlined">Primary outlined</Button>{' '}
          <Button color={'secondary'} variant={'outlined'} disabled>Primary outlined disabled</Button>{' '}
          <Button color={'secondary'} variant={'outlined'} startIcon={<MdAddToQueue />}>Primary outlined with icon before</Button>{' '}
          <Button color={'secondary'} variant={'outlined'} endIcon={<MdChecklist />} >Primary outlined with icon after</Button>{' '}
          <LoadingButton color={'secondary'} variant={'outlined'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Divider light />

      </Box>
    </>
  )
}
