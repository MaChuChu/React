import React from 'react'

const SearchBox = ({ search, setSearch }) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Color Name'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchBox