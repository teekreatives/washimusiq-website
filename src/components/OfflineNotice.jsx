import React from "react";
import { WifiOff } from "lucide-react";

export default function OfflineNotice({ message = "You are offline. Spotify preview unavailable." }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-20 bg-gray-200 dark:bg-zinc-700 rounded-lg p-4">
      <WifiOff className="w-6 h-6 text-gray-500 dark:text-zinc-400 mb-2" />
      <span className="text-sm text-gray-600 dark:text-zinc-300 text-center">{message}</span>
    </div>
  );
} 