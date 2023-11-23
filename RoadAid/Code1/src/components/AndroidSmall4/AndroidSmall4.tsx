import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AndroidSmall4.module.css';
import { Arrow1Icon } from './Arrow1Icon.js';
import { Arrow2Icon } from './Arrow2Icon.js';
import { Arrow3Icon } from './Arrow3Icon.js';
import { Arrow4Icon } from './Arrow4Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 7:118 */
export const AndroidSmall4: FC<Props> = memo(function AndroidSmall4(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.kisspngScrewdriverComputerClip}></div>
      <div className={classes._21Engineering1}></div>
      <div className={classes.pngfind1}></div>
      <div className={classes.roadAid}>RoadAid</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.arrow1}>
        <Arrow1Icon className={classes.icon} />
      </div>
      <div className={classes.arrow2}>
        <Arrow2Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle9}></div>
      <div className={classes.welcome}>Welcome</div>
      <div className={classes.userLogin}>User Login</div>
      <div className={classes.mechanicLogin}>Mechanic Login</div>
      <div className={classes.arrow3}>
        <Arrow3Icon className={classes.icon3} />
      </div>
      <div className={classes.arrow4}>
        <Arrow4Icon className={classes.icon4} />
      </div>
    </div>
  );
});
