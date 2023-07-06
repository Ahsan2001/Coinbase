import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const FullPageLoader = () => {
  return (
    <Box className="loaderMainWrap">
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="success"  size={80}  />
        </Stack>
    </Box>
  )
}

export default FullPageLoader