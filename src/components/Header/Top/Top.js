import React from 'react';

import Networks from '../../_commonComponents/Networks/Networks';
import { PHONE } from '../../../constants/main';

const Top = ({ isSmall }) => {
	return (
		<section className={`header-top header-top-${isSmall ? 'small' : 'big'}`}>
			<div className="header-top-phone">
				<img src={PHONE.imgPath} width="14" height="14" alt="Icon" />
				<span>{PHONE.number}</span>
			</div>
		
			<div className="header-top-networks">
				<Networks />
			</div>
			
			<div className="header-top-languages">
				UA EN
			</div>
		</section>
	)
};

export default Top;