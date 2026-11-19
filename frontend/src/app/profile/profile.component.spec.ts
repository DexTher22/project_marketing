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

  it('should accept image and video references and reject other files', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector<HTMLButtonElement>('.profile-button-primary')?.click();
    fixture.detectChanges();

    const fileInput = compiled.querySelector<HTMLInputElement>('#profile-materials')!;
    const files = [
      new File(['image'], 'reference.png', { type: 'image/png' }),
      new File(['video'], 'campaign.mp4', { type: 'video/mp4' }),
      new File(['document'], 'brief.pdf', { type: 'application/pdf' }),
    ];
    Object.defineProperty(fileInput, 'files', { value: files });
    fileInput.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const materials = Array.from(compiled.querySelectorAll('.material-list li'))
      .map((item) => item.textContent?.trim());
    expect(materials).toEqual(['reference.png', 'campaign.mp4']);
    expect(compiled.querySelector('[role="alert"]')?.textContent)
      .toContain('csak kép- és videófájlokat');
  });
});
