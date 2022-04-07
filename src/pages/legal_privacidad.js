import React from "react"
import ContactSection from "../components/ContactSection"
import Footer from "../components/footer"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"
import Helmet from "react-helmet"

const LegalPrivacy = () => {
  const data = useStaticQuery(graphql`
    query LegalPrivacySectionQuery {
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
      <Seo title="Legal Privacy" description="Legal Privacy" />
      <Header offset="0" />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12"></div>
          </div>
        </div>
      </section>
      <section className=" pt-big ">
        <div className="container-3">
          <div className="row pb-16">
            <div className="col-xs-12 align-center">
              <div className="fluid-1-b mb-48  "> Política de privacidad </div>
              <div className="text-16-r pb-16   ">
                
                <i>
                  <div className="variable">{content.empresa_corto} </div>
                </i>
              </div>
              <div className="barx "></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="p1  p-content">
                <span className="variable">{content.empresa_corto} </span> en
                adelante,
                <span className="variable">{content.empresa_corto} </span> ,
                con DNI <span className="variable">{content.empresa_dni}</span>,
                dirección en {content.empresa_legal_direccion} y
                correo electrónico <span className="variable">{content.email} </span>, titular y
                propietario del website <span className="variable">{content.website} </span> desde
                ahora, “el website” , garantiza la protección de todos los
                datos de carácter personal que proporcione el usuario en el
                website. En cumplimiento de lo establecido en la Ley Orgánica de
                Protección de Datos y el Reglamento General de Protección de
                Datos europeo, informa en la presente página sobre la política
                de protección de datos del website. A tenor de lo establecido en
                el párrafo anterior, se le informa de que:
                
<ul class="list-clear">

        <li>    


                <strong class="text-18-m">1 -</strong> En cumplimiento de lo establecido en la Ley Orgánica de Protección de Datos de
                Carácter Personal y el Reglamento  UE  2016/679 del Parlamento
                Europeo y del Consejo le informamos que mediante la
                cumplimentación de los formularios presentes en el website estás
                dando el consentimiento expreso, así como de todos los datos de
                carácter personal que proporcione el usuario en el website , a
                que éstos queden incorporados y sean tratados en el registro de
                actividades de tratamiento de datos personales creado al efecto
                y mantenido bajo la responsabilidad de <span className="variable">{content.empresa_corto} </span>con
                DNI <span className="variable">{content.empresa_dni}</span>,
                cuyo domicilio se sitúa en
                <span className="variable"> {content.empresa_legal_direccion} </span>
                </li>    <li>   
                <strong class="text-18-m">2 -</strong>  Los datos que se recojan a través del website son los
                suficientes y necesarios para las siguientes finalidades: Envío
                por medios electrónicos de información de publicidad, noticias y
                novedades relacionadas con los productos y servicios
                profesionales del titular, como asesoría, marketing de
                contenidos o formación  formulario de suscripción a
                newsletter . El tiempo de conservación es mientras dure el
                tratamiento, salvo que el usuario ejerza sus derechos de
                cancelación antes. Envío de los artículos o posts del apartado
                de “blog” del sitio web  formulario de suscripción a
                newsletter . El tiempo de conservación es mientras dure el
                tratamiento, salvo que el usuario ejerza sus derechos de
                cancelación antes. Análisis, gestión y resolución de consultas 
                formulario de contacto . El tiempo de conservación será
                mientras dure el tratamiento para la gestión de las consultas.
                Relación comercial con el cliente  formulario de contacto . El
                tiempo de conservación será el necesario para el tratamiento.
                Contratos y facturas cinco y diez años, respectivamente.
                Recogida y tratamiento automatizado de los datos personales,
                como consecuencia de la consulta, solicitud o suscripción de
                cualquier servicio/s de los ofrecidos por el propietario del
                website  formulario de suscripción a newsletter . El tiempo de
                conservación será mientras dure el tratamiento. Recogida y
                tratamiento automatizado de los datos personales, como
                consecuencia de la navegación por las páginas del website 
                puede ver más abajo la política de cookies . 
                </li>    <li>   
                <strong class="text-18-m">3 -</strong>  En la recogida y el tratamiento de los datos de carácter personal se han
                adoptado las medidas de seguridad adecuadas para evitar la
                pérdida, el acceso no autorizado o la manipulación de los
                mismos, de acuerdo con lo establecido en el Real Decreto
                1720/2007, de 21 de diciembre.
                </li>    <li>   
                <strong class="text-18-m">4 -</strong> El compromiso por parte del
                titular de proteger la información confidencial a la que tenga
                acceso. 
                </li>    <li>   
                <strong class="text-18-m">5 -</strong> El titular se compromete a que, estos datos
                personales no serán compartidos o cedidos a terceros sin el
                consentimiento expreso de los usuarios. La prestación de ciertos
                servicios, no obstante, puede requerir de transferencias de
                datos a terceros países, por ejemplo, la gestión de los
                boletines electrónicos. En estos casos, se garantiza su
                alojamiento en países de la Unión Europea  y por tanto el
                cumplimiento del Reglamento General de Protección de Datos
                europeo  o que estén acogidos al acuerdo EU-US Privacy Shield,
                aprobado por el Comité Europeo de Protección de Datos  consulta
                la información aquí:    <a href="https://www.privacyshield.gov/list"> https://www.privacyshield.gov/list</a>. 
                </li>    <li>   
                <strong class="text-18-m">6 -</strong>  En caso de facilitarnos datos de carácter personal de otras
                personas, lo hace con su consentimiento expreso y habiendo sido
                informado, con carácter previo, de los extremos contenidos en
                esta cláusula. Del mismo modo, rogamos nos comunique cualquier
                variación que pueda darse en los datos facilitados. El titular
                no se hace responsable de la cesión de datos de terceros que no
                hayan prestado su consentimiento ni tengan conocimiento de los
                contenidos de la presente cláusula, siendo responsabilidad de la
                persona que cede dichos datos al titular.
                </li>    <li>   
                <strong class="text-18-m">7 -</strong>  En caso de no facilitar los datos requeridos, los servicios de la página web
                podrían no estar disponibles en su totalidad. El hecho de no
                facilitar el correo electrónico, requisito para la suscripción a
                la newsletter, o su incorrecta transcripción en el formulario,
                impediría realizar las comunicaciones que constituyen su
                finalidad  al no poderlas recibir el usuario. De no facilitar
                los datos requeridos en el formulario de contacto  nombre,
                email, asunto y mensaje , no se podrían llevar a cabo de forma
                satisfactoria los servicios solicitados. La negación a aceptar
                la política de cookies podría suponer la pérdida de
                funcionalidades de la página web.
                </li>    <li>   
                <strong class="text-18-m">8 -</strong> El consentimiento expreso
                manifestado al rellenar el formulario de inscripción, comprende
                también lo siguiente: El titular se reserva el derecho a
                contratar a terceros para el tratamiento y gestión de las
                cuestiones de ámbito legislativo en general y, de lo relativo a
                protección de datos en concreto. En todos estos casos, el
                titular, obligará a la empresa contratada y/o profesional
                particular y a los encargados de la gestión del tratamiento de
                los datos personales cedidos, a firmar un documento de
                confidencialidad de datos personales para asegurar la privacidad
                de esta información. El titular se reserva el derecho a la
                subcontratación de empleados para la prestación de servicios de
                diversa índole, tales como el desarrollo, diseño y
                modificaciones del sitio web, así como cualquier otra actividad,
                para un conveniente desarrollo y organización del mismo. El
                usuario consiente en que se cedan sus datos personales cuando
                así sea requerido por las Autoridades administrativas
                competentes o por mandato judicial. 
                </li>    <li>   
                <strong class="text-18-m">9 -</strong>  El Usuario certifica que es mayor de 14 años y que por lo tanto posee la capacidad legal
                necesaria para la prestación del consentimiento en cuenta al
                tratamiento de sus datos de carácter personal y todo ello, de
                conformidad con lo establecido en la presente Política de
                Privacidad. 
                
                </li>    <li>   
                <strong class="text-18-m">10 -</strong>  El Usuario cuenta, en todo momento, con la
                posibilidad de ejercitar los derechos de acceso, rectificación,
                cancelación y oposición sobre sus datos personales enviando
                comunicación dirigida al propietario del website a la dirección
                de correo electrónico <span className="variable">{content.email} </span> o a través de
                los enlaces dispuestos a tal efecto en las notificaciones
                electrónicas.
                </li>    <li>   
                <strong class="text-18-m">11 -</strong>  El interesado tiene derecho a recibir los datos
                personales que le conciernen, que haya facilitado a un
                responsable del tratamiento, en un formato estructurado, de uso
                común y legible por máquina y tiene derecho a transmitir dichos
                datos a otro responsable del tratamiento sin impedimentos del
                responsable del tratamiento al que haya facilitado los datos. 
                </li>    <li>   
                <strong class="text-18-m">12 -</strong> En determinadas circunstancias, los interesados podrán solicitar
                la limitación del tratamiento de sus datos, en cuyo caso
                únicamente los conservaremos para el ejercicio o la defensa de
                reclamaciones. 
                </li>    <li>   
                <strong class="text-18-m">13 -</strong>  El usuario tiene derecho a retirar el
                consentimiento prestado.
                </li>    <li>   
                <strong class="text-18-m">14 -</strong>  El usuario tiene derecho a reclamar
                ante la Autoridad de Control. 
                </li>    <li>  
                <strong class="text-18-m">15 -</strong>  El Usuario autoriza al
                tratamiento de los datos personales cedidos al titular en los
                términos establecidos en la presente cláusula.
                </li>  

                </ul>
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

export default LegalPrivacy
