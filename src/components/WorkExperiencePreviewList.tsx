import React, { Component } from 'react';
import WorkPreview from './previews/WorkPreview';

class WorkExperiencePreviewList extends Component {
	render() {
		const { workExperience } = this.props;
		return (
			<div className="mt-6 space-y-4">
				<h3 className="mb-3 text-base font-bold text-indigo-800">
					Work Experience
				</h3>
				{workExperience.map((workExperienceState) => (
					<WorkPreview
						key={workExperienceState.id}
						workExperience={workExperienceState}
					/>
				))}
			</div>
		);
	}
}

export default WorkExperiencePreviewList;
