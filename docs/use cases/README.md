# Модель прецендентів

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
    
    Admin -l-|> Manager
    Manager -l-|> Respondent
    
    
@enduml
</center>
***Рис.1 - Зaгальна схема***

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
***Рис.2 - Схема респондента***

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
***Рис.3 - Схема менеджера опитувань***


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
***Рис.4 - Схема адміністратора***