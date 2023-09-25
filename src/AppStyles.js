import tw, { styled } from 'twin.macro';

export const Main = styled.main(({ hasBackground }) => [
  tw`flex flex-col items-center justify-center w-screen h-screen px-6`,
  hasBackground ? tw`bg-gradient-to-br from-slate-200 to-slate-50` : tw`bg-slate-200`,
]);

export const Section = tw.section`container bg-white md:w-3/5 lg:w-[65%] rounded-lg`;
export const SectionHeading = tw.div``;
