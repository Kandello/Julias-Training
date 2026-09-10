/* Konfiguration des Firebase-Projekts für den Geräte-Sync.
 *
 * Firebase Console → Einstellungen → Projekteinstellungen → „Meine Apps“ →
 * bei der Web-App unter „SDK-Einrichtung und -Konfiguration“ auf
 * „Konfiguration“ umschalten. Das dort gezeigte Objekt steht hier.
 *
 * Alternativ lässt sich die Konfiguration direkt in der App einfügen
 * (Sync-Button oben rechts) — dann gilt sie nur auf dem jeweiligen Gerät.
 *
 * Diese Werte sind keine Geheimnisse: Ein Firebase-Web-apiKey identifiziert
 * das Projekt, er berechtigt zu nichts. Der Schutz der Daten kommt aus den
 * Firestore-Regeln (firestore.rules) und der Liste der autorisierten Domains.
 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAr•••••••••••••••••••••••••••••••",
  authDomain: "julias-trainingsplan.firebaseapp.com",
  projectId: "julias-trainingsplan",
  storageBucket: "julias-trainingsplan.firebasestorage.app",
  messagingSenderId: "622992001179",
  appId: "1:622992001179:web:2846c2455823eda34fde3e"
};