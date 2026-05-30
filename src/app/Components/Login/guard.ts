import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const guard: CanActivateFn = () => {

  const router = inject(Router);

  const username = localStorage.getItem('username');

  if (username) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};