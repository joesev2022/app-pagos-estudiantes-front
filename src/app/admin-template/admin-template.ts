import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import {BreakpointObserver, Breakpoints, LayoutModule} from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-admin-template',
  standalone: false,
  templateUrl: './admin-template.html',
  styleUrl: './admin-template.css'
})
export class AdminTemplate {

   isSmall$!: Observable<boolean>;

  constructor(public authService:Auth, private bp: BreakpointObserver) {
    this.isSmall$ = this.bp
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(
        map(r => r.matches),
        shareReplay(1)
      );
  }

  logout():void {
    this.authService.logout();
  }

}
