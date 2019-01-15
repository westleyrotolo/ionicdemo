import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {ComponentsModule} from "../components/components.module";

platformBrowserDynamic().bootstrapModule(AppModule);
