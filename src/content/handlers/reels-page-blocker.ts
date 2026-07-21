import type { PageHandler } from '../../interfaces/page-handler';
import { themeService } from '../../services/theme-service';

export class ReelsBlockerPageHandler implements PageHandler {

    public match(pathnameList: string[]): boolean {
        // Match only the reels page
        return pathnameList[0] === 'reels';
    }

    public process() {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            this._applyReelOverlay(mainContent, true);
        }
    }

    private _applyReelOverlay(element: Element, showReturnButton = false) {
        const colors = themeService.getTheme();
        
        const htmlElement = element as HTMLElement;

        htmlElement.style.position = "relative";
        htmlElement.style.pointerEvents = "none";

        const existingOverlay = element.querySelector(".reel-overlay");
        if (existingOverlay) {
            existingOverlay.remove();
        }

        const overlay = document.createElement("div");
        overlay.className = "reel-overlay";
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${colors.background};
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        if (showReturnButton) {
            const returnButton = document.createElement("button");
            returnButton.textContent = "← Return to Home";
            returnButton.style.cssText = `
                padding: 10px 20px;
                font-size: 14px;
                cursor: pointer;
                background-color: ${colors.buttonBackground};
                color: ${colors.buttonText};
                border: 1px solid ${colors.buttonBorder};
                border-radius: 8px;
                pointer-events: auto;
                font-weight: 600;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                transition: background-color 0.2s, border-color 0.2s;
            `;
            returnButton.onmouseover = () => {
                returnButton.style.backgroundColor = colors.buttonBorder;
            };
            returnButton.onmouseout = () => {
                returnButton.style.backgroundColor = colors.buttonBackground;
            };
            returnButton.onclick = () => {
                window.location.href = 'https://www.instagram.com/';
            };
            overlay.appendChild(returnButton);
        }
        
        element.appendChild(overlay);
    }
}
