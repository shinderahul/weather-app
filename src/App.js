import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './components/Weather';
import Search from './components/Search';
import './App.css';

const App = () => {
	const [items, setItems] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchWeather = async () => {
			const weatherApi = 'd83d8e5f537a05cbcc93126832246182';
			const city = 'Mumbai';
			const weather = await axios.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`
			);

			setItems(weather.data);
			setIsLoading(false);
		};

		fetchWeather();
	}, []);

	return (
		<Fragment>
			<Search />
			<Weather isLoading={isLoading} items={items} />
		</Fragment>
	);
};

export default App;
