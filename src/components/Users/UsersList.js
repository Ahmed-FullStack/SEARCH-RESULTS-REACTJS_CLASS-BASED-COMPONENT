import User from './Users'

export default function UsersList(props) {
	return (
		<ul>
			{props.users.map(user => (
				<User key={user.id} name={user.name} />
			))}
		</ul>
	)
}
