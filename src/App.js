import { Component } from 'react';
import './App.css';
import ErrorBoundaries from './components/ErrorClassBasedComponents/ErrorBoundaries';
import UsersList from './components/Users/UsersList';
import UsersContext from './store/users-context';
// const DUMMY_USERS = [
// 	{ id: Math.random(), name: 'Ahmed' },
// 	{ id: Math.random(), name: 'Asad' },
// 	{ id: Math.random(), name: 'Habiba' },
// 	{ id: Math.random(), name: 'Minahil' },
// 	{ id: Math.random(), name: 'Max' },
// 	{ id: Math.random(), name: 'Chandler' },
// 	{ id: Math.random(), name: 'Jimmy' },
// 	{ id: Math.random(), name: 'Mark Rober' },
// 	{ id: Math.random(), name: 'Ryan Trahan' },
// 	{ id: Math.random(), name: 'Elon Musk' },
// 	{ id: Math.random(), name: 'Jeff Bessos' },
// 	{ id: Math.random(), name: 'MKBHD' },
// 	{ id: Math.random(), name: 'Apple' },
// 	{ id: Math.random(), name: 'BTS Bangtan Boys' },
// 	{ id: Math.random(), name: 'AOT Attack On Titan' },
// ]

// export default function App() {
// 	const [searchText, setSearchText] = useState('')
// 	const [arrayOfUsers, setArrayOfUsers] = useState(DUMMY_USERS)
// 	const userTypeHandler = e => {
// 		const { value } = e.target
// 		setSearchText(value)
// 	}
// 	useEffect(() => {
// 		if (searchText.trim().length === 0) {
// 			setArrayOfUsers(DUMMY_USERS)
// 		} else {
// 			setArrayOfUsers(
// 				DUMMY_USERS.filter(item =>
// 					item.name.toLowerCase().includes(searchText.toLowerCase().trim())
// 				)
// 			)
// 		}
// 	}, [searchText])

// }

export default class App extends Component {
	static contextType = UsersContext;
	constructor() {
		super();
		this.state = {
			searchText: '',
			arrayOfUsers: [],
		};
	}
	componentDidMount() {
		this.setState({
			arrayOfUsers: this.context.users,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchText !== this.state.searchText) {
			this.setState({
				arrayOfUsers: this.context.users.filter(item =>
					item.name
						.trim()
						.toLowerCase()
						.includes(this.state.searchText.toLowerCase().trim())
				),
			});
			console.log(
				this.context.users.filter(item =>
					item.name
						.trim()
						.toLowerCase()
						.includes(this.state.searchText.toLowerCase().trim())
				)
			);
		}
	}

	userTypeHandler(e) {
		const { value } = e.target;
		this.setState({ searchText: value });
	}
	render() {
		return (
			<>
				<input
					type='text'
					onChange={this.userTypeHandler.bind(this)}
					value={this.state.searchText}
				/>
				<ErrorBoundaries>
					<UsersList
						users={this.state.arrayOfUsers}
						noResultValue={this.state.searchText}
					/>
				</ErrorBoundaries>
			</>
		);
	}
}
