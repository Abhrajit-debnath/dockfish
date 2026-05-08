import { files_stack } from '../config/files.config.js';
import optionsInit from '../functions/userOptions.function.js';
import fs from "fs"
import * as p from '@clack/prompts';


interface userInput {
    projectName: string,
    projectStack: string,
    port: number | null
}

const userInputs: userInput = {
    projectName: "",
    projectStack: "",
    port: null
}

let file_data: any = {}

const fileCheck = async () => {

    const { shouldProceed, projectName, selectedStack, portExpose } = await optionsInit()
    if (!shouldProceed) {
        p.outro("Cancelled");
        return;
    }

    userInputs.projectName = projectName as string
    userInputs.projectStack = selectedStack as string
    userInputs.port = Number(portExpose)

    const stackConfig = files_stack.find(s => s.stack === userInputs.projectStack)
    if (!stackConfig) throw new Error(`Unsupported stack: ${userInputs.projectStack}`)

    const { file_to_look } = stackConfig


    await p.tasks([
        {
            title: 'Checking stack config',
            task: async () => {
                await new Promise(t => setTimeout(t, 1500))
                return 'Config found'
            }
        },
        {
            title: `Checking ${file_to_look}`,
            task: async () => {
                await new Promise(t => setTimeout(t, 1500))
                return `Found ${file_to_look}`
            }
        },
        {
            title: `Parsing ${file_to_look}...`,
            task: async () => {
                await new Promise(t => setTimeout(t, 1500))
                file_data = await JSON.parse(fs.readFileSync("package.json", "utf-8"))


                return `Parsing completed!`
            }
        },
        {
            title: `Finding scripts..`,
            task: async () => {
                await new Promise(t => setTimeout(t, 1500))
                if (!file_data?.scripts?.start) {
                    throw new Error("Couldn't find start script")
                }

                return `Found start script: ${file_data.scripts.start}`

            }
        }
    ])
}

export default fileCheck