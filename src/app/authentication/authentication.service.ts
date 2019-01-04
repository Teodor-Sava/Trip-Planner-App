import { LOGIN_URL } from "./../core/constants/api";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class AuthenticationService {
    constructor(private http: HttpClient) {}

    public login(body): Observable<any> {
        return this.http.post(`${LOGIN_URL}`, body);
    }
}
