import { PropsWithChildren } from 'react';

export function TechBadge({ children }: PropsWithChildren) {
  return <span className="badge">{children}</span>;
}


