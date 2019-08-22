import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StreamCompoService } from '../services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stream-compo',
  templateUrl: './stream-compo.component.html',
  styleUrls: ['./stream-compo.component.scss']
})
export class StreamCompoComponent implements OnInit, OnDestroy {
  userIds = Array.from({ length: 10 }, (_, i) => i + 1);
  userControl = new FormControl();
  public readonly user$ = this.userService.user$;
  private subSink = new Subscription();

  constructor(private userService: StreamCompoService) {}

  ngOnInit() {
    this.subSink.add(this.userControl.valueChanges.subscribe(v =>
        this.userService.loadUser(v)
      ));
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }y
}
