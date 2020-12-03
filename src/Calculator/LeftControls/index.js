function LeftControls(props) {
	return (
		<>
			<div className='row'>
				<button onClick={props.handleClick} className='col-sm-4' data-value='7'>
					7
				</button>
				<button onClick={props.handleClick} className='col-sm-4' data-value='8'>
					8
				</button>
				<button onClick={props.handleClick} className='col-sm-4' data-value='9'>
					9
				</button>
			</div>
			<div className='row'>
				<button onClick={props.handleClick} className='col-sm-4' data-value='4'>
					4
				</button>
				<button onClick={props.handleClick} className='col-sm-4' data-value='5'>
					5
				</button>
				<button onClick={props.handleClick} className='col-sm-4' data-value='6'>
					6
				</button>
			</div>
			<div className='row'>
				<button onClick={props.handleClick} className='col-sm-4' data-value='1'>
					1
				</button>
				<button onClick={props.handleClick} className='col-sm-4' data-value='2'>
					2
				</button>
				<button onClick={props.handleClick} className='col-sm-4' data-value='3'>
					3
				</button>
			</div>
			<div className='row'>
				<button
					onClick={props.handleClick}
					className='col-sm-4'
					data-value='Placeholder'
				>
					PH
				</button>
				<button onClick={props.handleClick} className='col-sm-4' data-value='0'>
					0
				</button>
				<button onClick={props.handleClick} className='col-sm-4' data-value='.'>
					.
				</button>
			</div>
		</>
	);
}
export default LeftControls;
