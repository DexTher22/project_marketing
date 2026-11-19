import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('requires a role and includes the selected role in the form value', () => {
    const roleControl = component.registerForm.get('role');

    expect(roleControl?.hasError('required')).toBeTrue();

    roleControl?.setValue('creator');

    expect(roleControl?.valid).toBeTrue();
    expect(component.registerForm.value.role).toBe('creator');
  });

  it('lets the user select a role with the role buttons', () => {
    const buttons: HTMLButtonElement[] = Array.from(
      fixture.nativeElement.querySelectorAll('.role-option')
    );

    buttons[0].click();
    fixture.detectChanges();

    expect(component.registerForm.controls.role.value).toBe('advertiser');
    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
  });

  it('requires acceptance of the privacy notice', () => {
    const consent = component.registerForm.controls.privacyAccepted;

    expect(consent.invalid).toBeTrue();
    consent.setValue(true);
    expect(consent.valid).toBeTrue();
  });

  it('lets the user reveal and hide both password fields', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;
    const password = nativeElement.querySelector<HTMLInputElement>('#password')!;
    const passwordConfirm = nativeElement.querySelector<HTMLInputElement>('#password_confirm')!;
    const toggles = nativeElement.querySelectorAll<HTMLButtonElement>('.password-toggle');

    expect(password.type).toBe('password');
    expect(passwordConfirm.type).toBe('password');

    toggles[0].click();
    toggles[1].click();
    fixture.detectChanges();

    expect(password.type).toBe('text');
    expect(passwordConfirm.type).toBe('text');

    toggles[0].click();
    toggles[1].click();
    fixture.detectChanges();

    expect(password.type).toBe('password');
    expect(passwordConfirm.type).toBe('password');
  });
});
