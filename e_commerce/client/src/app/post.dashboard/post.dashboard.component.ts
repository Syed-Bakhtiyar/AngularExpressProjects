import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post.dashboard.component.html',
  styleUrls: ['./post.dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPostTab() {
    this.router.navigate(['dashboard/']);
  }

  navigateToSeePostTab() {
    this.router.navigate(['dashboard/see']);
  }
}
