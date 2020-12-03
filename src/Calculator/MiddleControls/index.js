function MiddleControls(props) {
	return (
		<>
			<div className='row'>
				<button
					onClick={props.handleClick}
					className='col-sm-12'
					data-value='Clear'
				>
					Clear
				</button>
			</div>
			<div className='row'>
				<button
					onClick={props.handleClick}
					className='col-sm-12'
					data-value='BS'
				>
					BackSpace
				</button>
			</div>
			<div className='row'>
				<button
					onClick={props.handleClick}
					className='col-sm-12'
					data-value='Save'
				>
					Save
				</button>
			</div>
		</>
	);
}
export default MiddleControls;
