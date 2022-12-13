import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import IntroductoryCompaign from '../components/IntroductoryCompaign';
import History from '../components/History/History';
import News from '../components/News/News';
import Callery from '../components/AboutUs/Callery/Callery';
import Booling from '../components/Booling/Booling';

import Administrations from '../components/Team/Administrations';
import Teachers from '../components/Team/Teachers';
import Masters from '../components/Team/Masters';
import Accounting from '../components/Team/Accounting';
import Urist from '../components/Team/Urist';
import Personal from '../components/Team/Personal';

import Specialties from '../components/Specialties/Specialties';
import LinkPattern from '../components/LinkPattern/LinkPattern';
import LifeSafetly from '../components/LifeSafetly/LifeSafetly';

// Appliciants
import ComputerProfession from '../components/Appliciants/Professions/Professions1/ComputerProfession';
import BuildingProfession from '../components/Appliciants/Professions/Profession2/BuildingProfession';
import CarProfession from '../components/Appliciants/Professions/Profession3/CarProfession';
import AdmissionRules from '../components/Appliciants/AdmissionRules/AdmissionRules';
import AdmissionComitee from '../components/Appliciants/AdmissionCommitee/AdmissionComitee';
import OnlineApplication from '../components/Appliciants/OnlineApplication/OnlineApplication';

// For students
import InsideRules from '../components/ForStudents/InsideRules/InsideRules';
import RightsAndDuties from '../components/ForStudents/RightsAndDuties/RightsAndDuties';
import RulesOfBehavior from '../components/ForStudents/RulesOfBehavior/RulesOfBehavior';
import LessonsTimetable from '../components/ForStudents/LessonsTimetable/LessonsTimetable';
import SchoolBreaktime from '../components/ForStudents/SchoolBreaktime/SchoolBreaktime';
import DistanceLearning from '../components/ForStudents/DistanceLearning/DistanceLearning';
import ZNO from '../components/ForStudents/ZNO/ZNO';
import Exracurriculas from '../components/ForStudents/Exracurriculas/Exracurriculas';
import StudentGoverment from '../components/ForStudents/StudentGoverment/StudentGoverment';

// EducationProcess
import Plan from '../components/EducationProcess/Plan/Plan';
import PracticeActivities from '../components/EducationProcess/PracticeActivities/PracticeActivities';
import EducationWork from '../components/EducationProcess/EducationWork/EducationWork';
import PracticeCenter from '../components/EducationProcess/PracticeCenter/PracticeCenter';
import MethodicalWork from '../components/EducationProcess/MethodicalWork/MethodicalWork';
import SubjectWeeks from '../components/EducationProcess/SubjectWeeks/SubjectWeeks';
import Competitions from '../components/EducationProcess/Competitions/Competitions';
import InclusiveEducation from '../components/EducationProcess/InclusiveEducation/InclusiveEducation';
import EJournal from '../components/EducationProcess/EJournal/EJournal';

// Public information
import Licenses from '../components/PublicInformation/Licenses/Licenses';
import Vacancy from '../components/PublicInformation/Vacancy/Vacancy';
import Reporting from '../components/PublicInformation/Reporting/Reporting';
import Regulation from '../components/PublicInformation/Regulation/Regulation';
import Licensing from '../components/PublicInformation/Licensing/Licensing';
import EducationLanguage from '../components/PublicInformation/EducationLanguage/EducationLanguage';
import Certificats from '../components/PublicInformation/Certificats/Certificats';
import ProfessionalStandart from '../components/PublicInformation/ProfessionalStandart/ProfessionalStandart';
import EducationalPrograms from '../components/PublicInformation/EducationalPrograms/EducationalPrograms';
import LicensedAmount from '../components/PublicInformation/LicensedAmount/LicensedAmount';
import Monitoring from '../components/PublicInformation/Monitoring/Monitoring';
import Codex from '../components/PublicInformation/Codex/Codex';
import Service from '../components/PublicInformation/Service/Service';
import OfficialInformation from '../components/PublicInformation/OfficialInformation/OfficialInformation';
import Dormitory from '../components/PublicInformation/Dormitory/Dormitory';

// Collaboration
import OurPartners from '../components/Collaboration/OurPartners';
import Projects from '../components/Collaboration/Projects';

// Support
import Psychologist from '../components/Support/Psychologist';
import SocialTeacher from '../components/Support/SocialTeacher';
import Nurse from '../components/Support/Nurse';

