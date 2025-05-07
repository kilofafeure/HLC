import { Component } from "@angular/core"

@Component({
  selector: "app-contact-section",
  standalone: true,
  template: `
    <section id="contacto" class="w-full py-12 md:py-24 bg-white">
      <div class="container">
        CONTACTO
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  currentYear = new Date().getFullYear()
}

// import { Component } from "@angular/core"
// import { type FormBuilder, type FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
// import { NgIf } from "@angular/common"

// @Component({
//   selector: "app-contact-section",
//   standalone: true,
//   imports: [ReactiveFormsModule, NgIf],
//   template: `
//     <section id="contacto" class="w-full py-12 md:py-24 bg-white">
//       <div class="container">
//         <div class="text-center mb-12">
//           <h2 class="text-3xl font-bold tracking-tight text-green-800 mb-4">Contacto</h2>
//           <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
//             ¿Tienes alguna pregunta o quieres saber más sobre nuestra huerta ecológica? No dudes en ponerte en contacto
//             con nosotros.
//           </p>
//         </div>

//         <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <div class="space-y-6">
//               <div class="flex items-start gap-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-green-600 mt-1">
//                   <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>
//                 </svg>
//                 <div>
//                   <h3 class="font-medium text-lg">Dirección</h3>
//                   <p class="text-muted-foreground">Camino de la Huerta, s/n</p>
//                   <p class="text-muted-foreground">28001 Madrid, España</p>
//                 </div>
//               </div>

//               <div class="flex items-start gap-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-green-600 mt-1">
//                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                 </svg>
//                 <div>
//                   <h3 class="font-medium text-lg">Teléfono</h3>
//                   <p class="text-muted-foreground">+34 912 345 678</p>
//                 </div>
//               </div>

//               <div class="flex items-start gap-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-green-600 mt-1">
//                   <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//                 </svg>
//                 <div>
//                   <h3 class="font-medium text-lg">Email</h3>
//                   <p class="text-muted-foreground">info&#64;verdevida.com</p>
//                 </div>
//               </div>
//             </div>

//             <div class="mt-8 aspect-video bg-muted rounded-lg overflow-hidden">
//               <!-- Aquí iría un mapa real en una implementación completa -->
//               <div class="w-full h-full flex items-center justify-center bg-green-100 text-green-800">
//                 Mapa de ubicación
//               </div>
//             </div>
//           </div>

//           <div>
//             <div *ngIf="isSubmitted" class="bg-green-50 p-8 rounded-lg border border-green-200 text-center">
//               <h3 class="text-xl font-semibold text-green-800 mb-2">¡Mensaje enviado!</h3>
//               <p class="text-muted-foreground mb-4">
//                 Gracias por contactar con nosotros. Te responderemos lo antes posible.
//               </p>
//               <button
//                 class="px-4 py-2 border border-green-700 rounded-md text-green-700 hover:bg-green-50"
//                 (click)="resetForm()"
//               >
//                 Enviar otro mensaje
//               </button>
//             </div>

//             <form *ngIf="!isSubmitted" [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
//               <div class="space-y-2">
//                 <label for="name" class="block text-sm font-medium">Nombre</label>
//                 <input
//                   id="name"
//                   formControlName="name"
//                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                   required
//                 />
//               </div>

//               <div class="space-y-2">
//                 <label for="email" class="block text-sm font-medium">Email</label>
//                 <input
//                   id="email"
//                   formControlName="email"
//                   type="email"
//                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                   required
//                 />
//               </div>

//               <div class="space-y-2">
//                 <label for="message" class="block text-sm font-medium">Mensaje</label>
//                 <textarea
//                   id="message"
//                   formControlName="message"
//                   rows="5"
//                   class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 class="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium"
//                 [disabled]="contactForm.invalid"
//               >
//                 Enviar Mensaje
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   `,
// })
// export class ContactSectionComponent {
//   contactForm: FormGroup
//   isSubmitted = false

//   constructor(private fb: FormBuilder) {
//     this.contactForm = this.fb.group({
//       name: ["", Validators.required],
//       email: ["", [Validators.required, Validators.email]],
//       message: ["", Validators.required],
//     })
//   }

//   onSubmit() {
//     if (this.contactForm.valid) {
//       // En una web estática, simplemente mostramos un mensaje de éxito
//       // En una implementación real, aquí enviaríamos los datos a un servidor
//       this.isSubmitted = true
//     }
//   }

//   resetForm() {
//     this.isSubmitted = false
//     this.contactForm.reset()
//   }
// }
