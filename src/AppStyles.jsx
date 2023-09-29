import tw, { css, styled } from 'twin.macro';

export const Main = styled.main(({ hasBackground }) => [
  tw`h-full w-full pb-56`,
  hasBackground ? tw`bg-gradient-to-br from-rose-100 to-teal-100` : tw`bg-slate-200`,
]);
export const SectionHeadingText = css`
  ${tw`mt-4 text-center text-4xl font-extrabold text-amber-700 after:mx-auto after:block after:w-32  after:border-b-8 after:border-amber-500 after:pt-4 after:content-[''] md:text-5xl lg:text-6xl`}
`;
