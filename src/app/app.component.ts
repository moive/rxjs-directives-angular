import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs-directives';

  ngOnInit() {
    this.title = 'Component created';
  }

  ngOnDestroy() {
    this.title = 'Component destroyed';
  }
}
