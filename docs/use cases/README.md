# Модель прецендентів

## Рис.1 - Зaгальна схема

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Респондент" as Respondent #A9DCDF
    actor "Менеджер опитування" as Manager #ADD1B2
    actor "Адміністратор" as Admin #B4A7E5
    
    usecase "<b>CompletingSurveys</b>\nПроходити опитуваня" as CompletingSurveys #A9DCDF
    usecase "<b>ManageAccountInformation</b>\nВзаємодія зі своїм \n обліковим записом" as ManageAccountInformation #ADD1B2
    usecase "<b>ManageSurveys</b>\nКерування створеними опитуваннями" as ManageSurveys #ADD1B2
    usecase "<b>ManageRequests</b>\nКерувати запитами \n на створення анкет \n для менеджерів опитувань" as ManageRequest #B4A7E5
    usecase "<b>InteractionWithManagersSurveys</b>\nВзаємодіяти з анкетами \n менеджерів опитувань" as InteractionWithManagersSurveys #B4A7E5
    
    CompletingSurveys <-r- Respondent
    
    Manager --> ManageAccountInformation
    Manager --> ManageSurveys
    Admin -r-> ManageRequest
    Admin -u-> InteractionWithManagersSurveys
    Admin -l-> Manager
    Manager -l-> Respondent
    
@enduml
</center>

## Рис.2 - Схема респондента

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Респондент" as Respondent #A9DCDF
    
    usecase "<b>CompletingSurveys</b>\nПроходження опитувань" as CompletingSurveys #A9DCDF
    usecase "<b>JoinTheSurveys</b>\nДолучатись до опитувань \n за посиланням" as JoinTheSurveys
    usecase "<b>TakeTheSurvey</b>\nПроходити опитування" as TakeTheSurvey
    
    CompletingSurveys <-l- Respondent
    
    
    CompletingSurveys ..> JoinTheSurveys: extends
    CompletingSurveys ..> TakeTheSurvey: extends

@enduml
</center>

## Рис.3 - Схема менеджера опитувань

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Менеджер опитування" as Manager #ADD1B2
    
    usecase "<b>CompletingSurveys</b>\nПроходження опитувань" as CompletingSurveys #A9DCDF
    usecase "<b>JoinTheSurveys</b>\nДолучатись до опитувань \n за посиланням" as JoinTheSurveys
    usecase "<b>TakeTheSurvey</b>\nПроходити опитування" as TakeTheSurvey
    usecase "<b>ManageAccountInformation</b>\nВзаємодія зі своїм \n обліковим записом" as ManageAccountInformation #ADD1B2
    usecase "<b>ManageSurveys</b>\nКерування створеними анкетами" as ManageSurveys #ADD1B2
    usecase "<b>CreateNewQuestionnaires</b>\nСтворювати нові анкети \n за запитом адміністратора" as CreateNewQuestionnaires
    usecase "<b>EditQuestionnaires</b>\nРедагувати створені анкети" as EditQuestionnaires
    usecase "<b>ShareTheLink</b>\nПоширювати посилання \n на анкету" as ShareTheLink
    usecase "<b>DeleteQuestionnaires</b>\nВидаляти анкети" as DeleteQuestionnaires
    usecase "<b>Result</b>\nПереглянути \n результати опитування" as Result
    usecase "<b>Registration</b>\nРеєстрація" as Registration
    usecase "<b>Authorization</b>\nАвторизація" as Authorization
    
    Manager -r-> ManageAccountInformation
    Manager --> ManageSurveys
    CompletingSurveys <-r- Manager
    
    ManageAccountInformation .u.> Registration: extends
    ManageAccountInformation .r.> Authorization: extends
    ManageSurveys ..> CreateNewQuestionnaires: extends
    ManageSurveys ..> EditQuestionnaires: extends
    ManageSurveys ..> ShareTheLink: extends
    ManageSurveys ..> DeleteQuestionnaires: extends
    ManageSurveys ..> Result: extends
    CompletingSurveys .u.> JoinTheSurveys: extends
    CompletingSurveys .u.> TakeTheSurvey: extends

@enduml
</center>

