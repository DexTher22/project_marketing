import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display and update the profile details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector<HTMLButtonElement>('.profile-button-primary')?.click();
    fixture.detectChanges();

    const nameInput = compiled.querySelector<HTMLInputElement>('#profile-name');
    expect(nameInput).not.toBeNull();
    nameInput!.value = 'Teszt Elek';
    nameInput!.dispatchEvent(new Event('input'));
    const usernameInput = compiled.querySelector<HTMLInputElement>('#profile-username');
    usernameInput!.value = '@tesztelek';
    usernameInput!.dispatchEvent(new Event('input'));
    compiled.querySelector<HTMLButtonElement>('button[type="submit"]')?.click();
    fixture.detectChanges();

    expect(compiled.querySelector('.profile-identity h2')?.textContent?.trim()).toBe('Teszt Elek');
    expect(compiled.querySelector('.profile-username')?.textContent?.trim()).toBe('@tesztelek');
  });
});
