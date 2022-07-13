import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import ExportContextUser from "../contexts/UserContext";

import officiel from "../assets/officiel.png";

// DROPDOWN

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const { user } = useContext(ExportContextUser.UserContext);
  return (
    <div className="flex flex-row justify-between bg-gray-200 h-[4.5rem] md:h-[6rem] mb-3 p-3 px-5 md:px-[2.8rem] lg:px-[8rem] xl:px-[13rem]">
      <Link to="/">
        <img src={officiel} alt="logo" className="h-full" />
      </Link>
      <div className="flex flex-row items-center">
        <Menu as="div" className="relative inline-block text-left">
          <div className="flex items-center">
            <Menu.Button>
              {!user ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rounded-full p-1 pb-2 w-12 h-12 md:w-14 md:h-14 border-2 border-gray-400 fill-gray-400 bg-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-full w-12 h-12 md:w-14 md:h-14"
                  alt="Avatar"
                />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/signup/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <p>S&apos;inscrire</p>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/identification/"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <p>Se connecter</p>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile/:userId"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <p>Modifier profil</p>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/RGPD"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <p>Voir mentions légales</p>
                    </Link>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  {/* <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block w-full text-left px-4 py-2 text-sm"
                        )}
                      >
                        Se déconnecter
                      </button>
                    )}
                  </Menu.Item> */}
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