## Рис.4 - Схема адміністратора

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    actor "Адміністратор" as Admin #B4A7E5
    
    usecase "<b>CompletingSurveys</b>\nПроходження опитувань" as CompletingSurveys #A9DCDF
    usecase "<b>JoinTheSurveys</b>\nДолучатись до опитувань" as JoinTheSurveys
    usecase "<b>TakeTheSurvey</b>\nПроходити опитування" as TakeTheSurvey
    usecase "<b>ManageAccountInformation</b>\nВзаємодія зі своїм \n обліковим записом" as ManageAccountInformation #ADD1B2
    usecase "<b>ManageSurveys</b>\nКерування створеними анкетами" as ManageSurveys #ADD1B2
    usecase "<b>CreateNewQuestionnaires</b>\nСтворювати нові анкети \n за запитом адміністратора" as CreateNewQuestionnaires
    usecase "<b>EditQuestionnaires</b>\nРедагувати створені анкети" as EditQuestionnaires
    usecase "<b>ShareTheLink</b>\nПоширювати посилання \n на анкету" as ShareTheLink
    usecase "<b>DeleteQuestionnaires</b>\nВидаляти анкети" as DeleteQuestionnaires
    usecase "<b>Result</b>\nПереглянути \n результати опитування" as Result
    usecase "<b>Registration</b>\nРеєстрація" as Registration
    usecase "<b>Authorization</b>\nАвторизація" as Authorization
    usecase "<b>ManageRequest</b>\nКерувати запитами \n на створення анкет \n для менеджерів опитувань" as ManageRequest #B4A7E5
    usecase "<b>InteractionWithManagersSurveys</b>\nВзаємодіяти з анкетами \n менеджерів опитувань" as InteractionWithManagersSurveys #B4A7E5
    
    usecase "<b>Format</b>\nФормувати запити" as Format
    usecase "<b>Confirmation</b>\nПідтвержувати запити" as Confirmation
    usecase "<b>Delete</b>\nВидаляти анкети \n менеджерів опитувань" as Delete
    
    Admin -r-> ManageAccountInformation
    Admin --> ManageSurveys
    CompletingSurveys <-r- Admin
    Admin -u-> ManageRequest
    Admin -u-> InteractionWithManagersSurveys
    
    ManageAccountInformation .r.> Registration: extends
    ManageAccountInformation .r.> Authorization: extends
    ManageSurveys ..> CreateNewQuestionnaires: extends
    ManageSurveys ..> EditQuestionnaires: extends
    ManageSurveys ..> ShareTheLink: extends
    ManageSurveys ..> DeleteQuestionnaires: extends
    ManageSurveys ..> Result: extends
    CompletingSurveys .l.> JoinTheSurveys: extends
    CompletingSurveys .l.> TakeTheSurvey: extends
    ManageRequest .u.> Format: extends
    ManageRequest .u.> Confirmation: extends
    InteractionWithManagersSurveys .u.> Delete: extends
    

@enduml
</center>

## Сценарії використання для незареєстрованого користувача.

#### 1. ***ID ПРОЦЕСУ:*** UNDEFINED_USER_REGISTRATION
    
   ***НАЗВА:*** Реєстрація нового користувача
    
   ***УЧАСНИКИ:*** Система, користувач

   ***ПЕРЕДУМОВИ:*** Незареєстрований користувач перейшов на сторінку

   ***РЕЗУЛЬТАТ:*** Створено особистий кабінет користувача

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Відміна реєстрації, хибні дані

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач вводить дані
   2. Система обробляє дані
   3. Система заносить дані користувача в базу даних 
   4. Система створює особистий кабінет користувача 
   5. Система надає користивачу доступ до його особистого кабінету 

<center>

@startuml

  |Гість|
  : Початок взаємодії із системою; 
  : Натискання кнопки "Реєстрація";
  : Передання реєстраційних даних;

  note left #red
    <b>Можлива виключна ситуація</b>
    <b>"Відміна реєстрації"</b>
  end note

  : Натискання кнопки "Підтвердити реєстрацію";

  |Система|
  : Отримує запит;
  : Перевіряє отримані авторизаційні дані;
    note right #ff0000
      <b>Можлива виключна ситуація</b>
      <b>"хибні дані"</b>
    end note
  : Додає дані користувача в базу даних;
  : Надає користувачу сторінку особистого кабінету;

  |Гість|
  : Отримує повідомлення про успішну реєстрацію;
  : Завершує взаємодію;
  : Кінець взаємодії із системою;

