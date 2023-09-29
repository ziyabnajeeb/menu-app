import { useState } from 'react';
import 'twin.macro';
import { Main, SectionHeadingText } from './AppStyles';
import { Categories, Menu } from './components';
import { Container, Grid, Section, SectionHeading } from './components/ui/UITags';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log('🚀 ~ file: App.jsx:9 ~ allCategories:', allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    setMenuItems(items.filter((item) => item.category === category));
  };
  return (
    <Main hasBackground>
      <Container>
        <Grid tw="gap-4 py-4">
          <SectionHeading tw="col-span-full px-4">
            <h1 css={SectionHeadingText}>Our Menus</h1>
          </SectionHeading>
          <Section tw="col-span-full mt-4 overflow-hidden px-4">
            <Categories categories={categories} filterItems={filterItems} />
          </Section>
          <Section tw="col-span-full mt-4 px-4">
            <Menu items={menuItems} />
          </Section>
        </Grid>
      </Container>
    </Main>
  );
};

export default App;
