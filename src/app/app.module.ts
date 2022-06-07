import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { NgxTreeDndModule } from 'ngx-tree-dnd';
import { ContentComponent } from './content/content.component';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ContentComponent
  ],
  imports: [
    NgxTreeDndModule,
    TreeviewModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
