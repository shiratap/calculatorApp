import './index.css';
import React, { useState } from 'react';

function SavedEquations(props) {
	let evaluated;
	try {
		evaluated = eval(props.equation.equation);
	} catch (e) {
		evaluated = props.equation.equation;
	}

	let [output, setOutput] = useState(evaluated);
	let [equation, setEquation] = useState(props.equation.equation);

	let recalculate = (e) => {
		let i = 0;
		let evaluate = [];
		evaluated.split('').forEach((char) => {
			if (
				(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
				(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
			) {
				console.log(i);
				evaluate.push(e.target.parentElement.children[i].value);
				i = i + 1;
			} else evaluate.push(char);
		});
		evaluate = evaluate.join('');
		try {
			setOutput(eval(evaluate));
		} catch (e) {
			setOutput(props.equation.equation);
		}
	};

	let formatEquation = equation.split('').map((char) => {
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
		<div className='jumbotron jumbotron-fluid'>
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