@enduml

**Рис. 5.1** Сценарій реєстрації користувача.

</center>

#### 2. ***ID ПРОЦЕСУ:*** UNDEFINED_USER_LOGIN
    
   ***НАЗВА:*** Вхід користувача в його особистий кабінет
    
   ***УЧАСНИКИ:*** Система, користувач

   ***ПЕРЕДУМОВИ:*** Зареєстрований користувач перейшов на сторінку

   ***РЕЗУЛЬТАТ:*** Користувачу наданий доступ до його особистого кабінету

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Відміна входу, хибні дані

   ***ОСНОВНИЙ СЦЕНАРІЙ:***
   1. Користувач вводить дані 
   2. Система обробляє дані
   3. Система надає користивачу доступ до його особистого кабінету

<center>

@startuml

  |Гість|
  : Початок взаємодії із системою; 
  : Натискання кнопки "Вхід";
  : Передання реєстраційних даних;

  note left #red
    <b>Можлива виключна ситуація</b>
    <b>"Відміна входу"</b>
  end note

  : Натискання кнопки "Увійти";


  |Система|
  : Отримує запит;
  : Перевіряє отримані авторизаційні дані;
    note right #ff0000
      <b>Можлива виключна ситуація</b>
      <b>"хибні дані"</b>
    end note
  : Надає користувачу сторінку особистого кабінету;

  |Гість|
  : Отримує повідомлення про успішний вхід у особистий кабінет;
  : Завершує взаємодію;
  : Кінець взаємодії із системою;

@enduml

**Рис. 5.2** Сценарій входу користувача у свій особистий кабінет.

</center>

## Сценарії використання для зареєстрованого користувача.

#### 1. ***ID ПРОЦЕСУ:*** CREATE_SURVEY
    
   ***НАЗВА:*** Створення користувачем опитування
    
   ***УЧАСНИКИ:*** Система, користувач, замовник

   ***ПЕРЕДУМОВИ:*** Користувач знаходиться на сторінці свого особистого кабінету

   ***РЕЗУЛЬТАТ:*** Створене опитування

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Користувач не створив жодного питання

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач переходить на сторінку створення опитування 
   2. Користувач робить опитування
   3. Система додає опитування у базу даних 
   4. Користувач закінчує взаємодію із системою

<center>

@startuml

  |Користувач|
  : Початок взаємодії із системою; 
  : Натискання кнопки "Створити опитування";
  : Уведення користувачем питань;

  note left #red
    <b>Можлива виключна ситуація</b>
    <b>"Користувач не створив жодного питання"</b>
  end note

  : Натискання кнопки "Готово";


  |Система|
  : Отримує запит;
  : Додає опитування в базу;
  : Надає користувачу сторінку створеного опитування;

  |Користувач|
  : Отримує повідомлення про успішне створення опитування;
  : Завершує взаємодію;
  : Кінець взаємодії із системою;

@enduml

</center>

#### 2. ***ID ПРОЦЕСУ:*** UPDATE_SURVEY
    
   ***НАЗВА:*** Редагування опитування
    
   ***УЧАСНИКИ:*** Користувач, замовник, система

   ***ПЕРЕДУМОВИ:*** Користувач знаходиться на сторінці свого особистого кабінету

   ***РЕЗУЛЬТАТ:*** Оновлене опитування

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Користувач не зробив жодних змін

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач переходить на сторінку опитування
   2. Користувач робить зміни 
   3. Система додає зміни до бази даних 
   4. Користувач закінчує взаємодію із системою

<center>

@startuml

  |Користувач|
  : Початок взаємодії із системою; 
  : Натискання кнопки "Редагувати опитування";
  : Уведення користувачем змін в питаннях;

  note left #red
    <b>Можлива виключна ситуація</b>
    <b>"Користувач не зробив жодних змін"</b>
  end note

  : Натискання кнопки "Готово";


  |Система|
  : Отримує запит;
  : Додає зміни в базу;
  : Надає користувачу сторінку оновленого опитування;

  |Користувач|
  : Отримує повідомлення про успішне оновлення опитування;
  : Завершує взаємодію;
  : Кінець взаємодії із системою;

