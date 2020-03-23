import React from 'react'
import Header from '../Header'
import Form from '../Form'
import Results from '../Results'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      data: null,
      type: null,
      expandTo: 1
    }
  }

  resultsHandler = (results, type) => {
    this.setState({
      data: results,
      type: type,
    })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Form handler={ this.resultsHandler } />
        <Results
          data={ this.state.data }
          type={ this.state.type }
          expandTo={ this.state.expandTo }
        />
      </div>
    )
  }
}

export default App
