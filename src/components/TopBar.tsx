import { Button, Grid } from "@chakra-ui/react";
function TopBar() {
  return (
    <Grid pt={2} templateColumns="1fr" columnGap="3">
      <Button>Load</Button>
    </Grid>
  );
}

export default TopBar;
