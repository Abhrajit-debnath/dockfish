import * as p from '@clack/prompts';
import { stacks } from '../config/stacks.config.js';

const optionsInit = async () => {
    const projectName = await p.text({
        message: 'What is your project name',
        placeholder: 'myproject',
        validate: (value) => {
            if (!value) return 'Name is required';
            if (value.length <= 1) return 'Name must be at least 2 characters';
            if (!value.match(/^[a-zA-Z]/)) return 'First character must not be a digit'
            return undefined;
        },
    })
    const selectedStack = await p.select({
        message: 'What is your project stack',
        options: stacks
    })

    const portExpose = await p.text({
        message: 'Type port number want to expose ?',
        placeholder: '3000',
        validate: (value) => {
            if (!value) return 'Port is required';
            if (value.length <= 3) return 'Port must be at 4 characters';
            if (value.match(/^[a-zA-Z]+$/)) return 'Port must be a number'
            return undefined;
        },
    })



    const shouldProceed = await p.confirm({
        message: 'Do you want to continue?',
    });

    return {
        shouldProceed,
        selectedStack,
        projectName,
        portExpose
    }
}

export default optionsInit