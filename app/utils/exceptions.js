export class UnknownLocationError extends Error
{
    constructor(message) {
        super(message)

        this.message = message
    }
}