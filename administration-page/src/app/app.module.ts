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
import { EditTopicComponent } from './components/topic/edit-topic/edit-topic.component';
import { EditQuestionComponent } from './components/question/edit-question/edit-question.component';
import { DetailQuestionComponent } from './components/question/detail-question/detail-question.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
import { SingleQuestionComponent } from './components/question/single-question/single-question.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeComponent } from './components/theme/theme.component';
import { EditThemeComponent } from './components/theme/edit-theme/edit-theme.component';
import { AddThemeComponent } from './components/theme/add-theme/add-theme.component';
import { SingleThemeComponent } from './components/theme/single-theme/single-theme.component';
import { SingleTopicComponent } from './components/topic/single-topic/single-topic.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateQuestionButtonComponent } from './components/question/create-question-button/create-question-button.component';
import { CreateTopicButtonComponent } from './components/topic/create-topic-button/create-topic-button.component';
import { CreateThemeButtonComponent } from './components/theme/create-theme-button/create-theme-button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { RouterModule, Routes } from '@angular/router';
import { RegisterButtonComponent } from './components/user/register-button/register-button.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { SingleClassroomComponent } from './components/classroom/single-classroom/single-classroom.component';
import { CreateClassroomComponent } from './components/classroom/create-classroom/create-classroom.component';
import { EditClassroomComponent } from './components/classroom/edit-classroom/edit-classroom.component';
import { CreateClassroomButtonComponent } from './components/classroom/create-classroom-button/create-classroom-button.component';
import { SingleUserComponent } from './components/user/single-user/single-user.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'themes/create', component: AddThemeComponent },
  { path: 'themes', component: ThemeComponent },
  { path: 'themes/:theme_name/:theme_id', component: EditThemeComponent },
  { path: '', component: RegisterComponent },
  { path: ':theme_name/:topic_name/questions', component: QuestionComponent },

  {
    path: ':theme_name/:topic_name/editQuestion/:question_id',
    component: EditQuestionComponent,
  },
  { path: ':theme_name/topics', component: TopicComponent },
  {
    path: 'topic/:topic_id_fk/questions/create',
    component: CreateQuestionComponent,
  },
  { path: 'theme/:theme_id_fk/topic/create', component: CreateTopicComponent },
  { path: 'user/:user_id/edit', component: EditUserComponent },
  { path: 'classrooms', component: ClassroomComponent },
  { path: 'classrooms/create', component: CreateClassroomComponent },
  {
    path: 'classrooms/:classroom_id/edit',
    component: EditClassroomComponent,
  },
  { path: ':classroom_name/users', component: UserComponent },
  { path: ':theme_name/:topic_name/:topic_id', component: EditTopicComponent },
  { path: 'user/create', component: RegisterComponent },

  { path: '**', component: PageNotFoundComponent },
];

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
    EditTopicComponent,
    EditQuestionComponent,
    DetailQuestionComponent,
    EditUserComponent,
    DetailUserComponent,
    SingleQuestionComponent,
    ThemeComponent,
    EditThemeComponent,
    AddThemeComponent,
    SingleThemeComponent,
    SingleTopicComponent,
    HeaderComponent,
    CreateQuestionButtonComponent,
    CreateTopicButtonComponent,
    CreateThemeButtonComponent,
    RegisterButtonComponent,
    ModalComponent,
    PageNotFoundComponent,
    ClassroomComponent,
    SingleClassroomComponent,
    CreateClassroomComponent,
    EditClassroomComponent,
    CreateClassroomButtonComponent,
    SingleUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
