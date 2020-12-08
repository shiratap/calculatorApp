import './index.css';

import Input from './Input';
import LeftControls from './LeftControls';
import MiddleControls from './MiddleControls';
import RightControls from './RightControls';

function Calculator(props) {
	return (
		<>
			<div className='row' id='topBar'>
				<Input
					input={props.input}
					updateInput={props.updateInput}
					output={
						String(props.output) !== 'undefined' ? String(props.output) : ''
					}
				/>
			</div>
			<div className='row'>
				<div className='col-sm-5 normalButtons'>
					<LeftControls handleClick={props.buttonClick} />
				</div>
				<div className='col-sm-2' id='middleControls'>
					<MiddleControls handleClick={props.buttonClick} />
				</div>
				<div className='col-sm-5 normalButtons'>
					<RightControls handleClick={props.buttonClick} />
				</div>
			</div>
		</>
	);
}

export default Calculator;
