import React, { Component } from 'react';

class GeneralPreview extends Component {
	render() {
		const { name, surname, role, phone, email, description } =
			this.props.general;
		return (
			<div className="bg-slate-400">
				<span className="block">{name}</span>
				<span className="block">{surname}</span>
				<span className="block">{role}</span>
				<span className="block">{phone}</span>
				<span className="block">{email}</span>
				<span className="block">{description}</span>
			</div>
		);
	}
}

export default GeneralPreview;
