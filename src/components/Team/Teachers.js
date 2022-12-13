import Team from './Team';

import { 
	TITLE,
	ARTICLES_TEACHERS,
	ARTICLES_PROPS
} from '../../constants/team';

const Teachers = () => {
	return (
		<>
			<Team
				title={TITLE}
				articles={ARTICLES_TEACHERS}
				role={'teachers'}
				articlesProps={ARTICLES_PROPS}
			/>
		</>
	)
};

export default Teachers;