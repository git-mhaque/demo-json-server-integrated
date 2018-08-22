import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TodoService {
    private readonly url = '/api/tasks';

    constructor(private http: Http) {
    }

    loadTodos() {
        return this.http.get(this.url);
    }
}
