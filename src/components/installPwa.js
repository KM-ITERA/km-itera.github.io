import React, { useEffect, useState } from "react";


const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
    promptInstall.userChoice.then(choiceResult => {
      if (choiceResult.outcome === "accepted") {
        // User accepted the installation
        setShowPrompt(false);
      } else {
        // User denied the installation or closed the prompt
        setShowPrompt(false);
      }
    });
  };

  if (!supportsPWA || !showPrompt) {
    return null;
  }
  return (
    <div className="pwa-install-prompt w-full bg-glass backdrop-blur-sm fixed z-10 bottom-0 h-2/4 px-3 items-center justify-center flex flex-col">
      <p className="pwa-install-message text-white mb-3">Install aplikasi untuk akses yang lebih mudah</p>
      <div className="pwa-install-buttons justify-evenly flex">
        <button
          className="pwa-install-accept transition-all bg-transparent hover:bg-goldish hover:shadow-slate-100 hover:shadow-md hover:-translate-y-2 text-goldish font-semibold hover:text-slate-900 py-2 px-2 mx-1 border-0 hover:border-transparent rounded"
          onClick={onClick}
        >
          Install
        </button>
        <button
          className="pwa-install-deny transition-all bg-transparent hover:bg-red-500 hover:shadow-slate-100 hover:shadow-md hover:-translate-y-2 text-red-500 font-semibold hover:text-slate-200 py-2 px-2 mx-1 border-0 hover:border-transparent rounded"
          onClick={() => setShowPrompt(false)}
        >
          Tolak
        </button>
      </div>
    </div>
  );
};

export default InstallPWA;