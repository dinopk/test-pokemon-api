import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokesComponent } from './list-pokes.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from 'src/shared/notification/notification.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('ListPokesComponent', () => {
  let component: ListPokesComponent;
  let fixture: ComponentFixture<ListPokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokesComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        MatSnackBarModule
      ],
      providers: [
        NotificationService

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
