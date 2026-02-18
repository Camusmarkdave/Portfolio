import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen flex flex-col bg-white font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      
      <!-- Modern Navbar with Blur Effect -->
      <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div class="container mx-auto px-6 h-20 flex items-center justify-between">
          
          <!-- Logo -->
          <a href="#" (click)="openLogoModal($event)" class="flex items-center gap-3 group relative z-50" title="Preview Logo">
            <div class="relative">
                <div class="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                <img src="assets/uploads/logo.png" alt="Logo" class="relative h-10 w-auto object-contain transform transition-transform duration-500" />
            </div>
            <div class="flex flex-col">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none group-hover:text-cyan-500 transition-colors duration-300">Portfolio</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <a routerLink="/" 
               routerLinkActive="text-cyan-600 font-semibold after:w-full" 
               [routerLinkActiveOptions]="{exact: true}"
               class="relative text-sm font-medium text-slate-600 hover:text-cyan-600 transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full">
              Home
            </a>
            <a routerLink="/projects" 
               routerLinkActive="text-cyan-600 font-semibold after:w-full"
               class="relative text-sm font-medium text-slate-600 hover:text-cyan-600 transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full">
              Projects
            </a>
            <a routerLink="/about" 
               routerLinkActive="text-cyan-600 font-semibold after:w-full"
               class="relative text-sm font-medium text-slate-600 hover:text-cyan-600 transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <a routerLink="/resume" 
               routerLinkActive="text-cyan-600 font-semibold after:w-full"
               class="relative text-sm font-medium text-slate-600 hover:text-cyan-600 transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full">
              Resume
            </a>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:block">
            <a routerLink="/contact" class="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider overflow-hidden shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5">
              <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span class="relative z-10 flex items-center gap-2">
                Let's Talk
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden relative z-50 p-2 text-slate-600 hover:text-slate-900 transition-colors" (click)="toggleMobileMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              @if (isMobileMenuOpen()) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div class="fixed inset-0 bg-slate-900/98 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center transition-all duration-300 md:hidden"
           [class.opacity-0]="!isMobileMenuOpen()"
           [class.pointer-events-none]="!isMobileMenuOpen()"
           [class.opacity-100]="isMobileMenuOpen()"
           [class.pointer-events-auto]="isMobileMenuOpen()">

           <!-- Background Blobs -->
           <div class="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none opacity-50"></div>
           <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none opacity-50"></div>

           <!-- Close Button -->
           <button class="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors" (click)="closeMobileMenu()">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
           
           <nav class="flex flex-col items-center gap-8 relative z-10">
             <a routerLink="/" (click)="closeMobileMenu()" routerLinkActive="text-cyan-400" [routerLinkActiveOptions]="{exact: true}" class="text-4xl font-black text-white hover:text-cyan-400 transition-colors tracking-tight">Home</a>
             <a routerLink="/projects" (click)="closeMobileMenu()" routerLinkActive="text-cyan-400" class="text-4xl font-black text-white hover:text-cyan-400 transition-colors tracking-tight">Projects</a>
             <a routerLink="/about" (click)="closeMobileMenu()" routerLinkActive="text-cyan-400" class="text-4xl font-black text-white hover:text-cyan-400 transition-colors tracking-tight">About</a>
             <a routerLink="/resume" (click)="closeMobileMenu()" routerLinkActive="text-cyan-400" class="text-4xl font-black text-white hover:text-cyan-400 transition-colors tracking-tight">Resume</a>
           </nav>

           <div class="w-16 h-1 bg-slate-800 rounded-full my-10 relative z-10"></div>

           <a routerLink="/contact" (click)="closeMobileMenu()" class="relative z-10 px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold uppercase tracking-widest rounded-full hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1 transition-all">
             Let's Talk
           </a>
      </div>

      <!-- Main Content Area -->
      <main class="flex-grow relative">
        <router-outlet></router-outlet>
      </main>

      <!-- Modern Footer -->
      <footer class="relative bg-slate-900 text-slate-300 py-16 border-t border-slate-800 overflow-hidden">
        <!-- Background Design -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-800/20 via-[#0f172a] to-[#0f172a]"></div>
            <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div class="absolute -right-20 -top-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <!-- Brand Section -->
            <div class="space-y-4">
               <div class="flex items-center gap-2">
                 <img src="assets/uploads/logo.png" alt="Logo" class="h-8 w-auto object-contain" />
                 <span class="text-xl font-bold text-white tracking-tight">Mark Dave</span>
               </div>
               <p class="text-slate-400 text-sm leading-relaxed">
                 Building digital experiences that matter. Focused on performance, accessibility, and modern design.
               </p>
            </div>

            <!-- Navigation -->
            <div>
              <h3 class="text-white font-bold uppercase tracking-wider text-sm mb-6">Navigation</h3>
              <ul class="space-y-3 text-sm">
                <li><a routerLink="/" class="text-slate-400 hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a routerLink="/projects" class="text-slate-400 hover:text-cyan-400 transition-colors">Projects</a></li>
                <li><a routerLink="/about" class="text-slate-400 hover:text-cyan-400 transition-colors">About</a></li>
                <li><a routerLink="/resume" class="text-slate-400 hover:text-cyan-400 transition-colors">Resume</a></li>
                <li><a routerLink="/contact" class="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <!-- Connect -->
            <div>
              <h3 class="text-white font-bold uppercase tracking-wider text-sm mb-6">Socials</h3>
              <ul class="space-y-3 text-sm">
                <li>
                  <a href="https://linkedin.com" target="_blank" class="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" class="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:camusmarkdave@gmail.com" class="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Availability -->
            <div>
                <h3 class="text-white font-bold uppercase tracking-wider text-sm mb-6">Availability</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-4">
                  I am currently open for freelance projects and full-time opportunities. Let's build something amazing together.
                </p>
                <a routerLink="/contact" class="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm hover:text-cyan-300 transition-colors group">
                  <span>Hire Me</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </div>

          </div>

          <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-xs text-slate-500">© 2025 Mark Dave Camus. All rights reserved.</p>
            <div class="flex gap-6 text-xs text-slate-500">
              <span class="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
              <span class="hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      <!-- Logo Preview Modal -->
      @if (isLogoModalOpen()) {
        <div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
             (click)="closeLogoModal()">
          <div class="relative p-12 bg-white rounded-3xl shadow-2xl transform animate-scale-up max-w-lg w-full mx-4"
               (click)="$event.stopPropagation()">
             <button class="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
                     (click)="closeLogoModal()">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
             <div class="flex flex-col items-center text-center">
               <div class="w-full aspect-video flex items-center justify-center bg-slate-50 rounded-2xl mb-8 p-8">
                 <img src="assets/uploads/logo.png" alt="Logo" class="w-full h-full object-contain drop-shadow-xl" />
               </div>
               <h2 class="text-3xl font-black text-slate-900 tracking-tight mb-2">Mark Dave</h2>
               <p class="text-slate-500">Web Developer & UI Engineer</p>
             </div>
          </div>
        </div>
      }

    </div>
  `,
  styles: [`
    .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
    .animate-scale-up { animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes scaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  `]
})
export class AppComponent {
  protected readonly isLogoModalOpen = signal(false);
  protected readonly isMobileMenuOpen = signal(false);

  protected openLogoModal(event: Event) {
    event.preventDefault();
    this.isLogoModalOpen.set(true);
  }

  protected closeLogoModal() {
    this.isLogoModalOpen.set(false);
  }

  protected toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  protected closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}