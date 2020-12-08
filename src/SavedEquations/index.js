import './index.css';
import React, { useState } from 'react';

function SavedEquations(props) {
	// Evaluated represents the right side equation
	let evaluated;
	if (props.equation.equation.includes('n')) {
		evaluated = props.equation.equation;
	} else {
		try {
			evaluated = eval(props.equation.equation).toString();
		} catch (e) {
			evaluated = props.equation.equation;
		}
	}

	//Output is the right side equation. Equation is the left side. State is defined after attempted output eval
	let [output, setOutput] = useState(evaluated);
	let [equation] = useState(props.equation.equation);

	//Recalculate runs on input field change
	let recalculate = (e) => {
		//increment variable needed outside of the forEach to increment on each new child variable
		let i = 0;

		//evaluate holds valid characters for the final eval method
		let evaluate = [];

		//Evaluated is the right side equation string. Check to see each character if it's a placeholder variable.
		evaluated.split('').forEach((char) => {
			if (
				(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
				(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
			) {
				//Find the next placeholder and add it to the equation if it's an integer value
				if (
					Number.isInteger(parseInt(e.target.parentElement.children[i].value))
				) {
					evaluate.push(e.target.parentElement.children[i].value);
					i = i + 1;
				} else {
					//Otherwise, keep placeholder variable
					evaluate.push('a');
				}
			} //If not, just add the character
			else evaluate.push(char);
		});

		//Join each character and try to evaluate. Otherwise, set output to the string.
		evaluate = evaluate.join('');
		if (evaluate.includes('n')) {
			setOutput(props.equation.equation);
		} else {
			try {
				setOutput(eval(evaluate).toString());
			} catch (e) {
				setOutput(props.equation.equation);
			}
		}
	};

	/*
		handleClear is in charge of clearing out the input fields of the same component. Attempt to evaluate the original equation and set it as the output
	 */
	let handleClear = (e) => {
		[
			...e.target.parentElement.parentElement.parentElement.children[1]
				.children,
		].forEach((input) => {
			input.value = '';
		});
		let normalOutput;
		if (props.equation.equation.includes('n')) {
			normalOutput = props.equation.equation;
		} else {
			try {
				normalOutput = eval(props.equation.equation).toString();
			} catch (e) {
				normalOutput = props.equation.equation;
			}
		}
		setOutput((output = normalOutput));
	};

	/*
	  FormationEquation runs on component build. This generates the left side equation component. This needs to check for placeholder variables and creates inputs for it. This also modifies the evaluated equation in cases of '4n' and replaces that with '4*n'
	 */

	// Need an increment variable that keeps track of when '*'s increase the length of the splitted array.
	let ind = 0;
	let formatEquation = equation.split('').map((char, iteration) => {
		//Splitted represents the final equation. We take evaluated that's passed down and modify it to be the correct format for *
		let splitted = evaluated.split('');

		//If this iteration of the map isn't the first character, and it's a placeholder character with a number in front of it regardless of capitilization,
		if (
			(iteration > 0 &&
				char.charCodeAt(0) >= 65 &&
				char.charCodeAt(0) <= 90 &&
				(splitted[iteration + ind - 1] >= 0 ||
					splitted[iteration + ind - 1] <= 9)) ||
			(iteration > 0 &&
				char.charCodeAt(0) >= 97 &&
				char.charCodeAt(0) <= 122 &&
				(splitted[iteration + ind - 1] >= 0 ||
					splitted[iteration + ind - 1] <= 9))
		) {
			//Add * in front of the placeholder and change map modifier by 1
			splitted.splice(iteration + ind, 0, '*');
			ind += 1;
			//Update evaluated
			evaluated = splitted.join('');
		}

		//If a placeholder variable, make a input field that triggers recalculate on change
		if (
			(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
			(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
		)
			return (
				<>
					<input
						type='text'
						className='placeholderInput'
						onChange={recalculate}
					></input>
				</>
			);
		return <>{char}</>;
	});

	// Component structure
	return (
		<div className='jumbotron jumbotron-fluid'>
			<div className='row equationItems'>
				<div className='col-6'>
					<input
						className='title'
						type='text'
						data-index={props.index}
						placeholder='No title'
						onChange={props.changeTitle}
						value={props.equation.title}
					></input>
				</div>
				<div className='col-3'>
					<button className='clear' onClick={handleClear}>
						<svg
							width='30'
							height='30'
							viewBox='0 0 16 16'
							class='bi bi-x'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
							/>
						</svg>
						Clear
					</button>
				</div>
				<div className='col-3'>
					<button
						className='deleteOne'
						key={props.key}
						data-value={props.index}
						onClick={props.deleteOne}
					>
						<svg
							width='30'
							height='30'
							viewBox='0 0 16 16'
							className='bi bi-trash'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
							<path
								fill-rule='evenodd'
								d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
							/>
						</svg>
						Delete
					</button>
				</div>
			</div>
			<p className='lead'>
				{formatEquation}={output}
			</p>
		</div>
	);
}
export default SavedEquations;
