import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirCompositionComponent } from "./components/dir-composition/dir-composition.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    DirCompositionComponent
]
})
export class AppComponent {

}
