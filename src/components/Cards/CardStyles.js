import tw, { styled } from 'twin.macro';

export const Main = tw.main`container mx-auto mt-4 flex h-screen items-center justify-center p-8`;
export const Section = tw.section`grid w-full grid-cols-8 place-items-center gap-3 text-center`;
export const Heading = tw.h1`w-full text-center font-bold text-4xl text-purple-900`;
export const Card = styled.div(({ variant }) => [
  tw`col-span-full flex min-h-min w-full flex-col items-center justify-center rounded-lg border-2 bg-white/70 p-12 shadow-xl ring-1 ring-purple-100 md:w-[36rem]`,
  variant === 'big' && tw`w-full md:w-[40rem]`,
]);
export const CardHeader = tw.div`relative flex rounded-full shadow-lg`;
export const CardImage = tw.img`relative z-10 inline-block h-36 w-36 rounded-full object-cover ring-2 ring-purple-200`;
export const CardImageShadow = tw.div`absolute inline-block h-40 w-40 rounded-full bg-purple-900/30 ring-2 ring-purple-900/30 -right-[14px] -top-[14px]`;
export const CardBody = tw.div``;
export const CardName = tw.div`flex flex-col items-center justify-center py-5`;
export const CardNameText = tw.p`font-bold text-xl text-purple-800 capitalize`;
export const CardNameDesignation = tw.span`text-xs text-slate-700 uppercase italic`;
export const CardContent = tw.div`py-5 text-slate-700`;
export const CardContentText = tw.p``;
export const CardFooter = tw.div``;
export const CardAction = tw.div`pt-5`;
export const CardButton = tw.button`rounded-lg bg-gradient-to-b from-purple-400 to-purple-500 px-8 py-5 font-bold text-white ring-2 ring-purple-200 hover:(bg-purple-900 ring-2 ring-purple-400)`;