@enduml

</center>

#### 3. ***ID ПРОЦЕСУ:*** DELETE_SURVEY
    
   ***НАЗВА:*** Видалення опитування
    
   ***УЧАСНИКИ:*** Користувач, система

   ***ПЕРЕДУМОВИ:*** Користувач знаходиться на сторінці свого особистого кабінету

   ***РЕЗУЛЬТАТ:*** Видалення опитування

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Відміна видалення опитування

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач переходить на сторінку опитування 
   2. Користувач видаляє опитування 
   3. Система видаляє опитування з бази даних 
   4. Користувач закінчує взаємодію із системою

<center>

@startuml

  |Користувач|
  : Початок взаємодії із системою; 
  : Натискання кнопки "Видалити опитування";
  
  |Система|
  : Надає користувачу сторінку підтвердження видалення опитування;

  |Користувач|
  : Натискання кнопки "Підтверджую";

  note left #red
    <b>Можлива виключна ситуація</b>
    <b>"Відміна видалення опитування"</b>
  end note

  |Система|
  : Отримує запит;
  : Видаляє опитування з бази;
  : Надає користувачу сторінку успішного видалення опитування;

  |Користувач|
  : Отримує повідомлення про успішне видалення опитування;
  : Завершує взаємодію;
  : Кінець взаємодії із системою;

@enduml

</center>

#### 4. ***ID ПРОЦЕСУ:*** GET_RESULTS
    
   ***НАЗВА:*** Отриманная результатів опитування
    
   ***УЧАСНИКИ:*** Користувач, замовник, система

   ***ПЕРЕДУМОВИ:*** Опитування закінчилось

   ***РЕЗУЛЬТАТ:*** Результати опитування

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Опитування ніхто не пройшов

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач переходить на сторінку опитування
   2. Користувач дивиться результати
   3. Користувач закінчує взаємодію із системою

<center>

@startuml

  |Користувач|
  : Початок взаємодії із системою; 
  : Натискання кнопки "Показати результати опитування";
  
  |Система|
  : Отримує запит;
  : Надає користувачу сторінку з результатами опитування;

  note right #red
    <b>Можлива виключна ситуація</b>
    <b>"Опитування ніхто не пройшов"</b>
  end note

  |Користувач|
  : Отримує результати опитування;
  : Завершує взаємодію;
  : Кінець взаємодії із системою;

@enduml

</center>

#### 5. ***ID ПРОЦЕСУ:*** INVITE_SURVEY
    
   ***НАЗВА:*** Надсилання запрошення для участі в опитуванні
    
   ***УЧАСНИКИ:*** Користувач, система

   ***ПЕРЕДУМОВИ:*** Створено опитування

   ***РЕЗУЛЬТАТ:*** Експерт отримав запрошення

   ***ВИКЛЮЧНІ СИТУАЦІЇ:*** Неправильна пошта експерта

   ***ОСНОВНИЙ СЦЕНАРІЙ:*** 
   1. Користувач відправляє запрошення на проходження опитування
   2. Система надсилає запрошення 

<center>

@startuml

  |Користувач|
  : Початок взаємодії із системою; 
  : Натискання кнопки "Запросити";
  
  |Система|
  : Отримує запит;
  : Формує посилання на конкретне поитування;
  : Надає користувачу сторінку можливостю ввести пошту експерта;

  |Користувач|
  : Вводить електронну пошту експерта; 

  |Система|
  : Надсилає посилання на опитування на пошту експерта;

  note right #red
    <b>Можлива виключна ситуація</b>
    <b>"Неправильна пошта експерта"</b>
  end note

  : Надає користувачу сторінку з повідомленням 
    про успішне відправлення запрошення;

  |Користувач|
  : Отримує повідомлення про успішне відправлення запрошення;
  : Завершує взаємодію;
  : Кінець взаємодії із системою;

@enduml

</center>

