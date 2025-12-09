export default function decorate(block) {
  // Wrap text after <br> tag in a span for styling
  const h1Elements = block.querySelectorAll('h1');
  h1Elements.forEach((h1) => {
    const br = h1.querySelector('br');
    if (br) {
      // Get all text nodes and elements after the <br>
      const fragment = document.createDocumentFragment();
      let node = br.nextSibling;
      while (node) {
        const nextSibling = node.nextSibling;
        fragment.appendChild(node);
        node = nextSibling;
      }
      
      // Only create span if there's content after the br
      if (fragment.hasChildNodes()) {
        // Create span wrapper
        const span = document.createElement('span');
        span.className = 'title-after-br';
        span.appendChild(fragment);
        
        // Insert span after br
        br.after(span);
      }
    }
  });
}

