const ButtonLine = ({ text, clicked}) => {
	return (
		<button className="button-line" onClick={() => clicked()}>
			{text}
		</button>
	)
};

export default ButtonLine;