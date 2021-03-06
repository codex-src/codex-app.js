import App from "components/App"
import React from "react"
import ReactDOM from "react-dom"
import firebase from "firebase/app"

// import "firebase/analytics"
import "firebase/auth"

import "debug.css"
import "stylesheets/tailwind.generated.css" // Takes precedence
import "stylesheets/tailwind-color-variables.css"
import "stylesheets/tailwind-em-context.css"
import "stylesheets/tailwind-group-hover-text.css"

;(() => {
	firebase.initializeApp({
		apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
		authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
		databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
		projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
		storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_FIREBASE_APP_ID,
		measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
	})
	// if (process.env.NODE_ENV === "production") {
	// 	firebase.analytics()
	// }
})()

// https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/src/serviceWorker.js#L131
;(() => {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.ready
			.then(registration => {
				registration.unregister()
			})
			.catch(error => {
				console.error(error.message)
			})
	}
})()

ReactDOM.render(
	// <React.StrictMode>
	<App />,
	// </React.StrictMode>,
	document.getElementById("root"),
)
