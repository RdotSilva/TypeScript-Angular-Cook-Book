import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-servers',
  templateUrl: './recipe-servers.component.html',
  styleUrls: ['./recipe-servers.component.css'],
})
export class RecipeServersComponent implements OnInit {
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017),
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
