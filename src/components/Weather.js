import React from 'react';

const Weather = ({ items, isLoading }) => {
	console.log(items);
	return isLoading ? (
		<h3 className='center'>Search location to get weather information.</h3>
	) : (
		<div className='forecast-container'>
			<div className='today forecast'>
				<div className='forecast-header'>
					<div className='main'>
						<b>{items.weather[0].main}</b>
					</div>
					<div className='description'>
						Description: {items.weather[0].description}
					</div>
				</div>
				<div className='forecast-content'>
					<div className='location'>
						{items.name},{items.sys.country}
					</div>
					<div className='degree'>
						<div className='num'>
							{(items.main.temp - 273.15).toFixed()}
							<sup>o</sup>C <i className={`owf owf-${items.weather[0].id}`}></i>
						</div>
					</div>
					<span>
						<img src='' alt='' />
						{items.wind.deg}
					</span>
					<span>
						<img src='' alt='' />
						{items.wind.speed} <i className='owf owf-905'></i>
					</span>
					<span>
						<img src='' alt='' />
						East
					</span>
					<div className='additional-detail'>
						<span>
							Feels Like: {(items.main.feels_like - 273.15).toFixed()}{' '}
							<sup>o</sup>C
						</span>
						<span>Humidity: {items.main.humidity}%</span>
						<span>
							Max Temp.: {(items.main.temp_max - 273.15).toFixed()} <sup>o</sup>
							C
						</span>
						<span>
							Min Temp.: {(items.main.temp_min - 273.15).toFixed()} <sup>o</sup>
							C
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
