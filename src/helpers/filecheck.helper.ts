import { files_stack } from "../config/files.config.js"
import * as p from "@clack/prompts"
import fs from "fs"

const stackCheck = async (techStack: string,message:(msg:string)=>void) => {

    message("Checking stack config")

    const stackConfig = files_stack.find((s) => s.stack === techStack)

    if (!stackConfig) {
        message("Config not found")
        throw new Error(`Unsupported stack: ${techStack}`)

    }

    const { file_to_look } = stackConfig

    if (!fs.existsSync(file_to_look)) {
       message(`${file_to_look} not found`)
     throw new Error(`No ${file_to_look} found in current directory`)

    }


    return `Found ${file_to_look}`
}

export default stackCheck