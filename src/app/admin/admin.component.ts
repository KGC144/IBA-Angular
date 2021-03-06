import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICustomer } from '../Customer';
import { CustomerService } from '../customer.service';
import { IAdmin } from './admin';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin!: IAdmin;
  adminId!: number;
  admins!: Observable<IAdmin[]>
  admi!: IAdmin[];

  customer!: ICustomer;
  customers!: Observable<ICustomer[]>;
  cust!: ICustomer[];

  constructor(private route: ActivatedRoute, private _adminService: AdminService, private router: Router, private _customerService: CustomerService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log(id);
    this.adminId = id;

    this._adminService.getAdminById(id).subscribe({
      next: data => this.admin = data,
      error: err => console.log('error', err)

    });

  }


  listAllAdmins() {
    this.router.navigate(["/admin-details"]);
  }

  viewDetails() {
    this.admin = new IAdmin();

    this.adminId = this.route.snapshot.params['adminId'];

    this._adminService.getAdminById(this.adminId)
      .subscribe(data => {
        console.log(data)
        this.admin = data;
      },
        error => console.log(error));
  }

  onCustomerDetails() {

    this.router.navigate(["/admin-customer"]);

  }


}
