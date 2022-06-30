import React from 'react'
import './Button.css'

function Button(props) {
	console.log(props.c)
	return (
		<button
			onClick={props.onClick}
			type={props.type || 'button'}
			className='button br-primary'
		>
			{props.children}
		</button>
	)
}
export default React.memo(Button)
