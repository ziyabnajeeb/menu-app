import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro';
import { Global } from '@emotion/react';

const purple = theme`colors.purple.500`;

const customStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;800&display=swap');

  html {
    height: 100%;
    font-family: 'Raleway', sans-serif;
  }

  .box {
    height: 6rem;
    line-height: 6rem;
    text-align: center;
    background-color: #5eead4;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    font-family: 'Raleway', sans-serif;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Raleway', sans-serif;
    }
  }

  body {
    height: 100%;
    -webkit-tap-highlight-color: ${purple};
    ${tw`antialiased`}
  }

  [multiple],
  [type='date'],
  [type='datetime-local'],
  [type='email'],
  [type='tel'],
  [type='text'],
  [type='time'],
  [type='url'],
  [type='week'],
  [type='month'],
  [type='number'],
  [type='password'],
  [type='search'],
  select,
  textarea {
    ${tw`appearance-none`}
    ${tw`bg-white`}
    ${tw`border-gray-600`}
    ${tw`border-solid`}
    ${tw`border`}
    ${tw`p-2`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
