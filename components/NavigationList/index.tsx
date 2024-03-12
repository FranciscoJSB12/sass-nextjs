interface NavigationListProps {
  style: string;
}

export function NavigationList({ style }: NavigationListProps) {
  return (
    <ul className={style}>
      <li>Home</li>
      <li>Work</li>
      <li>About</li>
    </ul>
  );
}
