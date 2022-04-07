import React from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/footer";
import Header from "../components/header";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/seo";
import Helmet from "react-helmet";
const LegalCookies = () => {
	const data = useStaticQuery(graphql`
		query LegalCookiesSectionQuery {
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
	`);
	const content = data.markdownRemark.frontmatter;
	return (
		<>
			<Helmet>
				<meta name="robots" content="noindex" />
			</Helmet>
			<Seo title="Legal Cookies" description="Legal Cookies" />
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
							<div className="fluid-1-b mb-48  "> Política de cookies </div>
							<div className="text-16-r pb-16   ">
								<i>
									<span className="variable"> {content.empresa_corto} </span>
								</i>
							</div>
							<div className="barx "></div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<div className="  p-content">
								<p className="p1 mb-32">
									En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley
									34/2002, de 11 de julio, de Services de la Sociedad de la
									Información y de Comercio Electrónico,
									<span className="variable"> {content.empresa_corto}</span>,
									titular y propietario del website
									<span className="variable"> {content.website}, </span>
									le informa en esta sección la política de recogida y
									tratamiento de cookies propias y de terceros con fines de
									Análisis, Personalización, de Marketing y Técnicos en dicho
									website. Las cookies son pequeños archivos de texto que las
									páginas web almacenan en el navegador del usuario que las
									visita para hacer más eficiente la experiencia del usuario.
									Esta página web utiliza cookies propias y de terceros para
									personalizar el contenido y los anuncios, ofrecer funciones de
									redes sociales y analizar el tráfico. 
                  <br />
                  Además, compartimos
									información sobre el uso que haga del sitio web con Our
									partners de redes sociales, publicidad y análisis web, quienes
									pueden combinarla con otra información que les haya
									proporcionado o que hayan recopilado a partir del uso que haya
									hecho de sus servicios. Algunas cookies son esenciales para el
									funcionamiento del sitio, por ejemplo el buscador incorporado.
									Otras se usan para para recopilar información con fines
									estadísticos y de uso de la web. El uso del website implica la
									aceptación del uso de cookies para los fines y usos que se
									citan en la presente Política de Cookies. En este enlace puede
									consultar cómo usa Google los datos cuando utilizas las
									aplicaciones o los sitios web sus partners.
								</p>
								<h6 className="h3">
									USO DE COOKIES SEGÚN LA GESTIÓN Y EL TIEMPO ACTIVAS
								</h6>
								<p className="p1 mb-32">
									Esta página web utiliza servicios de terceros para recopilar
									información con fines estadísticos y de uso de la web. En
									concreto, Cookies propias, Cookies de terceros, de sesión y
									activas para fines de Análisis, Personalización, de Marketing
									y Técnicos. La siguiente información de los tipos de cookies
									que contiene esta página ayuda a comprender mejor las
									funciones que hacen posible: Según el tiempo de permanencia en
									el navegador, se dividen en:
								</p>
								<h5 className="h4">Cookies de sesión:</h5>
								<p className="p1 mb-32">
									Son cookies temporales que permanecen en el espacio de cookies
									de su equipo hasta que cierra el navegador, por lo que ninguna
									queda registrada en el disco del usuario. La información
									obtenida por medio de estas cookies sirve para hacer posible
									la gestión operativa con cada uno de los usuarios que está
									accediendo de forma simultánea a la web.
								</p>
								<h5 className="h4">Cookies persistentes: </h5>
								<p className="p1 mb-32">
									Son cookies que permanecen almacenadas en el espacio de
									cookies de su equipo una vez cerrado el navegador, y que
									volverá a consultar dicha página web la próxima vez que acceda
									a ella para recordar información que facilite la navegación
									(acceder directamente al servicio sin necesidad de hacer el
									proceso de login) o la prestación de un servicio comercial
									(ofrecer aquellos productos o servicios relacionados con
									anteriores visitas).
								</p>

								<p className="p1 mb-32">
                  Además, las cookies intercambiadas al navegar por una página web
                  pueden ser:
                </p>

								<h5 className="h4">Cookies de origen o propias: </h5>
								<p className="p1 mb-32">
									Son cookies generadas por la propia página web que se está
									visitando.
								</p>
								<h5 className="h4">Cookies de terceros: </h5>
								<p className="p1 mb-32">
									Son cookies que se reciben al navegar por esa página web, pero
									que han sido generadas por un tercer servicio que se encuentra
									hospedado en ella. Un ejemplo puede ser la cookie empleada por
									un anuncio o banner de publicidad que se encuentra en la
									página web que visitamos.
								</p>
								<p className="p1 mb-32">
                  Otro puede ser la cookie empleada por un contador de visitantes
                  contratado por la página web que visitamos.
                </p>
								<h6 className="h4">SEGÚN SU FINALIDAD </h6>
								<p className="p1 mb-32">
									En virtud de su finalidad, utilizamos cookies de Análisis,
									Personalización, de Marketing y Técnicas (o necesarias):
									Necesarias: Permiten al usuario la navegación a través de una
									página web, plataforma o aplicación y la utilización de las
									diferentes opciones o servicios que en ella existan como, por
									ejemplo, controlar el tráfico y la comunicación de datos,
									identificar la sesión, acceder a partes de acceso restringido,
									recordar los elementos que integran un pedido, realizar el
									proceso de compra de un pedido, realizar la solicitud de
									inscripción o participación en un evento, utilizar elementos
									de seguridad durante la navegación, almacenar contenidos para
									la difusión de videos o sonido o compartir contenidos a través
									de redes sociales.
								</p>
							</div>
						</div>
					</div>
				</div>

			</section>
			<ContactSection />
			<Footer />
		</>
	);
};
export default LegalCookies;
