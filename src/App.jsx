import React, { Component } from 'react';
import General from './components/General';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import GeneneralPreview from './components/GeneralPreview';
import WorkExperiencePreview from './components/WorkExperiencePreview';
import EducationPreview from './components/EducationPreview';

class App extends Component {
	render() {
		return (
			<main className="mx-auto flex h-screen max-w-7xl space-x-10 py-10 px-8">
				<section className="flex-1 space-y-8 text-sm">
					<General />
					<WorkExperience />
					<Education />
				</section>
				<section className="flex-[2] border border-black p-4">
					<GeneneralPreview />
					<WorkExperiencePreview />
					<EducationPreview />
				</section>
			</main>
		);
	}
}

export default App;
