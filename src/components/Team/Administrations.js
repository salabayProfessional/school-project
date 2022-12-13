import Team from './Team';

import { 
	TITLE,
	ARTICLES_ADMINISTRATION,
	ARTICLES_PROPS
} from '../../constants/team';

const Administrations = () => {
	return (
		<>
			<Team
				title={TITLE}
				articles={ARTICLES_ADMINISTRATION}
				role={'administration'}
				articlesProps={ARTICLES_PROPS}
			/>
		</>
	)
};

export default Administrations;