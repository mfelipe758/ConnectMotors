import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosModule } from './body/carros.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
// import { DialogExitPageComponent } from './shared/components/dialog-exit-page/dialog-exit-page/dialog-exit-page.component';
// import { Interceptor } from './shared/interceptor/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    // DialogExitPageComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CarrosModule,
    HttpClientModule,    
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
