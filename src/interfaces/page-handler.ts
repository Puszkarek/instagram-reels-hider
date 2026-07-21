export interface PageHandler {
    match(pathnameList: string[]): boolean;
    process(): void;
}
