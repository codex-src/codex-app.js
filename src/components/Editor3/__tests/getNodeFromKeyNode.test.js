import invariant from "invariant"
import React from "react"
import RenderDOM2 from "utils/RenderDOM2"

function isTextOrBreakElementNode(node) {
	const ok = (
		node.nodeType === Node.TEXT_NODE || (
			node.nodeType === Node.ELEMENT_NODE &&
			node.nodeName === "BR"
		)
	)
	return ok
}

// Mocks the browser function.
function nodeValue(node) {
	return node.nodeValue || "" // Break node
}

// Mocks the browser function.
function innerText(keyNode) {
	let data = ""
	const recurseOn = startNode => {
		for (const currentNode of startNode.childNodes) {
			if (isTextOrBreakElementNode(currentNode)) {
				data += nodeValue(currentNode)
			} else {
				recurseOn(currentNode)
			}
		}
	}
	recurseOn(keyNode)
	return data
}

// Gets parsed nodes from a compound key node or key node.
function getNodeFromKeyNode(keyNode) {
	invariant(
		keyNode.hasAttribute("data-vdom-node") || keyNode.hasAttribute("data-vdom-compound-node"),
		"FIXME",
	)
	if (keyNode.getAttribute("data-vdom-compound-node")) {
		const nodes = []
		for (const currentNode of keyNode.childNodes) { // Does not recurse
			const key = currentNode.id
			const data = innerText(currentNode)
			nodes.push({ key, data })
		}
		return nodes
	}
	const key = keyNode.id // Expects data-vdom-node
	const data = innerText(keyNode)
	return [{ key, data }]
}

test("innerText: (empty)", () => {
	const Component = props => (
		<div id="a">
			<br />
		</div>
	)
	const rootNode = RenderDOM2(<Component />)
	expect(innerText(rootNode)).toBe("")
})

test("innerText: Hello, world!", () => {
	const Component = props => (
		<div id="a">
			Hello, world!
		</div>
	)
	const rootNode = RenderDOM2(<Component />)
	expect(innerText(rootNode)).toBe("Hello, world!")
})

test("innerText: *Hello*, **world**!", () => {
	const Component = props => (
		<div id="a">
			<em>
				Hello
			</em>
			{", "}
			<strong>
				world
			</strong>
			!
		</div>
	)
	const rootNode = RenderDOM2(<Component />)
	expect(innerText(rootNode)).toBe("Hello, world!")
})

test("getNodeFromKeyNode: integration", () => {
	const Component = props => (
		<div>
			<div id="a" data-vdom-node>
				Hello, world!
			</div>
			<div data-vdom-compound-node>
				<div id="b-1" data-vdom-node>
					Hello, world!
				</div>
				<div id="b-2" data-vdom-node>
					<em>
						Hello
					</em>
					{", "}
					<strong>
						world
					</strong>
					!
				</div>
				<div id="b-3" data-vdom-node>
					Hello, world!
				</div>
			</div>
			<div id="c" data-vdom-node>
				Hello, world!
			</div>
		</div>
	)
	const rootNode = RenderDOM2(<Component />)
	// Get the start and end nodes:
	const startNode = rootNode.childNodes[0]
	const endNode = rootNode.childNodes[rootNode.childNodes.length - 1]
	// Parse nodes:
	const nodes = []
	let currentNode = startNode
	while (currentNode) {
		nodes.push(...getNodeFromKeyNode(currentNode))
		if (currentNode === endNode) {
			break
		}
		currentNode = currentNode.nextSibling
	}
	const expected = [
		{ key: "a", data: "Hello, world!" },
		{ key: "b-1", data: "Hello, world!" },
		{ key: "b-2", data: "Hello, world!" },
		{ key: "b-3", data: "Hello, world!" },
		{ key: "c", data: "Hello, world!" },
	]
	expect(nodes).toStrictEqual(expected)
})
