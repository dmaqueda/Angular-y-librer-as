import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "angular19-firestore19-diego", appId: "1:12588663014:web:e21849c368fb710062bb27", storageBucket: "angular19-firestore19-diego.firebasestorage.app", apiKey: "AIzaSyDCpghUze2_Xvlnlk8h--DJs7WTNisuz9Q", authDomain: "angular19-firestore19-diego.firebaseapp.com", messagingSenderId: "12588663014" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
