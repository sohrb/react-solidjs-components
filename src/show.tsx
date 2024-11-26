export interface ShowProps<T> {
  when: T | undefined | null;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  fallback?: React.ReactNode;
}

export function Show<T>({ when, children, fallback }: ShowProps<T>) {
  if (when) {
    return typeof children === "function" ? children(when) : children;
  }

  return fallback ?? null;
}
