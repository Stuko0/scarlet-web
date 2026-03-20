const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.astro')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('src/pages/[lang]');

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    // We want to replace '../' with '../../'
    // But ONLY inside import paths or hrefs. To be safe, any '../' is fine since they are relative.
    // However, if we replace '../', 'src/pages/[lang]/auth/Login.astro' had:
    // '../../layouts/...' -> '../../../layouts/...'
    // So we just globally replace '../' with '../../' where it appears.
    // Wait! This replaces '../../' with '../../../../' which is wrong.
    // Better: replace strings that START with '../' or '../../'
    
    content = content.replace(/from\s+['"]([^'"]+)['"]/g, match => {
        return match.replace(/['"]([^'"]+['"])/, (m, p1) => {
             if (p1.startsWith('../') || p1.startsWith('./')) {
                 if(p1.startsWith('./')) {
                     return '"../' + p1.substring(2) + '"';
                 }
                 return '"../' + p1;
             }
             return m;
        });
    });
    
    fs.writeFileSync(f, content);
});
console.log("Imports fixed!");
