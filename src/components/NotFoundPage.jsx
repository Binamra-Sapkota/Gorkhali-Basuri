import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1a1d25] to-[#0f1115] text-[#e6e6e6] text-center">
      <h1 className="text-8xl font-bold text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.35)]">
        404
      </h1>

      <p className="mt-4 mb-8 text-base opacity-80">
        The page you’re looking for doesn’t exist.
      </p>

      <Link to="/">
        <button className="rounded-full bg-blue-400 px-7 py-3 text-sm font-medium text-black transition hover:bg-blue-300 hover:shadow-[0_10px_30px_rgba(96,165,250,0.35)]">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
