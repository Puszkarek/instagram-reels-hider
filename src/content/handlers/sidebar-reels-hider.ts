import type { PageHandler } from '../../interfaces/page-handler';

export class ReelsButtonPageHandler implements PageHandler {

    public match(_pathnameList: string[]): boolean {
        // Match all pages
        return true;
    }

    public process() {
        this._hideSidebarReelsButton();
    }

    private _hideSidebarReelsButton() {
        const sidebarLinks = document.querySelectorAll('a[href="/reels/"]');
        for (const link of sidebarLinks) {
            const parent = link.closest('div');
            if (parent) {
                (parent as HTMLElement).style.display = 'none';
            }
        }
        
        const allLinks = document.querySelectorAll('a');
        for (const link of allLinks) {
            if (link.textContent?.toLowerCase().includes('reels')) {
                const parent = link.closest('div');
                if (parent) {
                    (parent as HTMLElement).style.display = 'none';
                }
            }
        }
    }
}
