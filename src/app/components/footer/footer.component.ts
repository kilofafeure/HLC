import { Component } from "@angular/core"

@Component({
  selector: "app-footer",
  standalone: true,
  template: `
    <footer class="w-full border-t bg-green-50">
      <div class="container py-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4 text-green-800">Verde Vida</h3>
            <p class="text-sm text-muted-foreground">
              Huerta ecológica comprometida con el medio ambiente y la producción de alimentos saludables y sostenibles.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-green-800">Enlaces</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#sobre-nosotros" class="text-muted-foreground hover:text-green-700 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#productos" class="text-muted-foreground hover:text-green-700 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#galeria" class="text-muted-foreground hover:text-green-700 transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#beneficios" class="text-muted-foreground hover:text-green-700 transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#contacto" class="text-muted-foreground hover:text-green-700 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-green-800">Contacto</h3>
            <address class="not-italic text-sm text-muted-foreground space-y-2">
              <p>Camino de la Huerta, s/n</p>
              <p>28001 Madrid, España</p>
              <p>Email: info&#64;verdevida.com</p>
              <p>Teléfono: +34 912 345 678</p>
            </address>

            <div class="flex space-x-4 mt-4">
              <a href="#" class="text-muted-foreground hover:text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span class="sr-only">Facebook</span>
              </a>
              <a href="#" class="text-muted-foreground hover:text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span class="sr-only">Instagram</span>
              </a>
              <a href="#" class="text-muted-foreground hover:text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                <span class="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {{ currentYear }} Verde Vida. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
}
