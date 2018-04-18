import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DummyUserDBService implements InMemoryDbService {
    createDb(){
        const users = [
            { username:'Jacob', password:'7392' },
            { username:'William', password:'7392' },
            { username:'Ethan', password:'7392' },
            { username:'Alexander', password:'7392' },
            { username:'Liam', password:'7392' }
        ]

        return {users};
    }

}