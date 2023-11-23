import { memo, SVGProps } from 'react';

const Arrow3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 37 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-0.077328 -0.378199C-0.657331 0.213314 -0.648001 1.16302 -0.0564878 1.74302L9.58277 11.1947C10.1743 11.7747 11.124 11.7654 11.704 11.1739C12.284 10.5824 12.2747 9.63266 11.6832 9.05266L3.11492 0.651149L11.5164 -7.91708C12.0964 -8.5086 12.0871 -9.4583 11.4956 -10.0383C10.9041 -10.6183 9.95437 -10.609 9.37437 -10.0175L-0.077328 -0.378199ZM35.9916 -1.17192L0.978965 -0.827938L1.00844 2.17192L36.021 1.82793L35.9916 -1.17192Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow3Icon);
export { Memo as Arrow3Icon };
