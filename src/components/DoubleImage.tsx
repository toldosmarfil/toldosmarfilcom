import React from "react";
import Image from "./Image";

const DoubleImage = ({ title, subTitle, images }) => {
	return (
		<>
			<section className="">
				<div className="container">
					<div className="row height-xl">
						<p className="supertitle ">{title}</p>

						<div
							className="col-xs-4"
							style={{
								backgroundImage: `url(assets/images/toldos2.jpg)`,
								backgroundPosition: "center center",
								backgroundSize: "cover",
							}}
						></div>

						<div
							className="col-xs-8"
							style={{
								backgroundImage: `url(assets/images/toldos1.jpg)`,
								backgroundPosition: "center center",
								backgroundSize: "cover",
							}}
						></div>
					</div>
				</div>
			</section>
		</>
	);
};

export default DoubleImage;
