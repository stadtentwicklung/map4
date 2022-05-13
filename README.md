# :world_map: Stadtteilrundgang
:white_check_mark: Georeferenzierte Karte erstellen und als Web-Map publizieren mit Standortermittlung.

## :computer: Link [https://stadtentwicklung.github.io/map4/)

### :camera_flash: Screenshot:
![Screenshot der GitHub-Pages App](https://raw.githubusercontent.com/stadtentwicklung/map4/master/img/screenshot.PNG)

## :rocket: Kurzbeschreibung Workflow

In QGIS Orthofotodienst (WMS) des Landes Brandenburg eingefügt. In QGIS ein A3 Querformat Layout erstellt. Das Orthofoto in gewünschter Ausdehnung hinzugefügt. Das Layout als JPG mit externer World-Datei JGW gespeichert (300 dpi). Das JPG mit dem Orthofoto in Illustrator illustriert (inkl. URL zu Github-Pages plus QR-Code-Bild) und wieder exportiert mit gleichen Einstellungen (identischer Name, JPG und 300 dpi). Das Original wurde somit überschrieben.

![Plan aus Illustrator](https://raw.githubusercontent.com/stadtentwicklung/map4/master/img/rundwegkarte.jpg)

In QGIS das illustrierte JPG importiert, welches dank World-Datei wieder georeferenziert wird. Über die Funktion **gdal2tiles** eine Leaflet.js-Map-App ausgegeben. In QGIS einen temorären Liniengeometrie-Layer angelegt und die Strecke für den Stadtteilrundgang erstellt. Den Layer als GPX gespeichert. Im Code der Leaflet-App den Pfad zum GPX eingefügt plus Details für mehr "Usebility": Ladeanzeige, Standortermittlung, Start- und Endpunktmarker, Titel, Layerbezeichnung, Copyrights usw. Das Projekt (inkl. Ordnerstruktur) dann auf Github publiziert.   

### :coffee::coffee::coffee: by [Stefan](https://github.com/stefanstoehr)
