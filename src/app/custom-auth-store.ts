import PocketBase, { BaseAuthStore, Record, Admin } from 'pocketbase';

export class CustomAuthStore extends BaseAuthStore{

    override save(token: any, model: any) {
        super.save(token, model);
        // your custom business logic...
    }
}
const pb = new PocketBase('http://127.0.0.1:8090', new CustomAuthStore());