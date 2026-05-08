export class DockerFishError extends Error {
    constructor(
        message: string,
    ) {
        super(message);
        this.name = 'DockerFishError'
    }
}