import React from 'react'
import { Content } from '../Form'
import ReactJSON from 'react-json-view'

class Results extends React.Component {
  renderType = () => {
    switch (this.props.type) {
      case Content.HTML: return <iframe title='results'>{this.props.data}</iframe>
      case Content.Text: return <pre>{this.props.data}</pre> 
      case Content.JSON: return <ReactJSON src={ this.props.data } collapsed={ this.props.expandTo } />
      default: return 'Invalid Data Type'
    }
  }

  render () {
    return (
      <div id='Results'>
        <h2>You catch what you need</h2>
        {this.renderType()}
      </div>
    )
  }
}

export default Results
