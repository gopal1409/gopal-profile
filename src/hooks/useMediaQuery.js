import { useState, useEffect } from 'react';

export const useMediaQuery = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = e => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export const useBreakpoint = () => {
  const isXs = useMediaQuery('(max-width: 599px)');
  const isSm = useMediaQuery('(min-width: 600px) and (max-width: 899px)');
  const isMd = useMediaQuery('(min-width: 900px) and (max-width: 1199px)');
  const isLg = useMediaQuery('(min-width: 1200px) and (max-width: 1535px)');
  const isXl = useMediaQuery('(min-width: 1536px)');

  return { isXs, isSm, isMd, isLg, isXl, isMobile: isXs || isSm };
};

export default useMediaQuery;
