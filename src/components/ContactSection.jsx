import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    query ContactSectionQuery {
      markdownRemark(fileAbsolutePath: { regex: "/contacto.md/" }) {
        frontmatter {
          contacto_titulo
          contacto_subtitulo
          direction
          direction_link
          email_titulo
          email
          telefono_titulo
          telefono
          whatsapp_titulo
          whatsapp
          contacta_pregunta
          check_acepta_la_politica
          contacta_cta
          website
          empresa_corto
          empresa_legal
          empresa_dni
          empresa_legal_direccion
        }
      }
    }
  `)

  const content = data.markdownRemark.frontmatter

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const [form, setForm] = useState(null)
  const [message, setMessage] = useState(false)
  const [checked, setChecked] = useState(false)
  const [checkError, setCheckError] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()

    if (checked === false) {
      setCheckError(true)
      e.preventDefault()
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      })
        .then(() => {
          setMessage(
            "Gracias por contactar con nosotros . Nos pondremos tan pronto como podamos en contacto con usted."
          )
          setForm(null)
        })
        .catch(error => alert(error))

      e.preventDefault()
      e.target.reset()
    }
  }

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <>
      <section className="pt-section pb-md">
        <div className="container pt-md">
          <div className="row pb-48">
            <div className="col-xs-12 col-sm-5">
              <div className="barmini mb-16"></div>
              <div className="text-16-r pb-40">
                <em>{content.contacto_subtitulo} </em>
              </div>
              <div className="fluid-1-b mb-16">{content.contacto_titulo}</div>
            </div>
          </div>
          <div className="row mb-48">
            <div className="col-xs-12 col-sm-4">
              <div className="box mini-box p-16 mb-16 bg-box">
                <h5 className="h3 mb-16">¿Dónde estamos?</h5>
                <p className="p1">
                  <span className="variable">{content.direction}</span>
                </p>
                <a
                  className="mt-16 link5"
                  href={content.direction_link}
                  target="_blank"
                >
                  Ver en google maps
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="box mini-box p-16 mb-16 bg-box">
                <h5 className="h3 mb-16">{content.email_titulo}</h5>
                <p className="p1">
                  <span className="variable">{content.email}</span>
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="box mini-box p-16 mb-16 bg-box">
                <h5 className="h3">{content.telefono_titulo}</h5>
                <p className="p1">
   
     
                  <a href= {content.telefono}> Tel. {content.telefono} </a>


                </p>
                <div className="mb-16"></div>
                <h5 className="h3">{content.whatsapp_titulo}</h5>
                <p className="p1">
                  <span className="variable">
                  <a href={`whatsapp://send?text=Consulta desde la web !&phone=${content.whatsapp}`}>
                      {content.whatsapp}
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <form
            id="contactForm"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-xs-7 col-sm-4">
                <h3 className="fluid-2-b mb-16">{content.contacta_pregunta}</h3>
                <div className="barx mt-16 mb-16"></div>
              </div>
              <div className="col-xs-12 col-sm-8">
                <div className="row mb-16">
                  <div className="col-xs-12">
                    <input
                      name="Name"
                      type="text"
                      className="input"
                      placeholder="Nombre"
                      onChange={e => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="row mb-16">
                  <div className="col-xs-12">
                    <input
                      name="Email"
                      type="text"
                      className="input"
                      placeholder="Email"
                      onChange={e => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-16">
                  <div className="col-xs-12">
                    <input
                      name="Asunto"
                      type="text"
                      className="input"
                      placeholder="Asunto"
                      onChange={e => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="row mb-16">
                  <div className="col-xs-12">
                    <textarea
                      className="input textarea"
                      id="comment"
                      name="Comment"
                      cols="45"
                      rows="8"
                      aria-required="true"
                      placeholder="Escribe tus comentarios..."
                      onChange={e => handleChange(e)}
                    ></textarea>
                  </div>
                </div>
                <div className="row mb-48">
                  <div className="col-xs-12">
                    <div className="checkbox-item-text">
                      <div className="checkbox-item">
                        <input
                          id="checkbox_0"
                          type="checkbox"
                          onClick={() => setChecked(!checked)}
                        />
                        <label htmlFor="checkbox_0">
                          <i className="icon">
                            <svg width="16" height="16" viewBox="0 0 16 16">
                              <g
                                strokeWidth="1"
                                fill=""
                                stroke=""
                              >
                                <polyline
                                  fill="none"
                                  stroke=""
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  points="1,9 5,13 15,3 "
                                ></polyline>
                              </g>
                            </svg>
                          </i>
                        </label>
                      </div>
                      <span className="text-14-r">
                        Acepta nuestra , &nbsp;
                        <Link
                          className="link4"
                          to={"/" + content.check_acepta_la_politica}
                          target="_blank"
                        >
                          política de privacidad
                        </Link>
                      </span>
                    </div>
                    {checkError && (
                      <span className="is-error text-14-r ">
                       Tienes que aceptar nuestras políticas.
                      </span>
                    )}
                  </div>
                </div>
                {message ? <div className="success-modal">{message}</div> : ""}

                <div className="row mb-48">
                  <div className="col-xs-12">
                    <button
                      className="btn btn-primary btn--medium"
                      type="submit"
                    >
                      {content.contacta_cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="container-fluid"></div>
      </section>
    </>
  )
}

export default ContactSection
