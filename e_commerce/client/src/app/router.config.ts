import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostDashboardComponent } from './post.dashboard/post.dashboard.component';
import { PostCreationComponent } from './post.creation/post.creation.component';
import { SeePostComponent } from './see-post/see-post.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            {
                path: '',
                component: PostDashboardComponent,
                children: [
                    {path: '', component: PostCreationComponent},
                    {path: 'see', component: SeePostComponent}
                ]
            },
        ]
    }
]