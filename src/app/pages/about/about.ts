import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-slate-50 min-h-screen">
      <div class="container mx-auto px-6">
        
        <!-- Header / Hero -->
        <div class="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <!-- Text Content -->
          <div class="flex-1">
            <h1 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              More than just <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">code.</span>
            </h1>
            
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
              I build digital experiences that matter. My workflow combines the creativity of UI/UX design with the structure of semantic coding. I believe in raw, honest design and writing code that is scalable, accessible, and high-performance.
            </p>

            <div class="grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
              <div>
                <div class="text-3xl font-black text-slate-900 mb-1">3+</div>
                <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Years Exp</div>
              </div>
              <div>
                <div class="text-3xl font-black text-slate-900 mb-1">15+</div>
                <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div class="text-3xl font-black text-slate-900 mb-1">100%</div>
                <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Committed</div>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="flex-1 relative">
             <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto bg-slate-200">
                <!-- Placeholder for Profile Image -->
                <img src="assets/images/profile.jpg" alt="Profile" class="object-cover w-full h-full" />
                <div class="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100 -z-10">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                   </svg>
                </div>
             </div>
             <!-- Decorative Blob -->
             <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
             <div class="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>

        <!-- Philosophy / Values -->
        <div class="mb-24">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-3xl font-black text-slate-900 tracking-tight mb-4">How I Work</h2>
            <p class="text-slate-600">My approach to development is grounded in three core principles.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div class="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Visual Developer</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                I speak both languages: Figma and TypeScript. I ensure the final code matches the design intent perfectly, bridging the gap between design and engineering.
              </p>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div class="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Logic Driven</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                I don't just copy-paste tutorials. I break down complex requirements into clean, reusable logic, ensuring maintainability and scalability.
              </p>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">Deadline Focused</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                I balance clean code with practical delivery. I prioritize shipping functional MVPs over perfection, iterating based on real feedback.
              </p>
            </div>
          </div>
        </div>

        <!-- Toolkit -->
        <div class="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
           <!-- Background decoration -->
           <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
              <div class="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
              <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
           </div>

           <div class="relative z-10">
             <h2 class="text-3xl font-black text-white mb-12 tracking-tight">My Toolkit</h2>
             
             <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">Angular</span>
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">TypeScript</span>
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">Tailwind CSS</span>
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">RxJS</span>
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">Figma</span>
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">Git & GitHub</span>
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">VS Code</span>
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">Node.js</span>
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">Postman</span>
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">React</span>
               <span class="px-6 py-3 rounded-full bg-slate-800 text-slate-300 font-bold text-sm border border-slate-700 hover:border-cyan-500 hover:text-white transition-all cursor-default">Vue</span>
             </div>

             <h3 class="text-xl font-bold text-slate-400 mt-12 mb-8 uppercase tracking-widest">Soft Skills</h3>
             <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
               <span class="px-5 py-2 rounded-full bg-slate-800/50 text-slate-400 font-medium text-xs border border-slate-700/50 hover:border-purple-500 hover:text-white transition-all cursor-default">Problem Solving</span>
               <span class="px-5 py-2 rounded-full bg-slate-800/50 text-slate-400 font-medium text-xs border border-slate-700/50 hover:border-purple-500 hover:text-white transition-all cursor-default">Communication</span>
               <span class="px-5 py-2 rounded-full bg-slate-800/50 text-slate-400 font-medium text-xs border border-slate-700/50 hover:border-purple-500 hover:text-white transition-all cursor-default">Teamwork</span>
               <span class="px-5 py-2 rounded-full bg-slate-800/50 text-slate-400 font-medium text-xs border border-slate-700/50 hover:border-purple-500 hover:text-white transition-all cursor-default">Adaptability</span>
               <span class="px-5 py-2 rounded-full bg-slate-800/50 text-slate-400 font-medium text-xs border border-slate-700/50 hover:border-purple-500 hover:text-white transition-all cursor-default">Time Management</span>
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
  `]
})
export class AboutComponent {}