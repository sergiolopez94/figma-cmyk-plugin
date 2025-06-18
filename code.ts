figma.showUI(__html__, { width: 400, height: 600 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'export-selection') {
    const selection = figma.currentPage.selection;
    
    if (selection.length === 0) {
      figma.ui.postMessage({
        type: 'error',
        message: 'Please select at least one element to export'
      });
      return;
    }

    figma.ui.postMessage({
      type: 'selection-info',
      count: selection.length,
      nodes: selection.map(node => ({
        id: node.id,
        name: node.name,
        type: node.type
      }))
    });
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};