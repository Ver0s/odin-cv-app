import React, { Component } from 'react';

class General extends Component {
	render() {
		return (
			<div>
				<h3 className="mb-2 text-lg font-bold">General info</h3>
				<form className="space-y-2">
					<div>
						<label htmlFor="name" className="mb-1 block">
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="block w-full px-2 py-1 "
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
							className="block w-full px-2 py-1 "
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
							className="block w-full px-2 py-1 "
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
							className="block w-full px-2 py-1"
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
							className="block w-full px-2 py-1"
						/>
					</div>
					<div>
						<label
							htmlFor="generalDescription"
							className="mb-1 block "
						>
							Description
						</label>
						<textarea
							type="text"
							name="generalDescription"
							id="generalDescription"
							className="block w-full px-2 py-1"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default General;
