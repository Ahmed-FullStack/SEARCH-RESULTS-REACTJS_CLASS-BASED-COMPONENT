import { Component } from 'react';
import User from './Users';

// export default function UsersList(props) {
// 	return (
// 		<>
// 			{props.users.length === 0 ? (
// 				<p className='clr-white word-break'>
// 					No Results Found For '{`${props.noResultValue}`}'
// 				</p>
// 			) : (
// 				<ul>
// 					{props.users.map(user => (
// 						<User key={user.id} name={user.name} />
// 					))}
// 				</ul>
// 			)}
// 		</>
// 	)
// }

export default class UsersList extends Component {
	componentDidUpdate() {
		if (this.props.users.length === 0) {
			console.log('erroeer');
			// throw new Error('No Users Provided')
		}
	}
	render() {
		return (
			<>
				{this.props.users.length === 0 ? (
					<p className='clr-white word-break'>
						No Results Found For '{`${this.props.noResultValue}`}'
					</p>
				) : (
					<ul>
						{this.props.users.map(user => (
							<User key={user.id} name={user.name} />
						))}
					</ul>
				)}
			</>
		);
	}
}
