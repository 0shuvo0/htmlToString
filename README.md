![htmlToString explaination meme](https://github.com/0shuvo0/htmlToString/raw/main/preview.png)

# htmlToString
## Convert html/DOM element to string
### Works with rendered and virtual DOM

### Installation
`npm install htmltostring`
### Or using CDN
`<script src="https://raw.githubusercontent.com/0shuvo0/htmlToString/main/htmlToString.min.js"></script>`

### Usage
```js
import htmlToString from 'htmltostring'

console.log(htmlToString('.container'))
// or 
// const container = document.querySelector('.container')
// console.log(htmlToString(container))
```
### Example Output
```
<div class="container">
    <h1>Hello World</h1>
</div>
```