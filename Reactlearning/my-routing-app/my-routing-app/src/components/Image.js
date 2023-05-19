// import React from 'react'
// import {useState} from 'react'
// function Image() {
//     const[img1,setImg1]=useState(https://www.shutterstock.com/search/apple+-+fruit)
//   return (
//     <div>{img1}</div>
//   )
// }

// export default Image
import React, { Component } from 'react'
 class Image extends Component {
    state={
        pic:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-photo%2Fred-apple-fruit-leaf-isolated-260nw-203589940.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fapple%2B-%2Bfruit&tbnid=rdpZsdNJpP6C3M&vet=12ahUKEwjM64LG4sD4AhXKi9gFHVDYA8kQMygAegUIARDjAQ..i&docid=Vh5P31H1w--K2M&w=240&h=280&q=fruits%20images&ved=2ahUKEwjM64LG4sD4AhXKi9gFHVDYA8kQMygAegUIARDjAQ"
    }
  render() {
    return (
      <div>
        
        <img src={this.state.pic} alt='img'/>
        </div>
    )
  } 
}
export default Image
