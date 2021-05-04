import { Link } from "gatsby";
import React from "react";

const Footer = ({ siteTitle }) => (
  <footer className="bg-white">
    <div className="container mx-auto  px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6">
          <a
            className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <svg
              className="h-8 fill-current inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path className="plane-take-off" d="M16.539 425.626h479.767v50.502H16.539zM510.7 189.151c-5.429-20.201-26.135-32.195-46.335-26.766l-134.209 35.982L155.924 35.878l-48.734 13.13 104.539 181.175-125.497 33.584-49.618-39.013L0 234.603l45.957 79.667 19.317 33.457 40.528-10.858 134.209-35.983 109.715-29.417 134.209-35.983c20.199-5.429 32.194-26.134 26.765-46.335z"/>
            </svg>{" "}
            {siteTitle}
          </a>
        </div>

        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Links</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="https://www.tailwindtoolbox.com/templates/landing-page">
                <span className="hover:underline text-gray-800 hover:text-orange-500">
                  Page theme
                </span>
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://sanity.io/docs"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Sanity Help
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://slack.sanity.io"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Slack Community
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Legal</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                Terms
              </span>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <span className="no-underline hover:underline text-gray-800 hover:text-orange-500">
                Privacy
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Social</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com/sanity_io"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Twitter
              </a>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.linkedin.com/company/sanity-io/"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">Company</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link
                to="/blog"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Blog
              </Link>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.sanity.io/contact"
                className="no-underline hover:underline text-gray-800 hover:text-orange-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
