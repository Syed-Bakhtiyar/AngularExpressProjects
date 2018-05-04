import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostProductComponent } from './post-product/post-product.component';
import { OurProductDetailComponent } from './our-product-detail/our-product-detail.component';
import { AllProductDetailsComponent } from './all-product-details/all-product-details.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

export const AppRoutes = [
    {path: '', component: UserLoginComponent},
    {path: 'registerUser', component: UserSignupComponent},
    {path: 'dashboard',
    component: DashboardComponent,
    children: [
        {path: 'post', component: PostProductComponent},
        {path: 'ourProductDetail', component: OurProductDetailComponent},
        {path: 'allProductDetail', component: AllProductDetailsComponent}
    ]},
];
