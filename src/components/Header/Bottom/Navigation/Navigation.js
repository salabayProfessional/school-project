import { useHistory } from 'react-router-dom';

import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { NAV_LIST } from '../../../../constants/main';

const Navigation = () => {
	const languageId = 0;
	const navList = NAV_LIST[languageId];
	
	let history = useHistory();
	
	const clicked = url => {
		history.push(url);
	};
	
	const items = navList.map((obj, index) => {
		const { menuTitle } = obj;
		
		return (
			<li key={menuTitle} className="header-navigation-item">
				{ // Item only				
					!obj.hasOwnProperty('items')
					&&
					<div onClick={() => clicked(obj.url)}
						className="header-navigation-item-empty"
					>
						<Menu menuButton={<MenuButton>{menuTitle}</MenuButton>} key={index} transition>				
							<div style={{ display: 'none' }}>
								<MenuItem key={index}>{menuTitle}</MenuItem>
							</div>
						</Menu>
					</div>
				}
				
				{ // Item & Items & SubItems
					obj.hasOwnProperty('items')
					&&
					<Menu menuButton={<MenuButton>{menuTitle}</MenuButton>} transition>				
						{ obj.items.map((item, index) => {							
							if (!obj.hasOwnProperty('subitems')) {
								// 1. Item & Items
								return (
									<MenuItem onClick={() => clicked(item.url)} key={index}>{item.title}</MenuItem>
								)
							} else {
								// 2. Item & Items & SubItems
								return null;
								
								// console.log(1, obj)
								// return (
									// <SubMenu label={obj.title} key={index}>
										// {
											// obj.subitems.map((item, index) => (
												// <MenuItem>{item}</MenuItem>												
											// ))
										// }
									// </SubMenu>
								// )
							}
							})				
						}
					</Menu>
				}
			</li>
		)		
	});
	
	return (
		<nav className="header-navigation">
			<ul className="header-navigation-items">{items}</ul>
		</nav>
	)
};

export default Navigation;