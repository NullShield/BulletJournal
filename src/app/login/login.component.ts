import { LoginModalComponent } from './login-modal/login-modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private userList;
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })
  }

  ngOnInit() {
  }

  userLogin() {
    const modalRef = this.modalService.open(LoginModalComponent);

    this.userList = modalRef.componentInstance.userList || [];

  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }
    this.success = true;
  }
}
