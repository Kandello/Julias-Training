/* Konfiguration des Firebase-Projekts für den Geräte-Sync.
 *
 * NOCH NICHT AUSGEFÜLLT — eigenes, von "MinMax Workout" komplett getrenntes
 * Firebase-Projekt anlegen (console.firebase.google.com), dann unten die
 * Werte aus Projekteinstellungen → „Meine Apps“ → „Konfiguration“ eintragen.
 * Bis dahin läuft die App normal, nur ohne Geräte-Sync (rein lokal).
 *
 * Alternativ lässt sich die Konfiguration direkt in der App einfügen
 * (Sync-Button oben rechts) — dann gilt sie nur auf dem jeweiligen Gerät.
 *
 * Diese Werte sind keine Geheimnisse: Ein Firebase-Web-apiKey identifiziert
 * das Projekt, er berechtigt zu nichts. Der Schutz der Daten kommt aus den
 * Firestore-Regeln (firestore.rules) und der Liste der autorisierten Domains.
 */
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
