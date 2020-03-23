import React from 'react'
import axios from 'axios'

export const Content = {
  HTML: 'HTML',
  TEXT: 'TEXT',
  JSON: 'JSON'
}

class Form extends React.Component {
  constructor () {
    super()
    this.state = { url: null }
  }

  submitHandler = async (event) => {
    event.preventDefault()
    const method = this.state.chosenMethod ? this.state.chosenMethod : 'GET'
    const res = await axios({
      url: this.state.url,
      method: method
    })
    console.log(res)
    
    let content = Content.TEXT

    if (res.headers['content-type']) {
      switch (res.headers['content-type'].toLowerCase()) {
        case 'application/json': content = Content.JSON; console.log(content);
         break
        case 'text/html': content = content.HTML; break
        default: content = null
      }
    }
    console.log(res.data)
    
    this.props.handler(res.data, content)
  }

  changeHandler = (event) => {
    this.setState({ url: event.target.value })
    console.log(event.target.value);
    
  }

  render() {
    return (
      <form id='Form' onSubmit={ this.submitHandler }>
        <label>GET
          <input type='radio' class='silence-on-my-radio' name='chosenMethod' value="GET" />
        </label>
        <label>POST
          <input type='radio' class='silence-on-my-radio' name='chosenMethod' value="POST" />
        </label>
        <label>PUT
          <input type='radio' class='silence-on-my-radio' name='chosenMethod' value="PUT" />
        </label>
        <label>DELETE
          <input type='radio' class='silence-on-my-radio' name='chosenMethod' value="DELETE" />
        </label><br/>
        <input type='text' id='formInput' placeholder="You can't always get what you want." onChange={ this.changeHandler }></input><br/>

        <input type='submit' value='But if you try{} sometimes...' />
      </form>
    )
  }
}

export default Form