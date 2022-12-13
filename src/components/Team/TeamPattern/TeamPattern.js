const TeamPattern = (props) => {
	const {
		title
	} = props;
	
	return (
		<article className="team-pattern">
			{	title !== '' &&		
				<h3 className="team-pattern-title">{title}</h3>
			}
				
			{props.children}			
		</article>
	)
};

export default TeamPattern;