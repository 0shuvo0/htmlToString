![htmlToString explaination meme](preview.png)

# htmlToString
## convert html/DOM element to string

### Installation
`npm install htmltostring`

### Usage
```js
import htmlToString from 'htmltostring'

console.log(htmlToString('.container'))
// or 
// const container = document.querySelector('.container')
// console.log(htmlToString(container))

// example output:
// <div class="container">
//   <h1>Hello World</h1>
// </div>
```