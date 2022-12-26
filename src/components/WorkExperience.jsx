import React, { Component } from 'react';
import WorkExperienceForm from './forms/WorkExperienceForm';

class WorkExperience extends Component {
	render() {
		const {
			workExperience,
			handleArrayChange,
			handleAddForm,
			handleDeleteForm,
		} = this.props;

		return (
			<div>
				<div className="mb-2 flex items-center justify-between">
					<h3 className="text-lg font-bold">Work Experience</h3>
					<button
						type="button"
						onClick={() => handleAddForm('workExperience')}
						className="rounded-md bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
					>
						Add
					</button>
				</div>
				<div className="space-y-8">
					{workExperience.map((workExperienceState) => (
						<div key={workExperienceState.id}>
							<WorkExperienceForm
								workExperience={workExperienceState}
								handleArrayChange={handleArrayChange}
							/>
							<button
								type="button"
								onClick={() =>
									handleDeleteForm(
										'workExperience',
										workExperienceState.id
									)
								}
								className="mt-4 rounded-md bg-rose-500 px-4 py-2 text-white transition-colors hover:bg-rose-700"
							>
								Delete
							</button>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default WorkExperience;
