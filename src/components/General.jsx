import React, { Component } from 'react';
import GeneralForm from './forms/GeneralForm';

class General extends Component {
	render() {
		const { general, handleGeneralChange } = this.props;
		return (
			<div>
				<h3 className="mb-2 text-lg font-bold">General info</h3>
				<GeneralForm
					general={general}
					handleGeneralChange={handleGeneralChange}
				/>
			</div>
		);
	}
}

export default General;
