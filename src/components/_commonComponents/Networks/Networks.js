import { NETWORKS } from '../../../constants/_commonComponents/networks';

const Networks = ({ isWhite = false }) => {
	return (
		<div className="networks">
			<ul className="networks-items">
				{
					!isWhite
					&&
					NETWORKS.map(({ imgPath, url }, index) => (
						<li className="networks-item" key={index}>
							<a href={url} target="_black">
								<img src={imgPath} width="20" height="20" alt="Network" />
							</a>
						</li>
					))
				}
				
				{
					isWhite
					&&
					NETWORKS.map(({ imgWhitePath, url }, index) => (
						<li className="networks-item" key={index}>
							<a href={url} target="_black">
								<img src={imgWhitePath} width="20" height="20" alt="Network" />
							</a>
						</li>
					))
				}
			</ul>
		</div>
	)
};

export default Networks;