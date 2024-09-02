import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Source} from "../../model/source.entity";
import {NgOptimizedImage} from "@angular/common";
import {MatListItem, MatListItemAvatar, MatListItemLine} from "@angular/material/list";

@Component({
  selector: 'app-source-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatListItemAvatar,
    MatListItemLine,
    MatListItem
  ],
  templateUrl: './source-item.component.html',
  styleUrl: './source-item.component.css'
})
export class SourceItemComponent {
  @Input() source!: Source;
  @Output() sourceSelected = new EventEmitter<Source>();

  onClick() {
    this.sourceSelected.emit(this.source);
  }
}
