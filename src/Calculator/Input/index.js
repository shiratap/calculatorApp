/*
	Input is more accurately, 'TopBar'. This holds the input section and output section. 
*/
function Input(props) {
	return (
		<>
			<input
				id='input'
				className='col-8'
				placeholder='Input/Type your equation here'
				type='text'
				onKeyDown={props.updateInput}
				value={props.input}
			/>
			<div className='col-1'>=</div>
			<div id='results' className='col-3'>
				{!props.output.includes('undefined')
					? props.output.replace('undefined', '')
					: ''}
			</div>
		</>
	);
}
export default Input;
