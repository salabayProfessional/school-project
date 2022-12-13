import Navigation from './Navigation/Navigation';

const Bottom = ({ isSmall }) => {
	return (
		<section className={`header-bottom header-bottom-${isSmall ? 'small' : 'big'}`}>
			<p className={`header-bottom-subtitle header-bottom-subtitle-${isSmall ? 'small' : 'big'}`}>
				Державний професійно-технічний навчальний заклад
			</p>
			
			<h3 className={`header-bottom-subtitle header-bottom-subtitle-${isSmall ? 'small' : 'big'}`}>
				Львівське вище професійне училище комп’ютерних технологій та будівництва
			</h3>
			
			<div className="header-bottom-nav">
				<Navigation />
			</div>			
		</section>
	)
};

export default Bottom;