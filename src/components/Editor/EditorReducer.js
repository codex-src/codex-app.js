import * as Components from "./Components"
import useMethods from "use-methods"
import utf8 from "./utf8"

const initialState = {
	isFocused: false,
	data:      "",
	pos1:      0,
	pos2:      0,

	// `shouldRenderComponents` hints whether the editor’s
	// components should be rerendered.
	shouldRenderComponents: 0,

	// `shouldRenderPos` hints whether the editor’s cursor
	// positions should be rerendered.
	shouldRenderPos: 0,

	Components: [],
}

// NOTE: Use `Object.assign` to assign multiple properties
// because `state` is a reference type.
const reducer = state => ({
	opFocus() {
		state.isFocused = true
	},
	opBlur() {
		state.isFocused = false
	},
	// NOTE: Based on experience, `opSelect` needs to set
	// `data` and `pos1` and `pos2`.
	opSelect(data, pos1 = state.pos1, pos2 = state.pos2) {
		if (pos1 < pos2) {
			Object.assign(state, { data, pos1, pos2 })
		} else {
			// Reverse order; `pos1` can never be greater than
			// `pos2`.
			Object.assign(state, { data, pos1: pos2, pos2: pos1 })
		}
	},
	collapse() {
		state.pos2 = state.pos1
	},
	opWrite(inputType, data) {
		state.data = state.data.slice(0, state.pos1) + data + state.data.slice(state.pos2)
		state.pos1 += data.length
		this.collapse()
		// // NOTE: To opt-in to native rendering, conditionally
		// // increment `shouldRenderComponents`.
		// state.shouldRenderComponents += inputType !== "onKeyPress"
		state.shouldRenderComponents++
	},

	delete(lengthL, lengthR) {
		// Guard the current node:
		if ((!state.pos1 && lengthL) || (state.pos2 === state.data.length && lengthR)) {
			// No-op.
			return
		}
		state.data = state.data.slice(0, state.pos1 - lengthL) + state.data.slice(state.pos2 + lengthR)
		state.pos1 -= lengthL
		this.collapse()
		state.shouldRenderComponents++
	},
	opBackspace() {
		let length = 0
		if (state.pos1 && state.pos1 === state.pos2) {
			length = utf8.countPrev(state.data, state.pos1)
		}
		this.delete(length, 0)
	},
	opBackspaceWord() {
		const startIndex = state.pos1 - utf8.countPrev(state.data, state.pos1)
		let index = startIndex

		// const startIndex = state.pos1 - utf8.countPrev(state.data, state.pos1)
		// let index = startIndex
		// // `decrement` is a higher-order convenience function
		// // that mutates `index` by the UTF-8 length of the
		// // previous character.
		// const decrement = () => {
		// 	index -= utf8.countPrev(state.data, index)
		// }
		// // Iterate spaces:
		// while (index >= 0) {
		// 	if (!utf8.isHWhiteSpace(state.data[index])) {
		// 		break
		// 	}
		// 	decrement()
		// }
		// // Iterate non-word characters:
		// while (index >= 0) {
		// 	if (utf8.isAlphanum(state.data[index])) {
		// 		break
		// 	}
		// 	decrement()
		// }
		// // Iterate word characters:
		// while (index >= 0) {
		// 	if (!utf8.isAlphanum(state.data[index])) {
		// 		break
		// 	}
		// 	decrement()
		// }
		// const length = startIndex - index
		// this.delete(length, 0)
	},
	opBackspaceLine() {
		console.log("backspace line")
	},
	opDelete() {
		let length = 0
		if (state.pos2 < state.data.length && state.pos2 === state.pos1) {
			length = utf8.countNext(state.data, state.pos2)
		}
		this.delete(0, length)
	},
	opDeleteWord() {
		console.log("delete word")
	},

	// deleteWordOperation(dir) {
	// 	const { data, pos1, pos2 } = getVars(state)
	// 	if (pos1 !== pos2 || (((dir === -1 && pos1 - 1 >= 0) || (!dir && pos1 < data.length)) && data[pos1 + dir] === "\n")) {
	// 		this.deleteOperation(dir || 1)
	// 		return
	// 	}
	// 	// Iterate spaces.
	// 	let index = pos1 // Use `let`.
	// 	while ((dir === -1 && index - 1 >= 0) || (!dir && index < data.length)) {
	// 		if (data[index + dir] !== " ") {
	// 			break
	// 		}
	// 		index += dir || 1
	// 	}
	// 	// Iterate non-word characters.
	// 	while ((dir === -1 && index - 1 >= 0) || (!dir && index < data.length)) {
	// 		if (Unicode.isAlphanum(data[index + dir]) || data[index + dir] === "\n") {
	// 			break
	// 		}
	// 		index += dir || 1
	// 	}
	// 	// Iterate word characters.
	// 	while ((dir === -1 && index - 1 >= 0) || (!dir && index < data.length)) {
	// 		if (!Unicode.isAlphanum(data[index + dir])) {
	// 			break
	// 		}
	// 		index += dir || 1
	// 	}
	// 	dir = index - pos1
	// 	this.deleteOperation(dir)
	// },
	// deleteLineOperation(dir) {
	// 	const { data, pos1, pos2 } = getVars(state)
	// 	if (pos1 !== pos2 || (((dir === -1 && pos1 - 1 >= 0) || (!dir && pos1 < data.length)) && data[pos1 + dir] === "\n")) {
	// 		this.deleteOperation(dir || 1)
	// 		return
	// 	}
	// 	let index = pos1 // Use `let`.
	// 	while ((dir === -1 && index - 1 >= 0) || (!dir && index < data.length)) {
	// 		if (data[index + dir] === "\n") {
	// 			break
	// 		}
	// 		index += dir || 1
	// 	}
	// 	dir = index - pos1
	// 	this.deleteOperation(dir)
	// },
	// commitBackspace()     { this.deleteOperation    (-1) },
	// commitBackspaceWord() { this.deleteWordOperation(-1) },
	// commitBackspaceLine() { this.deleteLineOperation(-1) },
	// commitDelete()        { this.deleteOperation    ( 1) }, // NOTE: Use `1`.
	// commitDeleteWord()    { this.deleteWordOperation( 0) },

	render() {
		state.Components = Components.parse(state.data)
		state.shouldRenderPos++
	},
})

function init(state) {
	return { ...state, Components: Components.parse(state.data) }
}

function useEditor(data = "") {
	return useMethods(reducer, { ...initialState, data }, init)
}

export default useEditor
