import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class NewsService {

  newsCar: News[] = [];

  constructor() {
  }

  isOpen: boolean = false;


  splitDate(date:string|null):string{
    if (date!=null){
      const curDate:string =date.split("T",1)[0];
      return curDate;
    }else return ""

  }
}

export class News {
  id:number|null;
  nameNews: string|null;
  img: string|null;
  text: string|null;
  date: string|null;
  newsURL:string|null;

  constructor(id:number|null,nameNews: string|null, img: string|null, text: string|null, date: string|null, newsURL:string|null) {
    this.id=id;
    this.nameNews = nameNews;
    this.img = img;
    this.text = text;
    this.date = new NewsService().splitDate(date);
    this.newsURL = newsURL;

  }

}
