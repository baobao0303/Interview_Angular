import { Component, OnInit, DestroyRef, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-demo.component.html',
  styleUrl: './rxjs-demo.component.css'
})
export class RxjsDemoComponent implements OnInit {
  clickCount = signal(0);
  private destroyRef = inject(DestroyRef);
  private messagesService = inject(MessagesService);

  messages$ = this.messagesService.messages$;
  timerValue = 0;

  constructor() {
    effect(() => {
      console.log('Click count changed to:', this.clickCount());
    });
  }

  ngOnInit(): void {
    const subscription = interval(1000).pipe(
      map((val) => val * 2)
    ).subscribe({
      next: (val) => {
        this.timerValue = val;
        console.log('Interval emitted:', val);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      console.log('RxjsDemoComponent destroyed, unsubscribed from interval.');
    });
  }

  incrementClick() {
    this.clickCount.update(c => c + 1);
  }

  addMessage() {
    this.messagesService.addMessage('New message at ' + new Date().toLocaleTimeString());
  }
}
