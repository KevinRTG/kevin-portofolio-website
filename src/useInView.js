import { useEffect, useState } from 'react';

const useInView = (ref, threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; 
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef); 
    };
  }, [ref, threshold]);

  return isVisible;
};

export default useInView;
