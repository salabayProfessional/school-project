import NavSecond from '../NavSecond/NavSecond';

const Pattern = (props) => {
	const {
		title
	} = props;
	
	return (
		<article className="pattern">
			<div className="pattern-left">
				<NavSecond />
			</div>
			
			<main className="pattern-right">
				{	title !== '' &&		
					<h3 className="pattern-right-title">{title}</h3>
				}
				
				{props.children}
			</main>
		</article>
	)
};

export default Pattern;