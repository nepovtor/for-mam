import { spawn } from 'child_process';

const processes = [
  spawn('npm', ['run', 'dev'], { stdio: 'inherit' }),
  spawn('npm', ['run', 'dev:server'], { stdio: 'inherit' })
];

function exitHandler(code) {
  processes.forEach(p => p.kill('SIGTERM'));
  if (typeof code === 'number') {
    process.exit(code);
  }
}

processes.forEach(p => p.on('close', exitHandler));
process.on('SIGINT', () => exitHandler());
process.on('SIGTERM', () => exitHandler());
