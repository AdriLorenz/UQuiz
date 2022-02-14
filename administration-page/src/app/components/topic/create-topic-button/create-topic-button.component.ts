import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-topic-button',
  templateUrl: './create-topic-button.component.html',
  styleUrls: ['./create-topic-button.component.css'],
})
export class CreateTopicButtonComponent implements OnInit {
  @Input() theme_name: string;
  @Input() themeId: number;

  goToCreateTopicPage() {
    this.router.navigateByUrl('theme/' + this.themeId + '/topic/create');
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('theme ID: ' + this.themeId);
  }
}
