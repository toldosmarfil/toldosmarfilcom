import React from "react"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Seo from "../components/seo"

const LegalAviso = () => {
  const data = useStaticQuery(graphql`
    query LegalSectionQuery {
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

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Seo title="Legal Aviso" description="Legal Aviso" />
      <Header offset="0" />
      <section className=" pt-section ">
        <div className="container-3">
          <div className="row pb-16">
            <div className="col-xs-12 align-center">
              <div className="fluid-1-b mb-48  ">Aviso legal</div>
              <div className="text-16-r pb-16  ">
                <i>
                  <div className="variable"> {content.empresa_corto} </div>
                </i>
              </div>
              <div className="barx "></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="p1  p-content">
                <h5 className="h4 mb-16">Datos Identificativos</h5> Este sitio
                web
                <span className="variable"> {content.website} </span>
                está gestionado por
                <span className="variable"> {content.empresa_legal} </span>con
                <span className="variable"> {content.empresa_dni} </span> (“el
                titular”) con domicilio en 
                <span className="variable"> {content.empresa_legal_direccion} </span> <br />
                Correo electrónico de contacto:
                <span className="variable"> {content.email} </span>
                <br /> <br />
                <h5 className="h4 mb-16">Condiciones generales</h5> El presente
                AVISO LEGAL tiene por objeto regular el acceso, navegación y, en
                general, la relación entre el website y los usuarios del mismo
                (en adelante, los “usuarios”). Se entenderá que el acceso y
                utilización de la web o el consumo de los servicios y contenidos
                que ofrece implican la asunción del rol de usuario y, por lo
                tanto, la aceptación sin reservas de todas y cada una de las
                presentes condiciones de uso, las cuales están sujetas a
                modificación. En consecuencia, será necesaria su lectura por
                parte del usuario cada vez que se visite la web. El titular
                perseguirá el incumplimiento de las presentes condiciones así
                como cualquier utilización indebida de su portal ejerciendo
                todas las acciones civiles y penales que le puedan corresponder
                en derecho. <br />
                <br />
                <h5 className="h4 mb-16">Objeto y contenidos ofrecidos</h5> Este
                sitio ofrece información sobre marketing digital y social media
                y está destinado a promocionar la actividad profesional de su
                titular. La adquisición de los servicios o productos realizadas
                a través del website quedan expresamente sujetas a las
                condiciones particulares de adquisición de dichos servicios o
                productos, establecidos al efecto y sin perjuicio de lo
                dispuesto en las presentes Condiciones Generales. <br /> <br />
                <h5 className="h4 mb-16">Normas de uso de la web</h5> El website
                distribuye contenidos (textos, gráficos, dibujos, diseños,
                códigos, software, fotografías, música, vídeos, sonidos, bases
                de datos, imágenes, expresiones e informaciones, así como
                cualquier otra creación protegida por las leyes nacionales y los
                tratados internacionales sobre propiedad intelectual e
                industrial) en el dominio
                <span className="variable"> {content.website}. </span>El
                propietario se reserva el derecho de retirar todos aquellos
                comentarios y aportaciones que vulneren el respeto a la dignidad
                de la persona, que sean discriminatorios, xenófobos, racistas,
                pornográficos, que atenten contra alguna ley vigente, el orden o
                la seguridad pública o que, a su juicio, no resulten adecuados
                para su publicación. En cualquier caso,
                <span className="variable"> {content.empresa_corto} </span>no
                será responsable de las opiniones vertidas por los usuarios a
                través de los foros, chats, u otras herramientas de
                participación. <br />
                <br />
                <h5 className="h4 mb-16">
                  Propiedad Intelectual y uso de los contenidos
                </h5>
                El sitio web de
                <span className="variable"> {content.empresa_corto} </span>,
                incluyendo a título enunciativo, pero no limitativo su
                programación, edición, compilación y demás elementos necesarios
                para su funcionamiento, los diseños, logotipos, texto y/o
                gráficos son propiedad del prestador o en su caso dispone de
                licencia o autorización expresa por parte de los autores.
                <span className="variable"> {content.empresa_corto} </span>
                otorga al usuario una licencia Creative Commons
                Reconocimiento-NoComercial-CompartirIgual 3.0. Cualquier uso no
                autorizado previamente por parte del prestador será considerado
                un incumplimiento grave de los derechos de propiedad intelectual
                o industrial del autor. Los diseños, logotipos, texto y/o
                gráficos ajenos al prestador y que pudieran aparecer en el sitio
                web, pertenecen a sus respectivos propietarios, siendo ellos
                mismos responsables de cualquier posible controversia que
                pudiera suscitarse respecto a los mismos. En todo caso, el
                prestador cuenta con la autorización expresa y previa por parte
                de los mismos. Para realizar cualquier tipo de observación
                respecto a posibles incumplimientos de los derechos de propiedad
                intelectual o industrial, así como sobre cualquiera de los
                contenidos del sitio web, puede hacerlo a través del formulario
                de contacto que se mantiene en el sitio web o en el correo
                <span className="variable"> {content.email} </span>
                <br /> <br />
                <h5 className="h4 mb-16">
                  Enlaces de terceros y afiliación
                </h5>
                En el caso de que en
                <span className="variable"> {content.website} </span>
                se dispusiesen enlaces o hipervínculos hacía otros sitios de
                internet, el titular no ejercerá control sobre el contenido
                publicado en dichos sitios ni asumirá responsabilidad alguna por
                ellos al pertenecer a sitios web ajenos. Asimismo, la inclusión
                de estas conexiones externas e hipervínculos no implicará ningún
                tipo de asociación, fusión o participación con las entidades
                conectadas.
                <span className="variable"> {content.website} </span>
                utiliza ocasionalmente enlaces de afiliación de productos y
                servicios de marcas que hayan establecido un programa de
                afiliados. Estos enlaces se usan exclusivamente después de haber
                usado dichos productos y servicios, o bien, haber realizado
                pruebas que permitan valorar que cumplen con un adecuado nivel
                de calidad. El prestador se compromete a no incluir enlaces de
                afiliados arbitrarios a productos que no cumplan con las
                condiciones antes descritas entendiendo además que este tipo de
                prácticas resultarían muy contraproducentes para la reputación
                del propio sitio web que los promociona. En estos casos, el
                titular no será responsable de establecer las condiciones
                generales y particulares de uso a tener en cuenta en la
                utilización, prestación o contratación de estos servicios por
                terceros y, por tanto, no podrá ser considerado responsable de
                los mismos. La utilización y/o la contratación de dichos
                servicios específicos implica la aceptación de las condiciones
                particulares que los regulen en la versión publicada por el
                website en el momento en que se produzca dicha utilización y/o
                contratación. <br /> <br />
                <h5 className="h4 mb-16">
                  Exclusión de garantías y responsabilidad
                </h5>
                El titular no se hace responsable, en ningún caso, de los daños
                y perjuicios de cualquier naturaleza que pudieran ocasionar, a
                título enunciativo: errores u omisiones en los contenidos, falta
                de disponibilidad del portal o la transmisión de virus o
                programas maliciosos o lesivos en los contenidos, a pesar de
                haber adoptado todas las medidas tecnológicas necesarias para
                evitarlo. <br />
                <br />
                <h5 className="h4 mb-16">Modificaciones</h5> El titular se
                reserva el derecho de efectuar sin previo aviso las
                modificaciones que considere oportunas en el portal y en el
                aviso legal, pudiendo cambiar, suprimir o añadir tanto los
                contenidos y servicios que se presten a través de la misma como
                la forma en la que éstos aparezcan <br /> <br />
                <h5 className="h4 mb-16">Derecho de exclusión</h5>
                <span className="variable"> {content.empresa_corto} </span>se
                reserva el derecho a denegar o retirar el acceso a portal y/o
                los servicios ofrecidos sin necesidad de preaviso, a instancia
                propia o de un tercero, a aquellos usuarios que incumplan las
                presentes Condiciones Generales de Uso. <br /> <br />
                <h5 className="h4 mb-16">Ley Aplicable y Jurisdicción</h5> Para
                la resolución de todas las controversias o cuestiones
                relacionadas con el presente sitio web o de las actividades en
                él desarrolladas, será de aplicación la legislación española, a
                la que se someten expresamente las partes. Para la resolución de
                cualquier conflicto que pueda surgir con ocasión de la vista al
                portal o del uso de los servicios que en él se puedan ofertar,
                <span className="variable"> {content.empresa_corto} </span>y el
                usuario acuerdan someterse a los Jueces y Tribunales de
                Valencia.
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </>
  )
}

export default LegalAviso
