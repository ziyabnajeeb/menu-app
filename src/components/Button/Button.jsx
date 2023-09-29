import tw, { styled, css, theme } from 'twin.macro';

const Button = styled.button(({ variant, isSmall }) => [
  // The common button styles added with the tw import
  tw`transform rounded px-4 py-2 duration-300 ease-in-out`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-100)`,

  // Use props to conditionally style your components
  variant === 'primary' &&
    tw`hover:(bg-purple-900 ring-purple-900) bg-gradient-to-b from-purple-400 to-purple-500 font-bold text-white  ring-2 ring-purple-500`,

  // Combine regular css with tailwind classes within backticks
  variant === 'secondary' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-yellow-600`,
  ],

  variant === 'ghost' && [
    tw`font-bold text-amber-800 hover:bg-amber-700/90  hover:text-amber-200 hover:ring hover:ring-amber-800/70`,
  ],

  // Conditional props can be used
  isSmall ? tw`text-sm md:text-base` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.red`};
  `,
]);

export default Button;
