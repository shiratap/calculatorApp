function RightControls(props) {
	return (
		<>
			<div className='row'>
				<button onClick={props.handleClick} className='col-4' data-value='+'>
					+
				</button>
				<button onClick={props.handleClick} className='col-4' data-value='-'>
					-
				</button>
				<button onClick={props.handleClick} className='col-4' data-value='*'>
					*
				</button>
			</div>
			<div className='row'>
				<button onClick={props.handleClick} className='col-4' data-value='/'>
					/
				</button>
				<button onClick={props.handleClick} className='col-4' data-value='^'>
					^
				</button>
				<button onClick={props.handleClick} className='col-4' data-value='%'>
					%
				</button>
			</div>
			<div className='row'>
				<button onClick={props.handleClick} className='col-4' data-value='('>
					(
				</button>
				<button onClick={props.handleClick} className='col-4' data-value=')'>
					)
				</button>
				<button onClick={props.handleClick} className='col-4' data-value='!'>
					!
				</button>
			</div>
			<div className='row'>
				<button onClick={props.handleClick} className='col-4' data-value='<'>
					&lt;
				</button>
				<button onClick={props.handleClick} className='col-4' data-value='>'>
					&gt;
				</button>
				<button onClick={props.handleClick} className='col-4' data-value='='>
					=
				</button>
			</div>
		</>
	);
}
export default RightControls;
