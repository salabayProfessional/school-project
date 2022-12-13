import { BENEFITS } from '../../../constants/home';

const Benefits = () => {	
	const benefitsList = BENEFITS.map(({ imgPath, text }, index) => (
		<li className="benefits-item" key={index}>
			<div className="benefits-item-top">
				<img src={imgPath} alt="Logo" />
			</div>
			
			<div className="benefits-item-bottom">
				{text}
			</div>
		</li>
	));
	
	return (
		<article className="benefits">
			<ul className="benefits-items">{benefitsList}</ul>
		</article>
	)
};

export default Benefits;