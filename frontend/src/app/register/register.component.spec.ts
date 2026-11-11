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
});
