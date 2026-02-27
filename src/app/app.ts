import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    @if (showLoader()) {
      <div class="fixed inset-0 z-[999] bg-[#0f172a] flex flex-col items-center justify-center transition-opacity duration-700"
           [class.opacity-0]="hideLoaderAnimation()"
           [class.pointer-events-none]="hideLoaderAnimation()">
        
        <div class="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move pointer-events-none"></div>

        <div class="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-blob pointer-events-none mix-blend-screen"></div>
        <div class="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none mix-blend-screen"></div>
        
        <div class="relative z-10 flex flex-col items-center w-full px-6 max-w-3xl">
          
          <div class="relative w-64 md:w-80 lg:w-[400px] mb-16 animate-float-loader">
             <div class="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
             <img src="assets/uploads/logo.png" alt="Mark Dave Camus Logo" class="relative w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]" />
          </div>
          
          <div class="w-full max-w-md h-2 md:h-3 bg-slate-800/60 backdrop-blur-md rounded-full overflow-hidden relative border border-slate-700/50 shadow-inner">
             <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-loading-bar origin-left shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
          </div>
          
          <div class="mt-8 flex flex-col items-center gap-3">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-sm md:text-base font-black tracking-[0.5em] uppercase animate-pulse">
              Initializing
            </span>
            <span class="text-slate-500 text-xs font-bold tracking-widest uppercase">
              Portfolio Experience
            </span>
          </div>
          
        </div>
      </div>
    }

    <div class="min-h-screen flex flex-col bg-white font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
      
      <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 animate-slide-down"
           [ngClass]="isDarkNav() ? 'bg-[#0f172a]/90 border-slate-800' : 'bg-white/80 border-slate-100'">
        <div class="container mx-auto px-6 h-20 flex items-center justify-between">
          
          <a href="#" (click)="openLogoModal($event)" class="flex items-center gap-3 group relative" title="Preview Logo">
            <div class="relative">
                <div class="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                <img src="assets/uploads/logo.png" alt="Logo" class="relative h-9 w-auto object-contain" />
            </div>
             <span class="text-sm font-bold tracking-widest uppercase transition-colors"
                   [ngClass]="isDarkNav() ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-cyan-600'">Portfolio</span>
          </a>

          <div class="hidden md:flex items-center gap-1 p-1 rounded-full border transition-colors duration-300"
               [ngClass]="isDarkNav() ? 'bg-slate-800/50 border-slate-700/50' : 'bg-slate-100/50 border-slate-200/50'">
            <a routerLink="/" 
               routerLinkActive
               #rlaHome="routerLinkActive"
               [routerLinkActiveOptions]="{exact: true}"
               class="px-5 py-2 rounded-full text-sm font-bold transition-all duration-300"
               [ngClass]="{
                 'bg-slate-700 text-white shadow-sm': isDarkNav() && rlaHome.isActive,
                 'bg-white text-slate-900 shadow-sm': !isDarkNav() && rlaHome.isActive,
                 'text-slate-400 hover:text-white': isDarkNav() && !rlaHome.isActive,
                 'text-slate-500 hover:text-slate-900': !isDarkNav() && !rlaHome.isActive
               }">
              Home
            </a>
            <a routerLink="/projects" 
               routerLinkActive
               #rlaProjects="routerLinkActive"
               class="px-5 py-2 rounded-full text-sm font-bold transition-all duration-300"
               [ngClass]="{
                 'bg-slate-700 text-white shadow-sm': isDarkNav() && rlaProjects.isActive,
                 'bg-white text-slate-900 shadow-sm': !isDarkNav() && rlaProjects.isActive,
                 'text-slate-400 hover:text-white': isDarkNav() && !rlaProjects.isActive,
                 'text-slate-500 hover:text-slate-900': !isDarkNav() && !rlaProjects.isActive
               }">
              Projects
            </a>
            <a routerLink="/about" 
               routerLinkActive
               #rlaAbout="routerLinkActive"
               class="px-5 py-2 rounded-full text-sm font-bold transition-all duration-300"
               [ngClass]="{
                 'bg-slate-700 text-white shadow-sm': isDarkNav() && rlaAbout.isActive,
                 'bg-white text-slate-900 shadow-sm': !isDarkNav() && rlaAbout.isActive,
                 'text-slate-400 hover:text-white': isDarkNav() && !rlaAbout.isActive,
                 'text-slate-500 hover:text-slate-900': !isDarkNav() && !rlaAbout.isActive
               }">
              About
            </a>
            <a routerLink="/resume" 
               routerLinkActive
               #rlaResume="routerLinkActive"
               class="px-5 py-2 rounded-full text-sm font-bold transition-all duration-300"
               [ngClass]="{
                 'bg-slate-700 text-white shadow-sm': isDarkNav() && rlaResume.isActive,
                 'bg-white text-slate-900 shadow-sm': !isDarkNav() && rlaResume.isActive,
                 'text-slate-400 hover:text-white': isDarkNav() && !rlaResume.isActive,
                 'text-slate-500 hover:text-slate-900': !isDarkNav() && !rlaResume.isActive
               }">
              Resume
            </a>
          </div>

          <div class="flex items-center gap-4">
             <a routerLink="/contact" class="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5">
               Let's Talk
             </a>
             
             <button class="md:hidden p-2 transition-colors" 
                     [ngClass]="isDarkNav() ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'"
                     (click)="toggleMobileMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  @if (isMobileMenuOpen()) {
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  } @else {
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
             </button>
          </div>
        </div>
      </nav>

      <div class="fixed inset-0 bg-white z-[60] flex flex-col transition-all duration-300 md:hidden"
           [class.opacity-0]="!isMobileMenuOpen()"
           [class.pointer-events-none]="!isMobileMenuOpen()"
           [class.opacity-100]="isMobileMenuOpen()"
           [class.pointer-events-auto]="isMobileMenuOpen()">

           <div class="flex items-center justify-between p-6 border-b border-slate-100">
             <span class="text-xl font-bold text-slate-900">Menu</span>
             <button class="p-2 text-slate-500 hover:text-slate-900 transition-colors" (click)="closeMobileMenu()">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
           </div>
           
           <nav class="flex flex-col p-8 gap-6">
             <a routerLink="/" (click)="closeMobileMenu()" routerLinkActive="text-cyan-600" [routerLinkActiveOptions]="{exact: true}" class="text-2xl font-bold text-slate-800 hover:text-cyan-600 transition-colors">Home</a>
             <a routerLink="/projects" (click)="closeMobileMenu()" routerLinkActive="text-cyan-600" class="text-2xl font-bold text-slate-800 hover:text-cyan-600 transition-colors">Projects</a>
             <a routerLink="/about" (click)="closeMobileMenu()" routerLinkActive="text-cyan-600" class="text-2xl font-bold text-slate-800 hover:text-cyan-600 transition-colors">About</a>
             <a routerLink="/resume" (click)="closeMobileMenu()" routerLinkActive="text-cyan-600" class="text-2xl font-bold text-slate-800 hover:text-cyan-600 transition-colors">Resume</a>
             <a routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="text-cyan-600" class="text-2xl font-bold text-slate-800 hover:text-cyan-600 transition-colors">Contact</a>
           </nav>
      </div>

      <main class="flex-grow relative">
        <router-outlet></router-outlet>
      </main>

      <footer class="relative bg-slate-900 text-slate-300 py-16 border-t border-slate-800 overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-800/20 via-[#0f172a] to-[#0f172a]"></div>
            <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div class="absolute -right-20 -top-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div class="space-y-4">
               <div class="flex items-center gap-2">
                 <img src="assets/uploads/logo.png" alt="Logo" class="h-8 w-auto object-contain" />
                 <span class="text-xl font-bold text-white tracking-tight">Mark Dave</span>
               </div>
               <p class="text-slate-400 text-sm leading-relaxed">
                 Building digital experiences that matter. Focused on performance, accessibility, and modern design.
               </p>
            </div>

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
    .animate-slide-down { animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    @keyframes slideDown { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    
    /* Loader Specific Animations */
    @keyframes floatLoader {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    .animate-float-loader { 
      animation: floatLoader 3.5s ease-in-out infinite; 
    }
    
    @keyframes loadingBarProgress {
      0% { transform: scaleX(0); }
      50% { transform: scaleX(1); }
      100% { transform: scaleX(0); transform-origin: right; }
    }
    .animate-loading-bar { 
      animation: loadingBarProgress 1.5s ease-in-out infinite; 
    }

    /* Ambient Background Animations (Copied from other pages) */
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob { animation: blob 7s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    
    @keyframes gridMove {
      0% { background-position: 0 0; }
      100% { background-position: 40px 40px; }
    }
    .animate-grid-move { animation: gridMove 3s linear infinite; }
  `]
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  
  // Loader States
  protected readonly showLoader = signal(true);
  protected readonly hideLoaderAnimation = signal(false);
  
  protected readonly isLogoModalOpen = signal(false);
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly isDarkNav = signal(false);

  constructor() {
    this.titleService.setTitle('Mark Dave Camus | Web Developer & UI Engineer');
    this.metaService.addTags([
      { name: 'description', content: 'Portfolio of Mark Dave Camus, a Web Developer and UI Engineer specializing in Angular, React, and modern web design.' },
      { name: 'keywords', content: 'Web Developer, Frontend, UI/UX, Angular, Tailwind CSS' }
    ]);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      this.isDarkNav.set(url.includes('/projects') || url.includes('/resume'));
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
    // Keep loader on screen for 2 seconds
    setTimeout(() => {
      // Trigger the opacity fade-out animation first
      this.hideLoaderAnimation.set(true);
      
      // Remove completely from the DOM after the transition is finished (700ms duration)
      setTimeout(() => {
        this.showLoader.set(false);
      }, 700);
    }, 2000);
  }

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