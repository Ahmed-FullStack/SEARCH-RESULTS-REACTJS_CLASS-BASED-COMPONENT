import React from 'react'
function DemoOutput(props) {
	console.log('DemoOutput Is Running')
	return <p>{props.show ? 'hello' : ''}</p>
}
export default React.memo(DemoOutput)
