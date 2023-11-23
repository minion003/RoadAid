import { memo, SVGProps } from 'react';

const Arrow4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 35 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M-1.07181 -0.679169C-1.65137 -0.087219 -1.64133 0.862475 -1.04938 1.44203L8.597 10.8865C9.18895 11.466 10.1386 11.456 10.7182 10.864C11.2978 10.2721 11.2877 9.32239 10.6958 8.74283L2.12121 0.347775L10.5163 -8.22679C11.0958 -8.81873 11.0858 -9.76843 10.4938 -10.348C9.90187 -10.9275 8.95218 -10.9175 8.37262 -10.3255L-1.07181 -0.679169ZM34.9822 -1.49992L-0.0158599 -1.1297L0.0158726 1.87013L35.0139 1.49992L34.9822 -1.49992Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow4Icon);
export { Memo as Arrow4Icon };
