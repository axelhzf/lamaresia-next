import NLink from 'next/link';
export const Link = ({ as, href, children }) => {
  if (process.env.STATIC) {
    return <a href={as || href}>{children}</a>;
  }
  return (
    <NLink href={href}>
      <a>{children}</a>
    </NLink>
  );
};
