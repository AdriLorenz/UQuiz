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
<<<<<<< HEAD
    this.router.navigateByUrl('theme/{{themeId}}/topic/create');
=======
    this.router.navigateByUrl('theme/' + this.themeId + '/topic/create');
>>>>>>> 743d91bc3aa7640f1e665fbb092afb4983b92812
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('theme ID: ' + this.themeId);
  }
}
