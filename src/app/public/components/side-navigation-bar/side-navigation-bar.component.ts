import {Component, inject, OnInit} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {SourceListComponent} from "../../../news/components/source-list/source-list.component";
import {MatIcon} from "@angular/material/icon";
import {ArticleListComponent} from "../../../news/components/article-list/article-list.component";
import {FooterContentComponent} from "../footer-content/footer-content.component";
import {MatIconButton} from "@angular/material/button";
import {Article} from "../../../news/model/article.entity";
import {Source} from "../../../news/model/source.entity";
import {LogoApiService} from "../../../shared/services/logo-api.service";
import {NewsApiService} from "../../../news/services/news-api.service";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";

@Component({
  selector: 'app-side-navigation-bar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    SourceListComponent,
    MatIcon,
    ArticleListComponent,
    FooterContentComponent,
    MatIconButton,
    MatSidenav,
    LanguageSwitcherComponent
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent implements OnInit {
  sources: Array<Source> = [];
  articles: Array<Article> = [];

  private newsApi = inject(NewsApiService);
  private logoApi = inject(LogoApiService);

  searchArticlesForSource(source: any) {
    console.log(`selected source is: ${source.id}`);
    this.newsApi.getArticlesBySourceId(source.id)
      .subscribe((data: any) => {
        this.articles = data['articles'];
        this.articles.forEach((article: { source: { urlToLogo: any; url: any; }; }) => {
          article.source.urlToLogo = source.urlToLogo;
          article.source.url = source.url;
        });
        console.log(this.articles);
      });
  }

  onSourceSelected(source: Source) {
    console.log(source.name);
    this.searchArticlesForSource(source);
  }

  ngOnInit(): void {
    this.newsApi.getSources()
      .subscribe((data: any) => {
        this.sources = data['sources'];
        this.sources.forEach((source: { urlToLogo: string; }) =>
          source.urlToLogo = this.logoApi.getUrlToLogo(source));
        console.log(this.sources);
        this.searchArticlesForSource(this.sources[0]);
      })
  }
}
