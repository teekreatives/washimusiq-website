import React, { useEffect, useState } from 'react';
import { Download, Smartphone } from 'lucide-react';

export default function InstallAppButton({ navPosition }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    const handleAppInstalled = () => {
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  if (!showInstallButton) return null;

  // If used in nav, use inline style
  if (navPosition) {
    return (
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-1 px-3 py-1.5 bg-gold-600 hover:bg-gold-700 text-white rounded-md shadow transition-all duration-200 text-xs font-semibold ml-2"
        title="Install WashiMusiq App"
        style={{ height: 32 }}
      >
        <Download className="w-4 h-4" />
        <Smartphone className="w-4 h-4" />
        <span>Install App</span>
      </button>
    );
  }

  // Default: floating button (for legacy use)
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-2 px-4 py-2 bg-gold-600 hover:bg-gold-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        title="Install WashiMusiq App"
      >
        <Download className="w-4 h-4" />
        <Smartphone className="w-4 h-4" />
        <span className="text-sm font-medium">Install App</span>
      </button>
    </div>
  );
} 