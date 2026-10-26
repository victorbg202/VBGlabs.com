interface Window {
  vbgTrackEvent?: (eventName: string, parameters?: Record<string, string | number | boolean>) => void;
}
