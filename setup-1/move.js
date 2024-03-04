import path from 'path';
import fs from 'fs/promises';

// gives address of punk01
const __dirname = path.resolve() ;
const superParent = path.dirname(path.dirname(__dirname)) ;


console.log(__dirname) ;
console.log(superParent) ;

async function moveSrc() {
    const srcDir1 = path.join(__dirname, 'src')
    const srcDir2 = path.join(__dirname,'public')

    const srcDir3 = path.join(__dirname,  'index.js')
    const srcDir4 = path.join(__dirname, 'server.js')
    const srcDir5 = path.join(__dirname, 'README.md')

  const destDir1 = path.join(superParent, 'src');
  const destDir2 = path.join(superParent, 'public');

  const destDir3 = path.join(superParent, 'index.js');
  const destDir4 = path.join(superParent, 'server.js');
  const destDir5 = path.join(superParent, 'README.md');


  try {
    await fs.rename(srcDir1, destDir1);
    console.log('src directory moved successfully.');
  } catch (err) {
    console.error('Error moving src directory:', err);
  }

  try {
    await fs.rename(srcDir2, destDir2);
    console.log('public directory moved successfully.');
  } catch (err) {
    console.error('Error moving public directory:', err);
  }

  try {
    await fs.rename(srcDir3, destDir3);
    console.log('public directory moved successfully.');
  } catch (err) {
    console.error('Error moving public directory:', err);
  }

  try {
    await fs.rename(srcDir4, destDir4);
    console.log('public directory moved successfully.');
  } catch (err) {
    console.error('Error moving public directory:', err);
  }
  try {
    await fs.rename(srcDir5, destDir5);
    console.log('public directory moved successfully.');
  } catch (err) {
    console.error('Error moving public directory:', err);
  }

}
moveSrc();