import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../news.service";


@Component({
  selector: 'app-item-news',
  templateUrl: './item-news.component.html',
  styleUrls: ['./item-news.component.scss']
})
export class ItemNewsComponent implements OnInit {

  linkName: string;
  newsURL: string;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    this.linkName = this.route.snapshot.params['linkName']
    this.newsURL = "https://webapi.autodoc.ru/api/news/item/avto-novosti/"+this.linkName;
  }

  ngOnInit(): void {
    this.initialCarNews()
  }

  async initialCarNews(){
    const $itemHeader = document.querySelector('.itemHeader');
    const $itemCategory = document.querySelector('.itemCategory');
    const $itemDate = document.querySelector('.itemDate');
    const $textField = document.querySelector('.contentNews');
    const newsJSON = await fetch(this.newsURL).then(res => res.json());
    if (newsJSON!=null&&$itemHeader!=null&&$itemCategory!=null&&$itemDate!=null&&$textField!=null){
      $itemHeader.insertAdjacentHTML('afterbegin', newsJSON.title);
      $itemCategory.insertAdjacentHTML('afterbegin', newsJSON.categoryType);
      $itemDate.insertAdjacentHTML('afterbegin', this.newsService.splitDate(newsJSON.publishedDate));
      $textField.insertAdjacentHTML('afterbegin', newsJSON.text);
    }

  }
}
