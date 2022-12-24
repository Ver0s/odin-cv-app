import React, { Component } from 'react';
// form should be it's own module
// there should also be a button in each form, the button can be seperate component
class WorkExperience extends Component {
	render() {
		return (
			<div>
				<h3 className="mb-2 text-lg font-bold">Work Experience</h3>
				<form className="space-y-2">
					<div>
						<label htmlFor="companyName" className="mb-1 block">
							Company Name
						</label>
						<input
							type="text"
							name="companyName"
							id="companyName"
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
							className="block w-full rounded-md border-gray-300 px-2 py-1"
						/>
					</div>
					<div>
						<label htmlFor="workStartDate" className="mb-1 block">
							Start Date
						</label>
						<input
							type="date"
							name="workStartDate"
							id="workStartDate"
							className="block w-full rounded-md border-gray-300 px-2 py-1"
						/>
					</div>
					<div>
						<label htmlFor="workEndDate" className="mb-1 block">
							End Date
						</label>
						<input
							type="date"
							name="workEndDate"
							id="workEndDate"
							className="block w-full rounded-md border-gray-300 px-2 py-1"
						/>
					</div>
					<div>
						<label
							htmlFor="workDescription"
							className="mb-1 block "
						>
							Description
						</label>
						<textarea
							type="text"
							name="workDescription"
							id="workDescription"
							className="block w-full rounded-md border-gray-300 px-2 py-1"
						/>
					</div>
				</form>
				<button
					type="button"
					className="mt-4 rounded-md bg-indigo-700 px-4 py-2 text-white transition-colors hover:bg-indigo-500"
				>
					Add
				</button>
			</div>
		);
	}
}

export default WorkExperience;
