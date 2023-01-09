import React, { Component } from 'react';

class WorkExperiencePreview extends Component {
	render() {
		const { companyName, position, startDate, endDate, description } =
			this.props.workExperience;
		return (
			<div>
				<div className="mb-1 flex justify-between">
					<span className="font-medium">{position}</span>
					<span>
						{companyName} | {startDate} - {endDate}
					</span>
				</div>
				<span className="block font-light">{description}</span>
			</div>
		);
	}
}

export default WorkExperiencePreview;
