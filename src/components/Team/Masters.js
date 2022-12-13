import Team from './Team';

import { 
	TITLE,
	ARTICLES_MASTERS,
	ARTICLES_PROPS
} from '../../constants/team';

const Masters = () => {
	return (
		<>
			<Team
				title={TITLE}
				articles={ARTICLES_MASTERS}
				role={'masters'}
				articlesProps={ARTICLES_PROPS}
			/>
		</>
	)
};

export default Masters;