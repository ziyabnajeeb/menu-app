import tw, { styled } from 'twin.macro';

export const CardWrapper = styled.div(({ variant }) => [
  tw`flex min-h-min w-full flex-col rounded-lg bg-gray-100 shadow-xl ring-1 ring-amber-300 md:h-[16rem] md:flex-row`,
  variant === 'big' && tw`w-full md:w-[40rem]`,
]);
export const CardHeader = tw.div`relative flex h-80 w-full shadow-lg md:h-full md:w-1/2 md:shadow-none`;
export const CardImage = tw.img`inline-block aspect-square w-full rounded-t-lg md:aspect-video md:rounded-bl-lg md:rounded-tl-lg md:rounded-tr-none`;
export const CardBody = tw.div`px-8 py-3 md:w-1/2`;
export const CardName = tw.div`flex items-center justify-between py-5`;
export const CardNameText = tw.p`text-xl font-bold capitalize text-amber-800`;
export const CardPrice = tw.span`font-bold uppercase text-slate-700`;
export const CardContent = tw.div`py-5 text-slate-700`;
export const CardContentText = tw.p`overflow-hidden text-clip `;
