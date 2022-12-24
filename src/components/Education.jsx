import React, { Component } from 'react';

class Education extends Component {
	render() {
		return (
			<div>
				<h3 className="mb-2 text-lg font-bold">Education</h3>
				<form className="space-y-2">
					<div>
						<label htmlFor="major" className="mb-1 block">
							Major
						</label>
						<input
							type="text"
							name="major"
							id="major"
							className="block w-full rounded-md border-gray-300 px-2 py-1"
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
							className="block w-full rounded-md border-gray-300 px-2 py-1"
						/>
					</div>
					<div>
						<label
							htmlFor="educationStartDate"
							className="mb-1 block "
						>
							Start Date
						</label>
						<input
							type="date"
							name="educationStartDate"
							id="educationStartDate"
							className="block w-full rounded-md border-gray-300 px-2 py-1"
						/>
					</div>
					<div>
						<label
							htmlFor="educationEndDate"
							className="mb-1 block "
						>
							End Date
						</label>
						<input
							type="date"
							name="educationEndDate"
							id="educationEndDate"
							className="block w-full rounded-md border-gray-300 px-2 py-1"
						/>
					</div>
					<div>
						<label
							htmlFor="educationDescription"
							className="mb-1 block "
						>
							Description
						</label>
						<textarea
							type="text"
							name="educationDescription"
							id="educationDescription"
							className="block w-full rounded-md border-gray-300 px-2 py-1"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Education;
