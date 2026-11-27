/**
 * Skills and tools, matching the resume PDF. The homepage toolbox tile, the
 * About page toolkit, and the Resume page all read this.
 */

import { developer } from './profile';

export const skills = {
  /** Starts with `developer.stack`, the list the homepage code card prints. */
  daily: [...developer.stack, 'JavaScript', 'HTML5 & CSS3', 'Git & GitHub'],
  alsoUsed: ['React', 'PHP', 'MySQL', 'Node.js', 'Express', 'MongoDB'],
  /** From the IT Department internship at Clark Development Corporation. */
  networking: [
    'Network and access point configuration',
    'Router setup',
    'PoE switch management',
    'UTP cable crimping',
    'Server management',
    'Basic troubleshooting',
  ],
  tools: ['VS Code', 'Postman'],
  soft: ['Problem Solving', 'Time Management', 'Teamwork', 'Communication', 'Working Under Pressure', 'Patience'],
};

/**
 * Where each chip group starts when the groups pop in as one run, top to
 * bottom (the `.cascade` animation in styles.css reads it as --i).
 */
export const chipStart = {
  daily: 0,
  alsoUsed: skills.daily.length,
  networking: skills.daily.length + skills.alsoUsed.length,
  tools: skills.daily.length + skills.alsoUsed.length + skills.networking.length,
  soft: skills.daily.length + skills.alsoUsed.length + skills.networking.length + skills.tools.length,
};
