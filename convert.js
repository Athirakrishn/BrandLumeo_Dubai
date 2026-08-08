const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public');

function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    for (const file of files) {
        const fullPath = path.join(currentPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
                console.log(`Converting ${fullPath}...`);
                const name = path.basename(fullPath, path.extname(fullPath));
                const dirName = path.dirname(fullPath);
                
                const webpPath = path.join(dirName, `${name}.webp`);
                const avifPath = path.join(dirName, `${name}.avif`);
                
                // Convert to webp
                sharp(fullPath)
                    .webp()
                    .toFile(webpPath)
                    .then(() => console.log(`Created ${webpPath}`))
                    .catch(err => console.error(`Error converting to webp: ${fullPath}`, err));
                    
                // Convert to avif
                sharp(fullPath)
                    .avif()
                    .toFile(avifPath)
                    .then(() => console.log(`Created ${avifPath}`))
                    .catch(err => console.error(`Error converting to avif: ${fullPath}`, err));
            }
        }
    }
}

walkDir(dir);
