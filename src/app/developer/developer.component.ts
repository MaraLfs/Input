import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer: Developer = new Developer('Doe', 'John', 32, 'homme', 'Un super développeur !', [
    new Skill('angular', 'hjkjbkb', 'www.angular.io'), 
    new Skill('php', 'kjgjjhv', 'www.php.net'),
    new Skill('java', 'kjkjk', 'www.java.com')

  ]);

  constructor() { }


  ngOnInit(): void {
  }

}
