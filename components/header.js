import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [{ name: 'Pricing', href: '/pricing' }];

const Header = () => (
  <Popover>
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <nav
        className="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <a>
                <span className="sr-only">Reclerk</span>
                {/* <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                /> */}
                <h2 className="text-3xl font-bold text-emerald-800">Reclerk</h2>
              </a>
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
              <a className="font-medium text-emerald-800 hover:text-emerald-700">
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex rounded-md shadow">
            <Link href="/signup">
              <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-emerald-800 bg-white hover:text-emerald-700">
                Sign up
              </a>
            </Link>
          </span>
        </div>
      </nav>
    </div>

    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close main menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="block px-3 py-2 rounded-md text-base font-medium text-emerald-800 hover:text-emerald-700 hover:bg-gray-50">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <Link href="/signup">
            <a className="block w-full px-5 py-3 text-center font-medium text-emerald-800 bg-gray-50 hover:bg-gray-100 hover:text-emerald-700">
              Sign up
            </a>
          </Link>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default Header;
