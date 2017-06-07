import React from 'react'
import ListView from './ListView';

class IssueViewer extends React.Component {

	constructor() {
		super();
		this.state = {
			items: [],
			labels: ""
		}
		this.update = this.update.bind(this)			
	}

	render() {
		return (
			<div>
				<label>Filter by Label</label>	
				<select multiple onChange={this.update}>
					{this.props.labels.map(label => 
						<option value={label} key={label}>{label}</option>
					)}
				</select>
				<ListView items={this.state.items} />		
			</div>	
		)		
	}

	// Gets data after the component is mounted.
	componentDidMount() {
		this.fetchData()
	}

	// Fetch data for the specified labels. It gets a list of
	// all open issues if no labels is specified. 
	fetchData(labels) {		
		let url = 'https://api.github.com/repos/' + this.props.repo + '/issues?state=open'
		
		if (labels) {
			url += ';labels=' + labels
		}		

		fetch(url)
			.then(function(response) {				
				if (!response.ok) {
					throw Error(response.statusText)
				}
				return response.json()
			})			
			.then(function(results) {
				this.setState({items: results})				
			}.bind(this))			
			.catch(error => console.log(error))
	}

	// Event handler for the select change event. It gets data for the selected
	// labels and updates state
	update(event) {		
		let selectedLabels = this.getSelectedLabels(event)
		this.fetchData(selectedLabels)
		this.setState({labels: selectedLabels})
	}

	getSelectedLabels(event) {
		let options = event.target.selectedOptions
		let length = options.length
		let selectedLabels = ""
		
		for (var i = 0; i < length; i++) {
			selectedLabels += options[i].value
			
			if (i < length - 1) {
				selectedLabels += ","
			}
		}

		return selectedLabels
	}

	componentWillUnmount() {
		// TODO: clean up the event listeners		
	}	
}

export default IssueViewer