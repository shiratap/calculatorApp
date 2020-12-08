import './index.css';
import React, { useState } from 'react';

function SavedEquations(props) {
	// Evaluated represents the right side equation
	let evaluated;
	try {
		evaluated = eval(props.equation.equation).toString();
	} catch (e) {
		evaluated = props.equation.equation;
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
		try {
			setOutput(eval(evaluate));
		} catch (e) {
			setOutput(props.equation.equation);
		}
	};

	let ind = 0;
	let formatEquation = equation.split('').map((char, iteration) => {
		let splitted = evaluated.split('');
		if (
			(iteration > 0 &&
				char.charCodeAt(0) >= 65 &&
				char.charCodeAt(0) <= 90 &&
				(splitted[iteration - 1] >= 0 || splitted[iteration - 1] <= 9)) ||
			(iteration > 0 &&
				char.charCodeAt(0) >= 97 &&
				char.charCodeAt(0) <= 122 &&
				(splitted[iteration - 1] >= 0 || splitted[iteration - 1] <= 9))
		) {
			splitted.splice(iteration + ind, 0, '*');
			ind += 1;
			evaluated = splitted.join('');
		}
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

	return (
		<div className='jumbotron jumbotron-fluid' key={props.key}>
			<input
				type='text'
				data-index={props.index}
				placeholder='No title'
				onChange={props.changeTitle}
				value={props.equation.title}
			></input>
			<p className='lead'>
				{formatEquation}={output}
			</p>
			<button data-value={props.index} onClick={props.deleteOne}>
				Delete
			</button>
		</div>
	);
}
export default SavedEquations;
