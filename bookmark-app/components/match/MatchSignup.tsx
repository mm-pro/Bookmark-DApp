import React from "react";
import { useRouter } from "next/router";

export default function MatchSignup() {
  const router = useRouter();

  const updateSignup = () => {
    localStorage.setItem("isSignedUpForWeeklyMatches", "yes");
  };

  const isSignedUpForWeeklyMatches = localStorage.getItem(
    "isSignedUpForWeeklyMatches"
  );

  return (
    <div className="flex mt-4 mb-6">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 font-bold text-xl leading-tight mb-2">
          Weekly matches
        </h5>
        <p className="text-gray-700 text-base mb-4">
          Meet new friends based on wallet similarity
        </p>
        {isSignedUpForWeeklyMatches !== "yes" ? (
          <button
            onClick={() => router.push("/match")}
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Sign up
          </button>
        ) : (
          <div onClick={() => router.push("/match")}>Signed Up</div>
        )}
      </div>
    </div>
  );
}
