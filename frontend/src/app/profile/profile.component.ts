import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly socialFields = [
    { control: 'instagram', label: 'Instagram' },
    { control: 'tiktok', label: 'TikTok' },
    { control: 'youtube', label: 'YouTube' },
    { control: 'linkedin', label: 'LinkedIn' },
  ] as const;

  protected readonly profileForm = this.formBuilder.nonNullable.group({
    profilePicture: [''],
    name: [''],
    username: [''],
    bio: [''],
    location: [''],
    phone: [''],
    website: [''],
    socials: this.formBuilder.nonNullable.group({
      instagram: [''],
      tiktok: [''],
      youtube: [''],
      linkedin: [''],
    }),
  });

  protected profile: ProfileData = {
    profilePicture: '',
    name: '',
    username: '',
    bio: '',
    location: '',
    phone: '',
    website: '',
    socials: {
      instagram: '',
      tiktok: '',
      youtube: '',
      linkedin: '',
    },
  };
  protected materials: string[] = [];
  protected editing = false;
  protected feedback = '';
  protected materialError = '';

  protected get hasProfileDetails(): boolean {
    return Boolean(this.profile.name || this.profile.username || this.profile.bio);
  }

  protected editProfile(): void {
    this.profileForm.patchValue(this.profile);
    this.feedback = '';
    this.editing = true;
  }

  protected cancelEdit(): void {
    this.editing = false;
    this.feedback = '';
  }

  protected saveProfile(): void {
    this.profile = this.profileForm.getRawValue();
    this.editing = false;
    this.feedback = 'Az adatlap frissült. A változtatások ezen az oldalon maradnak meg.';
  }

  protected addMaterials(event: Event): void {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.files) {
      return;
    }

    const files = Array.from(input.files);
    const acceptedFiles = files.filter((file) => {
      const type = file.type.toLowerCase();
      return type.startsWith('image/') || type.startsWith('video/');
    });

    this.materials = [...this.materials, ...acceptedFiles.map((file) => file.name)];
    this.materialError = acceptedFiles.length === files.length
      ? ''
      : 'Referenciaként csak kép- és videófájlokat adhatsz hozzá.';
    input.value = '';
  }
}

interface ProfileData {
  profilePicture: string;
  name: string;
  username: string;
  bio: string;
  location: string;
  phone: string;
  website: string;
  socials: {
    instagram: string;
    tiktok: string;
    youtube: string;
    linkedin: string;
  };
}
