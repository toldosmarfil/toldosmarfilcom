import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "../../scss/components/header2.scss"

const Header = ({ offset }) => {
  const [open, setOpen] = useState(false)
  const [headerClassName, setHeaderClassName] = useState("")
  const [pageOffset, setPageOffset] = useState(offset)

  const handleScroll = headerClassName => {
    if (headerClassName !== "menuscroll" && window.pageYOffset >= pageOffset) {
      setHeaderClassName("menuscroll")
    } else if (
      headerClassName === "menuscroll" &&
      window.pageYOffset < pageOffset
    ) {
      setHeaderClassName("")
    }
  }

  React.useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName)
  }, [headerClassName])

  React.useEffect(() => {
    handleScroll(headerClassName)
  }, [])

  return (
    <>
      <section className={open ? " open" : headerClassName ? "has-stick" : ""}>
        <div className="header-2 align-vertical">
          <div className="container header2-inner">
            <div className="row">
              <div className="col-xs-6  text-left align-middle">
                <Link className="fluid-2-l" to="/">
                  <h2 className="h2 logoon">
                  <img src="../assets/images/tema2/logo.png" alt="" />

                  </h2>
                </Link>
              </div>
              <div className="col-xs-6 text-right">
                <nav role="navigation">
                  <div className="menutext">MENU</div>
                  <div
                    id="menu-mobile"
                    className={
                      open ? "toggle menu-mobile open" : "toggle menu-mobile"
                    }
                    onClick={() => {
                      setOpen(!open)
                    }}
                  >
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className={open ? "menu-content open" : "menu-content"}>
            <div className="container ">
              <div className="row">
                <div className="col-xs-12">
                  <ul className="menu-list list-clear mb-16">
                    <li>
                      <Link className="fluid-2-l" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="fluid-2-l" to="/about">
                        Sobre nosotros
                      </Link>
                    </li>
                    <li>
                      <Link className="fluid-2-l" to="/servicios">
                        Servicios
                      </Link>
                    </li>
                    <li>
                      <a className="fluid-2-l" href="/blog">
                        blog
                      </a>
                    </li>
                    <li className="pb-48">
                      <Link className="fluid-2-l" to="/contacta">
                        Contacta
                      </Link>
                    </li>
                    <li className="text-14-r">
                      <a href="/legal_aviso">aviso legal</a>
                    </li>
                    <li className="text-14-r">
                      <a href="/legal_cookies">política cookies</a>
                    </li>
                    <li className="text-14-r">
                      <a href="/legal_privacidad">privacidad</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div class="CookieConsent ">
        <div>cookies consent</div>
        <div>
          <button id="rcc-confirm-button" class="btn">
            Accept cookies
          </button>
        </div>
      </div> */}
    </>
  )
}

export default Header
