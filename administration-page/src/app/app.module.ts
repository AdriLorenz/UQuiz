import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './components/question/question.component';
import { QuestionService } from './services/question.service';
import { UserComponent } from './components/user/user.component';
import { TopicComponent } from './components/topic/topic.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { CreateQuestionComponent } from './components/question/create-question/create-question.component';
import { CreateTopicComponent } from './components/topic/create-topic/create-topic.component';
import { CreateThemeComponent } from './components/topic/create-theme/create-theme.component';
import { EditTopicComponent } from './components/topic/edit-topic/edit-topic.component';
import { EditThemeComponent } from './components/topic/edit-theme/edit-theme.component';
import { EditQuestionComponent } from './components/question/edit-question/edit-question.component';
import { DetailQuestionComponent } from './components/question/detail-question/detail-question.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { SingleQuestionComponent } from './components/question/single-question/single-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    UserComponent,
    TopicComponent,
    LoginComponent,
    RegisterComponent,
    CreateQuestionComponent,
    CreateTopicComponent,
    CreateThemeComponent,
    EditTopicComponent,
    EditThemeComponent,
    EditQuestionComponent,
    DetailQuestionComponent,
    EditUserComponent,
    DetailUserComponent,
    SingleQuestionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [QuestionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
