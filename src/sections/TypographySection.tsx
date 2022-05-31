import * as React from 'react';
import {Box, Divider, Container, Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import { MdSwapHorizontalCircle } from 'react-icons/md';

export function TypographySection() {
  return (
    <Container>
      <Box px={3}>

        <Divider textAlign="left" sx={{fontSize: '0.75rem'}}>Page title (H1)</Divider>

        <Box py={5}>

          <Typography variant="h1" gutterBottom>

            <Stack direction={'row'} spacing={3} component={'span'}>
              <Box component={'span'}>Heading main in the page</Box>
              <Box component={'span'} lineHeight={0} flexGrow={1}>
                <MdSwapHorizontalCircle />
              </Box>
            </Stack>

          </Typography>


          <Typography variant="caption1" gutterBottom>
            This is the nice caption
          </Typography>
        </Box>

        <Divider textAlign="left" sx={{fontSize: '0.75rem'}}>Subtitle 2 and modal dialog title</Divider>

        <Box py={5}>
          <Typography variant="h2" gutterBottom>
            This is the subtitle h2
            <MdSwapHorizontalCircle />
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus volutpat at nam feugiat in quam convallis massa. Euismod eget diam ut ullamcorper ultricies scelerisque sed. Et egestas at posuere sagittis vulputate. Ultricies vitae fringilla viverra orci, quis feugiat commodo dictum.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Donec elit quam tempus accumsan sit felis gravida ipsum tincidunt. Mus mattis porttitor sit lectus euismod non. Risus id tellus ullamcorper in fringilla. Eu enim morbi viverra consequat, id nisl, ut pulvinar ipsum. Consequat enim a aliquam a molestie nulla. Mattis vel consectetur sit morbi. Consectetur facilisis eget facilisis ut sapien cursus sem. Morbi nec, facilisis mauris varius pellentesque molestie viverra turpis hendrerit. Tincidunt dui, dui ut leo nascetur elit. Rhoncus sapien mauris, nisi ipsum in lacus quam. Donec praesent leo malesuada a nullam dignissim hendrerit.
            Vitae, cum ullamcorper nulla feugiat quam feugiat viverra suscipit. Sociis rhoncus sagittis, tincidunt arcu dui at. Diam tristique laoreet neque et ut est morbi lobortis. Vestibulum sem netus lectus vulputate placerat mus volutpat. Id quis consequat dolor ipsum, amet, quisque nisi eleifend. Tempor rhoncus purus, amet arcu sit consequat suspendisse. Dui est dictum at morbi porttitor magna donec ac.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Accumsan dolor platea vel, faucibus turpis ut mi tellus urna. Ultrices diam fusce felis ut diam. Enim, vitae nunc, tempus tortor, in erat imperdiet id consequat. Justo risus integer purus purus pharetra, gravida quam eget tortor. Porttitor commodo consequat augue sit. Accumsan lacus sed est porttitor ultrices congue at risus lorem. Orci, vivamus vitae at maecenas tristique donec morbi egestas.
          </Typography>
        </Box>

        <Divider textAlign="left" sx={{fontSize: '0.75rem'}} light >Subtitle 3</Divider>

        <Box py={5}>
          <Typography variant={'h3'} gutterBottom>
            h3. Subtitle
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus volutpat at nam feugiat in quam convallis massa. Euismod eget diam ut ullamcorper ultricies scelerisque sed. Et egestas at posuere sagittis vulputate. Ultricies vitae fringilla viverra orci, quis feugiat commodo dictum.
          </Typography>
        </Box>

        <Divider textAlign="left" sx={{fontSize: '0.75rem'}} light >Subtitle 4</Divider>

        <Box py={5}>
          <Typography variant={'h4'} gutterBottom>
            h4. Subtitle
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus volutpat at nam feugiat in quam convallis massa. Euismod eget diam ut ullamcorper ultricies scelerisque sed. Et egestas at posuere sagittis vulputate. Ultricies vitae fringilla viverra orci, quis feugiat commodo dictum.
          </Typography>
        </Box>

        <Divider textAlign="left" sx={{fontSize: '0.75rem'}} light >Text blocks 1.</Divider>

        <Box py={5}>
          <Typography variant="subtitle1" gutterBottom>
            This is the subtitle 1
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus volutpat at nam feugiat in quam convallis massa. Euismod eget diam ut ullamcorper ultricies scelerisque sed. Et egestas at posuere sagittis vulputate. Ultricies vitae fringilla viverra orci, quis feugiat commodo dictum.
          </Typography>
        </Box>

        <Divider textAlign="left" sx={{fontSize: '0.75rem'}} light >Text blocks 2.</Divider>

        <Box py={5}>
          <Typography variant="subtitle2" gutterBottom>
            This is the subtitle 2
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus volutpat at nam feugiat in quam convallis massa. Euismod eget diam ut ullamcorper ultricies scelerisque sed. Et egestas at posuere sagittis vulputate. Ultricies vitae fringilla viverra orci, quis feugiat commodo dictum.
          </Typography>
        </Box>

      </Box>
    </Container>
  );
}