// Left menu some items...
import Covid from '../components/Covid/Covid';
import Library from '../components/Library/Library';
import DormitoryTeachers from '../components/Dormitory/DormitoryTeachers';

import DiningRoom from '../components/DiningRoom/DiningRoom';

import UsefulLinks from '../components/UsefulLinks/UsefulLinks';

// TO DO error page

export default () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/compaign" component={IntroductoryCompaign} />
				<Route exact path="/history" component={History} />
				<Route exact path="/news" component={News} />
				<Route exact path="/gallery" component={Callery} />
				<Route exact path="/booling" component={Booling} />
				
				<Route exact path="/administrations" component={Administrations} />
				<Route exact path="/teachers" component={Teachers} />
				<Route exact path="/masters" component={Masters} />
				<Route exact path="/accounting" component={Accounting} />
				<Route exact path="/urist" component={Urist} />
				<Route exact path="/personal" component={Personal} />
				
				<Route exact path="/specialties" component={Specialties} />
				<Route exact path="/link-pattern" component={LinkPattern} />
				<Route exact path="/life-safetly" component={LifeSafetly} />
				
				<Route exact path="/professions-1" component={ComputerProfession} />
				<Route exact path="/professions-2" component={BuildingProfession} />
				<Route exact path="/professions-3" component={CarProfession} />
				<Route exact path="/admission-rules" component={AdmissionRules} />
				<Route exact path="/admission-commitee" component={AdmissionComitee} />
				<Route exact path="/online-application" component={OnlineApplication} />
				
				<Route exact path="/inside-rules" component={InsideRules} />
				<Route exact path="/rights-and-duties" component={RightsAndDuties} />
				<Route exact path="/rules-of-behavior" component={RulesOfBehavior} />
				<Route exact path="/lessons-timetable" component={LessonsTimetable} />
				<Route exact path="/school-breaktime" component={SchoolBreaktime} />
				<Route exact path="/distance-learning" component={DistanceLearning} />
				<Route exact path="/zno" component={ZNO} />
				<Route exact path="/exracurriculas" component={Exracurriculas} />
				<Route exact path="/student-goverment" component={StudentGoverment} />
				
				<Route exact path="/plan" component={Plan} />
				<Route exact path="/practice-activities" component={PracticeActivities} />
				<Route exact path="/education-work" component={EducationWork} />
				<Route exact path="/practice-center" component={PracticeCenter} />
				<Route exact path="/methodical-work" component={MethodicalWork} />
				<Route exact path="/subject-weeks" component={SubjectWeeks} />
				<Route exact path="/competitions" component={Competitions} />
				<Route exact path="/inclusive-education" component={InclusiveEducation} />
				<Route exact path="/e-journal" component={EJournal} />
				
				<Route exact path="/vacancy" component={Vacancy} />
				<Route exact path="/education-language" component={EducationLanguage} />
				<Route exact path="/regulation" component={Regulation} />
				<Route exact path="/licensing" component={Licensing} />
				<Route exact path="/reporting" component={Reporting} />
				<Route exact path="/certificats" component={Certificats} />
				<Route exact path="/licenses" component={Licenses} />
				<Route exact path="/professional-standart" component={ProfessionalStandart} />
				<Route exact path="/educational-programs" component={EducationalPrograms} />
				<Route exact path="/licensed-amount" component={LicensedAmount} />
				<Route exact path="/monitoring" component={Monitoring} />
				<Route exact path="/codex" component={Codex} />
				<Route exact path="/service" component={Service} />
				<Route exact path="/official-information" component={OfficialInformation} />
				<Route exact path="/dormitory" component={Dormitory} />
				
				<Route exact path="/our-partners" component={OurPartners} />
				<Route exact path="/projects" component={Projects} />
				
				<Route exact path="/psychologist" component={Psychologist} />
				<Route exact path="/social-teacher" component={SocialTeacher} />
				<Route exact path="/nurse" component={Nurse} />
				
				<Route exact path="/covid" component={Covid} />
				
				<Route exact path="/library" component={Library} />
				<Route exact path="/dormitory-teachers" component={DormitoryTeachers} />
				
				<Route exact path="/dining-room" component={DiningRoom} />
				
				<Route exact path="/useful-links" component={UsefulLinks} />
			</Switch>
		</Router>
	)
};