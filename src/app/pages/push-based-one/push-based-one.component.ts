import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PushBasedOneService } from '../services';

@Component({
  selector: 'app-push-based-one',
  templateUrl: './push-based-one.component.html',
  styleUrls: ['./push-based-one.component.scss']
})
export class PushBasedOneComponent implements OnInit, OnDestroy {
  userIds = Array.from({ length: 10 }, (_, i) => i + 1);
  userControl = new FormControl();
  public readonly user$ = this.userService.user$;

  private subSink = new Subscription();

  constructor(private userService: PushBasedOneService) {}

  ngOnInit() {
    this.subSink.add(this.userControl.valueChanges.subscribe(v =>
        this.userService.loadUser(v)
      ));
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }
}
