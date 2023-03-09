import React from 'react';
import SearchBox from './SearchBox';

const Content = ({ search, setSearch }) => {

    return (
        <div className='container'>
            <div
                className='colorBox'
                style={
                    {
                        backgroundColor: search,
                    }
                }>
                {search === '' ? 'Empty Cell' : search}
            </div>
            <SearchBox
                search={search}
                setSearch={setSearch}
            />
        </div >
    )
}

export default Content