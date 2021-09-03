import React from "react";

interface LinkTitleProps {
  link: string;
  className?: string;
  children: React.ReactNode;
}

const ExternalLink = ({
  link,
  className,
  children,
  ...other
}: LinkTitleProps) => (
  <a
    href={link}
    className={className}
    rel="noreferrer"
    target="_blank"
    {...other}
  >
    {children}
  </a>
);

export default ExternalLink;
