import { PARTNERS } from '../../../constants/home';

const Partners = () => {
	const partnerList = PARTNERS.map((item, index) => (
		<li className="partners-item" key={index}>
			<img src={item} height="110" width="110" alt="Partners" />
		</li>
	));
	
	return (
		<article className="partners">
			<div className="partners-inner">
				<h3 className="partners-title">співпраця та проєкти</h3>
				
				<ul className="partners-items">{partnerList}</ul>
			</div>
		</article>
	)
};

export default Partners;