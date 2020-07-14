import React from 'react';

const Weather = ({ items, isLoading }) => {
	console.log(items);
	return isLoading ? (
		'Loading...'
	) : (
		<div className='forecast-container'>
			<div className='today forecast'>
				<div className='forecast-header'>
					<div className='main'>
						<b>{items.weather[0].main}</b>
					</div>
					<div className='description'>{items.weather[0].description}</div>
				</div>
				<div className='forecast-content'>
					<div className='location'>{items.name}</div>
					<div className='degree'>
						<div className='num'>
							{(items.main.temp - 273.15).toFixed()}
							<sup>o</sup>C <i className='owf owf-200'></i>
						</div>
						<div className='forecast-icon'>
							<img src='' alt='' width='90' />
						</div>
					</div>
					<span>
						<img src='' alt='' />
						{items.wind.deg}
					</span>
					<span>
						<img src='' alt='' />
						{items.wind.speed}
					</span>
					<span>
						<img src='' alt='' />
						East
					</span>
				</div>
			</div>
		</div>
	);
};

export default Weather;
