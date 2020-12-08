import React from 'react';
import './App.css';
import Calculator from './Calculator';
import SavedEquations from './SavedEquations';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			input: '',
			output: '',
			saved: [],
			placeholder: ['a', 'b', 'c', 'x', 'y', 'z'],
			increment: 0,
		};
		this.deleteAll = this.deleteAll.bind(this);
		this.deleteOne = this.deleteOne.bind(this);
		this.buttonClick = this.buttonClick.bind(this);
		this.keyPress = this.keyPress.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
	}

	deleteAll = () => {
		localStorage.clear();
		this.setState({ saved: [] });
	};

	deleteOne = (e) => {
		let slicedSaved = this.state.saved;
		slicedSaved.splice(e.target.dataset.value, 1);
		this.setState({ saved: slicedSaved });
		localStorage.setItem('SavedEquations', JSON.stringify(slicedSaved));
		window.location.reload(false);
	};

	buttonClick = (e) => {
		let value = e.target.dataset.value;
		if (value === 'Clear') this.setState({ input: '', output: '' });
		else if (value === 'BS') {
			if (this.state.input.includes('n')) {
				this.setState({
					input: this.state.input.slice(0, this.state.input.length - 1),
					output: this.state.input.slice(0, this.state.input.length - 1),
				});
			} else {
				try {
					this.setState({
						input: this.state.input.slice(0, this.state.input.length - 1),
						output: eval(
							this.state.input.slice(0, this.state.input.length - 1)
						),
					});
				} catch (err) {
					this.setState({
						input: this.state.input.slice(0, this.state.input.length - 1),
						output: this.state.input.slice(0, this.state.input.length - 1),
					});
				}
			}
		} else if (value === 'Placeholder') {
			this.setState({
				input: this.state.input + this.state.placeholder[this.state.increment],
				increment:
					this.state.increment >= this.state.placeholder.length - 1
						? 0
						: this.state.increment + 1,
			});
		} else if (value === 'Save') {
			let savedEquations = this.state.saved;
			savedEquations.push({
				title: '',
				equation: this.state.input.trim('').split(' ').join(''),
			});
			localStorage.setItem('SavedEquations', JSON.stringify(savedEquations));
			this.setState({ saved: savedEquations, input: '', output: '' });
		} else if (
			value === '(' &&
			this.state.input.length > 0 &&
			this.state.input[this.state.input.length - 1] <= 9 &&
			this.state.input[this.state.input.length - 1] >= 0
		) {
			this.setState({
				input: this.state.input + '*' + value,
				output: this.state.input + '*' + value,
			});
		} else {
			if (this.state.input.includes('n') || value === 'n') {
				this.setState({
					input: this.state.input + value,
					output: this.state.output + value,
				});
			} else {
				try {
					this.setState({
						input: this.state.input + value,
						output: eval(this.state.input + value),
					});
				} catch (err) {
					this.setState({
						input: this.state.input + value,
						output: this.state.output + value,
					});
				}
			}
		}
	};

	keyPress = (e) => {
		let value = e.key;
		if (
			value === 'Alt' ||
			value === 'Enter' ||
			value === 'Control' ||
			value === 'Shift' ||
			value === 'Insert' ||
			value === 'Tab' ||
			value === 'CapsLock' ||
			value === 'ArrowRight' ||
			value === 'ArrowLeft' ||
			value === 'ArrowUp' ||
			value === 'ArrowDown'
		) {
		} else if (value === 'Delete') this.setState({ input: '', output: '' });
		else if (value === 'Backspace') {
			if (this.state.input.includes('n')) {
				this.setState({
					input: this.state.input.slice(0, this.state.input.length - 1),
					output: this.state.input.slice(0, this.state.input.length - 1),
				});
			} else {
				try {
					this.setState({
						input: this.state.input.slice(0, this.state.input.length - 1),
						output: eval(
							this.state.input.slice(0, this.state.input.length - 1)
						),
					});
				} catch (err) {
					this.setState({
						input: this.state.input.slice(0, this.state.input.length - 1),
						output: this.state.input.slice(0, this.state.input.length - 1),
					});
				}
			}
		} else if (
			value === '(' &&
			this.state.input.length > 0 &&
			this.state.input[this.state.input.length - 1] <= 9 &&
			this.state.input[this.state.input.length - 1] >= 0
		) {
			this.setState({
				input: this.state.input + '*' + value,
				output: this.state.input + '*' + value,
			});
		} else {
			if (this.state.input.includes('n') || value == 'n') {
				this.setState({
					input: this.state.input + value,
					output: this.state.output + value,
				});
			} else {
				if (this.state.input.includes('n') || value === 'n') {
					this.setState({
						input: this.state.input + value,
						output: this.state.output + value,
					});
				} else {
					try {
						this.setState({
							input: this.state.input + value,
							output: eval(this.state.input + value),
						});
					} catch (err) {
						this.setState({
							input: this.state.input + value,
							output: this.state.output + value,
						});
					}
				}
			}
		}
	};

	changeTitle = (e) => {
		let savedCopy = this.state.saved;
		savedCopy[e.target.dataset.index].title = e.target.value;
		this.setState({ saved: savedCopy });
		localStorage.setItem('SavedEquations', JSON.stringify(savedCopy));
	};

	componentDidMount() {
		this.setState({
			saved: JSON.parse(localStorage.getItem('SavedEquations'))
				? JSON.parse(localStorage.getItem('SavedEquations'))
				: [],
		});
	}

	render() {
		return (
			<>
				<div className='container'>
					<Calculator
						buttonClick={this.buttonClick}
						input={this.state.input}
						updateInput={this.keyPress}
						output={this.state.output}
					/>

					<div className='row' id='savedSection'>
						<div className='col-sm-6'>
							<h1>Saved Equations</h1>
						</div>
						<div className='col-sm-6'>
							<button onClick={this.deleteAll}>Delete all saved</button>
						</div>
					</div>
					{this.state.saved.map((equation, index) => {
						return (
							<SavedEquations
								key={index}
								index={index}
								changeTitle={this.changeTitle}
								deleteOne={this.deleteOne}
								equation={equation}
							/>
						);
					})}
				</div>
			</>
		);
	}
}
export default App;
