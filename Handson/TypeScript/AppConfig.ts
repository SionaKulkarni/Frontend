declare module "SomeLibrary" {
    interface AppConfig {
        apiUrl: string;
        retryCount: number;
    }
    function initializeApp(config: AppConfig): void;
}