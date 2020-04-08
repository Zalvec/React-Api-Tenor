import React from 'react'
import Form from './components/Form'
import Gif from './components/Gif'
import Loading from './components/Loading'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      gifs : {
        loading : false,
        error : false,
        data : []
      }
    }
  }

  getGifs = (str) => {
    this.setState({
      ...this.state.gifs,
      loading: true
    })
    axios.get("https://api.tenor.com/v1/search?key=3ABN3GCF8JNS&limit=35&q=" + str)
      .then( (response) => {
        console.log(response.data.results)
        this.setState({
          gifs : {
            ...this.state.gifs,
            loading : false,
            data : response.data.results
          }
        })
      })
      .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="App">
        <h1>Your GIF-finder</h1>
        <h2>What do you want to GIF-tify?</h2>
        <Form getGifs={this.getGifs}/>
        {this.state.gifs.loading && <Loading />}
        {this.state.gifs.data.length !== 0 && (<Gif data={this.state.gifs.data}/>)}
      </div>
    )
  }
  
}

export default App;
