import { Component } from 'react'

export default class ErrorBoundaries extends Component {
	constructor() {
		super()
		this.state = {
			hasError: false,
		}
	}
	componentDidCatch(err) {
		console.log(err)
		this.setState({ hasError: true })
	}
	render() {
		if (this.state.hasError) {
			return (
				<>
					<p className='clr-white'>SOmething went wrong</p>
				</>
			)
		}
		return this.props.children
	}
}
