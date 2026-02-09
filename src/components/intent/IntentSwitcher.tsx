import {INTENT_CONFIG} from "../../types/intent";
import type {UserIntent} from "../../types/intent";

interface IntentSwitcherProps {
  intent: UserIntent | null;
  onClear: () => void;
}

const IntentSwitcher = ({intent, onClear}: IntentSwitcherProps) => {
  const config = intent ? INTENT_CONFIG[intent] : null;

  return (
    <div className="absolute bottom-8 left-8 z-20">
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
        <div className="w-2 h-2 rounded-full bg-[#bc8cd5]" />
        <span
          className="text-white text-sm"
          style={{fontFamily: "'Inter', sans-serif"}}
        >
          {config ? config.label : "Browsing"}
        </span>
        <button
          onClick={onClear}
          className="text-white/60 hover:text-white text-xs transition-colors duration-200 cursor-pointer"
          style={{fontFamily: "'Inter', sans-serif"}}
        >
          change
        </button>
      </div>
    </div>
  );
};

export default IntentSwitcher;
