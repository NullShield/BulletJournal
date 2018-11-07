import { Component, OnInit, Input  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  @Input() userList;

  constructor(public activeModal: NgbActiveModal) { }


  close() {

  }
  ok() {

  }

  ngOnInit() {
  }

}
