import path from 'path' ;
import fs from 'fs/promises' ;

const projectFolder = path.resolve() ;                            // dirname
const srcFilesPath  = path.dirname(path.dirname(projectFolder));  


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
  const destDir12 = path.join(projectFolder, 'README.js');
  const destDir13 = path.join(projectFolder, 'server.js');

  try
  {
      await fs.rename(destDir1, srcDir1);
      await fs.rename(destDir2, srcDir2);
      await fs.rename(destDir3, srcDir3);
      await fs.rename(destDir4, srcDir4);
      await fs.rename(destDir5, srcDir5);
      await fs.rename(destDir6, srcDir6);
      await fs.rename(destDir7, srcDir7);
      await fs.rename(destDir8, srcDir8);
      await fs.rename(destDir9, srcDir9);
      await fs.rename(destDir10, srcDir10);
      await fs.rename(destDir12, srcDir12);
      await fs.rename(destDir13, srcDir13);
      console.log('src directory moved successfully.');

  }
  catch(err)
  {
    console.error('Error moving public directory:', err);
  }
  
}
moveSrc();


