import path from 'path' ;
import fs from 'fs/promises' ;

const projectFolder = path.resolve() ;
const srcFilesPath  = path.join(path.resolve(),'node_modules','backflow');


// we have to move all files and folder from npm package to project folder....

async function moveSrc() {
    const srcDir1  = path.join(srcFilesPath, 'a-databaseConfig')
    const srcDir2  = path.join(srcFilesPath,'b-loggedData')
    const srcDir3  = path.join(srcFilesPath,  'b-public')
    const srcDir4  = path.join(srcFilesPath, 'c-uploads')
    const srcDir5  = path.join(srcFilesPath, 'd-middlewares')
    const srcDir6  = path.join(srcFilesPath, 'e-modules')
    const srcDir7  = path.join(srcFilesPath,'f-useful-functions')
    const srcDir8  = path.join(srcFilesPath,  'g-events')
    const srcDir9  = path.join(srcFilesPath, 'h-features')
    const srcDir10 = path.join(srcFilesPath, '.env')
    const srcDir11 = path.join(srcFilesPath, 'package.json')
    const srcDir12 = path.join(srcFilesPath,'README.js')
    const srcDir13 = path.join(srcFilesPath,  'server.js')

  const destDir1  = path.join(projectFolder, 'a-databaseConfig');
  const destDir2  = path.join(projectFolder, 'b-loggedData');
  const destDir3  = path.join(projectFolder, 'b-public');
  const destDir4  = path.join(projectFolder, 'c-uploads');
  const destDir5  = path.join(projectFolder, 'd-middlewares');
  const destDir6  = path.join(projectFolder, 'e-modules');
  const destDir7  = path.join(projectFolder, 'f-useful-functions');
  const destDir8  = path.join(projectFolder, 'g-events');
  const destDir9  = path.join(projectFolder, 'h-features');
  const destDir10 = path.join(projectFolder, '.env');
  const destDir11 = path.join(projectFolder, 'package.json');
  const destDir12 = path.join(projectFolder, 'README.js');
  const destDir13 = path.join(projectFolder, 'server.js');

  try
  {
      await fs.rename(srcDir1, destDir1);
      await fs.rename(srcDir2, destDir2);
      await fs.rename(srcDir3, destDir3);
      await fs.rename(srcDir4, destDir4);
      await fs.rename(srcDir5, destDir5);
      await fs.rename(srcDir6, destDir6);
      await fs.rename(srcDir7, destDir7);
      await fs.rename(srcDir8, destDir8);
      await fs.rename(srcDir9, destDir9);
      await fs.rename(srcDir10, destDir10);
      await fs.rename(srcDir11, destDir11);
      await fs.rename(srcDir12, destDir12);
      await fs.rename(srcDir13, destDir13);
      console.log('src directory moved successfully.');

  }
  catch(err)
  {
    console.error('Error moving public directory:', err);
  }
  
}
moveSrc();