import { DockerFishError } from "./baseError.js"
import * as p from "@clack/prompts"


const handleError = (error: unknown) => {
    if (error instanceof DockerFishError) {
        p.log.error(`${error.message}`);


    }

    p.log.error('Unexpected error occurred')

    process.exit(1)
}

export default handleError