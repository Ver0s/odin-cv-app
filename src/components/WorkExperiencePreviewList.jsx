import React, { Component } from 'react';
import WorkPreview from './previews/WorkPreview';

class WorkExperiencePreviewList extends Component {
	render() {
		const { workExperience } = this.props;
		return (
			<>
				{workExperience.map((workExperienceState) => (
					<WorkPreview
						key={workExperienceState.id}
						workExperience={workExperienceState}
					/>
				))}
			</>
		);
	}
}

export default WorkExperiencePreviewList;
