import tw, { css, styled } from 'twin.macro';

export const Main = styled.main(({ hasBackground }) => [
  tw`h-screen w-screen`,
  hasBackground ? tw`bg-gradient-to-br from-slate-200 to-slate-50` : tw`bg-slate-200`,
]);

export const SectionHeadingText = css`
  ${tw`mt-4 text-center text-4xl font-extrabold text-slate-600 after:mx-auto  after:block after:w-32 after:border-b-8 after:border-amber-400 after:pt-4 after:content-['']`}
`;
