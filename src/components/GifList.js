import React from 'react'

export default class GifList extends React.Component {
  render() {
    console.log(this.props.gifs)
    return (
      <ul>
        {this.props.gifs.map(gif => <li><img src={gif.embed_url}/></li>)}
      </ul>
    )
  }
}
