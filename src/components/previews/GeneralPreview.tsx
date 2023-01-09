import React, { Component } from 'react';

class GeneralPreview extends Component {
	render() {
		const { name, surname, role, phone, email, description } =
			this.props.general;
		return (
			<div>
				<div className="flex justify-between border-b-2 border-indigo-800 pb-6">
					<div>
						<h2 className="mb-1 block text-5xl font-medium">
							{name} {surname}
						</h2>
						<span className="block text-base">{role}</span>
					</div>
					<div className="ml-4 text-right">
						<span className="block">{phone}</span>
						<span className="block">{email}</span>
					</div>
				</div>
				<span className="mt-6 block font-light">{description}</span>
			</div>
		);
	}
}

export default GeneralPreview;
