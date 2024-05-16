import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  dataSource: string = "http://localhost:3000/movies"

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.dataSource);
  }

  getMovieByID(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.dataSource + "/" + id);
  }

  createNewMovie(newMovie: Movie): Observable<Movie>{
    return this.http.post<Movie>(this.dataSource, newMovie);
  }

  editMovieByID(id: number, edittedMovie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.dataSource + "/" + id, edittedMovie);
  }

  deleteMovieByID(id: number): Observable<any> {
    return this.http.delete<any>(this.dataSource + "/" + id)
  }
}
