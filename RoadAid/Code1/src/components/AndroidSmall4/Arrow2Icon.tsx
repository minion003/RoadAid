import { memo, SVGProps } from 'react';

const Arrow2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M32.0623 2.03547C32.6472 1.44879 32.6457 0.499044 32.059 -0.085851L22.4986 -9.61727C21.9119 -10.2022 20.9622 -10.2007 20.3773 -9.61404C19.7924 -9.02736 19.7938 -8.07762 20.3805 -7.49272L28.8787 0.979647L20.4063 9.47782C19.8214 10.0645 19.8229 11.0142 20.4095 11.5991C20.9962 12.184 21.946 12.1826 22.5309 11.5959L32.0623 2.03547ZM0.00231143 2.52356L31.0023 2.47642L30.9977 -0.523577L-0.00225039 -0.476439L0.00231143 2.52356Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow2Icon);
export { Memo as Arrow2Icon };
