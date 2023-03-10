import React, { Component } from 'react';

class GeneralForm extends Component {
	render() {
		const { name, surname, role, phone, email, description } =
			this.props.general;
		const { handleGeneralChange } = this.props;

		return (
			<form className="space-y-2">
				<div>
					<label htmlFor="name" className="mb-1 block">
						Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={handleGeneralChange}
						className="block w-full rounded-md border-gray-300 px-2 py-1 text-sm"
					/>
				</div>
				<div>
					<label htmlFor="surname" className="mb-1 block">
						Surname
					</label>
					<input
						type="text"
						name="surname"
						id="surname"
						value={surname}
						onChange={handleGeneralChange}
						className="block w-full rounded-md border-gray-300 px-2 py-1 text-sm"
					/>
				</div>
				<div>
					<label htmlFor="role" className="mb-1 block">
						Role
					</label>
					<input
						type="text"
						name="role"
						id="role"
						value={role}
						onChange={handleGeneralChange}
						className="block w-full rounded-md border-gray-300 px-2 py-1 text-sm"
					/>
				</div>
				<div>
					<label htmlFor="phone" className="mb-1 block">
						Phone
					</label>
					<input
						type="tel"
						name="phone"
						id="phone"
						value={phone}
						onChange={handleGeneralChange}
						className="block w-full rounded-md border-gray-300 px-2 py-1 text-sm"
					/>
				</div>
				<div>
					<label htmlFor="email" className="mb-1 block">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={handleGeneralChange}
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
						onChange={handleGeneralChange}
						className="block w-full rounded-md border-gray-300 px-2 py-1 text-sm"
					/>
				</div>
			</form>
		);
	}
}

export default GeneralForm;
