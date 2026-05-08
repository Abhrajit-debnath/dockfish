import * as p from "@clack/prompts"


interface LogType {
    name: string,
    function: (msg: string) => void

}

export const logType: LogType[] = [
    {
        name: "error",
        function: (msg: string) => {
            p.log.error(msg)
        }
    },
    {
        name: "success",
        function: (msg: string) => {
            p.log.success(msg)
        }
    },
    {
        name: "warn",
        function: (msg: string) => {
            p.log.warn(msg)
        }
    },
    {
        name: "warning",
        function: (msg: string) => {
            p.log.warning(msg)
        }
    },
    {
        name: "info",
        function: (msg: string) => {
            p.log.info(msg)
        }
    }
    ,
    {
        name: "message",
        function: (msg: string) => {
            p.log.message(msg)
        }
    },
    {
        name: "step",
        function: (msg: string) => {
            p.log.step(msg)
        }
    }

]