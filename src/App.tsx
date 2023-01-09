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
				phone: '123 123 123',
				email: 'johndoe@gmail.com',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
			workExperience: [
				{
					id: crypto.randomUUID(),
					companyName: 'Janusz Soft',
					position: 'Web Developer',
					startDate: 'Sep 2022',
					endDate: 'Sep 2024',
					description:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
				},
			],
			education: [
				{
					id: crypto.randomUUID(),
					major: 'Computer Science',
					university: 'MIT',
					startDate: 'Jan 2019',
					endDate: 'Apr 2022',
					description:
						'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum.',
				},
			],
		};

		this.handleGeneralChange = this.handleGeneralChange.bind(this);
		this.handleAddForm = this.handleAddForm.bind(this);
		this.handleDeleteForm = this.handleDeleteForm.bind(this);
		this.handleArrayChange = this.handleArrayChange.bind(this);
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

	handleArrayChange(e, id, type) {
		const { target } = e;
		const value =
			target.type === 'checkbox' ? target.checked : target.value;
		const { name } = target;

		this.setState((prevState) => {
			// Find the index of the object with the matching id
			const index = prevState[type].findIndex((item) => item.id === id);

			// Create a new array with the same items, but with the object at the index updated
			const updatedArray = [
				...prevState[type].slice(0, index),
				{ ...prevState[type][index], [name]: value },
				...prevState[type].slice(index + 1),
			];

			// Return the updated state
			return { [type]: updatedArray };
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

	handleDeleteForm(type, id) {
		this.setState((prevState) => ({
			[type]: prevState[type].filter((item) => item.id !== id),
		}));
	}

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
						handleArrayChange={this.handleArrayChange}
						handleAddForm={this.handleAddForm}
						handleDeleteForm={this.handleDeleteForm}
					/>
					<Education
						education={education}
						handleArrayChange={this.handleArrayChange}
						handleAddForm={this.handleAddForm}
						handleDeleteForm={this.handleDeleteForm}
					/>
				</section>
				<section className="rounded-md border border-gray-300 p-10 lg:sticky lg:top-10 lg:flex-[2] lg:self-start">
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
