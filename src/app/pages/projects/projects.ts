import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-slate-50 min-h-screen">
      <div class="container mx-auto px-6">
        
        <!-- Header -->
        <div class="mb-16 text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            My <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Projects</span>
          </h1>
          <p class="text-lg text-slate-600">
            A showcase of my technical projects, design experiments, and everything in between.
          </p>
        </div>

        <!-- Filters -->
        <div class="flex justify-center gap-4 mb-16">
          <button class="px-6 py-2 rounded-full bg-slate-900 text-white text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-slate-800 transition-all transform hover:-translate-y-0.5">All</button>
          <button class="px-6 py-2 rounded-full bg-white text-slate-600 border border-slate-200 text-sm font-bold uppercase tracking-wider hover:border-cyan-500 hover:text-cyan-600 transition-all transform hover:-translate-y-0.5">Design</button>
          <button class="px-6 py-2 rounded-full bg-white text-slate-600 border border-slate-200 text-sm font-bold uppercase tracking-wider hover:border-cyan-500 hover:text-cyan-600 transition-all transform hover:-translate-y-0.5">Code</button>
        </div>

        <!-- Featured Project -->
        <div class="mb-20">
          <h2 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Featured Project</h2>
          <div class="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              <!-- Image Section -->
              <div class="relative h-64 lg:h-auto overflow-hidden bg-slate-100">
                 <div class="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform duration-700"></div>
                 <!-- Placeholder Icon -->
                 <div class="absolute inset-0 flex items-center justify-center text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                 </div>
              </div>
              
              <!-- Content Section -->
              <div class="p-8 lg:p-12 flex flex-col justify-center">
                <div class="mb-4">
                   <span class="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wide mb-4">E-Commerce</span>
                   <h3 class="text-3xl md:text-4xl font-black text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">Vitality Apparel</h3>
                   <p class="text-slate-600 leading-relaxed mb-6">
                     A modern e-commerce store for sustainable activewear. Features include a dynamic product gallery, size guide integration, and a seamless checkout process built with performance in mind.
                   </p>
                </div>
                
                <div class="flex flex-wrap gap-2 mb-8">
                  <span class="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">Angular</span>
                  <span class="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">TypeScript</span>
                  <span class="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">Tailwind</span>
                </div>

                <a href="#" class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-cyan-600 transition-colors">
                  View Case Study 
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          <!-- Card 1 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div class="h-48 bg-slate-100 relative overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-50 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">Flippix Study App</h3>
              <p class="text-slate-600 text-sm mb-4 line-clamp-3">
                A mobile application designed to help students organize flashcards and study more effectively using spaced repetition.
              </p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                 <span class="text-xs font-bold text-slate-400 uppercase">Mobile App</span>
                 <button class="text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors">View Project</button>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div class="h-48 bg-slate-100 relative overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-50 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">WeatherVue Dashboard</h3>
              <p class="text-slate-600 text-sm mb-4 line-clamp-3">
                A real-time weather tracking app that fetches data from OpenWeather API and visualizes trends with Chart.js.
              </p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                 <span class="text-xs font-bold text-slate-400 uppercase">Web App</span>
                 <button class="text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors">View Project</button>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div class="h-48 bg-slate-100 relative overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-teal-50 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">Library Management</h3>
              <p class="text-slate-600 text-sm mb-4 line-clamp-3">
                A comprehensive database system for university libraries to track book loans, student records, and inventory.
              </p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                 <span class="text-xs font-bold text-slate-400 uppercase">Database</span>
                 <button class="text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors">View Project</button>
              </div>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div class="h-48 bg-slate-100 relative overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-tr from-orange-100 to-red-50 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">TaskMaster Pro</h3>
              <p class="text-slate-600 text-sm mb-4 line-clamp-3">
                A productivity tool for remote teams featuring real-time collaboration, kanban boards, and automated reporting.
              </p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                 <span class="text-xs font-bold text-slate-400 uppercase">SaaS Platform</span>
                 <button class="text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors">View Project</button>
              </div>
            </div>
          </div>

          <!-- Card 5 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div class="h-48 bg-slate-100 relative overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-tr from-pink-100 to-rose-50 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">Neon UI Kit</h3>
              <p class="text-slate-600 text-sm mb-4 line-clamp-3">
                A comprehensive design system and component library built for modern dark-mode interfaces.
              </p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                 <span class="text-xs font-bold text-slate-400 uppercase">Design System</span>
                 <button class="text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors">View Project</button>
              </div>
            </div>
          </div>

          <!-- Card 6 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div class="h-48 bg-slate-100 relative overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-violet-50 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">CryptoTracker</h3>
              <p class="text-slate-600 text-sm mb-4 line-clamp-3">
                A lightweight dashboard for tracking cryptocurrency prices and portfolio performance using CoinGecko API.
              </p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                 <span class="text-xs font-bold text-slate-400 uppercase">Web App</span>
                 <button class="text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors">View Project</button>
              </div>
            </div>
          </div>

        </div>

        <!-- Design Experiments Section -->
        <div class="mb-20">
            <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tight">Design Experiments</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="aspect-square bg-slate-200 rounded-2xl relative overflow-hidden group cursor-pointer">
                    <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">3D Icons</div>
                </div>
                <div class="aspect-square bg-slate-200 rounded-2xl relative overflow-hidden group cursor-pointer">
                    <div class="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Glassmorphism</div>
                </div>
                <div class="aspect-square bg-slate-200 rounded-2xl relative overflow-hidden group cursor-pointer">
                    <div class="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Typography</div>
                </div>
                <div class="aspect-square bg-slate-200 rounded-2xl relative overflow-hidden group cursor-pointer">
                    <div class="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute inset-0 flex items-center justify-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Micro-interactions</div>
                </div>
            </div>
        </div>

        <!-- Open Source Section -->
        <div class="bg-slate-900 rounded-3xl p-8 md:p-12 text-center md:text-left relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
            <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h2 class="text-3xl font-black text-white mb-4">Open Source</h2>
                    <p class="text-slate-400 max-w-xl">
                        I believe in giving back to the community. I actively contribute to various open-source projects and maintain a few of my own libraries.
                    </p>
                </div>
                <a href="https://github.com" target="_blank" class="px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-cyan-50 transition-colors rounded-full">
                    Visit GitHub
                </a>
            </div>
        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {}