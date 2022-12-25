import React, { Component } from 'react';

class WorkExperiencePreview extends Component {
	render() {
		const { companyName, position, startDate, endDate, description } =
			this.props.workExperience;
		return (
			<div className="border">
				<span className="block">{companyName}</span>
				<span className="block">{position}</span>
				<span className="block">{startDate}</span>
				<span className="block">{endDate}</span>
				<span className="block">{description}</span>
			</div>
		);
	}
}

export default WorkExperiencePreview;
