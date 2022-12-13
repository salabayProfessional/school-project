import { useState } from 'react';

import Top from './Top/Top';
import Bottom from './Bottom/Bottom';

const Header = () => {
	const [isSmall, setIsSmall] = useState(false);
	
	const scrolListener = (that) => {
		const top = that.scrollY;
		
		if (top > 10 && !isSmall) {
			setIsSmall(true);
		} else if (top <= 10 && isSmall) {
			setIsSmall(false);
		}
	};
	
	window.addEventListener('scroll', function(){
		setTimeout(() => {
			scrolListener(this);
		}, 1000);
	});
	
	return (
		<header className="header">
			<Top
				isSmall={isSmall}
			/>
			
			<Bottom
				isSmall={isSmall}
			/>
		</header>
	)
};

export default Header;