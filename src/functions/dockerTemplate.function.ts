import fs from "fs"


const readData = async (message: (msg: string) => void) => {

        message('Checking file exists...')

        if (!fs.existsSync("package.json")) {
            throw new Error('package.jsonnot found. Are you in project root?')
        }

        message('File found!')

        message('Parsing File...')

        const data = JSON.parse(fs.readFileSync("package.json", "utf-8"))


        if (data.scripts.start) {
             return `Found start script: ${data.scripts.start}`;
        }


        return "Parsing Completed !"

}

export default readData




