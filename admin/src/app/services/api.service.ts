import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { serialize } from "object-to-formdata";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    public apiUrl: string = 'https://localhost:5001/api';

    constructor(private http: HttpClient) { }
    get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
        return this.http.get<T>(`${this.apiUrl}/${path}`, {
            params, headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }

    put<T>(path: string, body): Observable<T> {
        //var bodyCopy = Object.assign({}, body);
        return this.http.put<T>(
            `${this.apiUrl}/${path}`, body
        );
    }

    putForUploadFile<T>(path: string, formData): Observable<T> {
        return this.http.put<T>(
            `${this.apiUrl}/${path}`, formData);
    }

    putWithFormData<T>(path: string, formData): Observable<T> {
        return this.http.put<T>(
            `${this.apiUrl}/${path}`, this.getFormUrlNotEncoded(formData), {
        });
    }

    postForUploadFile<T>(path: string, formData): Observable<T> {
        return this.http.post<T>(
            `${this.apiUrl}/${path}`, formData);
    }

    post<T>(path: string, body): Observable<T> {

        return this.http.post<T>(
            `${this.apiUrl}/${path}`, body);
    }

    delete<T>(path): Observable<T> {
        return this.http.delete<T>(`${this.apiUrl}/${path}`, {
        });
    }
    private getFormUrlNotEncoded(toConvert) {
        const formBody = [];
        for (const property in toConvert) {
            const encodedKey = encodeURIComponent(property);
            const encodedValue = toConvert[property];
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    }
}
