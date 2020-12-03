function Input(props) {
	return (
		<>
			<input
				id='input'
				className='col-sm-8'
				placeholder='Input/Type your equation here'
				type='text'
				onKeyDown={props.updateInput}
				value={props.input}
			/>
			<div className='col-sm-1'>=</div>
			<div id='results' className='col-sm-1'>
				{props.output}
			</div>
		</>
	);
}
export default Input;
