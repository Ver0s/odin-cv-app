import React, { Component } from 'react';
import General from './components/General';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import GeneneralPreview from './components/GeneralPreview';
import WorkExperiencePreview from './components/WorkExperiencePreview';
import EducationPreview from './components/EducationPreview';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			general: {
				name: '',
				surname: '',
				role: '',
				phone: '',
				email: '',
				description: '',
			},
			// workExperience: [
			// 	{
			// 		id: crypto.randomUUID(),
			// 		companyName: '',
			// 		position: '',
			// 		startDate: '',
			// 		endDate: '',
			// 		description: '',
			// 	},
			// ],
		};

		this.handleGeneralChange = this.handleGeneralChange.bind(this);
	}

	handleGeneralChange(e) {
		const { target } = e;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;

		this.setState({
			// eslint-disable-next-line react/no-access-state-in-setstate
			general: { ...this.state.general, [name]: value },
		});
	}

	render() {
		return (
			<main className="mx-auto flex max-w-7xl flex-col space-y-10 py-10 px-8 lg:flex-row lg:space-x-10">
				<section className="space-y-8 text-sm lg:flex-1">
					<General
						general={this.state.general}
						handleGeneralChange={this.handleGeneralChange}
					/>
					<WorkExperience />
					<Education />
				</section>
				<section className="lg:flex-[2] lg:self-start">
					<GeneneralPreview general={this.state.general} />
					<WorkExperiencePreview />
					<EducationPreview />
				</section>
			</main>
		);
	}
}

export default App;
