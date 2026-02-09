import {useState} from "react";
import type {UserIntent, IntentConfig} from "../types/intent";
import {INTENT_CONFIG} from "../types/intent";

const STORAGE_KEY = "31styles_user_intent";
const VALID_INTENTS: UserIntent[] = ["shop", "academy", "bespoke"];

function getStoredIntent(): UserIntent | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && VALID_INTENTS.includes(stored as UserIntent)) {
    return stored as UserIntent;
  }
  return null;
}

export function scrollToSection(elementId: string): void {
  const el = document.getElementById(elementId);
  if (el) {
    const navbarHeight = 64;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({top, behavior: "smooth"});
  }
}

export function useIntent() {
  const [intent, setIntentState] = useState<UserIntent | null>(getStoredIntent);

  const setIntent = (newIntent: UserIntent) => {
    localStorage.setItem(STORAGE_KEY, newIntent);
    setIntentState(newIntent);
  };

  const clearIntent = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIntentState(null);
  };

  const config: IntentConfig | null = intent ? INTENT_CONFIG[intent] : null;
  const isFirstVisit = intent === null;

  return {intent, setIntent, clearIntent, config, isFirstVisit};
}
