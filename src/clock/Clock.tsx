import { CenterFix } from './CenterFix';
import { HourHand } from './HourHand';
import { HourIndicators } from './HourIndicator';
import { MinuteHand } from './MinuteHand';

export const Clock = () => {
  return (
    <div className="relative w-[300px] h-[300px]">
      <div className="relative left-[1px] w-[300px] h-[300px] rounded-full aspect-square">
        <HourIndicators />
        <HourHand />
        <MinuteHand />
        <CenterFix />
      </div>
    </div>
  );
};
