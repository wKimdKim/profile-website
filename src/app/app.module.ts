import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { InterestComponent } from "./interest/interest.component";
import { ContactComponent } from "./contact/contact.component";
import { SkillComponent } from "./skill/skill.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    InterestComponent,
    ContactComponent,
    SkillComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
