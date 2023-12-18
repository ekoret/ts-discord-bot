import { mysql } from '../inc/common';
import DiscordDatabaseCRUD from './DiscordDatabaseCRUD';

class DatabaseConnectionHandler {

    private connection: mysql.Connection | null = null;

    async startDatabase() {
        // Set up database and connect to db
        const options: CustomConnectionOptions = {
            'host': process.env.DB_HOST || 'localhost',
            'port': Number(process.env.DB_PORT) || 3306,
            'user': process.env.DB_USER || 'root',
            'password': process.env.DB_PASSWORD || 'password',
            'database': process.env.DB_NAME || 'DevDatabase'
        };

        await this.connect(options);

        // Inject db connection into CRUD handler
        const discordDatabaseCRUD = new DiscordDatabaseCRUD(this.connection!);

        return discordDatabaseCRUD;
    };

    private async connect(options: CustomConnectionOptions): Promise<void> {
        try {
            // Assign connection to instance so we can use it within the app
            this.connection = await mysql.createConnection({
                ...options
            });

            // Start persistent connection
            await this.connection.connect();

            console.log(`Connected to database ${options.database} \n`);
        } catch (err) {
            console.log('Database connection failed: ', err);
            throw err;
        }
    }



}

export default DatabaseConnectionHandler;