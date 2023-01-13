import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col w-1/2 m-auto font-body align-middle p-10">
      <div className="text-7xl">
        Sign up <span>for Bookmark</span>
      </div>
      <div className="mt-5">Select a wallet to login</div>
      <div className="font-body text-sm mt-4">Supported Networks</div>
      <ul className="list-disc text-xs ml-6">
        <li>Goerli</li>
      </ul>
    </div>
  );
};

export default Signup;
