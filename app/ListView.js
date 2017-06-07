import React from 'react'

class ListView extends React.Component {

	render() {
		let items = this.props.items
		
		if (typeof items !== 'undefined' && items.length > 0) {			
			return (
				<dl>					
					{items.map(item =>
						<div key={item.number}>
							<dt>#{item.number}</dt>
							<dd>{item.title}</dd>
						</div>
					)}			
				</dl>			
			)
		} else {
			return null
		}	
	}
}

export default ListView