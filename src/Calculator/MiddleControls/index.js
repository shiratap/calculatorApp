/*
	MiddleControls are unique input manipulating buttons. You can save, clear, or backspace from the input
*/
function MiddleControls(props) {
	return (
		<>
			<div className='row'>
				<button
					onClick={props.handleClick}
					className='col-12'
					data-value='Clear'
				>
					Clear
				</button>
			</div>
			<div className='row' id='back'>
				<button onClick={props.handleClick} className='col-12' data-value='BS'>
					Back
				</button>
			</div>
			<div className='row'>
				<button
					onClick={props.handleClick}
					className='col-12'
					data-value='Save'
				>
					Save
				</button>
			</div>
		</>
	);
}
export default MiddleControls;
