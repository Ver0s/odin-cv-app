import React, { Component } from 'react';
import EducationForm from './forms/EducationForm';

class Education extends Component {
	render() {
		const { education, handleEducationChange, handleAddForm } = this.props;

		return (
			<div>
				<h3 className="mb-2 text-lg font-bold">Education</h3>
				<div className="space-y-8">
					{education.map((educationState) => (
						<EducationForm
							key={educationState.id}
							education={educationState}
							handleEducationChange={handleEducationChange}
						/>
					))}
				</div>
				<button
					type="button"
					onClick={() => handleAddForm('education')}
					className="mt-4 rounded-md bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
				>
					Add
				</button>
			</div>
		);
	}
}

export default Education;
