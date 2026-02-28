import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCarouselOptions {
  totalSlides: number;
  autoPlayInterval?: number;
}

export function useCarousel({ totalSlides, autoPlayInterval = 5000 }: UseCarouselOptions) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, autoPlayInterval);
  }, [nextSlide, autoPlayInterval]);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, autoPlayInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, autoPlayInterval]);

  const handleNext = useCallback(() => {
    nextSlide();
    resetTimer();
  }, [nextSlide, resetTimer]);

  const handlePrev = useCallback(() => {
    prevSlide();
    resetTimer();
  }, [prevSlide, resetTimer]);

  const handleDotClick = useCallback((index: number) => {
    goToSlide(index);
    resetTimer();
  }, [goToSlide, resetTimer]);

  return {
    currentSlide,
    isTransitioning,
    handleNext,
    handlePrev,
    handleDotClick,
  };
}
