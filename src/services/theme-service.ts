import type { Theme } from '../interfaces/theme';

class ThemeService {
    private _theme: Theme | null = null;

    public getTheme(): Theme {
        if (!this._theme) {
            this._initializeTheme();
        }
        return this._theme!;
    }

    private _initializeTheme(): void {
        const bodyStyle = getComputedStyle(document.body);
        const backgroundColor = bodyStyle.backgroundColor || bodyStyle.background;
        
        const cs =
            document.documentElement.style.colorScheme ||
            getComputedStyle(document.documentElement).colorScheme;
        const isDark =
            cs === "dark" ||
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        
        const bg = backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)' 
            ? backgroundColor 
            : (isDark ? "#000000" : "#ffffff");
        
        const isBgDark = bg === '#000000' || bg === 'rgb(0, 0, 0)' || bg.includes('0, 0, 0');
        
        this._theme = {
            background: bg,
            text: isBgDark ? '#ffffff' : '#000000',
            buttonBackground: isBgDark ? '#262626' : '#efefef',
            buttonText: isBgDark ? '#ffffff' : '#000000',
            buttonBorder: isBgDark ? '#363636' : '#dbdbdb'
        };
    }
}

export const themeService = new ThemeService();
