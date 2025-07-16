import React, { useEffect, useState } from 'react';
import { RefreshCw, X } from 'lucide-react';

export default function PWAUpdatePrompt() {
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);

  useEffect(() => {
    // Check if PWA is supported
    if ('serviceWorker' in navigator) {
      // Listen for service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setShowUpdatePrompt(true);
      });

      // Check for updates on page load
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      }
    }
  }, []);

  const handleUpdate = () => {
    window.location.reload();
  };

  const handleDismiss = () => {
    setShowUpdatePrompt(false);
  };

  if (!showUpdatePrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700 p-4 max-w-sm">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <RefreshCw className="w-5 h-5 text-gold-600 dark:text-gold-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Update Available
          </h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
            A new version of WashiMusiq is available. Update now for the latest features!
          </p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleUpdate}
              className="px-3 py-1.5 text-xs font-medium text-white bg-gold-600 hover:bg-gold-700 rounded-md transition-colors"
            >
              Update Now
            </button>
            <button
              onClick={handleDismiss}
              className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-zinc-400 hover:text-gray-800 dark:hover:text-white rounded-md transition-colors"
            >
              Later
            </button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
} 