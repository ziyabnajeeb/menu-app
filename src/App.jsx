import 'twin.macro';
import { Main, SectionHeadingText } from './AppStyles';
import { Categories, Menu } from './components';
import { Container, Grid, Section, SectionHeading } from './components/ui/UITags';

const App = () => (
  <Main>
    <Container>
      <Grid tw="gap-4 border py-4">
        <SectionHeading tw="col-span-full px-4">
          <h1 css={SectionHeadingText}>Our Menus</h1>
        </SectionHeading>
        <Section tw="col-span-full mt-4 overflow-hidden px-4">
          <Categories />
        </Section>
        <Section tw="col-span-full mt-4 px-4">
          <Menu />
        </Section>
      </Grid>
    </Container>
  </Main>
);

export default App;
