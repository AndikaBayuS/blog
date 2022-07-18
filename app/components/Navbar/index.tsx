import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "@remix-run/react";

export default function Navbar() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "blog" },
    { name: "About", href: "about" },
  ];
  return (
    <Disclosure as="nav" className="border-light-title border-b border-dashed">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2">
                  <span className="sr-only">Open Main Menu</span>
                  {open ? (
                    <XIcon
                      className="h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0">
                  <Link
                    to="/"
                    className="text-3xl font-semibold text-light-title"
                  >
                    andikabays
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map(({ name, href }) => (
                      <NavLink
                        key={name}
                        to={href}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-light-button text-light-base rounded-md px-2 py-2 font-semibold"
                            : "text-light-title rounded-md px-2 py-2 font-semibold"
                        }
                      >
                        {name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map(({ name, href }) => (
                <Disclosure.Button
                  key={name}
                  as="a"
                  href={href}
                  className="block"
                >
                  {name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
