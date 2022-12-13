const Block = ({ content }) => {	
	const items = content.map((item, index) => (
		<li className="advertisement-block-item" key={index}>
			{item}
		</li>
	));
	
	return (
		<div className="advertisement-block">
			<ul className="advertisement-block-items">
				{items}
			</ul>
		</div>
	)
};

export default Block;