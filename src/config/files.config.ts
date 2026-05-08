interface File_stack {
    stack: string,
    file_to_look: string
}

export const files_stack: File_stack[] = [
    {
        stack: "node",
        file_to_look: "package.json"
    },
    {
        stack: "next",
        file_to_look: "package.json"
    }
]