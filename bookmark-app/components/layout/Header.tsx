import React from 'react';

const Header = ({children} : React.PropsWithChildren<{}>) => {

  return (
    <div className="flex flex-col w-full">
      <div className="font-body font-bold tracking-wide px-4 py-2 h-2/12 bg-white">Bookmark</div>
      {children}
    </div>
  );
};

export default Header;
