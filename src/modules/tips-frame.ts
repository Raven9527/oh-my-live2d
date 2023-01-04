import { getTipsConfig } from '../utils/index';
import { setElStyle } from './style';
import type { OhMyLive2D } from './setup';

let tipsTimer: any = 0;
let tipsPriority = 0;

const showTipsFrameMessage = function (this: OhMyLive2D, message: string, showTime: number, priority: number) {
  if (tipsPriority > priority) return;
  return new Promise<void>((resolve) => {
    tipsPriority = priority;
    clearTimeout(tipsTimer);
    tipsTimer = setTimeout(() => {
      setElStyle(this.wrapperContentEls.tooltipEl, {
        animationName: 'oml-hidden-tooltip,oml-shake-tooltip'
      });
      tipsPriority = 0;
      resolve();
    }, showTime);

    this.wrapperContentEls.tooltipEl!.innerHTML = message;
    setElStyle(this.wrapperContentEls.tooltipEl, {
      animationName: 'oml-display-tooltip,oml-shake-tooltip',
      animationDuration: '1000ms,1000ms',
      animationFillMode: 'forwards, none',
      animationIterationCount: '1, infinite'
    });
  });
};

const playIdleTips = async function (this: OhMyLive2D) {
  const { showTime, priority, message, intervalTime } = getTipsConfig('idle');
  if (!message) return;
  setInterval(() => {
    const { message } = getTipsConfig('idle');
    this.showTipsFrameMessage(message, showTime, priority);
  }, showTime + intervalTime);
};

const playWelcomeTips = async function (this: OhMyLive2D) {
  const { showTime, message, priority } = getTipsConfig('welcome');
  await this.showTipsFrameMessage(message, showTime, priority);
};

export { showTipsFrameMessage, playIdleTips, playWelcomeTips };