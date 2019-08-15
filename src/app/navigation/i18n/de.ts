﻿export const locale = {
    lang: 'de',
    data: {
        'NAV': {
            'APPLICATIONS': 'Saphir Cloud Box',
            'CLIENTS': 'Clients',
            'DEPARTMENTS': 'Departments',
            'USERS': 'Users',
            'ROLES': 'Roles'
        },
        'PAGES': {
            'APPS': {
                'CLIENTS': {
                    'NAME': 'Name',
                    'CREATEDATE': 'Create date',
                    'UPDATEDATE': 'Update date',
                    'ADD': 'Add client',
                    'ADDSUCCESS': 'Client added',
                    'EDIT': 'Udpate client',
                    'EDITSUCCESS': 'Client updated',
                    'REMOVEQUESTION': 'Are you sure you want to delete this client?',
                    'REMOVESUCCESS': 'Client removed',
                    'NOT_FOUNT': 'Client not found',
                    'SAME_NAME': 'Client with the same name is already exists',
                    'REMOVE_ERROR': 'Users and / or departments are attached to this client'
                },
                'DEPARTMENTS': {
                    'NAME': 'Name',
                    'CLIENT': 'Client',
                    'CREATEDATE': 'Create date',
                    'UPDATEDATE': 'Update date',
                    'ADD': 'Add department',
                    'ADDSUCCESS': 'Department added',
                    'EDIT': 'Update department',
                    'EDITSUCCESS': 'Department updated',
                    'REMOVEQUESTION': 'Are you sure you want to delete this department?',
                    'REMOVESUCCESS': 'Department removed',
                    'NOT_FOUNT': 'Department not found',
                    'SAME_NAME': 'Client with the same name is already exists',
                    'REMOVE_ERROR': 'Users are attached to this client',
                    'NOT_FOUNT_DEPENDENCY_OBJECT': 'Client not found'
                },
                'ROLES': {
                    'NAME': 'Name',
                    'ADD': 'Add role',
                    'ADDSUCCESS': 'Role added',
                    'EDIT': 'Update role',
                    'EDITSUCCESS': 'Role updated',
                    'REMOVEQUESTION': 'Are you sure you want to delete this role?',
                    'REMOVESUCCESS': 'Role removed',
                    'SAME_NAME': 'Role with the same name is already exists',
                    'ADD_ERROR': 'Error adding role. Please contact support, and we will try to fix it soon',
                    'NOT_FOUNT': 'Role added',
                    'UPDATE_ERROR': 'Error updating role. Please contact support, and we will try to fix it soon',
                    'EXIST_DEPENDENCY_ERROR': 'Users are attached to this role',
                    'REMOVE_ERROR': 'Error removing role. Please contact support, and we will try to fix it soon'
                },
                'USERS': {
                    'USERNAME': 'User name',
                    'EMAIL': 'Email',
                    'CLIENT': 'Client',
                    'DEPARTMENT': 'Department',
                    'ROLE': 'Role',
                    'CREATEDATE': 'Create date',
                    'UPDATEDATE': 'Update date',
                    'ADD': 'Add user',
                    'ADDSUCCESS': 'User added',
                    'EDIT': 'Update user',
                    'EDITSUCCESS': 'User updated',
                    'REMOVEQUESTION': 'Are you sure you want to delete this user?',
                    'REMOVESUCCESS': 'User removed',
                    'SAME_NAME': 'Role with the same email is already exists',
                    'NOT_FOUNT': 'User not found',
                    'NOT_FOUNT_DEPENDENCY_OBJECT': 'No client and / or department found',
                    'ADD_ERROR': 'Error adding user. Please contact support, and we will try to fix it soon',
                    'UPDATE_ERROR': 'Error updating user. Please contact support, and we will try to fix it soon',
                    'REMOVE_ERROR': 'Error removing user. Please contact support, and we will try to fix it soon'
                },
                'FILEMANAGER': {
                    'ADDFOLDER': 'Add folder',
                    'EDITED': 'Edited',
                    'INFO': 'Info',
                    'TYPE': 'Type',
                    'OWNER': 'Owner',
                    'MODIFIEDBY': 'Modified by',
                    'MODIFIEDDATE': 'Modified date',
                    'CREATEBY': 'Create by',
                    'CREATEDATE': 'Create date',
                    'SIZE': 'Size',
                    'NAME': 'Name',
                    'VIEWRIGHT': 'View right',
                    'FOLDERREMOVEQUESTION': 'Are you sure you want to delete this folder?',
                    'FOLDERREMOVESUCCESS': 'Folder removed',
                    'FOLDERNOT_FOUNT': 'Folder not found',
                    'FOLDERSERVER_ERROR': 'Oops! Something went wrong. Please contact support, and we will try to fix it soon',
                    'FOLDERSAME_NAME': 'Folder with the same name already exists'
                }
            },
            'AUTH': {
                'LOGINTITLE': 'LOGIN TO YOUR ACCOUNT',
                'LOGIN': 'LOGIN',
                'EMAIL': 'Email',
                'PASSWORD': 'Password',
                'DONTHAVEACCOUNT': "Don't have an account?",
                'CREATEACCOUNT': 'Create an account',
                'CREATEACCOUNTTITLE': 'REGISTER',
                'USERNAME': 'User name',
                'CLIENT': 'Client',
                'DEPARTMENT': 'Department',
                'PASSWORDCONFIRM': 'Password (Confirm)',
                'HAVEACCOUNT': 'Already have an account?',
                'TOLOGIN': 'Login',
                'LOGOUT': 'Logout',
                'OOPS': 'Oops! Something went wrong. Please contact support and we will try to fix it soon',
                'RECOVERPASSWORD': 'RECOVER YOUR PASSWORD',
                'SENDRESETLINK': 'SEND RESET LINK',
                'BACKTOLOGIN': 'Go back to login',
                'EMPTYEMAIL': 'Email is required',
                'INVALIDEMAIL': 'Please enter a valid email address',
                'EMPTYPASSWORD': 'Password is required',
                'FORGOTPASSQORDQUESTION': 'Forgot Password?',
                'CREATENEWPASSOWRD': 'Create new password',
                'CONFIRMEMAIL': 'Confirm your email address!',
                'CONFIRMEMAIL1': 'A confirmation e-mail has been sent to',
                'CONFIRMEMAIL2': 'Check your inbox and click on the "Confirm my email" link to confirm your email address.',
                'RESETPASSWORD': 'RESET PASSWORD',
                'EMPTYPASSWORDCONFIRM': 'Password confirmation is required',
                'INVALIDPASSWORDCONFIRM': 'Passwords must match',
                'EMPTYUSERNAME': 'User name is required',
                'NOT_FOUNT': 'User not found',
                'UNATHORIZED': 'Oops! Something went wrong. Please contact support and we will try to fix it soon',
                'SAME_NAME': 'User with the same email already exists'
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
            'DOWNLOAD': 'Download'
        }
    }
};
