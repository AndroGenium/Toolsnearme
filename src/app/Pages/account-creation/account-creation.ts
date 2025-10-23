import { Component } from '@angular/core';

@Component({
  selector: 'app-account-creation',
  standalone: false,
  templateUrl: './account-creation.html',
  styleUrl: './account-creation.scss'
})
export class AccountCreation {
        // // Get elements
        // const termsCheckbox = document.getElementById('terms');
        // const registerBtn = document.getElementById('registerBtn');
        // const registerForm = document.getElementById('registerForm');

        // // Enable/disable button based on checkbox
        // termsCheckbox.addEventListener('change', function() {
        //     registerBtn.disabled = !this.checked;
        // });

        // // Handle form submission
        // registerForm.addEventListener('submit', function(e) {
        //     e.preventDefault();
            
        //     if (termsCheckbox.checked) {
        //         // API CALL: POST /api/register
        //         // Gather form data and send to backend
        //         const formData = {
        //             firstName: document.getElementById('firstName').value,
        //             lastName: document.getElementById('lastName').value,
        //             email: document.getElementById('email').value,
        //             dateOfBirth: document.getElementById('dob').value,
        //             password: document.getElementById('password').value
        //         };
                
        //         console.log('Registering user:', formData);
        //         // Make your API call here
        //     }
        // });

          CheckTerms()
          {
            const registerBtn = document.getElementById('registerBtn') as HTMLButtonElement;
            const termsCheckbox = document.getElementById('terms') as HTMLInputElement;
            registerBtn.disabled = !termsCheckbox.checked;
          }
}
