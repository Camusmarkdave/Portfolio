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
