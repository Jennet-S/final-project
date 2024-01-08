import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function AddButton(prop) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{prop}</Button>
    </Stack>
  );
}
export default AddButton;