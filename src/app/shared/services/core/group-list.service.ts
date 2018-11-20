import { Injectable } from '@angular/core';
import {CoreSenderService} from './core-sender.service';

const _GroupQueryUrl = '/systems';


@Injectable({providedIn: 'root'})
export class GroupListService {

  constructor(private sender: CoreSenderService) {}

  getAllServices(): ServiceList[] {
    const result: Array<ServiceList> = [];
    this.sender.simpleQuery(_GroupQueryUrl)
      .subscribe((data: any) => {
        console.log(data); // HACK: provides breakpoint for early testing...
      });
    return result;
  }
}

export interface ServiceList {
  name: string;
}