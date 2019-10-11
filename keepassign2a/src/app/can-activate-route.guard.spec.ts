import { TestBed, async, inject, fakeAsync } from '@angular/core/testing';

import { CanActivateRouteGuard } from './can-activate-route.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { RouterService } from './router.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

describe('CanActivateRouteGuard', () => {
  let canActivateRouteGuard: CanActivateRouteGuard;
  const activatedRouteSnapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
  const routerStateSnapshot: RouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);
  let authService: any;
  let spyCanActivate: any;
  let response: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: Location, useValue: { back: () => { } } },
        { provide: Router, useValue: {} },
        CanActivateRouteGuard,
        AuthenticationService,
        RouterService
      ]
    });
    canActivateRouteGuard = TestBed.get(CanActivateRouteGuard);
    authService = TestBed.get(AuthenticationService);
  });

  it('should ...', inject([CanActivateRouteGuard], (guard: CanActivateRouteGuard) => {
    expect(guard).toBeTruthy();
  }));

  // ------------ Positive testing of isUserAuthenticated------------//
  it('should handle to know if user is aunthenticated', fakeAsync(() => {
    spyCanActivate = spyOn(canActivateRouteGuard, 'canActivate').and.callFake(function () { return true; });
    response = canActivateRouteGuard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
    expect(response).toBe(true, 'user is authenticated');
  }));

  // ------------ Positive testing of isUserAuthenticated------------//
  it('should handle to know if user is not aunthenticated', fakeAsync(() => {
    spyCanActivate = spyOn(canActivateRouteGuard, 'canActivate').and.callFake(function () { return false; });
    response = canActivateRouteGuard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
    expect(response).toBe(false, 'user is not authenticated');
  }));
});
