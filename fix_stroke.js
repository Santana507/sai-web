const fs = require('fs');
['index.html', 'tools/templates/footer.html', 'test-footer.html'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.split('stroke="currentColor"').join('stroke="#ffffff"');
  fs.writeFileSync(f, c);
});
