import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      
      <!-- Modern Navbar with Blur Effect -->
      <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div class="container mx-auto px-6 h-20 flex items-center justify-between">
          
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-1">
            <img src="assets/uploads/logo.png" alt="Logo" class="h-10 w-auto object-contain" />
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <a routerLink="/" 
               routerLinkActive="text-cyan-600 font-semibold" 
               [routerLinkActiveOptions]="{exact: true}"
               class="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">
              Home
            </a>
            <a routerLink="/projects" 
               routerLinkActive="text-cyan-600 font-semibold"
               class="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">
              Projects
            </a>
            <a routerLink="/about" 
               routerLinkActive="text-cyan-600 font-semibold"
               class="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">
              About
            </a>
            <a routerLink="/resume" 
               routerLinkActive="text-cyan-600 font-semibold"
               class="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors">
              Resume
            </a>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:block">
            <a routerLink="/contact" class="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      <!-- Main Content Area -->
      <main>
        <router-outlet></router-outlet>
      </main>

      <!-- Modern Footer -->
      <footer class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div class="container mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <!-- Brand/Copyright -->
            <div class="text-center md:text-left">
               <div class="mb-4 md:mb-2">
                 <!-- Footer Logo (White version if available, or same) -->
                 <img src="/assets/uploads/logo.png" alt="Logo" class="h-8 w-auto inline-block opacity-90 grayscale hover:grayscale-0 transition-all" />
               </div>
               <p class="text-sm text-slate-500">© 2025 Mark Dave Camus. All rights reserved.</p>
            </div>

            <!-- Social Links -->
            <div class="flex gap-8 text-sm font-medium">
              <a href="https://linkedin.com" target="_blank" class="hover:text-cyan-400 transition-colors">LinkedIn</a>
              <a href="https://github.com" target="_blank" class="hover:text-cyan-400 transition-colors">GitHub</a>
              <a href="mailto:camusmarkdave@gmail.com" class="hover:text-cyan-400 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  `
})
export class AppComponent {}