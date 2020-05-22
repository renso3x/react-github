import * as React from 'react';

export interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.SFC<HeaderProps> = ({
  title,
  description
}) => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{title}</h1>
      <hr className="my-4" />
      <p>{description}</p>
    </div>
  );
}

export default Header;