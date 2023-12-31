import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditUserComponent } from './view/edit-user/edit-user.component';
import { AdminUsersComponent } from './view/admin-users/admin-users.component';
import { HeaderComponent } from './shared/header/header.component';
import { SongsforcategoryComponent } from './songsforcategory/songsforcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditUserComponent,
    AdminUsersComponent,
    HeaderComponent,
    SongsforcategoryComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
