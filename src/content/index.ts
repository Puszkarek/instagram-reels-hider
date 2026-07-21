import type { PageHandler } from '../interfaces/page-handler';
import { FeedReelsHiderPageHandler } from './handlers/feed-reels-hider';
import { ReelsBlockerPageHandler } from './handlers/reels-page-blocker';
import { ReelsButtonPageHandler } from './handlers/sidebar-reels-hider';

const handlers: PageHandler[] = [
    new FeedReelsHiderPageHandler(),
    new ReelsBlockerPageHandler(),
    new ReelsButtonPageHandler()
];

function shouldDoNothing() {
    return document.hidden;
}

async function init() {
    setInterval(() => {
        if (shouldDoNothing()) return;
        requestIdleCallback(processPage);
    }, 2 * 1000);
}

function processPage() {
    const url = new URL(window.location.href);
    const pathnameList = url.pathname.split('/').filter((path) => path);

    for (const handler of handlers) {
        if (handler.match(pathnameList)) {
            handler.process();
        }
    }
}

init();