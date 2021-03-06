import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import logoImage from "../images/logo-flat.svg"

function Header () {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-4">
        <Link to="/">
          <h1 className="flex items-center text-orange-600 no-underline">
            <img
              className="w-12"
              src={logoImage}
            />
            <span className="text-xl tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-orange border border-orange rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${isExpanded ? `block` : `hidden`
            } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <a href='https://ti.to/iosconfsg/2021' target='_blank' rel='noreferrer' className="bg-orange-500 w-full text-center hover:bg-orange-600 text-white mt-2 px-4 py-2 border-gray-400 rounded shadow">Buy Tickets</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
