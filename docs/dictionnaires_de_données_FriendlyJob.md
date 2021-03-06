# Dictionnaire de données

## User (`user`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|User's id|
|firstname|VARCHAR(255)|NOT NULL|User's firstname|
|lastname|VARCHAR(255)|NOT NULL|User's lastname|
|email|VARCHAR(255)|NOT NULL UNIQUE|User's email|
|password|VARCHAR(255)|NOT NULL|User's Password (hash)|
|image|VARCHAR(255)|NULL|URL of user's profile picture|
|role|JSON|NOT NULL|User's role|
|about|TEXT|NULL|User's description|
|created_at|TIMESTAMP|NOT NULL|Creation date of user’s account|
|updated_at|TIMESTAMP|NULL|Update date of user’s account|
|department_id|INT| FOREIGN KEY, NOT NULL|Foreign key for the department|

## CheckEmail (`check_email`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|CheckEmail's id|
|token|VARCHAR(255)|NOT NULL|Allow verification of user's email|
|is_confirmed|BOOLEAN|NOT NULL|Check that the user has confirmed his email|
|created_at|TIMESTAMP|NOT NULL|Creation checkEmail’s account|
|updated_at|TIMESTAMP|NULL|Update date of user’s account|
|user_id|INT| FOREIGN KEY, NOT NULL|Foreign key for the user|


## Department (`department`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Department’s id|
|name|VARCHAR(255)|NOT NULL|Department’s name|
|number|SMALLINT|NOT NULL|Department’s number|
|created_at|TIMESTAMP|NOT NULL|Creation date of the department|
|updated_at|TIMESTAMP|NULL|Update date of the department|


## Skill (`skill`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Skill’s id|
|description|VARCHAR(255)|NULL|Skill’s description|
|price|INT|NOT NULL|Skill’s price|
|created_at|TIMESTAMP|NOT NULL|Creation date of the skill|
|updated_at|TIMESTAMP|NULL|Update date of the skill|
|user_id|INT|FOREIGN KEY, NOT NULL|Foreign key use to refer to the JobWorker’s table|
|service_id|INT|FOREIGN KEY, NOT NULL|Foreign key use to refer to the Service’s table|


## Service (`service`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Service’s id|
|parent_id|INT|NULL|Parent’s id for a Sub Service (refers to the table itself)|
|title|VARCHAR(255)|NOT NULL|Service’s title|
|description|VARCHAR(65535)|NOT NULL|Service’s description|
|image|VARCHAR(255)|NOT NULL|URL of service's picture (used on the homepage for example)|
|created_at|TIMESTAMP|NOT NULL|Creation date of the service|
|updated_at|TIMESTAMP|NULL|Update date of the service|

## Demand(`demand`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Demand’s id|
|body|TEXT|NOT NULL|Demand’s description|
|reservation_date|TIMESTAMP|NOT NULL|Demand’s date for the reservation|
|reservation_hour|TIMESTAMP|NOT NULL|Demand’s hour for the reservation|
|status|VARCHAR(255)|NOT NULL|Demand’s status|
|created_at|TIMESTAMP|NOT NULL|Creation date of the demand|
|updated_at|TIMESTAMP|NULL|Update date of the demand|
|friendly_user_id|INT| FOREIGN KEY, NOT NULL|Foreign key use to refer to the FriendlyUser’s id|
|jobworker_id|INT| FOREIGN KEY, NOT NULL|Foreign key use to refer to the JobWorker’s id|
|service_id|INT|FOREIGN KEY, NOT NULL|Foreign key use to refer to the Service’s table|

## Rating (`rating`)
|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|Rating’s id|
|comment|TEXT|NOT NULL|FriendlyUser’s comment|
|star|TINYINT|NOT NULL|Service’s evaluation by a FriendlyUser|
|created_at|TIMESTAMP|NOT NULL|Creation date of the rating|
|updated_at|TIMESTAMP|NULL|Update date of the rating|
|demand_id|INT|FOREIGN KEY, NOT NULL|Foreign key use to refer to the demand’s table|
