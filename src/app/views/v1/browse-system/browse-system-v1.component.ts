import {Component, OnInit} from '@angular/core';
import {ServiceList, ServiceListService} from '../../../shared/services/core/service-list.service';
import {Service} from '../../../shared/model/service';

@Component({
  selector: 'app-browse-system-v1',
  templateUrl: './browse-system-v1.component.html',
  styleUrls: ['./browse-system-v1.component.scss']
})
export class BrowseSystemV1Component implements OnInit
{

  protected services: Service[] = [
    {'name': 'one'},
    {'name': 'two'},
    {'name': 'three'},
  ];

  constructor(private serviceListSrv: ServiceListService) {}

  ngOnInit() {}

}