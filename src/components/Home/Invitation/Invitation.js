import ButtonYellow from '../../_commonComponents/ButtonYellow';

const Invitation = () => {	
	return (
		<article className="invitation">
			<div className="invitation-inner">
				<img className="invitation-image" src="image/home/invitation.png" height="440" alt="invitation" />
				
				<div className="invitation-block" />
				
				<h3 className="invitation-title">Дізнайся більше про свої можливості в нашому училищі</h3>
				
				<div className="invitation-button">
					<a href="compaign">
						<ButtonYellow text="Вступна кампанія" />
					</a>
				</div>
			</div>
		</article>
	)
};

export default Invitation;