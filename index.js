const selfClosingTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']

function getAttributes(el){
    return [...el.attributes].map(e => `${e.name}="${e.value}"`)
}

function htmlToString(el, tab = "\t"){
    (typeof el === 'string') && (el = document.querySelector(el))
    
    let tagName = el.tagName.toLowerCase()
    let attributes = getAttributes(el)
    attributes = attributes.length ? ` ${attributes.join(' ')}` : ''

    if(selfClosingTags.includes(tagName)){
        return `<${tagName}${attributes} />`
    }

    let childs = [...el.querySelectorAll('*')]
    if(childs.length === 0){
        return `<${tagName}${attributes}>${el.innerText}</${tagName}>`
    }
    return `<${tagName}${attributes}>\n${childs.map(cEl => tab + htmlToString(cEl, tab + "\t")).join("\n")}\n${tab.slice(1)}</${tagName}>`
}

export default htmlToString