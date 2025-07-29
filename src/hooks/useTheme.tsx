import { useEffect, useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    const update = () => {
      setIsDark(html.classList.contains('dark'));
    };

    const observer = new MutationObserver(update);

    observer.observe(html, {
      attributes: true,
      attributeFilter: ['class'],
    });

    update();
    setMounted(true);

    return () => observer.disconnect();
  }, []);

  return {
    isDark,
    theme: isDark ? 'dark' : 'light',
    setTheme: (theme: 'light' | 'dark') => {
      document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark');
      document.documentElement.classList.add(theme);
    },
    mounted,
  };
}
