import React from 'react';
import ReactDOM from 'react-dom';
import IssueViewer from './IssueViewer';

class IssueView {
	constructor(args) {
		this.repo = args.repo;
	}	

	renderInto(container) {		
		let labels = ['Bug', 'Feature', 'Question', 'Help Wanted']

		ReactDOM.render(
			<IssueViewer labels={labels} repo={this.repo} />,
			container
		);		
	}
}

// Uncomment to test the library
// let issueView = new IssueView({repo: 'nasa/openmct'})
// issueView.renderInto(document.getElementById('issue-list-container'))

export default IssueView
