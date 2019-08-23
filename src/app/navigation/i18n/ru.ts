export const locale = {
    lang: 'ru',
    data: {
        'NAV': {
            'APPLICATIONS': 'Saphir Cloud Box',
            'CLIENTS': 'Клиенты',
            'DEPARTMENTS': 'Отделы',
            'USERS': 'Пользователи',
            'ROLES': 'Роли',
            'FILEMANAGER': 'Проводник',
            'HELP': 'Помощь',
            'FAQ': 'Faq',
            'FEEDBACK': 'Обратная связь'
        },
        'PAGES': {
            'APPS': {
                'CLIENTS': {
                    'NAME': 'Название',
                    'CREATEDATE': 'Дата создания',
                    'UPDATEDATE': 'Дата изменения',
                    'ADD': 'Добавить клиента',
                    'ADDSUCCESS': 'Клиент добавлен',
                    'EDIT': 'Изменить клиента',
                    'EDITSUCCESS': 'Клиент изменен',
                    'REMOVEQUESTION': 'Вы уверены, что хотите удалить данного клиента?',
                    'REMOVESUCCESS': 'Клиент удален',
                    'NOT_FOUNT': 'Клиент не найден',
                    'SAME_NAME': 'Клиент с таким же названием уже есть',
                    'REMOVE_ERROR': 'К данному клиенту привязаны пользователи и/или департаменты'
                },
                'DEPARTMENTS': {
                    'NAME': 'Название',
                    'CLIENT': 'Клиент',
                    'CREATEDATE': 'Дата создания',
                    'UPDATEDATE': 'Дата изменения',
                    'ADD': 'Добавить отдел',
                    'ADDSUCCESS': 'Отдел добавлен',
                    'EDIT': 'Изменить отдел',
                    'EDITSUCCESS': 'Отдел изменен',
                    'REMOVEQUESTION': 'Вы уверены, что хотите удалить данный отдел?',
                    'REMOVESUCCESS': 'Отдел удален',
                    'NOT_FOUNT': 'Отдел не найден',
                    'SAME_NAME': 'Отдел с таким же названием уже есть',
                    'REMOVE_ERROR': 'К данному отделу привязаны пользователи',
                    'NOT_FOUNT_DEPENDENCY_OBJECT': 'Не найден клиент'
                },
                'ROLES': {
                    'NAME': 'Название',
                    'ADD': 'Добавить роль',
                    'ADDSUCCESS': 'Роль добавлена',
                    'EDIT': 'Изменить роль',
                    'EDITSUCCESS': 'Роль изменена',
                    'REMOVEQUESTION': 'Вы уверены, что хотите удалить данную роль?',
                    'REMOVESUCCESS': 'Роль удалена',
                    'SAME_NAME': 'Роль с таким же названием уже есть',
                    'ADD_ERROR': 'Ошибка добавления роли. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время',
                    'NOT_FOUNT': 'Роль не найдена',
                    'UPDATE_ERROR': 'Ошибка изменения роли. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время',
                    'EXIST_DEPENDENCY_ERROR': 'К данной роли привязаны пользователи',
                    'REMOVE_ERROR': 'Ошибка удаления роли. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время'
                },
                'USERS': {
                    'USERNAME': 'Имя',
                    'EMAIL': 'Почта',
                    'CLIENT': 'Клиент',
                    'DEPARTMENT': 'Отдел',
                    'ROLE': 'Роль',
                    'CREATEDATE': 'Дата создания',
                    'UPDATEDATE': 'Дата изменения',
                    'ADD': 'Добавить пользователя',
                    'ADDSUCCESS': 'Пользователь добавлен',
                    'EDIT': 'Изменить пользователя',
                    'EDITSUCCESS': 'Пользователь изменен',
                    'REMOVEQUESTION': 'Вы уверены, что хотите удалить выбранного пользователя?',
                    'REMOVESUCCESS': 'Пользователь удален',
                    'SAME_NAME': 'Пользователь с таким именем уже существует',
                    'NOT_FOUNT': 'Выбранный пользователь не найден',
                    'NOT_FOUNT_DEPENDENCY_OBJECT': 'Не найдены клиент и/или отдел',
                    'ADD_ERROR': 'Ошибка добавления пользователя. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время',
                    'UPDATE_ERROR': 'Ошибка изменения пользователя. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время',
                    'REMOVE_ERROR': 'Ошибка удаления пользователя. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время'
                },
                'FILEMANAGER': {
                    'ADDFOLDER': 'Добавить папку',
                    'EDITED': 'Редактор',
                    'INFO': 'Информация',
                    'TYPE': 'Тип',
                    'OWNER': 'Владелец',
                    'MODIFIEDBY': 'Изменен',
                    'MODIFIEDDATE': 'Дата изменения',
                    'CREATEBY': 'Создан',
                    'CREATEDATE': 'Дата создания',
                    'SIZE': 'Размер',
                    'NAME': 'Название',
                    'VIEWRIGHT': 'Право просмотра',
                    'FOLDERREMOVEQUESTION': 'Вы уверены, что хотите удалить данную папку?',
                    'FOLDERREMOVESUCCESS': 'Папка успешно удалена',
                    'FOLDERNOT_FOUNT': 'Папка не найдена',
                    'FOLDERSERVER_ERROR': 'Упс! Что-то пошло не так. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время',
                    'FOLDERSAME_NAME': 'Папка с таким же названием уже есть',
                    'UPDATEFOLDER': 'Изменить папку',
                    'ADDFILE': 'Добавить файл',
                    'UPDATEFILE': 'Изменить файл',
                    'FILENOT_FOUNT': 'Файл не найден',
                    'FILESAME_NAME': 'Файл с таким же названием уже есть',
                    'FILESERVER_ERROR': 'Упс! Что-то пошло не так. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время',
                    'FILE': 'Файл',
                    'FILEREMOVEQUESTION': 'Вы уверены, что хотите удалить данную папку?',
                    'FILEREMOVESUCCESS': 'Папка успешно удалена',
                    'REMOVECURRENTFOLDER': 'Удалить текущую папку',
                    'UPDATECURRENTFOLDER': 'Изменить текущую папку'
                },
                'FEEDBACK': {
                    'USEREMAIL': 'Ваша почта',
                    'USERNAME': 'Ваше имя',
                    'THEME': 'Тема',
                    'MESSAGE': 'Сообщение',
                    'SEND': 'Отправить',
                    'SUCCESS': 'Сообщение отправлено успешно',
                    'NOT_FOUNT': 'Пользователь с данной почтой не найден',
                    'SERVER_ERROR': 'Упс! Что-то пошло не так. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время'
                }
            },
            'AUTH': {
                'LOGINTITLE': 'ВХОД В ТВОЙ АККАУНТ',
                'LOGIN': 'ВХОД',
                'EMAIL': 'Email',
                'PASSWORD': 'Пароль',
                'DONTHAVEACCOUNT': 'У Вас нет аккаунта?',
                'CREATEACCOUNT': 'Создайте аккаунт',
                'CREATEACCOUNTTITLE': 'РЕГИСТРАЦИЯ',
                'USERNAME': 'Имя',
                'CLIENT': 'Клиент',
                'DEPARTMENT': 'Отдел',
                'PASSWORDCONFIRM': 'Подтверждение пароля',
                'HAVEACCOUNT': 'У Вас уже есть аккаунт?',
                'TOLOGIN': 'Войдите',
                'LOGOUT': 'Выход',
                'OOPS': 'Упс! Что-то пошло не так. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время',
                'RECOVERPASSWORD': 'ВОССТАНОВИТЕ СВОЙ ПАРОЛЬ',
                'SENDRESETLINK': 'ОТПРАВИТЬ ПИСЬМО',
                'BACKTOLOGIN': 'Вернуться к входу',
                'EMPTYEMAIL': 'Email обязателен',
                'INVALIDEMAIL': 'Email некорректен',
                'EMPTYPASSWORD': 'Пароль обязателен',
                'FORGOTPASSQORDQUESTION': 'Забыли пароль?',
                'CREATENEWPASSOWRD': 'Создать новый пароль',
                'CONFIRMEMAIL': 'Ваш Email подтвержден!',
                'CONFIRMEMAIL1': 'Письмо с подтверждением было отправлено на адрес',
                'CONFIRMEMAIL2': 'Проверьте свой почтовый ящик и нажмите на ссылку «Подтвердить мой адрес электронной почты», чтобы подтвердить свой адрес электронной почты.',
                'RESETPASSWORD': 'СБРОС ПАРОЛЯ',
                'EMPTYPASSWORDCONFIRM': 'Подтверждение пароля обязательно',
                'INVALIDPASSWORDCONFIRM': 'Пароли должны совпадать',
                'EMPTYUSERNAME': 'Имя обязательно',
                'NOT_FOUNT': 'Не найден пользователь',
                'UNATHORIZED': 'Упс! Что-то пошло не так. Пожалуйста, свяжитесь со службой поддержки, и мы постараемся исправить это в ближайшее время',
                'SAME_NAME': 'Пользователь с такой же почтой уже существует',
                'REMOVECURRENTFOLDER': 'Удалить текущую папку'
            }
        },
        'COMMONACTIONS': {
            'EDIT': 'Изменить',
            'REMOVE': 'Удалить',
            'ADD': 'Добавить',
            'SAVE': 'Сохранить',
            'YES': 'Да',
            'NO': 'Нет',
            'BOTH': 'Все',
            'CONFIRM': 'Подтверждение',
            'CANCEL': 'Отмена',
            'ALL': 'Все',
            'INFO': 'Информация',
            'DOWNLOAD': 'Скачать'
        }
    }
};
