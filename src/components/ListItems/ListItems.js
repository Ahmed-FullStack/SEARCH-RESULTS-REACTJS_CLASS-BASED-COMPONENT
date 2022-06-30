import { Component } from 'react'
// import React, { useMemo } from 'react'
// function ListItems(props) {
// 	const { list } = props
// 	console.log('ListItems Is Running Right Now!')
// 	const sortedList = useMemo(() => {
// 		console.log('SortedItems Reevaluated ')
// 		return list.sort((a, b) => a - b)
// 	}, [list])
// 	return (
// 		<>
// 			<h3 className='clr-white'>{props.title}</h3>
// 			<ul>
// 				{sortedList.map(num => (
// 					<li key={Math.random()} className='clr-white'>
// 						{num}
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	)
// }
// export default React.memo(ListItems)

export default class ListItems extends Component {
	render() {
		return <li>{this.props.user}</li>
	}
}
