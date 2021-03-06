///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "standardUnit": "Τυπική μονάδα",
    "metricUnit": "Μετρική μονάδα"
  },
  "analysisTab": {
    "analysisTabLabel": "Ανάλυση",
    "selectAnalysisLayerLabel": "Επιλογή θεματικών επιπέδων ανάλυσης",
    "addLayerLabel": "Προσθήκη θεματικών επιπέδων",
    "noValidLayersForAnalysis": "Δεν βρέθηκαν έγκυρα θεματικά επίπεδα στον επιλεγμένο web χάρτη.",
    "noValidFieldsForAnalysis": "Δεν βρέθηκαν έγκυρα θεματικά επίπεδα στον επιλεγμένο web χάρτη. Καταργήστε το επιλεγμένο θεματικό επίπεδο.",
    "addLayersHintText": "Υπόδειξη: Επιλέξτε θεματικά επίπεδα και πεδία για ανάλυση και εμφάνιση στην αναφορά",
    "addLayerNameTitle": "Όνομα θεματικού επιπέδου",
    "addFieldsLabel": "Προσθήκη πεδίου",
    "addFieldsPopupTitle": "Επιλογή πεδίων",
    "addFieldsNameTitle": "Ονόματα πεδίων",
    "aoiToolsLegendLabel": "Εργαλεία AOI",
    "aoiToolsDescriptionLabel": "Ενεργοποίηση εργαλείων για δημιουργία περιοχών ενδιαφέροντος και καθορισμό των ετικετών τους",
    "placenameLabel": "Όνομα τόπου",
    "drawToolsLabel": "Εργαλεία σχεδίασης",
    "uploadShapeFileLabel": "Αποστολή Shapefile",
    "coordinatesLabel": "Συντεταγμένες",
    "coordinatesDrpDwnHintText": "Υπόδειξη: Επιλέξτε μονάδα για την εμφάνιση των διατομών που έχουν εισαχθεί",
    "coordinatesBearingDrpDwnHintText": "Υπόδειξη: Επιλέξτε αντιστοιχία για την εμφάνιση των διατομών που έχουν εισαχθεί",
    "allowShapefilesUploadLabel": "Δυνατότητα αποστολής shapefile στην ανάλυση",
    "areaUnitsLabel": "Εμφάνιση περιοχών/μήκους σε",
    "allowShapefilesUploadLabelHintText": "Υπόδειξη: Εμφάνιση επιλογής 'Αποστολή shapefile στην Ανάλυση' στην καρτέλα Αναφορά",
    "maxFeatureForAnalysisLabel": "Μέγιστος αριθμός στοιχείων για ανάλυση",
    "maxFeatureForAnalysisHintText": "Υπόδειξη: Ορίστε το μέγιστο αριθμό στοιχείων που θα αναλυθούν",
    "searchToleranceLabelText": "Ανοχή αναζήτησης (πόδια)",
    "searchToleranceHint": "Υπόδειξη: Η ανοχή αναζήτησης χρησιμοποιείται μόνο κατά την ανάλυση εισόδων σημείων και γραμμών"
  },
  "downloadTab": {
    "downloadLegend": "Ρυθμίσεις λήψης",
    "reportLegend": "Ρυθμίσεις αναφοράς",
    "downloadTabLabel": "Λήψη",
    "syncEnableOptionLabel": "Feature Layer",
    "syncEnableOptionHint": "Υπόδειξη: Χρησιμοποιείται για τη λήψη πληροφοριών στοιχείου για τα στοιχεία που διατέμνουν την περιοχή ενδιαφέροντος στις υποδεικνυόμενες μορφές.",
    "syncEnableOptionNote": "Σημείωση: Οι υπηρεσίες στοιχείων με δυνατότητα συγχρονισμού απαιτούνται για την επιλογή File Geodatabase.",
    "extractDataTaskOptionLabel": "Geoprocessing service εργασίας εξαγωγής δεδομένων",
    "extractDataTaskOptionHint": "Υπόδειξη: Χρησιμοποιήστε μια δημοσιευμένη geoprocessing service εργασίας εξαγωγής δεδομένων για τη λήψη στοιχείων που διατέμνουν την περιοχή ενδιαφέροντος σε μορφές File Geodatabase ή Shapefile.",
    "cannotDownloadOptionLabel": "Απενεργοποίηση λήψης",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Όνομα θεματικού επιπέδου",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "File Geodatabase",
      "allowDownloadLabel": "Δυνατότητα λήψης"
    },
    "setButtonLabel": "Ορισμός",
    "GPTaskLabel": "Καθορισμός url για geoprocessing service",
    "printGPServiceLabel": "Print Service URL",
    "setGPTaskTitle": "Καθορισμός απαιτούμενου Geoprocessing Service URL",
    "logoLabel": "Λογότυπο",
    "logoChooserHint": "Υπόδειξη: Κάντε κλικ στο εικονίδιο της εικόνας για αλλαγή της εικόνας",
    "footnoteLabel": "Υποσημείωση",
    "columnTitleColorPickerLabel": "Χρώμα για τίτλους στηλών",
    "reportTitleLabel": "Τίτλος αναφοράς",
    "errorMessages": {
      "invalidGPTaskURL": "Μη έγκυρο geoprocessing service. Επιλέξτε geoprocessing service που περιέχει την εργασία εξαγωγής δεδομένων.",
      "noExtractDataTaskURL": "Επιλέξτε οποιοδήποτε geoprocessing service περιέχει την εργασία εξαγωγής δεδομένων."
    }
  },
  "generalTab": {
    "generalTabLabel": "Γενικά",
    "tabLabelsLegend": "Ετικέτες πλαισίου",
    "tabLabelsHint": "Υπόδειξη: Καθορίστε ετικέτες",
    "AOITabLabel": "Πλαίσιο περιοχής ενδιαφέροντος",
    "ReportTabLabel": "Πλαίσιο αναφοράς",
    "bufferSettingsLegend": "Ρυθμίσεις ζώνης",
    "defaultBufferDistanceLabel": "Προεπιλεγμένη απόσταση ζώνης",
    "defaultBufferUnitsLabel": "Μονάδες ζώνης",
    "generalBufferSymbologyHint": "Υπόδειξη: Ορίστε τη συμβολολογία που θα χρησιμοποιηθεί για την εμφάνιση ζωνών γύρω από τις καθορισμένες περιοχές ενδιαφέροντος",
    "aoiGraphicsSymbologyLegend": "Συμβολολογία AOI Graphics",
    "aoiGraphicsSymbologyHint": "Υπόδειξη: Ορίστε τη συμβολολογία που θα χρησιμοποιηθεί κατά τον προσδιορισμό περιοχών ενδιαφέροντος σημείου, γραμμής και πολυγώνου",
    "pointSymbologyLabel": "Σημείο",
    "previewLabel": "Προεπισκόπηση",
    "lineSymbologyLabel": "Γραμμή",
    "polygonSymbologyLabel": "Πολύγωνο",
    "aoiBufferSymbologyLabel": "Συμβολολογία ζώνης",
    "pointSymbolChooserPopupTitle": "Σύμβολο διεύθυνσης ή τοποθεσίας",
    "polygonSymbolChooserPopupTitle": "Επιλογή συμβόλου για επισήμανση πολυγώνου",
    "lineSymbolChooserPopupTitle": "Επιλογή συμβόλου για επισήμανση γραμμής",
    "aoiSymbolChooserPopupTitle": "Ορισμός συμβόλου ζώνης"
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Ρυθμίσεις αναζήτησης πηγής",
    "searchSourceSettingTitle": "Ρυθμίσεις αναζήτησης πηγής",
    "searchSourceSettingTitleHintText": "Προσθέστε και διαμορφώστε geocode service ή feature layer ως πηγές αναζήτησης. Αυτές οι καθορισμένες πηγές προσδιορίζουν τι μπορείτε να αναζητήσετε στο πλαίσιο αναζήτησης",
    "addSearchSourceLabel": "Προσθήκη πηγής αναζήτησης",
    "featureLayerLabel": "Feature Layer",
    "geocoderLabel": "Γεωκωδικοποίηση",
    "generalSettingLabel": "Γενική ρύθμιση",
    "allPlaceholderLabel": "Κείμενο υπόδειξης για αναζήτηση όλων:",
    "allPlaceholderHintText": "Υπόδειξη: Εισαγάγετε κείμενο που θα εμφανίζεται ως θέση περιγραφής κατά την αναζήτηση σε όλα τα επίπεδα και το εργαλείο γεωκωδικοποίησης",
    "generalSettingCheckboxLabel": "Εμφάνιση αναδυόμενου παράθυρου για το στοιχείο ή την τοποθεσία που βρέθηκε",
    "countryCode": "Κωδικοί χώρας ή περιοχής",
    "countryCodeEg": "π.χ. ",
    "countryCodeHint": "Εάν αφήσετε κενή αυτήν την τιμή, θα γίνει αναζήτηση σε όλες τις χώρες και περιοχές",
    "questionMark": ";",
    "searchInCurrentMapExtent": "Αναζήτηση μόνο στην τρέχουσα έκταση χάρτη",
    "zoomScale": "Εστίαση κλίμακας",
    "locatorUrl": "URL Εργαλείου Γεωκωδικοποίησης",
    "locatorName": "Όνομα εργαλείου γεωκωδικοποίησης",
    "locatorExample": "Παράδειγμα",
    "locatorWarning": "Αυτή η έκδοση του geocoding service δεν υποστηρίζεται. Το widget υποστηρίζει geocoding service έκδοσης 10.0 και νεότερες.",
    "locatorTips": "Δεν διατίθενται προτάσεις επειδή το geocoding service δεν υποστηρίζει δυνατότητα προτάσεων.",
    "layerSource": "Πηγή θεματικού επιπέδου",
    "setLayerSource": "Ορισμός πηγής θεματικού επιπέδου",
    "setGeocoderURL": "Ορισμός URL Εργαλείου γεωκωδικοποίησης",
    "searchLayerTips": "Δεν διατίθενται προτάσεις επειδή το feature service δεν υποστηρίζει δυνατότητα σελιδοποίησης.",
    "placeholder": "Κείμενο υπόδειξης",
    "searchFields": "Πεδία αναζήτησης",
    "displayField": "Πεδίο εμφάνισης",
    "exactMatch": "Ακριβής αντιστοιχία",
    "maxSuggestions": "Μέγιστος αριθμός προτάσεων",
    "maxResults": "Μέγιστος αριθμός αποτελέσματα",
    "enableLocalSearch": "Ενεργοποίηση τοπικής αναζήτησης",
    "minScale": "Ελάχιστη κλίμακα",
    "minScaleHint": "Όταν η κλίμακα του χάρτη είναι μεγαλύτερη από αυτήν την κλίμακα, εφαρμόζεται τοπική αναζήτηση",
    "radius": "Ακτίνα",
    "radiusHint": "Προσδιορίζει την ακτίνα μιας περιοχής γύρω από το κέντρο του τρέχοντα χάρτη που χρησιμοποιείται για να ενισχύσει την κατάταξη των υποψηφίων γεωκωδικοποίησης, ώστε να εμφανίζονται πρώτα οι υποψήφιοι που βρίσκονται πιο κοντά στην τοποθεσία",
    "setSearchFields": "Ορισμός πεδίων αναζήτησης",
    "set": "Ορισμός",
    "invalidUrlTip": "Η URL διεύθυνση ${URL} είναι μη έγκυρη ή χωρίς δυνατότητα πρόσβασης.",
    "invalidSearchSources": "Μη έγκυρες ρυθμίσεις πηγής αναζήτησης"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Συμπληρώστε τα απαιτούμενα πεδία",
    "bufferDistanceFieldsErrorMsg": "Εισαγάγετε έγκυρες τιμές",
    "invalidSearchToleranceErrorMsg": "Εισαγάγετε έγκυρη τιμή για την ανοχή αναζήτησης",
    "atLeastOneCheckboxCheckedErrorMsg": "Μη έγκυρη διαμόρφωση",
    "noLayerAvailableErrorMsg": "Δεν υπάρχουν διαθέσιμα θεματικά επίπεδα",
    "layerNotSupportedErrorMsg": "Δεν υποστηρίζεται ",
    "noFieldSelected": "Χρησιμοποιήστε την ενέργεια επεξεργασίας για την επιλογή πεδίων προς ανάλυση.",
    "duplicateFieldsLabels": "Διπλότυπη ετικέτα \"${labelText}\" προστέθηκε για: \"${itemNames}\"",
    "noLayerSelected": "Επιλέξτε τουλάχιστον ένα θεματικό επίπεδο για ανάλυση",
    "errorInSelectingLayer": "Δεν είναι δυνατή η ολοκλήρωση της λειτουργίας επιλογής θεματικού επιπέδου. Προσπαθήστε ξανά.",
    "errorInMaxFeatureCount": "Εισαγάγετε έγκυρο μέγιστο πλήθος στοιχείων για ανάλυση."
  }
});