import {Component, OnInit} from '@angular/core';
import {News, NewsService} from "../../news.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-news',
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.scss']
})
export class FormNewsComponent implements OnInit {

  pageNews: number = 1;
  throttle:number = 300;
  scrollDistance:number = 1;
  direction:string = "";

  constructor(private router: Router, private route:ActivatedRoute, public newsService:NewsService) {

  }

  ngOnInit(): void {
    this.initialLocalNews()
    this.initialNews(1)
  }

  initialLocalNews() {
    let keys:string[] = Object.keys(localStorage);
    for(let key of keys) {
      const newsJson:string|null =localStorage.getItem(key);
      if (newsJson!=null){
        const newsJsonObj =JSON.parse(newsJson);
        this.newsService.newsCar.push(new News(0, newsJsonObj.newsNameJson, newsJsonObj.newsImgJson,
          newsJsonObj.newsTextJson,newsJsonObj.newsDateJson, "#"));
      }

    }




  }

  async initialNews(page: number): Promise<void> {
    const newsJSON = await fetch(`https://webapi.autodoc.ru/api/news/${page}/10`).then(res => res.json());
    newsJSON.news.forEach((item: any) => {

      this.newsService.newsCar.push(new News(item.id, item.title, item.titleImageUrl, item.description, item.publishedDate, item.fullUrl));
    })
    this.pageNews++;
  }

  goToNews(itemNews: News) {
    if (itemNews.id!=0&&itemNews.newsURL!=null){
      this.router.navigate(["/news",itemNews.newsURL.split("/")[itemNews.newsURL.split("/").length-1]]);
    }

  }

  onScrollDown() {
      this.initialNews(this.pageNews);
      this.direction = "down";

    }


}
