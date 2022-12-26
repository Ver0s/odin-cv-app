import React, { Component } from 'react';
import EducationForm from './forms/EducationForm';

class Education extends Component {
	render() {
		const {
			education,
			// handleEducationChange,
			handleArrayChange,
			handleAddForm,
			handleDeleteForm,
		} = this.props;

		return (
			<div>
				<div className="mb-2 flex items-center justify-between">
					<h3 className="text-lg font-bold">Education</h3>
					<button
						type="button"
						onClick={() => handleAddForm('education')}
						className="rounded-md bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
					>
						Add
					</button>
				</div>
				<div className="space-y-10">
					{education.map((educationState) => (
						<div key={educationState.id}>
							<EducationForm
								education={educationState}
								handleArrayChange={handleArrayChange}
							/>
							<button
								type="button"
								onClick={() =>
									handleDeleteForm(
										'education',
										educationState.id
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

export default Education;
