import React, { Component } from 'react';
import General from './components/General';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import GeneneralPreview from './components/previews/GeneralPreview';
import WorkExperiencePreviewList from './components/WorkExperiencePreviewList';
import EducationPreviewList from './components/EducationPreviewList';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			general: {
				name: 'John',
				surname: 'Doe',
				role: 'Software Engineer',
				phone: '123123123',
				email: 'johndoe@gmail.com',
				description: 'lorem ipsum',
			},
			workExperience: [
				{
					id: crypto.randomUUID(),
					companyName: 'Janusz Soft',
					position: 'Web Developer',
					startDate: '21-10-2022',
					endDate: '21-10-2024',
					description: 'lorem ipsum dolor samet',
				},
			],
			education: [
				{
					id: crypto.randomUUID(),
					major: 'Computer Science',
					university: 'MIT',
					startDate: '21-10-2022',
					endDate: '21-10-2024',
					description: 'lorem ipsum dolor samet',
				},
			],
		};

		this.handleGeneralChange = this.handleGeneralChange.bind(this);
		this.handleWorkExperienceChange =
			this.handleWorkExperienceChange.bind(this);
		this.handleEducationChange = this.handleEducationChange.bind(this);
		this.handleAddForm = this.handleAddForm.bind(this);
	}

	handleGeneralChange(e) {
		const { target } = e;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;

		this.setState((prevState) => ({
			general: { ...prevState.general, [name]: value },
		}));
	}

	handleWorkExperienceChange(e, id) {
		const { target } = e;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;

		this.setState((prevState) => {
			// Find the index of the object with the matching id
			const index = prevState.workExperience.findIndex(
				(item) => item.id === id
			);

			// Create a new array with the same items, but with the object at the index updated
			const workExperience = [
				...prevState.workExperience.slice(0, index),
				{ ...prevState.workExperience[index], [name]: value },
				...prevState.workExperience.slice(index + 1),
			];

			// Return the updated state
			return { workExperience };
		});
	}

	handleEducationChange(e, id) {
		const { target } = e;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;

		this.setState((prevState) => {
			// Find the index of the object with the matching id
			const index = prevState.education.findIndex(
				(item) => item.id === id
			);

			// Create a new array with the same items, but with the object at the index updated
			const education = [
				...prevState.education.slice(0, index),
				{ ...prevState.education[index], [name]: value },
				...prevState.education.slice(index + 1),
			];

			// Return the updated state
			return { education };
		});
	}

	handleAddForm(type) {
		const emptyForm =
			type === 'work'
				? {
						id: crypto.randomUUID(),
						companyName: '',
						position: '',
						startDate: '',
						endDate: '',
						description: '',
				  }
				: {
						id: crypto.randomUUID(),
						major: '',
						university: '',
						startDate: '',
						endDate: '',
						description: '',
				  };

		this.setState((prevState) => ({
			[type]: [...prevState[type], emptyForm],
		}));
	}

	// handleAddWork() {
	// 	this.setState((prevState) => ({
	// 		workExperience: [
	// 			...prevState.workExperience,
	// 			{
	// 				id: crypto.randomUUID(),
	// 				companyName: '',
	// 				position: '',
	// 				startDate: '',
	// 				endDate: '',
	// 				description: '',
	// 			},
	// 		],
	// 	}));
	// }

	render() {
		const { general, workExperience, education } = this.state;

		return (
			<main className="mx-auto flex max-w-7xl flex-col space-y-10 py-10 px-8 text-sm lg:flex-row lg:space-x-10 lg:space-y-0">
				<section className="space-y-8 lg:flex-1">
					<General
						general={general}
						handleGeneralChange={this.handleGeneralChange}
					/>
					<WorkExperience
						workExperience={workExperience}
						handleWorkExperienceChange={
							this.handleWorkExperienceChange
						}
						handleAddForm={this.handleAddForm}
					/>
					<Education
						education={education}
						handleEducationChange={this.handleEducationChange}
						handleAddForm={this.handleAddForm}
					/>
				</section>
				<section className="lg:sticky lg:top-10 lg:flex-[2] lg:self-start">
					<GeneneralPreview general={general} />
					<WorkExperiencePreviewList
						workExperience={workExperience}
					/>
					<EducationPreviewList education={education} />
				</section>
			</main>
		);
	}
}

export default App;
