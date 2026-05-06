#!/usr/bin/env node

import { program } from "commander";
import dockerfileGenerator from "./commands/dockerFilegenerator.js";



const initProgram = () => {
    program.name('dockfish')
        .description('CLI tool for generating Dockerfiles and learn docker')
        .version("1.0.0")

    program.command("start")
        .description("Generate Dockerfile for your project").action(async () => {
            dockerfileGenerator()

        })

    program.parse()

}



initProgram()





