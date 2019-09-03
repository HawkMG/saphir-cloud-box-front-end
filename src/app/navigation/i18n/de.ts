﻿export const locale = {
    lang: 'de',
    data: {
        'NAV': {
            'APPLICATIONS': 'Saphir Cloud Box',
            'CLIENTS': 'Kunden',
            'DEPARTMENTS': 'Objekte',
            'USERS': 'Benutzern',
            'ROLES': 'Rollen',
            'HELP': 'Help',
            'FAQ': 'Faq',
            'FEEDBACK': 'Kontakt',
            'USERMENU': 'User menu',
            'USERGROUPS': 'Groups'
        },
        'PAGES': {
            'APPS': {
                'CLIENTS': {
                    'NAME': 'Name',
                    'CREATEDATE': 'Erstellungsdatum',
                    'UPDATEDATE': 'Änderungsdatum',
                    'ADD': 'Kunde hinzufügen',
                    'ADDSUCCESS': 'Kunde wurde hinzugefügt',
                    'EDIT': 'Kunde ändern',
                    'EDITSUCCESS': 'Kunde wurde geändert',
                    'REMOVEQUESTION': 'Wollen Sie diese Kunde wirklich löschen?',
                    'REMOVESUCCESS': 'Kunde wurde gelöscht',
                    'NOT_FOUND': 'Die Kunde wurde nicht gefunden',
                    'SAME_OBJECT': 'Die Bezeichnung für die Kunde wird schon verwendet',
                    'EXIST_DEPENDENCY_OBJECTS': 'Die Kunde hat Benutzer oder Objekte. Löschen ist nicht möglich!'
                },
                'DEPARTMENTS': {
                    'NAME': 'Name',
                    'CLIENT': 'Kunde',
                    'CREATEDATE': 'Erstellungsdatum',
                    'UPDATEDATE': 'Änderungsdatum',
                    'ADD': 'Objekt hinzufügen',
                    'ADDSUCCESS': 'Objekt wurde hinzugefügt',
                    'EDIT': 'Objekt ändern',
                    'EDITSUCCESS': 'Objekt wurde geändert',
                    'REMOVEQUESTION': 'Wollen Sie dieses Objekt wirklich löschen?',
                    'REMOVESUCCESS': 'Objekt wurde gelöscht',
                    'NOT_FOUND': 'Dieses Objekt wurde nicht gefunden',
                    'SAME_OBJECT': 'Die Bezeichnung für das Objekt wird schon verwendet',
                    'EXIST_DEPENDENCY_OBJECTS': 'Das Objekt hat Benutzer. Löschen ist nicht möglich!',
                    'NOT_FOUND_DEPENDENCY_OBJECT': 'Dieses Objekt wurde nicht gefunden'
                },
                'ROLES': {
                    'NAME': 'Name',
                    'ADD': 'Rolle hinzufügen',
                    'ADDSUCCESS': 'Rolle wurde hinzugefügt',
                    'EDIT': 'Rolle ändern',
                    'EDITSUCCESS': 'Rolle wurde geändert',
                    'REMOVEQUESTION': 'Wollen Sie diese Rolle wirklich löschen?',
                    'REMOVESUCCESS': 'Rolle wurde gelöscht',
                    'SAME_OBJECT': 'Die Bezeichnung für die Rolle wird schon verwendet',
                    'ADD_ERROR': 'Fehler beim Hinzufügen einer Rolle. Kontaktieren Sie bitte unseren Support',
                    'NOT_FOUND': 'Rolle wurde hinzugefügt',
                    'EXIST_DEPENDENCY_OBJECTS': 'Benutzer hat schon diese Rolle',
                    'ERROR': 'Es ist ein Fehler aufgetretten. Kontaktieren Sie bitte unseren Support'
                },
                'USERS': {
                    'USERNAME': 'Benutzername',
                    'EMAIL': 'Email',
                    'CLIENT': 'Kunde',
                    'DEPARTMENT': 'Objekt',
                    'ROLE': 'Rolle',
                    'CREATEDATE': 'Erstellungsdatum',
                    'UPDATEDATE': 'Änderungsdatum',
                    'ADD': 'Benutzer hinzufügen',
                    'ADDSUCCESS': 'Benutzer wurde hinzugefügt',
                    'EDIT': 'Benutzer ändern',
                    'EDITSUCCESS': 'Benutzer wurde geändert',
                    'REMOVEQUESTION': 'Wollen Sie diesen Benutzer wirklich löschen?',
                    'REMOVESUCCESS': 'Benutzer wurde gelöscht',
                    'SAME_OBJECT': 'Die Bezeichnung für den Benutzer wird schon verwendet',
                    'NOT_FOUND': 'Benutzer wurde nicht gefunden',
                    'NOT_FOUND_DEPENDENCY_OBJECT': 'Kunde oder Objekt wurden nicht gefunden',
                    'ERROR': 'Es ist ein Fehler aufgetretten. Kontaktieren Sie bitte unseren Support'
                },
                'FILEMANAGER': {
                    'ADDFOLDER': 'Verzeichnis hinzufügen',
                    'EDITED': 'Geändert',
                    'INFO': 'Info',
                    'TYPE': 'Typ',
                    'OWNER': 'Owner',
                    'MODIFIEDBY': 'Geändert von',
                    'MODIFIEDDATE': 'Geändert am',
                    'CREATEBY': 'Erstellt von',
                    'CREATEDATE': 'Erstellt am',
                    'SIZE': 'Dateigröße',
                    'NAME': 'Name',
                    'VIEWRIGHT': 'View right',
                    'FOLDERREMOVEQUESTION': 'Wollen Sie diesen Verzeichnis wirklich löschen?',
                    'FOLDERREMOVESUCCESS': 'Verzeichnis wurde gelöscht',
                    'FOLDER_NOT_FOUND': 'Verzeichnis wurde nicht gefunden',
                    'FOLDERSERVER_ERROR': 'Fehler in der Verzeichnisverwaltung. Kontaktieren Sie bitte unseren Support',
                    'FOLDER_SAME_OBJECT': 'Ein Verzeichnis mit gleichem Namen existiert bereits',
                    'FOLDER_NO_ACCESS': "Sie haben keine Berechtigung für dieses Verzeichnis",
                    'UPDATEFOLDER': 'Verzeichnis ändern',
                    'ADDFILE': 'Datei hinzufügen',
                    'UPDATEFILE': 'Datei ändern',
                    'FILE_NOT_FOUND': 'Datei nicht gefunden',
                    'FILE_SAME_OBJECT': 'Eine Datei mit gleichem Namen existiert bereits',
                    'FILE_NOT_FOUND_DEPENDENCY_OBJECT': 'Datei nicht gefunden',
                    'FILE': 'Datei',
                    'FILE_NO_ACCESS': "You don't have permissions to this file",
                    'FILEREMOVEQUESTION': 'Wollen Sie diese Datei wirklich löschen?',
                    'FILEREMOVESUCCESS': 'Datei wurde gelöscht',
                    'REMOVECURRENTFOLDER': 'Ausgewählte verzeichnis löschen',
                    'ADDPERMISSION': 'Berechtigung erteilen',
                    'PERMISSIONADDSUCCESS': 'Berechtigung wurde erteilt',
                    'PERMISSIONADD_ERROR': "Sie könne nicht die Berechtigung erteilen",
                    'PERMISSION_NOT_FOUND_USER': 'Benutzer mit dieser Email-Adresse ist nicht bekannt',
                    'PERMISSIONSERVER_ERROR': 'Fehler in der Berechtigungsverwaltung. Kontaktieren Sie bitte unseren Support',
                    'READONLYPERMISSION': 'nur lesen',
                    'READANDWRITEPERMISSION': 'lesen und schreiben',
                    'UPDATECURRENTFOLDER': 'Verzeichnis wurde geändert',
                    'PERMISSION_SAME_OBJECT': 'Benutzer besitzt schon die Berechtigung für diese Datei',
                    'EDITPERMISSION': 'Berechtigung ändern',
                    'PERMISSIONEDITSUCCESS': 'Berechtigung wurde geändert',
                    'PERMISSIONREMOVEQUESTION': 'Wollen Sie diese Berechtigung wirklich entfernen?',
                    'PERMISSIONREMOVESUCCESS' : 'Berechtigung wurde entfernt',
                    'PERMISSION_NOT_FOUND': "Berechtigung nciht gefunden",
                    'PERMISSION_NO_ACCESS': "Sie dürfen nicht diese Berechtigung ändern",
                    'PICK': 'Auswahl',
                    'ALLCLIENTS': 'Alle',
                    'ALLUSERS': 'Alle Benutzern',
                    'ALLGROUPS': 'All groups'
                },
                'FEEDBACK': {
                    'USEREMAIL': 'Ihre E-Mail',
                    'USERNAME': 'Ihre Anmeldungsname',
                    'THEME': 'Thema',
                    'MESSAGE': 'Nachricht',
                    'SEND': 'Ok',
                    'SUCCESS': 'Nachricht wurde versendet',
                    'NOT_FOUNT': 'Benutzer mit diesem E-Mail wurde nicht gefunden',
                    'SERVER_ERROR': 'Fehler beim Emailversand. Kontaktieren Sie bitte unseren Support'
                },
                'USERGROUPS': {
                    'NAME': 'Name',
                    'USERS': 'Users',
                    'ADD': 'Add group',
                    'ADDSUCCESS': 'Group added',
                    'SAME_OBJECT': 'Group with the same name is already exists',
                    'EDIT': 'Update group',
                    'UPDATESUCCESS': 'Group updated',
                    'NOT_FOUND': 'Group not found',
                    'REMOVEQUESTION': 'Are you sure you want to remove this group?',
                    'REMOVESUCCESS': 'Group removed'
                }
            },
            'AUTH': {
                'LOGINTITLE': 'Melden Sie sich an',
                'LOGIN': 'Anmeldung',
                'EMAIL': 'Email',
                'PASSWORD': 'Passwort',
                'DONTHAVEACCOUNT': "Haben Sie kein Konto?",
                'CREATEACCOUNT': 'Erstellen sie ein Konto',
                'CREATEACCOUNTTITLE': 'Registrieren',
                'USERNAME': 'Benutzername',
                'CLIENT': 'Kunde',
                'DEPARTMENT': 'Objekt',
                'PASSWORDCONFIRM': 'Passwort (Wiederholung)',
                'HAVEACCOUNT': 'Haben sie schon einen Account? ',
                'TOLOGIN': 'Anmeldung',
                'LOGOUT': 'Abmeldung',
                'OOPS': 'Es ist ein Fehler aufgetretten. Kontaktieren Sie bitte uns per Email',
                'RECOVERPASSWORD': 'Wiederherstellung eines Passwortes',
                'SENDRESETLINK': 'Link zum Zurücksetzen des Passwortes',
                'BACKTOLOGIN': 'Zurück zur Anmeldung',
                'EMPTYEMAIL': 'E-Mail ist erforderlich',
                'INVALIDEMAIL': 'Bitte, geben Sie richtige E-Mail Adresse an',
                'EMPTYPASSWORD': 'Passwort ist erforderlich',
                'FORGOTPASSQORDQUESTION': 'Passwort vergessen?',
                'CREATENEWPASSOWRD': 'Erstellung neues Passwortes',
                'CONFIRMEMAIL': 'Bestätigen Sie Bitte Ihre E-mail Adresse!',
                'CONFIRMEMAIL1': 'Bestätigung wurde versendet. Die Zieladresse:',
                'CONFIRMEMAIL2': 'Überprüfen Sie bitte E-Mail in Ihrem Postfach und bestätgien bitte die E-Mail Adresse.',
                'RESETPASSWORD': 'Zurücksetzten des Passwortes',
                'EMPTYPASSWORDCONFIRM': 'Bestätigung des Passwortes ist erforderlich',
                'INVALIDPASSWORDCONFIRM': 'Ungültiges Passwort',
                'EMPTYUSERNAME': 'Benutzername ist erforderlich',
                'NOT_FOUND_USER': 'Benutzer nicht gefunden',
                'ERROR': 'Es ist ein Fehler aufgetretten. Anmeldung ist nicht möglich',
                'SAME_USER': 'Benutzer mit dieser E-Mail Adresse ist vorhanden',
                'NOT_FOUND_ROLE': 'Rolle wurde nicht gefunden'
            }
        },
        'COMMONACTIONS': {
            'EDIT': 'Ändern',
            'REMOVE': 'Entfernen',
            'ADD': 'Hinzufügen',
            'SAVE': 'Speichern',
            'YES': 'Ja',
            'NO': 'Nein',
            'BOTH': 'Alle',
            'CONFIRM': 'Bestätigung',
            'CANCEL': 'Abbruch',
            'ALL': 'Аlles',
            'INFO': 'Info',
            'DOWNLOAD': 'Download',
            'OOPS': 'Es ist ein Fehler aufgetretten. Anmeldung ist nicht möglich'
        }
    }
};