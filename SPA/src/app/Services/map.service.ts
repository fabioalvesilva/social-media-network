import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import { GUI } from 'dat.gui';
import { Observable } from 'rxjs';
import * as STATS from 'stats.js';
import * as THREE from 'three';
import { IRelationship } from '../Model/IRelationship';
import { IUser } from '../Model/IUser';

import * as environment from 'src/environments/environment';
import { IPath } from '../Model/IPath';

@Injectable({ providedIn: 'root' })
export class MapService {

    //private relationshipsUrl = 'https://localhost:5001/mdrs/relationships/';
    //private userUrl = 'https://localhost:5001/mdrs/users/';
    //private planeamentoShortestUrl = 'https://localhost:5001/mdrs/Planeamento/ShortestPath?';
    //private planeamentoStrongesttUrl = 'https://localhost:5001/mdrs/Planeamento/StrongestPath?';

    private relationshipsUrl = environment.environment.APIRelationship;
    private userUrl = environment.environment.APIUser;
    private planeamentoShortestUrl = environment.environment.APIPlanning + 'ShortestPath?';
    private planeamentoStrongestUrl = environment.environment.APIPlanning + 'StrongestPath?';
    private planeamentoStrongestPathCSUrl = environment.environment.APIPlanning + 'StrongestPathCS?';
    private planeamentoStrongestPathCSRSUrl = environment.environment.APIPlanning + 'StrongestPathCSRS?';
    private planeamentoStrongestPathMoodtUrl = environment.environment.APIPlanning + 'StrongestPathMood?';

    constructor(private http: HttpClient) { }

    public GetAllUser(): Observable<IUser[]> {
        const headers = { 'Content-Type': 'application/json' };
        return this.http.get<IUser[]>(this.userUrl, { headers });
    }

    public GetAllRelationships(): Observable<IRelationship[]> {
        const headers = { 'Content-Type': 'application/json' };
        return this.http.get<IRelationship[]>(this.relationshipsUrl, { headers });
    }

    public GetPath(path: number, userFrom: string, userTo: string): Observable<IPath> {
        const headers = { 'Content-Type': 'application/json' };
        console.log("->" + path + "<-");
        if (path == 0) {
            console.log("Shortes path");
            return this.http.get<IPath>(this.planeamentoShortestUrl + "userFrom=" + userFrom + "&userTo=" + userTo, { headers });
        } else if (path == 1) {
            console.log("Strongest path");
            return this.http.get<IPath>(this.planeamentoStrongestUrl + "userFrom=" + userFrom + "&userTo=" + userTo, { headers });
        } else if (path == 2) {
            console.log("A Star path");
            return this.http.get<IPath>(this.planeamentoStrongestPathCSUrl + "userFrom=" + userFrom + "&userTo=" + userTo, { headers });
        } else if (path == 3) {
            console.log("A Star Multicriterio path --> Considera FL+FR");
            return this.http.get<IPath>(this.planeamentoStrongestPathCSRSUrl + "userFrom=" + userFrom + "&userTo=" + userTo, { headers });
        } else if (path == 4) {
            console.log("A Star Multicriterio Mood path --> Considera FL+FR+Moods");
            return this.http.get<IPath>(this.planeamentoStrongestPathMoodtUrl + "userFrom=" + userFrom + "&userTo=" + userTo, { headers });
        } else {
            console.log("opcao 0");
            return this.http.get<IPath>(this.planeamentoShortestUrl + "userFrom=" + userFrom + "&userTo=" + userTo, { headers });
        }
    }
}
