import React, { Component} from 'react';

export class search extends Component {
    render() {
        retutn (
            <div>
                <form className='form'>
                    <input type='text' name='text' placeholder='search users...' />
                    <input type='submit'value='search'className='btn btn-dark btn-block'
        />
        </form>
    </div>
    );
};
}

export default Search;