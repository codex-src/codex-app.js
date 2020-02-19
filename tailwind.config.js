const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	theme: {
		extend: {
			borderRadius: {
				"xl": "1rem",
				"2xl": "2rem",
			},
			boxShadow: {
				"hero-sm": `
				  0 1px 2px 0 rgba(0, 0, 0, 0.05),
					0 0 0 1px rgba(0, 0, 0, 0.05)
				`,
				"hero": `
				  0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06),
					0 0 0 1px rgba(0, 0, 0, 0.05)
				`,
				"hero-md": `
				  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06),
					0 0 0 1px rgba(0, 0, 0, 0.05)
				`,
				"hero-lg": `
				  0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05),
					0 0 0 1px rgba(0, 0, 0, 0.05)
				`,
				"hero-xl": `
				  0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04),
					0 0 0 1px rgba(0, 0, 0, 0.05)
				`,
				"hero-2xl": `
				  0 25px 50px -12px rgba(0, 0, 0, 0.25),
					0 0 0 1px rgba(0, 0, 0, 0.05)
				`,
			},
			colors: {
				"gray-50": {
					default: "#fbfdfe",
				},
				"gray":   {
					...defaultTheme.colors.gray,
					default: "#a0aec0",
				},
				"red":    {
					...defaultTheme.colors.red,
					default: "#f56565",
				},
				"orange": {
					...defaultTheme.colors.orange,
					default: "#ed8936",
				},
				"yellow": {
					...defaultTheme.colors.yellow,
					default: "#ecc94b",
				},
				"green":  {
					...defaultTheme.colors.green,
					default: "#48bb78",
				},
				"teal":   {
					...defaultTheme.colors.teal,
					default: "#38b2ac",
				},
				"blue":   {
					...defaultTheme.colors.blue,
					default: "#4299e1",
				},
				"indigo": {
					...defaultTheme.colors.indigo,
					default: "#667eea",
				},
				"purple": {
					...defaultTheme.colors.purple,
					default: "#9f7aea",
				},
				"pink":   {
					...defaultTheme.colors.pink,
					default: "#ed64a6",
				},
				"brand":  {
					...defaultTheme.colors.brand,
					default: "#4489ff",
				},
				// https://material.io/design/color/the-color-system.html#tools-for-picking-colors
				"md-red-50":           { default: "#ffebee" },
				"md-red-100":          { default: "#ffcdd2" },
				"md-red-200":          { default: "#ef9a9a" },
				"md-red-300":          { default: "#e57373" },
				"md-red-400":          { default: "#ef5350" },
				"md-red-500":          { default: "#f44336" },
				"md-red-600":          { default: "#e53935" },
				"md-red-700":          { default: "#d32f2f" },
				"md-red-800":          { default: "#c62828" },
				"md-red-900":          { default: "#b71c1c" },
				"md-red-a100":         { default: "#ff8a80" },
				"md-red-a200":         { default: "#ff5252" },
				"md-red-a400":         { default: "#ff1744" },
				"md-red-a700":         { default: "#d50000" },
				"md-pink-50":          { default: "#fce4ec" },
				"md-pink-100":         { default: "#f8bbd0" },
				"md-pink-200":         { default: "#f48fb1" },
				"md-pink-300":         { default: "#f06292" },
				"md-pink-400":         { default: "#ec407a" },
				"md-pink-500":         { default: "#e91e63" },
				"md-pink-600":         { default: "#d81b60" },
				"md-pink-700":         { default: "#c2185b" },
				"md-pink-800":         { default: "#ad1457" },
				"md-pink-900":         { default: "#880e4f" },
				"md-pink-a100":        { default: "#ff80ab" },
				"md-pink-a200":        { default: "#ff4081" },
				"md-pink-a400":        { default: "#f50057" },
				"md-pink-a700":        { default: "#c51162" },
				"md-purple-50":        { default: "#f3e5f5" },
				"md-purple-100":       { default: "#e1bee7" },
				"md-purple-200":       { default: "#ce93d8" },
				"md-purple-300":       { default: "#ba68c8" },
				"md-purple-400":       { default: "#ab47bc" },
				"md-purple-500":       { default: "#9c27b0" },
				"md-purple-600":       { default: "#8e24aa" },
				"md-purple-700":       { default: "#7b1fa2" },
				"md-purple-800":       { default: "#6a1b9a" },
				"md-purple-900":       { default: "#4a148c" },
				"md-purple-a100":      { default: "#ea80fc" },
				"md-purple-a200":      { default: "#e040fb" },
				"md-purple-a400":      { default: "#d500f9" },
				"md-purple-a700":      { default: "#aa00ff" },
				"md-deep-purple-50":   { default: "#ede7f6" },
				"md-deep-purple-100":  { default: "#d1c4e9" },
				"md-deep-purple-200":  { default: "#b39ddb" },
				"md-deep-purple-300":  { default: "#9575cd" },
				"md-deep-purple-400":  { default: "#7e57c2" },
				"md-deep-purple-500":  { default: "#673ab7" },
				"md-deep-purple-600":  { default: "#5e35b1" },
				"md-deep-purple-700":  { default: "#512da8" },
				"md-deep-purple-800":  { default: "#4527a0" },
				"md-deep-purple-900":  { default: "#311b92" },
				"md-deep-purple-a100": { default: "#b388ff" },
				"md-deep-purple-a200": { default: "#7c4dff" },
				"md-deep-purple-a400": { default: "#651fff" },
				"md-deep-purple-a700": { default: "#6200ea" },
				"md-indigo-50":        { default: "#e8eaf6" },
				"md-indigo-100":       { default: "#c5cae9" },
				"md-indigo-200":       { default: "#9fa8da" },
				"md-indigo-300":       { default: "#7986cb" },
				"md-indigo-400":       { default: "#5c6bc0" },
				"md-indigo-500":       { default: "#3f51b5" },
				"md-indigo-600":       { default: "#3949ab" },
				"md-indigo-700":       { default: "#303f9f" },
				"md-indigo-800":       { default: "#283593" },
				"md-indigo-900":       { default: "#1a237e" },
				"md-indigo-a100":      { default: "#8c9eff" },
				"md-indigo-a200":      { default: "#536dfe" },
				"md-indigo-a400":      { default: "#3d5afe" },
				"md-indigo-a700":      { default: "#304ffe" },
				"md-blue-50":          { default: "#e3f2fd" },
				"md-blue-100":         { default: "#bbdefb" },
				"md-blue-200":         { default: "#90caf9" },
				"md-blue-300":         { default: "#64b5f6" },
				"md-blue-400":         { default: "#42a5f5" },
				"md-blue-500":         { default: "#2196f3" },
				"md-blue-600":         { default: "#1e88e5" },
				"md-blue-700":         { default: "#1976d2" },
				"md-blue-800":         { default: "#1565c0" },
				"md-blue-900":         { default: "#0d47a1" },
				"md-blue-a100":        { default: "#82b1ff" },
				"md-blue-a200":        { default: "#448aff" },
				"md-blue-a400":        { default: "#2979ff" },
				"md-blue-a700":        { default: "#2962ff" },
				"md-light-blue-50":    { default: "#e1f5fe" },
				"md-light-blue-100":   { default: "#b3e5fc" },
				"md-light-blue-200":   { default: "#81d4fa" },
				"md-light-blue-300":   { default: "#4fc3f7" },
				"md-light-blue-400":   { default: "#29b6f6" },
				"md-light-blue-500":   { default: "#03a9f4" },
				"md-light-blue-600":   { default: "#039be5" },
				"md-light-blue-700":   { default: "#0288d1" },
				"md-light-blue-800":   { default: "#0277bd" },
				"md-light-blue-900":   { default: "#01579b" },
				"md-light-blue-a100":  { default: "#80d8ff" },
				"md-light-blue-a200":  { default: "#40c4ff" },
				"md-light-blue-a400":  { default: "#00b0ff" },
				"md-light-blue-a700":  { default: "#0091ea" },
				"md-cyan-50":          { default: "#e0f7fa" },
				"md-cyan-100":         { default: "#b2ebf2" },
				"md-cyan-200":         { default: "#80deea" },
				"md-cyan-300":         { default: "#4dd0e1" },
				"md-cyan-400":         { default: "#26c6da" },
				"md-cyan-500":         { default: "#00bcd4" },
				"md-cyan-600":         { default: "#00acc1" },
				"md-cyan-700":         { default: "#0097a7" },
				"md-cyan-800":         { default: "#00838f" },
				"md-cyan-900":         { default: "#006064" },
				"md-cyan-a100":        { default: "#84ffff" },
				"md-cyan-a200":        { default: "#18ffff" },
				"md-cyan-a400":        { default: "#00e5ff" },
				"md-cyan-a700":        { default: "#00b8d4" },
				"md-teal-50":          { default: "#e0f2f1" },
				"md-teal-100":         { default: "#b2dfdb" },
				"md-teal-200":         { default: "#80cbc4" },
				"md-teal-300":         { default: "#4db6ac" },
				"md-teal-400":         { default: "#26a69a" },
				"md-teal-500":         { default: "#009688" },
				"md-teal-600":         { default: "#00897b" },
				"md-teal-700":         { default: "#00796b" },
				"md-teal-800":         { default: "#00695c" },
				"md-teal-900":         { default: "#004d40" },
				"md-teal-a100":        { default: "#a7ffeb" },
				"md-teal-a200":        { default: "#64ffda" },
				"md-teal-a400":        { default: "#1de9b6" },
				"md-teal-a700":        { default: "#00bfa5" },
				"md-green-50":         { default: "#e8f5e9" },
				"md-green-100":        { default: "#c8e6c9" },
				"md-green-200":        { default: "#a5d6a7" },
				"md-green-300":        { default: "#81c784" },
				"md-green-400":        { default: "#66bb6a" },
				"md-green-500":        { default: "#4caf50" },
				"md-green-600":        { default: "#43a047" },
				"md-green-700":        { default: "#388e3c" },
				"md-green-800":        { default: "#2e7d32" },
				"md-green-900":        { default: "#1b5e20" },
				"md-green-a100":       { default: "#b9f6ca" },
				"md-green-a200":       { default: "#69f0ae" },
				"md-green-a400":       { default: "#00e676" },
				"md-green-a700":       { default: "#00c853" },
				"md-light-green-50":   { default: "#f1f8e9" },
				"md-light-green-100":  { default: "#dcedc8" },
				"md-light-green-200":  { default: "#c5e1a5" },
				"md-light-green-300":  { default: "#aed581" },
				"md-light-green-400":  { default: "#9ccc65" },
				"md-light-green-500":  { default: "#8bc34a" },
				"md-light-green-600":  { default: "#7cb342" },
				"md-light-green-700":  { default: "#689f38" },
				"md-light-green-800":  { default: "#558b2f" },
				"md-light-green-900":  { default: "#33691e" },
				"md-light-green-a100": { default: "#ccff90" },
				"md-light-green-a200": { default: "#b2ff59" },
				"md-light-green-a400": { default: "#76ff03" },
				"md-light-green-a700": { default: "#64dd17" },
				"md-lime-50":          { default: "#f9fbe7" },
				"md-lime-100":         { default: "#f0f4c3" },
				"md-lime-200":         { default: "#e6ee9c" },
				"md-lime-300":         { default: "#dce775" },
				"md-lime-400":         { default: "#d4e157" },
				"md-lime-500":         { default: "#cddc39" },
				"md-lime-600":         { default: "#c0ca33" },
				"md-lime-700":         { default: "#afb42b" },
				"md-lime-800":         { default: "#9e9d24" },
				"md-lime-900":         { default: "#827717" },
				"md-lime-a100":        { default: "#f4ff81" },
				"md-lime-a200":        { default: "#eeff41" },
				"md-lime-a400":        { default: "#c6ff00" },
				"md-lime-a700":        { default: "#aeea00" },
				"md-yellow-50":        { default: "#fffde7" },
				"md-yellow-100":       { default: "#fff9c4" },
				"md-yellow-200":       { default: "#fff59d" },
				"md-yellow-300":       { default: "#fff176" },
				"md-yellow-400":       { default: "#ffee58" },
				"md-yellow-500":       { default: "#ffeb3b" },
				"md-yellow-600":       { default: "#fdd835" },
				"md-yellow-700":       { default: "#fbc02d" },
				"md-yellow-800":       { default: "#f9a825" },
				"md-yellow-900":       { default: "#f57f17" },
				"md-yellow-a100":      { default: "#ffff8d" },
				"md-yellow-a200":      { default: "#ffff00" },
				"md-yellow-a400":      { default: "#ffea00" },
				"md-yellow-a700":      { default: "#ffd600" },
				"md-amber-50":         { default: "#fff8e1" },
				"md-amber-100":        { default: "#ffecb3" },
				"md-amber-200":        { default: "#ffe082" },
				"md-amber-300":        { default: "#ffd54f" },
				"md-amber-400":        { default: "#ffca28" },
				"md-amber-500":        { default: "#ffc107" },
				"md-amber-600":        { default: "#ffb300" },
				"md-amber-700":        { default: "#ffa000" },
				"md-amber-800":        { default: "#ff8f00" },
				"md-amber-900":        { default: "#ff6f00" },
				"md-amber-a100":       { default: "#ffe57f" },
				"md-amber-a200":       { default: "#ffd740" },
				"md-amber-a400":       { default: "#ffc400" },
				"md-amber-a700":       { default: "#ffab00" },
				"md-orange-50":        { default: "#fff3e0" },
				"md-orange-100":       { default: "#ffe0b2" },
				"md-orange-200":       { default: "#ffcc80" },
				"md-orange-300":       { default: "#ffb74d" },
				"md-orange-400":       { default: "#ffa726" },
				"md-orange-500":       { default: "#ff9800" },
				"md-orange-600":       { default: "#fb8c00" },
				"md-orange-700":       { default: "#f57c00" },
				"md-orange-800":       { default: "#ef6c00" },
				"md-orange-900":       { default: "#e65100" },
				"md-orange-a100":      { default: "#ffd180" },
				"md-orange-a200":      { default: "#ffab40" },
				"md-orange-a400":      { default: "#ff9100" },
				"md-orange-a700":      { default: "#ff6d00" },
				"md-deep-orange-50":   { default: "#fbe9e7" },
				"md-deep-orange-100":  { default: "#ffccbc" },
				"md-deep-orange-200":  { default: "#ffab91" },
				"md-deep-orange-300":  { default: "#ff8a65" },
				"md-deep-orange-400":  { default: "#ff7043" },
				"md-deep-orange-500":  { default: "#ff5722" },
				"md-deep-orange-600":  { default: "#f4511e" },
				"md-deep-orange-700":  { default: "#e64a19" },
				"md-deep-orange-800":  { default: "#d84315" },
				"md-deep-orange-900":  { default: "#bf360c" },
				"md-deep-orange-a100": { default: "#ff9e80" },
				"md-deep-orange-a200": { default: "#ff6e40" },
				"md-deep-orange-a400": { default: "#ff3d00" },
				"md-deep-orange-a700": { default: "#dd2c00" },
				"md-brown-50":         { default: "#efebe9" },
				"md-brown-100":        { default: "#d7ccc8" },
				"md-brown-200":        { default: "#bcaaa4" },
				"md-brown-300":        { default: "#a1887f" },
				"md-brown-400":        { default: "#8d6e63" },
				"md-brown-500":        { default: "#795548" },
				"md-brown-600":        { default: "#6d4c41" },
				"md-brown-700":        { default: "#5d4037" },
				"md-brown-800":        { default: "#4e342e" },
				"md-brown-900":        { default: "#3e2723" },
				"md-gray-50":          { default: "#fafafa" },
				"md-gray-100":         { default: "#f5f5f5" },
				"md-gray-200":         { default: "#eeeeee" },
				"md-gray-300":         { default: "#e0e0e0" },
				"md-gray-400":         { default: "#bdbdbd" },
				"md-gray-500":         { default: "#9e9e9e" },
				"md-gray-600":         { default: "#757575" },
				"md-gray-700":         { default: "#616161" },
				"md-gray-800":         { default: "#424242" },
				"md-gray-900":         { default: "#212121" },
				"md-blue-gray-50":     { default: "#eceff1" },
				"md-blue-gray-100":    { default: "#cfd8dc" },
				"md-blue-gray-200":    { default: "#b0bec5" },
				"md-blue-gray-300":    { default: "#90a4ae" },
				"md-blue-gray-400":    { default: "#78909c" },
				"md-blue-gray-500":    { default: "#607d8b" },
				"md-blue-gray-600":    { default: "#546e7a" },
				"md-blue-gray-700":    { default: "#455a64" },
				"md-blue-gray-800":    { default: "#37474f" },
				"md-blue-gray-900":    { default: "#263238" },
				"md-black":            { default: "#000000" },
				"md-white":            { default: "#ffffff" },
			},
			fontWeight: {
				100: "100",
				200: "200",
				300: "300",
				400: "400",
				500: "500",
				600: "600",
				700: "700",
				800: "800",
				900: "900",
			},
			inset: {
				"1/2":  "50%",
				"full": "100%",
			},
			lineHeight: {
				1.0: "1.0",
				1.1: "1.1",
				1.2: "1.2",
				1.3: "1.3",
				1.4: "1.4",
				1.5: "1.5",
				1.6: "1.6",
				1.7: "1.7",
				1.8: "1.8",
				1.9: "1.9",
				2.0: "2.0",
			},
			opacity: {
				10: "0.10",
				90: "0.90",
			},
			// https://youtube.com/watch?v=jl_tdhBxc_Y
			spacing: {
				"9/16":   "56.25%",
				"10/16":  "62.5%",
				"1/2":    "50%",
				"1/3":    "33.333333%",
				"2/3":    "66.666667%",
				"1/4":    "25%",
				"2/4":    "50%",
				"3/4":    "75%",
				"1/5":    "20%",
				"2/5":    "40%",
				"3/5":    "60%",
				"4/5":    "80%",
				"1/6":    "16.666667%",
				"2/6":    "33.333333%",
				"3/6":    "50%",
				"4/6":    "66.666667%",
				"5/6":    "83.333333%",
				"1/12":   "8.333333%",
				"2/12":   "16.666667%",
				"3/12":   "25%",
				"4/12":   "33.333333%",
				"5/12":   "41.666667%",
				"6/12":   "50%",
				"7/12":   "58.333333%",
				"8/12":   "66.666667%",
				"9/12":   "75%",
				"10/12":  "83.333333%",
				"11/12":  "91.666667%",
				"full":   "100%",
				"screen": "100vw",
			},
			strokeWidth: {
				400: "2",
				500: "2.3333",
				600: "2.6667",
				700: "3",
			},
		},
	},
	// https://tailwindcss.com/docs/pseudo-class-variants/#active
	variants: {
		backgroundColor: ["responsive", "hover", "focus", "active"],
		textColor:       ["responsive", "hover", "focus", "active"],
	},
	plugins: [],
}