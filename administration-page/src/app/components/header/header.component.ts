import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    console.log('logging out');
    this.httpClient
      .delete('http://localhost:5000/logout')
      .subscribe((res) => console.log(res));
    localStorage.removeItem('userInfo');
    this.router.navigateByUrl('/login');
  }
}
