import React, { Component } from 'react';

class WorkExperienceForm extends Component {
	render() {
		const { companyName, position, startDate, endDate, description, id } =
			this.props.workExperience;
		const { handleWorkExperienceChange } = this.props;

		return (
			<form className="space-y-2">
				<div>
					<label htmlFor="companyName" className="mb-1 block">
						Company Name
					</label>
					<input
						type="text"
						name="companyName"
						id="companyName"
						value={companyName}
						onChange={(e) => handleWorkExperienceChange(e, id)}
						className="block w-full rounded-md border-gray-300 px-2 py-1"
					/>
				</div>
				<div>
					<label htmlFor="position" className="mb-1 block">
						Position
					</label>
					<input
						type="text"
						name="position"
						id="position"
						value={position}
						onChange={(e) => handleWorkExperienceChange(e, id)}
						className="block w-full rounded-md border-gray-300 px-2 py-1"
					/>
				</div>
				<div>
					<label htmlFor="startDate" className="mb-1 block">
						Start Date
					</label>
					<input
						type="date"
						name="startDate"
						id="startDate"
						value={startDate}
						onChange={(e) => handleWorkExperienceChange(e, id)}
						className="block w-full rounded-md border-gray-300 px-2 py-1"
					/>
				</div>
				<div>
					<label htmlFor="endDate" className="mb-1 block">
						End Date
					</label>
					<input
						type="date"
						name="endDate"
						id="endDate"
						value={endDate}
						onChange={(e) => handleWorkExperienceChange(e, id)}
						className="block w-full rounded-md border-gray-300 px-2 py-1"
					/>
				</div>
				<div>
					<label htmlFor="description" className="mb-1 block ">
						Description
					</label>
					<textarea
						type="text"
						name="description"
						id="description"
						value={description}
						onChange={(e) => handleWorkExperienceChange(e, id)}
						className="block w-full rounded-md border-gray-300 px-2 py-1"
					/>
				</div>
			</form>
		);
	}
}

export default WorkExperienceForm;