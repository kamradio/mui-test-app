import React, {useState} from "react";
import {Box, Button, Typography, Divider, Stack} from "@mui/material";
import {MdAccountBalanceWallet, MdLastPage, MdFullscreenExit, MdChevronRight, MdAdd} from "react-icons/md";
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

export function Base() {

  const [isLoading, setIsLoading] = useState(false);

  const temporaryLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <Box mb={8}>

      <Typography variant="h4" gutterBottom mb={5}>Base</Typography>

      <Wrapper>
        <Button color={'base'} variant={'contained'} startIcon={<MdLastPage />}>Base contained button with icon</Button>
        <LoadingButton loading={isLoading} color={'base'} variant={'contained'} onClick={temporaryLoading} >Load more</LoadingButton>
        <Button disabled={true} startIcon={<MdFullscreenExit />} color={'base'} variant={'contained'} >Base contained disabled</Button>
      </Wrapper>

      <Wrapper>
        <Button color={'base'} endIcon={<MdChevronRight />} >Base with icon</Button>
        <Button disabled={true} color={'base'} >Base disabled</Button>
        <Button color={'base'} >Base without icon</Button>
      </Wrapper>

      <Wrapper>
        <Button color={'base'} variant="outlined">Outlined</Button>
        <Button disabled={true} color={'base'} variant="outlined" startIcon={<MdAccountBalanceWallet />}>Outlined disabled</Button>
      </Wrapper>

      <Wrapper>
        <Button startIcon={<MdAdd />} color={'base'} variant={'contained'} fullWidth={true}>Full width button</Button>
      </Wrapper>

      <Divider />

    </Box>
  );
}
