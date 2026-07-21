import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

function App() {
   const [isDark, setIsDark] = useState(false);

   useEffect(() => {
      const checkTheme = () => {
         const cs = document.documentElement.style.colorScheme || 
                   getComputedStyle(document.documentElement).colorScheme;
         setIsDark(cs === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);
      };
      checkTheme();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkTheme);
      return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkTheme);
   }, []);

   return (
      <div className={`popup ${isDark ? 'dark' : 'light'}`}>
         <header className="popup-header">
            <div className="logo">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#gradient)" />
                  <path d="M7 8h10M7 12h7M7 16h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                     <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#833AB4" />
                        <stop offset="0.5" stopColor="#FD1D1D" />
                        <stop offset="1" stopColor="#F77737" />
                     </linearGradient>
                  </defs>
               </svg>
            </div>
            <h1>Reels Hider</h1>
         </header>

         <main className="popup-content">
            <div className="feature-card">
               <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
               </div>
               <div className="feature-text">
                  <h3>Feed & Profile</h3>
                  <p>Hides individual reels in your feed and profile grid</p>
               </div>
            </div>

            <div className="feature-card">
               <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <rect x="3" y="3" width="18" height="18" rx="2" />
                     <path d="M9 9h6M9 12h6M9 15h6" />
                  </svg>
               </div>
               <div className="feature-text">
                  <h3>Reels Page</h3>
                  <p>Blocks the entire reels page with a return button</p>
               </div>
            </div>

            <div className="feature-card">
               <div className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
               </div>
               <div className="feature-text">
                  <h3>Sidebar Button</h3>
                  <p>Removes the reels button from navigation</p>
               </div>
            </div>
         </main>

         <footer className="popup-footer">
            <a 
               className="github-link"
               target="_blank"
               rel="noopener noreferrer"
               href="https://github.com/Puszkarek/instagram-reels-hider"
            >
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
               </svg>
               <span>GitHub</span>
            </a>
         </footer>
      </div>
   );
}

createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
