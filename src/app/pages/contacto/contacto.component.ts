// import { Component } from "@angular/core"
// import { type FormBuilder, type FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"

// @Component({
//   selector: "app-contacto",
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   templateUrl: "./contacto.component.html",
//   styleUrl: "./contacto.component.css",
// })
// export class ContactoComponent {
//   contactForm: FormGroup
//   formSubmitted = false

//   constructor(private fb: FormBuilder) {
//     this.contactForm = this.fb.group({
//       name: ["", [Validators.required, Validators.minLength(3)]],
//       email: ["", [Validators.required, Validators.email]],
//       phone: ["", Validators.pattern("[0-9]{9}")],
//       subject: ["", Validators.required],
//       message: ["", [Validators.required, Validators.minLength(10)]],
//       privacy: [false, Validators.requiredTrue],
//     })
//   }

//   onSubmit() {
//     this.formSubmitted = true

//     if (this.contactForm.valid) {
//       // Aquí iría la lógica para enviar el formulario
//       console.log("Formulario enviado", this.contactForm.value)
//       this.contactForm.reset()
//       this.formSubmitted = false
//     }
//   }

//   get f() {
//     return this.contactForm.controls
//   }
// }

import { Component } from "@angular/core"

@Component({
  selector: "app-contacto",
  standalone: true,
  imports: [],
  templateUrl: "./contacto.component.html",
  styleUrl: "./contacto.component.css",
})
export class ContactoComponent {}