import React, { Component } from 'react';

class EducationForm extends Component {
	render() {
		const { major, university, startDate, endDate, description, id } =
			this.props.education;
		const { handleArrayChange } = this.props;

		return (
			<form className="space-y-2">
				<div>
					<label htmlFor="major" className="mb-1 block">
						Major
					</label>
					<input
						type="text"
						name="major"
						id="major"
						value={major}
						onChange={(e) => handleArrayChange(e, id, 'education')}
						className="block w-full rounded-md border-gray-300 px-2 py-1 text-sm"
					/>
				</div>
				<div>
					<label htmlFor="university" className="mb-1 block ">
						University
					</label>
					<input
						type="text"
						name="university"
						id="university"
						value={university}
						onChange={(e) => handleArrayChange(e, id, 'education')}
						className="block w-full rounded-md border-gray-300 px-2 py-1 text-sm"
					/>
				</div>
				<div>
					<label htmlFor="startDate" className="mb-1 block ">
						Start Date
					</label>
					<input
						type="text"
						name="startDate"
						id="startDate"
						value={startDate}
						onChange={(e) => handleArrayChange(e, id, 'education')}
						className="block w-full rounded-md border-gray-300 px-2 py-1 text-sm"
					/>
				</div>
				<div>
					<label htmlFor="endDate" className="mb-1 block ">
						End Date
					</label>
					<input
						type="text"
						name="endDate"
						id="endDate"
						value={endDate}
						onChange={(e) => handleArrayChange(e, id, 'education')}
						className="block w-full rounded-md border-gray-300 px-2 py-1 text-sm"
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
						onChange={(e) => handleArrayChange(e, id, 'education')}
						className="block w-full rounded-md border-gray-300 px-2 py-1 text-sm"
					/>
				</div>
			</form>
		);
	}
}

export default EducationForm;
