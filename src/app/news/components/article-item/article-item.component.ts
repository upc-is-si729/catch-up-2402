import {Component, Input} from '@angular/core';
import {Article} from "../../model/article.entity";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardTitleGroup,
    MatCardContent,
    MatCardActions,
    MatIcon,
    MatIconButton,
    MatCardImage,
    MatAnchor
  ],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article!: Article;

}
