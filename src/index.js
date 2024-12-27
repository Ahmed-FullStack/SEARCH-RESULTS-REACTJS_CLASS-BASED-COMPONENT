import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import UsersContext from './store/users-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<UsersContext.Provider
			value={{
				users: [
					{ id: '23ls', name: 'Ahmed' },
					{ id: '23lsasdf', name: 'Asad' },
					{ id: '23lsasda', name: 'Habiba' },
					{ id: '23ls23', name: 'Minahil' },
					{ id: '23ls12333', name: 'Max' },
					{ id: '23lsh', name: 'Chandler' },
					{ id: '23ls44545', name: 'Jimmy' },
					{ id: '23lscomin', name: 'Mark Rober' },
					{ id: '23lslkaj dslkf jasdlkf jadsf', name: 'Ryan Trahan' },
					{ id: '23ls hilasjdf', name: 'Elon Musk' },
					{ id: '23ls shi', name: 'Jeff Bessos' },
					{ id: '23ls shy thing', name: 'MKBHD' },
					{ id: '23ls jlkasjd flkadsf hel', name: 'Apple' },
					{ id: '23ls no', name: 'BTS Bangtan Boys' },
					{ id: '23ls time', name: 'AOT Attack On Titan' },
					{ name: 'ahmed', id: ' Math.random() ' },
					{ name: 'asad', id: Math.random() },
				],
			}}
		>
			<App />
		</UsersContext.Provider>
	</React.StrictMode>
)
