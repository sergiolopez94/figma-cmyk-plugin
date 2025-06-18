const messageContainer = document.getElementById('message-container');
const checkSelectionBtn = document.getElementById('check-selection');
const closeBtn = document.getElementById('close');

function showMessage(message: string, type: 'info' | 'error' = 'info') {
  if (!messageContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = type === 'error' ? 'error-message' : 'info-message';
  messageDiv.textContent = message;
  
  messageContainer.innerHTML = '';
  messageContainer.appendChild(messageDiv);
  
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

checkSelectionBtn?.addEventListener('click', () => {
  parent.postMessage({ pluginMessage: { type: 'export-selection' } }, '*');
});

closeBtn?.addEventListener('click', () => {
  parent.postMessage({ pluginMessage: { type: 'close' } }, '*');
});

window.onmessage = (event) => {
  const msg = event.data.pluginMessage;
  
  if (msg.type === 'selection-info') {
    if (msg.count > 0) {
      showMessage(`${msg.count} element(s) selected and ready for export`, 'info');
    }
  }
  
  if (msg.type === 'error') {
    showMessage(msg.message, 'error');
  }
};