# Lastenheft

## Einführung 
Ziel des Projekts ist die Neuentwicklung einer ToDo-Listen-Applikation für mobile Endgeräte (Smartphones).

## Ausgangssituation
Wettbewerber auf dem Markt bieten nicht alle Funktionen, die bei Anwendern gefragt sind. Insbesondere bietet der Hauptkonkurrent “6 Wunderkinder GmbH“ mit seinem Produkt Wunderlist keine sinnvolle Wiederholungsfunktion für Erinnerungen.

Auf strategischer Seite gilt es, sich mit Erweiterungen und Verbesserungen der neuen Applikation einen Platz auf dem Markt zu erringen und somit Umsatz zu generieren.

Um das Projekt erfolgreich umzusetzen bedarf es an externe Software Entwickler. Hierzu wurden die Fachinformatiker Matthias Mann, Paul Seibel und Nico Heupt via Dienstleistungsvertrag in Auftrag genommen.

## Zielsetzung 
Terminiert ist das Projekt bis zu __17.06.2019__.

Dann soll eine lauffähige Applikation innerhalb einer Präsentation vorgestellt werden. Diese App soll vorerst für das Android Betriebssystem konzipiert und entwickelt sein.

### Features
Folgende Features müssen zu o.g. Termin lauffähig und getestet sein:
- Es lassen sich beliebig viele ToDo-Items in eine Liste erfassen
  - Items können folgende Daten enthalten:
    - Erledigt / Nicht Erledigt (Abhaken)
    - Beschreibung
    - Ablaufdatum
    - Priorität
    - Projekt
      - Container von Items - 1:n
    - Wiederholungsfrequenz
    - Wiederholung bis
    - Link/Notiz
      - URLs werden erkannt und als "klickbare" Links auf den Smartphone-eigenen Browser dargestellt
    - Abhängigkeit
      - Aufzählung anderer Items, die zuvor erledigt werden müssen
- Ansicht: Auflistung der Items
  - Sortierungen
    - nach Fälligkeit (in den nächsten 7 Tagen)
    - nach Projekt
    - Wiederholung (ja/nein)
- Ansicht: Item Details
  - Daten des Items anzeigen und bearbeiten
- Ansicht: Übersicht alle Projekte
- Erinnerungen
  - Push-Notifications (alternativ Widget)
  - werden automatisch wiederholt
- Export/-Import der Daten
- Erstellung und Löschung von Projekten

Allgemeine Anforderungen:
- klare Benutzerführung
  - gute UX soll durch intuitive UI gewährleistet sein
  - Applikation soll für durchschnittlich technisch affine Menschen geeignet sein
- Einzige Voraussetzung ist ein Smartphone, welches auf den AppStore/Google Play Store zugreifen kann
- App benötigt keine Internetverbindung (soll so entwickelt werden, dass eine mögliche Erweiterung dahingehend möglich ist)
- Erweiterbarkeit um eine zukünftige Browser-Version

### Plattform
Zugrundeliegendes Framework ist react native 0.59 (MIT License)
Die unterstützte Zielplattform ist Android 8.0.0
Die App ist mindestens lauffähig, solange diese Version offiziell von Google unterstützt wird.
Erweiterungen und Support nach Ende des Projekt sind nicht Teil dieser Vereinbarung.