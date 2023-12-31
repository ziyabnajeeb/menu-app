import 'twin.macro';
import Card from '../Card/Card';
import { Grid } from '../ui/UITags';

const Menu = ({ items }) => (
  <Grid tw="gap-8 lg:grid-cols-2">
    {items.map((menuItem) => (
      <Card key={menuItem.id} {...menuItem} />
    ))}
  </Grid>
);

export default Menu;
