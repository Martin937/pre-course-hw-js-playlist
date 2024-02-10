// createNode('node', 'context', [], {})
export function createNode(nodeElement, context, classes = [], options = {}) {
	let element = document.createElement(nodeElement)
	if (context) element.append(context)
	if (classes) classes.forEach(el => element.classList.add(el))
	if (options) for (const key in options) { element[key] = options[key] }
	// document.body.appendChild(element)
	return element
}