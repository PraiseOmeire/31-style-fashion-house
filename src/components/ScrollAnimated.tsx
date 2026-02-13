import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimatedProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'zoom';
  duration?: 'fast' | 'normal' | 'slow';
  delay?: number;
  className?: string;
}

export const ScrollAnimated = ({
  children,
  animation = 'fade-up',
  duration = 'normal',
  delay = 0,
  className = ''
}: ScrollAnimatedProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const durationClass = {
    fast: 'duration-300',
    normal: 'duration-600',
    slow: 'duration-800'
  }[duration];

  const animationClass = isVisible ? `animate-scroll-${animation}` : 'opacity-0';
  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref as any}
      className={`${animationClass} ${durationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};
