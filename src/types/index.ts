// import { Live2DModel } from 'pixi-live2d-display';
// import { Application } from 'pixi.js';

type ImportType = 'complete' | 'cubism2' | 'cubism4';
type EventType = 'ready' | 'load';
type LoadType = 'manual' | 'auto';
type TipsType = 'welcome' | 'idle' | 'copy';

interface TipsConfig {
  idleTips: IdleTipsConfig | false;
}

interface AdaptiveConfig {
  size?: number;
  scale?: number | [x: number, y: number];
}

interface Config {
  modelSource?: string;
  modelPosition?: [x: number, y: number];
  size?: number;
  sayHello?: boolean;
  transitionTime?: number;
  x?: number;
  y?: number;
  scale?: number | [x: number, y: number];
  backgroundColor?: string;
  tips?: TipsConfig;
  stage?: {
    backgroundColor?: string;
    
    xs?: AdaptiveConfig;
    md?: AdaptiveConfig;
    xl?: AdaptiveConfig;
  };

}

interface WrapperContentEls {
  canvasEl?: HTMLCanvasElement;
  tooltipEl?: HTMLDivElement;
}

interface IdleTipsConfig {
  message?: string | string[];
  persistTime?: number;
  priority?: number;
  interval?: number;
}

interface WelcomeTipsConfig {
  message: {
    daybreak: string;
    morning: string;
    noon: string;
    afternoon: string;
    dusk: string;
    night: string;
    lateNight: string;
    weeHours: string;
  };
  persistTime: number;
  priority: number;
}

interface CopyTipsConfig {
  message: string | string[];
  persistTime?: number;
  priority?: number;
}

interface Tips {
  idleTips: IdleTipsConfig;
  welcomeTips: WelcomeTipsConfig;
  copyTips: CopyTipsConfig;
}

interface OhMyLive2D {
  onAfterDisplay: (callback: () => void) => void;
}

interface Events {
  afterDisplay?: () => void;
}

export type {
  TipsType,
  OhMyLive2D,
  Config,
  ImportType,
  WrapperContentEls,
  EventType,
  Events,
  LoadType,
  Tips,
  IdleTipsConfig,
  WelcomeTipsConfig,
  AdaptiveConfig
};
