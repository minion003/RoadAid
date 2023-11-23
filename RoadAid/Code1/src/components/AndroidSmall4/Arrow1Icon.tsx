import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M29.0607 1.06066C29.6464 0.474874 29.6464 -0.474874 29.0607 -1.06066L19.5147 -10.6066C18.9289 -11.1924 17.9792 -11.1924 17.3934 -10.6066C16.8076 -10.0208 16.8076 -9.07107 17.3934 -8.48528L25.8787 1.78614e-07L17.3934 8.48528C16.8076 9.07107 16.8076 10.0208 17.3934 10.6066C17.9792 11.1924 18.9289 11.1924 19.5147 10.6066L29.0607 1.06066ZM-1.03529e-08 1.5L28 1.5L28 -1.5L1.03529e-08 -1.5L-1.03529e-08 1.5Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
