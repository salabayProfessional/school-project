import Networks from '../../_commonComponents/Networks/Networks';

const Map = () => {
	
	return (
		<article className="map">
			<div className="map-inner">
				<h3 className="map-title">як нас знайти</h3>
				
				<div className="map-content">
					<img src="image/home/map.png" height="400" alt="Map" />
					
					<div className="map-content-block">
						<p className="map-content-block-title">контакти</p>
						
						<p className="map-content-block-phone-1">(032) 252-68-86</p>						
						<p className="map-content-block-phone-2">38 (098) 064-21-85</p>						
						<p className="map-content-block-mail">lvpuktb@gmail.com</p>
						
						<p className="map-content-block-location-1">вул. Авраама Лінкольна, 23,</p>
						<p className="map-content-block-location-2">Львів, Львівська область, 79000</p>
						
						<div className="map-content-block-networks">
							<Networks />
						</div>
						
						<p className="map-content-block-message">З радістю чекаємо зустрічі з вами!</p>
					</div>
				</div>
			</div>
		</article>
	)
};

export default Map;