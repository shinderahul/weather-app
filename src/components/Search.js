import React from 'react';

const Search = () => {
	return (
		<section>
			<form className='find-location'>
				<input type='text' placeholder='Find your location...' />
				<input type='submit' value='Find' />
			</form>
		</section>
	);
};

export default Search;
