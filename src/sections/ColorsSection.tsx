import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Typography, Box, Container, Stack, Grid, Paper} from '@mui/material';
import {grey} from '../theme/palette-blocks';

export function ColorsSection() {

  const Item = styled(Paper)(({ theme }: any) => ({
    backgroundColor: theme.palette.grey["50"],
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: theme.shadows[0]
  }));


  return (
    <Container>
      <Box px={3}>


        <Typography variant="h1" gutterBottom pb={1}>
          Colors
        </Typography>

        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>

            <Typography variant="h3" gutterBottom pb={5}>
              Greys
            </Typography>

            <Stack direction="column" spacing={2}>
              { Object.keys(grey).map((value, i) =>
                <Stack key={i} direction="row" spacing={4} alignItems={'center'}>
                  <Box height={48} width={48} borderRadius={1} bgcolor={ grey[value] }/>
                  <Typography variant={'body1'}>Grey {value}</Typography>
                </Stack>
              )}
            </Stack>

          </Grid>

          <Grid item md={6} sm={12}>

            <Typography variant="h3" gutterBottom pb={5}>
              Semantic
            </Typography>

            <Item>
              2nd col
            </Item>

          </Grid>

        </Grid>
      </Box>
    </Container>
  );
}
