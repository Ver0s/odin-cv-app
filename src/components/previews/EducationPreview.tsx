import React, { Component } from 'react';

class EducationPreview extends Component {
	render() {
		const { major, university, startDate, endDate, description } =
			this.props.education;
		return (
			<div>
				<div className="mb-1 flex justify-between">
					<span className="font-medium">{major}</span>
					<span>
						{university} | {startDate} - {endDate}
					</span>
				</div>
				<span className="block font-light">{description}</span>
			</div>
		);
	}
}

export default EducationPreview;
