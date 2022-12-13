import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { NAV_SECOND_LIST } from '../../../constants/main';

const NavSecond = () => {
	const languageId = 0;
	const navSecondList = NAV_SECOND_LIST[languageId];
	const itemsRef = useRef();
	
	const items = navSecondList.map(obj => {
		const { menuTitle } = obj;		
		return (
			<li key={menuTitle} className="navigation-second-item">
				{ !obj.hasOwnProperty('items')
					&&
					<div className="navigation-second-item-empty">
						<Link className="menutitle" to={obj.url}>{menuTitle}</Link>
					</div>
				}
				
				{
					obj.hasOwnProperty('items')
					&&
					<div className="navigation-second-item" key={menuTitle}>
						<p className="menutitle">{menuTitle}</p>
					
						<ul className="navigation-second-item-subtitles">
							{
								obj.items.map(({ title, url }) => {
									return (
										<li className="navigation-second-item-subtitles" key={title}>
											<Link to={url}>{title}</Link>
										</li>
									)
								})
							}
						</ul>
					</div>
				}
			</li>
		)		
	});
	
	const gamburgerClicked = () => {		
		itemsRef.current.style.display = 'flex';
	};
	
	const closeClicked = () => {
		itemsRef.current.style.display = 'none';
	};
	
	return (
		<nav className="navigation-second" >			
			<div
				className="navigation-second-close"
				onClick={closeClicked}
			>
				X
			</div>
		
			<ul
				className="navigation-second-items"
				ref={itemsRef}
			>
				{items}
			</ul>
			
			<div className="navigation-second-gamburger"
				onClick={gamburgerClicked}
			>
				<div className="navigation-second-gamburger-line" />
				<div className="navigation-second-gamburger-line" />
				<div className="navigation-second-gamburger-line" />
			</div>
		</nav>
	)
};

export default NavSecond;