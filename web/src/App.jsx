import { useEffect, useState } from 'react'

import useMessageListener from './hooks/useMessageListener'

function App() {
	const [isPauseMenuActive, setIsPauseMenuActive] = useState(false)

	// This is the listener that will be called when the lua / js clients send a message
	useMessageListener((data) => {
		if (data.action === 'pauseMenuStatus') {
			setIsPauseMenuActive(data.status)
			return
		}
	})

	// Just the same structure as a normal React app
	return (
		!isPauseMenuActive && (
			<div>
				<h1>App</h1>
			</div>
		)
	)
}

export default App
