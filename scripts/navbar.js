
fetch('/pages/pages.json')
  .then(response => response.json())
  .then(pages => {
    let navbar = '<nav><ul>';
    pages.forEach(page => {
      navbar += `<li><a href="${page.link}">${page.title}</a></li>`;
    });
    navbar += '</ul></nav>';
    document.getElementById('navbar').innerHTML = navbar;
  })
  .catch(error => console.error('Error loading navbar:', error));
  