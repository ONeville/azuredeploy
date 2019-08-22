import { HomeComponent } from './home/home.component';
import { TesterComponent } from './tester/tester.component';
import { PullBasedOneComponent } from './pull-based-one/pull-based-one.component';
import { PushBasedOneComponent } from './push-based-one/push-based-one.component';
import { StreamCompoComponent } from './stream-compo/stream-compo.component';

export const PAGES = [TesterComponent, HomeComponent, PullBasedOneComponent, PushBasedOneComponent, StreamCompoComponent];

export * from './home/home.component';
export * from './tester/tester.component';
export * from './pull-based-one/pull-based-one.component';
export * from './push-based-one/push-based-one.component';
export * from './stream-compo/stream-compo.component';
