import { Connection } from 'mysql2/promise'

class DiscordDatabaseCRUD {

    private connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    getConnection() {
        return this.connection;
    }


}

export default DiscordDatabaseCRUD;