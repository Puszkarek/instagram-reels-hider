import type { PageHandler } from '../../interfaces/page-handler';
import { themeService } from '../../services/theme-service';

export class FeedReelsHiderPageHandler implements PageHandler {

    public match(pathnameList: string[]): boolean {
        // Match feed and profile pages (not reels page)
        return pathnameList[0] !== 'reels';
    }

    public process() {
        this._hideReelsInFeed();
        this._hideReelsInProfile();
    }

    private _hideReelsInFeed() {
        const articleList = document.querySelectorAll('article');
        for (const article of articleList) {
            const video = article.querySelector('video');
            if (video) {
                this._applyReelOverlay(article);
            }
        }
    }

    private _hideReelsInProfile() {
        const pathnameList = window.location.pathname.split("/").filter((e) => e);
        
        if (pathnameList.length === 0 || pathnameList.length === 1 || (pathnameList.length === 2 && pathnameList[1] === 'reels')) {
            const postsRows = document
                .querySelector("header")
                ?.parentElement?.lastElementChild?.querySelectorAll(
                    `:scope>div>div>div>div${pathnameList.length === 1 ? ">div" : ""}`,
                );

            postsRows?.forEach((row) => {
                row.childNodes.forEach((item) => {
                    if (item instanceof HTMLDivElement) {
                        const link = item.querySelector("a");
                        if (link) {
                            const href = link.getAttribute("href");
                            if (href && href.includes("/reel/")) {
                                this._applyReelOverlay(item);
                            }
                        }
                    }
                });
            });
        }
    }

    private _applyReelOverlay(element: Element) {
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
        `;
        
        element.appendChild(overlay);
    }
}
