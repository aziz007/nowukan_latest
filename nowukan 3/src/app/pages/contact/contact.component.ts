import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EnquiryFormComponent } from '../../components/enquiry-form/enquiry-form.component';

interface MailAccount {
  label: string;
  address: string;
  mailto: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, EnquiryFormComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly mailAccounts: MailAccount[] = [
    {
      label: 'Have A Question?',
      address: 'info@nowukan.io',
      mailto: 'mailto:info@nowukan.io?subject=General%20Question%20-%20Website',
    },
    {
      label: 'Need Help? / Report Issue!',
      address: 'support@nowukan.io',
      mailto: 'mailto:support@nowukan.io?subject=Support%20From%20Website',
    },
    {
      label: 'Tech Inquiries',
      address: 'tech@nowukan.io',
      mailto: 'mailto:tech@nowukan.io?subject=Tech%20Team%20-%20Website',
    },
    {
      label: 'Sales / Business Inquiries',
      address: 'sales@nowukan.io',
      mailto: 'mailto:sales@nowukan.io?subject=Sales%20Team%20-%20Website',
    },
    {
      label: 'Collaboration / Partners',
      address: 'global@nowukan.io',
      mailto: 'mailto:global@nowukan.io',
    },
  ];
}
