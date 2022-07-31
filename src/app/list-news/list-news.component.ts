import { Component, OnInit } from '@angular/core';
import {NewsService} from "../news.service";

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {


  constructor(public  newsService:NewsService) { }

  ngOnInit(): void {
  }

  openModal(): void{
    this.newsService.isOpen=!this.newsService.isOpen
  }
}
