const fs = require('fs');
const files = [
  'src/pages/index.astro',
  'src/pages/auth/Login.astro',
  'src/pages/auth/Register.astro',
  'src/pages/dashboard/Dashboard.astro',
  'src/pages/dashboard/settings.astro'
];
const inject = `export function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } },
    { params: { lang: 'fr' } },
    { params: { lang: 'pt' } },
    { params: { lang: 'br' } },
  ];
}
`;

files.forEach(f => {
  if(!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace('---', '---\n' + inject);
  
  const newPath = f.replace('src/pages/', 'src/pages/[lang]/');
  const dir = newPath.substring(0, newPath.lastIndexOf('/'));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(newPath, content);
  fs.unlinkSync(f); // delete old file
});

// Create index.astro at root to redirect to /es/
const indexContent = `---
---
<meta http-equiv="refresh" content="0;url=/es/" />
`;
fs.writeFileSync('src/pages/index.astro', indexContent);

console.log("Migration complete!");
