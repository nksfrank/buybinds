import cn from 'clsx';
import './section.css';

export const Section = ({ className, children, as = 'div' }) => {
  const Tag = as;
  return <Tag className={cn('section', className)}>{children}</Tag>;
};
