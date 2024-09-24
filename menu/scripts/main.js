window.addEventListener('DOMContentLoaded', async () => {
	const button = document.getElementById('turnbutton');
	// button
	const currentButtonState = ((await chrome.storage.local.get()).enabled) || false;
	button.textContent = currentButtonState ? 'Turn off' : 'Turn on';
	button.addEventListener('click', async () => {
		const currentState = ((await chrome.storage.local.get()).enabled) || false;
		const state = !currentState;
		await browser.storage.local.set({ enabled: state });
		button.textContent = state ? 'Turn off' : 'Turn on';
	})
	window.addEventListener('keydown', async (e) => {
		if (e.key === '5') {
			window.close()
		}
	})
})