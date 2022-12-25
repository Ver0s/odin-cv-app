import React, { Component } from 'react';
import EducationPreview from './previews/EducationPreview';

class EducationPreviewList extends Component {
	render() {
		const { education } = this.props;
		return (
			<>
				{education.map((educationState) => (
					<EducationPreview
						key={educationState.id}
						education={educationState}
					/>
				))}
			</>
		);
	}
}

export default EducationPreviewList;
