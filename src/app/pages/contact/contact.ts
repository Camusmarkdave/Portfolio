import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-slate-50 min-h-screen">
      <div class="container mx-auto px-6">
        
        <!-- Header -->
        <div class="mb-16 text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Get in <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Touch</span>
          </h1>
          <p class="text-lg text-slate-600">
            Have a project in mind or want to discuss an internship opportunity? I'd love to hear from you.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Contact Form -->
          <div class="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
            <h3 class="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input type="text" placeholder="John Doe" 
                         class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" 
                         class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                <input type="text" placeholder="Project Inquiry" 
                       class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all">
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea rows="5" placeholder="Tell me about your project..." 
                          class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <button class="w-full py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Info & Map -->
          <div class="flex flex-col gap-8">
            
            <!-- Info Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Email</h4>
                <p class="text-slate-600 text-sm">camusmarkdave@gmail.com</p>
              </div>

              <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1">Phone</h4>
                <p class="text-slate-600 text-sm">+63 919 235 9881</p>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="flex-1 bg-slate-200 rounded-3xl overflow-hidden relative min-h-[300px] shadow-inner group">
               <!-- Decorative Map Pattern -->
               <div class="absolute inset-0 opacity-50" style="background-image: radial-gradient(#cbd5e1 2px, transparent 2px); background-size: 20px 20px;"></div>
               
               <div class="absolute inset-0 flex items-center justify-center">
                 <div class="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                   <div class="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                   <span class="text-slate-700 font-bold text-sm">Located in Philippines</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}