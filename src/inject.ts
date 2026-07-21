// Inject script that runs at document_start
// This ensures the content script loads early before Instagram's scripts
(async () => {
    try {
        // Load the main content script
        const script = document.createElement('script');
        script.src = browser.runtime.getURL('content/loader.js');
        script.onload = () => script.remove();
        (document.head || document.documentElement).appendChild(script);
    } catch (error) {
        console.error('[Instagram Reels Hider] Error in inject script:', error);
    }
})();
