import React from 'react'

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchField : {
                value : "",
                error : false
            }
        }
    }

    changeHandler = (e) => {
        this.setState({
            searchField : {
                ...this.state.searchField,
                value : e.target.value,
                error : false
            }
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        if (this.state.searchField.value) {
            this.props.getGifs(this.state.searchField.value)
        } else {
            this.setState({
                searchField: {
                    ...this.state.searchField,
                    error: true
                }
            })
        }
        
    }

    render(){
        return(
            <form action="" onSubmit={this.submitHandler} className='gifform'>
                <input 
                    type="text" 
                    value={this.state.searchField.value} 
                    onChange={this.changeHandler}
                    className={this.state.searchField.error ? "error" : ""}
                />
                <input 
                    type="submit" 
                    value='search'
                    className='submitButton'
                />
            </form>
        )
    }
}