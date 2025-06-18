console.log('UI script loaded');

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeUI);
} else {
  initializeUI();
}

function initializeUI() {
  console.log('Initializing UI...');
  
  const messageContainer = document.getElementById('message-container');
  const checkSelectionBtn = document.getElementById('check-selection');
  const closeBtn = document.getElementById('close');

  console.log('Elements found:', { messageContainer, checkSelectionBtn, closeBtn });

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
    console.log('Check selection clicked');
    parent.postMessage({ pluginMessage: { type: 'export-selection' } }, '*');
  });

  closeBtn?.addEventListener('click', () => {
    console.log('Close button clicked');
    parent.postMessage({ pluginMessage: { type: 'close' } }, '*');
  });

  window.onmessage = (event) => {
    console.log('UI received message:', event.data);
    const msg = event.data.pluginMessage;
    
    if (msg && msg.type === 'selection-info') {
      if (msg.count > 0) {
        showMessage(`${msg.count} element(s) selected and ready for export`, 'info');
      }
    }
    
    if (msg && msg.type === 'error') {
      showMessage(msg.message, 'error');
    }
  };
}