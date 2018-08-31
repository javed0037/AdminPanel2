import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountManagementRoutingModule } from './account-management-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountManagementRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
    
  ],
  exports: [DialogOverviewExampleDialog],
  declarations: [
    DialogOverviewExampleDialog, 
    AccMainComponent, 
    RestuarantComponent, 
    UserListComponent, 
    ProviderListComponent, 
    ProductListComponent,
    UserProfileComponent,
    SellerProviderProfileComponent
  ]
})
export class AccountManagementModule { }
