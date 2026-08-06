import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quicklinks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quicklinks.component.html',
})
export class QuicklinksComponent {}
