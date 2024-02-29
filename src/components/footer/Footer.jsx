import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:py-16 lg:px-8 mt-12">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <h2 className="text-3xl font-bold text-white">Catalog</h2>
              <p className="text-base leading-6 text-gray-400">
                Home / Blog / Sale / About us / For customers / Contacts
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Contact us
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <p className="text-base leading-6 text-gray-300">
                        +9967007007000
                      </p>
                    </li>
                    <li>
                      <p className="text-base leading-6 text-gray-300">
                        hello@logolipsum.com
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="md:mt-0">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Address
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <p className="text-base leading-6 text-gray-300">
                        2118 Thornridge Cir. Syracuse, Connecticut 35624
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Opening hours
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <p className="text-base leading-6 text-gray-300">
                        9am—6pm
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-700">
            <p className="text-base leading-6 text-gray-400 xl:text-center">
              © 2023 — Copyright
            </p>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
};
