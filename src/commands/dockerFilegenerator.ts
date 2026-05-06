import * as p from '@clack/prompts';

interface userInput {
    projectName: string,
    projectStack: string,
    port: number | 3000
}

const userInputs: userInput = {
    projectName: "",
    projectStack: "",
    port: 3000
}

const optionsInit = async () => {
    const name = await p.text({
        message: 'What is your project name',
        placeholder: 'myproject',
        validate: (value) => {
            if (!value) return 'Name is required';
            if (value.length <= 1) return 'Name must be at least 2 characters';
            if (!value.match(/^[a-zA-Z]/)) return 'First character must not be a digit'
            return undefined;
        },
    })
    const select = await p.select({
        message: 'What is your project tech stack',
        options: [
            {
                value: 'next', label: 'Next.js', hint: '(React Framework)'
            },
            {
                value: 'node', label: 'Node.js', hint: 'Node project'
            },
            { value: 'java', label: 'Java 17 + Maven', hint: 'java' },
            { value: 'python', label: 'Python', hint: 'python' },
        ]
    })

    const shouldProceed = await p.confirm({
        message: 'Do you want to continue?',
    });

    return {
        shouldProceed,
        select,
        name
    }
}

const dockerfileGenerator = async () => {
    console.clear()
    p.intro("🐟 Dockfish")
    const { shouldProceed, name, select } = await optionsInit()
    if (shouldProceed) {
        userInputs.projectName = name as string
        userInputs.projectStack = select as string
    }



}

export default dockerfileGenerator