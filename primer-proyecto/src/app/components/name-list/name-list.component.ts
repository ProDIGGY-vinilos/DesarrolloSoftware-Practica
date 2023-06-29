import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css'],
})
export class NameListComponent {
  @Input() product!: Product[];
  @Input() user!: User;
}
