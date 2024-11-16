import Button from '@mui/material/Button';
import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import CircularWithValueLabel from './CircularProgressWithLabel/CircularProgressWithLabel';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import viteLogo from '/vite.svg';

function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<Header />
			<div>
				<a href='https://vite.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<Button
					variant='outlined'
					color='success'
					size='small'
					onClick={() => setCount(count => count + 1)}
				>
					+1
				</Button>
				<Button
					variant='outlined'
					color='error'
					size='small'
					onClick={() => setCount(count => count - 1)}
				>
					-1
				</Button>
			</div>
			<p>Total: {count}</p>
			<CircularWithValueLabel newValue={count} />
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
			<Footer />
		</>
	);
}

export default App;
