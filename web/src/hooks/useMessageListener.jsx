import { useEffect } from 'react'

function useMessageListener(listener) {
	useEffect(() => {
		const messageHandler = (event) => {
			console.log('Message received', event.data)
			listener(event.data)
		}

		window.addEventListener('message', messageHandler)

		return () => {
			window.removeEventListener('message', messageHandler)
		}
	}, [listener])
}

export default useMessageListener
