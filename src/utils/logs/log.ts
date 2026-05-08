import { logType } from "../../config/log.config.js"

const logStatus = (message: string, messageType: string = "message") => {
    logType.find((log) => {
        if (log.name === messageType) {
            log.function(message)
        }
    })

}

export default logStatus