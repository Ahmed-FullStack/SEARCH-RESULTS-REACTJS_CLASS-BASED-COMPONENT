import { useEffect, useState } from 'react'
import './App.css'
import UsersList from './components/Users/UsersList'

const DUMMY_USERS = [
	{ id: 'ed1', name: 'Ahmed' },
	{ id: 'ed2', name: 'Asad' },
	{ id: 'ed3', name: 'Habiba' },
	{ id: 'ed4', name: 'Minahil' },
	{ id: 'ed5', name: 'Max' },
	{ id: 'ed6', name: 'Chandler' },
]

export default function App() {
	const [searchText, setSearchText] = useState('')
	const [arrayOfUsers, setArrayOfUsers] = useState(DUMMY_USERS)
	const userTypeHandler = e => {
		const { value } = e.target
		setSearchText(value)
	}
	useEffect(() => {
		if (searchText.trim().length === 0) {
			setArrayOfUsers(DUMMY_USERS)
		} else {
			setArrayOfUsers(prevsState =>
				prevsState.filter(user => user.name.includes(searchText))
			)
		}
	}, [searchText])
	return (
		<>
			<input type='text' onChange={userTypeHandler} value={searchText} />
			<UsersList users={arrayOfUsers} />
		</>
	)
}
