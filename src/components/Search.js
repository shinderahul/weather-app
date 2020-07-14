import React, { useState } from 'react';

const Search = ({ getCity }) => {
	const [text, setText] = useState('');
	const onChange = (q) => {
		setText(q);
		getCity(q);
	};

	return (
		<section>
			<form className='find-location'>
				<input
					type='text'
					placeholder='Find your location...'
					value={text}
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>
			</form>
		</section>
	);
};

export default Search;
