![htmlToString explaination meme](https://github.com/0shuvo0/htmlToString/raw/main/preview.png)

# htmlToString
## Convert html/DOM element to string
### Works with rendered and virtual DOM

### Installation
`npm install htmltostring`
### Or using CDN
```html
<script src="https://cdn.jsdelivr.net/npm/htmltostring@1.0.6/htmlToString.min.js"></script>
```

### Usage
```js
//you don't have to import if you're using CDN
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
