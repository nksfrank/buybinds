import cn from 'clsx';
import './section.css';

export const Section = ({ className, children }) => (
  <div className={cn('section', className)}>{children}</div>
);
