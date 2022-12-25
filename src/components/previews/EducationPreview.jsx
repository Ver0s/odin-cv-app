import React, { Component } from 'react';

class EducationPreview extends Component {
	render() {
		const { major, university, startDate, endDate, description } =
			this.props.education;
		return (
			<div className="border">
				<span className="block">{major}</span>
				<span className="block">{university}</span>
				<span className="block">{startDate}</span>
				<span className="block">{endDate}</span>
				<span className="block">{description}</span>
			</div>
		);
	}
}

export default EducationPreview;
