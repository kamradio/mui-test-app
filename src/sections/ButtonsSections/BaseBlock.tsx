import React, {useState} from "react";
import {Box, Button, Typography, Divider, Stack, FormControlLabel, Switch} from "@mui/material";
import {
  MdAccountBalanceWallet,
  MdLastPage,
  MdFullscreenExit,
  MdChevronRight,
  MdAdd,
  MdAddToQueue, MdChecklist
} from "react-icons/md";
import LoadingButton from "@mui/lab/LoadingButton";

interface IWrapperProps {
  children: any;
}

export const Wrapper: React.FC<IWrapperProps> = ({children}) => {
  return (
    <Stack direction={'row'} flexWrap={'wrap'} rowGap={2} columnGap={2} mb={4}>
      {children}
    </Stack>
  );
}

export function BaseBlock() {
  const [priLoading, setPriLoading] = useState(true);

  return (
    <>
      <Box mb={16} mt={8}>

        <Typography variant="h2" gutterBottom color={'base'}>Base</Typography>

        <Box mb={6}>
          <FormControlLabel
            control={ <Switch checked={priLoading} onChange={() => setPriLoading(!priLoading)} name="loading" /> }
            label="Loading…"
          />
        </Box>

        <Box mb={6}>
          <Button color={'base'} variant={'contained'}>Base contained</Button>{' '}
          <Button color={'base'} variant={'contained'} disabled>Base contained disabled</Button>{' '}
          <Button color={'base'} variant={'contained'} startIcon={<MdAddToQueue />}>Base contained with icon before</Button>{' '}
          <Button color={'base'} variant={'contained'} endIcon={<MdChecklist />} >Base with icon after</Button>{' '}
          <LoadingButton color={'base'} variant={'contained'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Box mb={6}>
          <Button color={'base'} variant={'text'}>Base text</Button>{' '}
          <Button color={'base'} variant={'text'} disabled>Base text disabled</Button>{' '}
          <Button color={'base'} variant={'text'} startIcon={<MdAddToQueue />}>Base text with icon before</Button>{' '}
          <Button color={'base'} variant={'text'} endIcon={<MdChecklist />} >Base with icon after</Button>{' '}
          <LoadingButton color={'base'} variant={'text'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Box mb={6}>
          <Button color={'base'} variant="outlined">Primary outlined</Button>{' '}
          <Button color={'base'} variant={'outlined'} disabled>Primary outlined disabled</Button>{' '}
          <Button color={'base'} variant={'outlined'} startIcon={<MdAddToQueue />}>Primary outlined with icon before</Button>{' '}
          <Button color={'base'} variant={'outlined'} endIcon={<MdChecklist />} >Primary outlined with icon after</Button>{' '}
          <LoadingButton color={'base'} variant={'outlined'} loading={priLoading} onClick={() => setPriLoading(!priLoading)}>Loading</LoadingButton>{' '}
        </Box>

        <Divider light />

      </Box>
    </>
  );
}
