import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

class Menu {
  menu: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})



export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  menus: Menu[] = [
    { menu: "Dashboard", route: "/dashboard", icon: "dashboard" },
    { menu: "Profile", route: "/profile", icon: "face" },
    { menu: "Maps", route: "/maps", icon: "place" }
  ]

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

}
