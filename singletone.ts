class Logger {
    private static instance: Logger;
    public readonly entries: string[] = [];

    private constructor() { }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    public add(log: string) {
        this.entries.push(log);
    }
}
