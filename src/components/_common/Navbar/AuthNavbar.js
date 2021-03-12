/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthNavbar() {
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              to="/"
            >
              <img
                src="https://sofia-technologies.com/wp-content/uploads/2019/05/logo-sofiatech-01.png"
                width="250px"
                alt=""
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
