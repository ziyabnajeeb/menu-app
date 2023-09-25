import tw, { css, styled } from 'twin.macro';

export const Main = styled.main(({ hasBackground }) => [
  tw`flex h-screen w-screen flex-col px-6`,
  hasBackground ? tw`bg-gradient-to-br from-slate-200 to-slate-50` : tw`bg-slate-200`,
]);
export const Section = tw.section`container mx-auto`;
export const SectionHeading = tw.div``;
export const SectionHeadingText = css`
  ${tw`mb-2 px-4 text-center font-extrabold text-4xl text-slate-600 after:(mx-auto block w-32 border-amber-400 border-b-8 pt-5 text-center content-[''])`}
`;
