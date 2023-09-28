import 'twin.macro';
import Card from '../Card/Card';
import { Grid } from '../ui/UITags';

const Menu = () => (
  <Grid tw="gap-8 lg:grid-cols-2">
    <Card />
    <Card />
    <Card />
    <Card />
  </Grid>
);

export default Menu;
