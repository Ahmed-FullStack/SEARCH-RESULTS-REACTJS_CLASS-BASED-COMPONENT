import { Component } from 'react'

export default class User extends Component {
	componentWillUnmount() {
		console.log('unmount')
	}
	render() {
		return <li className='clr-white'>{this.props.name}</li>
	}
}
