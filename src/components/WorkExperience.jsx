import React, { Component } from 'react';
import WorkExperienceForm from './forms/WorkExperienceForm';

class WorkExperience extends Component {
	render() {
		const { workExperience, handleWorkExperienceChange, handleAddForm } =
			this.props;

		return (
			<div>
				<h3 className="mb-2 text-lg font-bold">Work Experience</h3>
				<div className="space-y-8">
					{workExperience.map((workExperienceState) => (
						<WorkExperienceForm
							key={workExperienceState.id}
							workExperience={workExperienceState}
							handleWorkExperienceChange={
								handleWorkExperienceChange
							}
						/>
					))}
				</div>
				<button
					type="button"
					onClick={() => handleAddForm('workExperience')}
					className="mt-4 rounded-md bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
				>
					Add
				</button>
			</div>
		);
	}
}

export default WorkExperience;
