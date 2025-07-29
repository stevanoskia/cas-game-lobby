import { useEffect, useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  );

  useEffect(() => {
    const html = document.documentElement;

    const update = () => setIsDark(html.classList.contains('dark'));

    const observer = new MutationObserver(update);

    observer.observe(html, {
      attributes: true,
      attributeFilter: ['class'],
    });

    update(); // Initial state sync

    return () => observer.disconnect();
  }, []);

  return {
    isDark,
    theme: isDark ? 'dark' : 'light',
  };
}
