import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models';
import { PullBasedOneService } from '../services';

@Component({
  selector: 'app-pull-based-one',
  templateUrl: './pull-based-one.component.html',
  styleUrls: ['./pull-based-one.component.scss']
})
export class PullBasedOneComponent implements OnInit, OnDestroy {
  userIds = Array.from({ length: 10 }, (_, i) => i + 1);
  userControl = new FormControl();

  private subSink = new Subscription();

  get user(): User {
    return this.userService.user;
  }

  constructor(private userService: PullBasedOneService) {}

  ngOnInit() {
    this.subSink.add(this.userControl.valueChanges.subscribe(v =>
        this.userService.loadUser(v)
      ));
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }

}
