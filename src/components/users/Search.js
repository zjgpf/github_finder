import React, { Component, Fragment } from 'react';

class Search extends Component {

  state = { text: '' };

  onChange = e => this.setState({[ e.target.name ]: e.target.value});

  onSubmit = e => {
    e.preventDefault();
    if( this.state.text !== '') {
      this.props.search(this.state.text);
      this.setState({ text: '' });
    }
    else {
      this.props.setAlert(true);
    }
  }

  render() {
    const { clear, showClear } = this.props;
    return (
    <Fragment>
      <form onSubmit={this.onSubmit}>
        <input type='text' name='text' onChange={this.onChange} value={this.state.text} placeholder='Enter name...' />
        <input type='submit' className='btn btn-dark btn-block' />
      </form>
      {showClear && (<button className='btn btn-light btn-block' onClick={clear}>clear</button>)}
    </Fragment>
    )
  }

}

export default Search;
