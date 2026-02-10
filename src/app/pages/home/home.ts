import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <!-- Background decoration -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div class="absolute top-20 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          
          <!-- Text Content -->
          <div class="flex-1 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span class="text-xs font-semibold text-slate-600 uppercase tracking-wide">Available for projects</span>
            </div>

            <h1 class="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6">
              Building digital <br class="hidden lg:block" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">experiences</span> that matter.
            </h1>
            
            <p class="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              I'm <span class="font-bold text-slate-900">Mark Dave Camus</span>, a Web Developer & UI Engineer. I craft accessible, pixel-perfect, and performant web applications using modern architecture.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a routerLink="/projects" class="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-center cursor-pointer">
                View My Work
              </a>
              <a routerLink="/contact" class="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 font-bold text-sm uppercase tracking-widest hover:border-slate-900 transition-all text-center cursor-pointer">
                Contact Me
              </a>
            </div>
          </div>

          <!-- Visual Content (Hero Image) -->
          <div class="flex-1 w-full max-w-lg lg:max-w-xl relative">
             <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-square md:aspect-[4/3]">
                <!-- Placeholder for Hero Image -->
                <img src="assets/images/hero-image.png" alt="Hero Image" class="object-cover w-full h-full hover:scale-105 transition-transform duration-700">
             </div>
             <!-- Decorative elements -->
             <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
             <div class="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Selected Works Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-end mb-12">
          <div>
            <h2 class="text-3xl font-black text-slate-900 mb-2 tracking-tight">Selected Works</h2>
            <p class="text-slate-600">A selection of my recent projects.</p>
          </div>
          <a routerLink="/projects" class="hidden md:inline-flex items-center font-bold text-cyan-600 hover:text-cyan-700 transition-colors">
            View All Projects <span class="ml-2">→</span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Project 1 -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl bg-slate-100 aspect-video mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 group-hover:scale-105 transition-transform duration-700"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white font-bold text-2xl tracking-tight">Vitality Apparel</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">E-Commerce Platform</h3>
            <p class="text-slate-600 text-sm mt-2">Angular • Tailwind • Node.js</p>
          </div>
          <!-- Project 2 -->
           <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl bg-slate-100 aspect-video mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 group-hover:scale-105 transition-transform duration-700"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white font-bold text-2xl tracking-tight">FinTech Dash</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">Banking Dashboard</h3>
            <p class="text-slate-600 text-sm mt-2">React • TypeScript • D3.js</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-slate-50 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 32px 32px;"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-2xl mx-auto text-center mb-20">
          <span class="text-cyan-600 font-bold tracking-wider uppercase text-sm mb-3 block">Services</span>
          <h2 class="text-4xl font-black text-slate-900 mb-6 tracking-tight">What I Do</h2>
          <p class="text-slate-600 text-lg leading-relaxed">Combining artistic creativity with engineering precision to deliver exceptional user experiences.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl group border border-slate-100 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            
            <div class="relative z-10">
                <div class="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-8 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Frontend Dev</h3>
                <p class="text-slate-600 leading-relaxed">
                  Building responsive, single-page applications using Angular and React. Clean, semantic, and SEO-friendly code.
                </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl group border border-slate-100 relative overflow-hidden">
             <div class="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            
             <div class="relative z-10">
                <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-8 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-900 mb-4">UI/UX Design</h3>
                <p class="text-slate-600 leading-relaxed">
                  Designing intuitive interfaces with Figma. Focusing on typography, spacing, and color theory for engaging user journeys.
                </p>
             </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl group border border-slate-100 relative overflow-hidden">
             <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            
             <div class="relative z-10">
                <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Optimization</h3>
                <p class="text-slate-600 leading-relaxed">
                  Optimizing for speed and efficiency. Lazy loading, efficient state management, and smooth performance.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    .perspective-1000 {
      perspective: 1000px;
    }
    .rotate-y-2 {
      transform: rotateY(2deg);
    }
    .rotate-x-2 {
      transform: rotateX(2deg);
    }
  `]
})
export class HomeComponent {}