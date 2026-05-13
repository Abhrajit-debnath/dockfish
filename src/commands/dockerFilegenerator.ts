import * as p from '@clack/prompts';
import handleError from '../utils/errors/errorHandler.js';
import fileCheck from './checkFile.js';





const dockerfileGenerator = async () => {
    console.clear()

    p.intro("🐟 Dockfish")

    try {

         await fileCheck()

        p.outro("DockerFile generated !")

    } catch (error) {
        handleError(error)
    }

}

export default dockerfileGenerator