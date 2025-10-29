import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function ColorToggleButton() {
  const [alignment, setAlignment]=React.useState('Today');

  const handleChange=(
    event : React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  )=>{
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Today</ToggleButton>
      <ToggleButton value="android">Pending</ToggleButton>
      <ToggleButton value="ios">Overdue</ToggleButton>
      <ToggleButton value="ios">Completed</ToggleButton>
    </ToggleButtonGroup>
  );
}
export default  ColorToggleButton