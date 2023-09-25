import { Main, Section, SectionHeading, SectionHeadingText } from './AppStyles';

const App = () => (
  <Main>
    <Section tw="grid gap-4 border py-4 md:grid-cols-2">
      <SectionHeading tw="col-span-full flex flex-col items-center">
        <h1 css={SectionHeadingText}>Our Menus</h1>
      </SectionHeading>
    </Section>
  </Main>
);

export default App;
