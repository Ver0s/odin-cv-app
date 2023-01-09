import React, { Component } from 'react';
import EducationPreview from './previews/EducationPreview';

class EducationPreviewList extends Component {
	render() {
		const { education } = this.props;
		return (
			<div className="mt-6 space-y-4">
				<h3 className="mb-3 text-base font-bold text-indigo-800">
					Education
				</h3>
				{education.map((educationState) => (
					<EducationPreview
						key={educationState.id}
						education={educationState}
					/>
				))}
			</div>
		);
	}
}

export default EducationPreviewList;
