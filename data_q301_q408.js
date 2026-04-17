// CSA Exam Questions — Batch 4: Q301–Q408

const QUESTIONS_301_408 = [
  {
    id: 301,
    q: "What do you click when you have made modifications to your report, and you want to see the results without saving?",
    opts: [
      "A. Preview",
      "B. Test",
      "C. Run",
      "D. Try It",
      "E. Execute"
    ],
    ans: "C",
    topic: "Reporting & Metrics",
    exp: "El botón Run permite ver los resultados del reporte con los cambios actuales sin guardarlo. Útil para probar configuraciones antes de confirmarlas."
  },
  {
    id: 302,
    q: "Which framework can automatically populate values for the Priority and Category fields based on the Short description field value?",
    opts: [
      "A. Predictive Intelligence",
      "B. Assignment Rule",
      "C. CSDM",
      "D. Action",
      "E. UI Policy"
    ],
    ans: "A",
    topic: "Platform Features",
    exp: "Predictive Intelligence usa machine learning para sugerir y rellenar automáticamente campos como Priority y Category basándose en el texto de la Short Description."
  },
  {
    id: 303,
    q: "Which testing framework is used to test ServiceNow Applications?",
    opts: [
      "A. Test Driven Framework (TDF)",
      "B. JUnit",
      "C. Selenium",
      "D. Automated Test Framework (ATF)"
    ],
    ans: "D",
    topic: "Platform Features",
    exp: "ATF (Automated Test Framework) es el framework nativo de ServiceNow para crear y ejecutar pruebas automatizadas de aplicaciones dentro de la plataforma."
  },
  {
    id: 304,
    q: "Which allows the creation of a task-based record from Service Catalog?",
    opts: [
      "A. Assignment Rule",
      "B. Flow Designer",
      "C. UI Builder",
      "D. Record Producers"
    ],
    ans: "D",
    topic: "Service Catalog",
    exp: "Los Record Producers son el tipo de Catalog Item que permite a los usuarios crear registros basados en tareas (como Incidents, Problems) directamente desde el Service Catalog."
  },
  {
    id: 305,
    q: "What module do you use to access the reports that are available to you?",
    opts: [
      "A. Self-Service > My Reports",
      "B. Self-Service > My Dashboards",
      "C. Reports > View / Run",
      "D. Reports > Homepage",
      "E. Reports > Overview"
    ],
    ans: "C",
    topic: "Reporting & Metrics",
    exp: "Reports > View / Run es el módulo donde los usuarios acceden para ver y ejecutar los reportes disponibles para ellos según sus permisos."
  },
  {
    id: 306,
    q: "Security rules are defined to restrict the permissions of users from viewing and interacting with data. What are these security rules called?",
    opts: [
      "A. CRUD Rules",
      "B. Access Control Rules",
      "C. Role Assignment Rules",
      "D. Scripted User Rules",
      "E. User Authentication Rules"
    ],
    ans: "B",
    topic: "Security / Access Control",
    exp: "Access Control Rules (ACLs) son las reglas de seguridad que definen qué usuarios pueden ver e interactuar con qué datos en la plataforma ServiceNow."
  },
  {
    id: 307,
    q: "A new employee joins the IT department and needs to perform work assigned to Network and Hardware groups. How would you set up their access? (Choose three.)",
    opts: [
      "A. Add User Account to Hardware group",
      "B. Add User Account to IT Knowledgebase",
      "C. Create User Account",
      "D. Add User Account to itil group",
      "E. Add User Account to Network group",
      "F. Add User Account to ACL"
    ],
    ans: "ACE",
    topic: "User Administration",
    exp: "Para configurar acceso para el nuevo empleado: crear la cuenta de usuario (C), agregarla al grupo Hardware (A) y al grupo Network (E). Los roles se heredan automáticamente de los grupos."
  },
  {
    id: 308,
    q: "The customer has asked that you change the default layout of the Task list. They would like these columns, in this order: Number, Task Type, Parent, Short Description, Assignment Group, Assignee, Updated. After navigating to the list, where would you click, to meet this requirement?",
    opts: [
      "A. Click List Context Menu > Personalize List",
      "B. Click List Context Menu > Configure > Columns",
      "C. Right click List Gear icon > Configure > Columns",
      "D. Right click on any column header, Context Menu > Configure > List Layout"
    ],
    ans: "D",
    topic: "Lists & Filters",
    exp: "Para cambiar el diseño de columnas para todos los usuarios: clic derecho en el encabezado de columna > Context Menu > Configure > List Layout."
  },
  {
    id: 309,
    q: "What is the Service Portal in ServiceNow primarily used for?",
    opts: [
      "A. An administrator interface for configuring platform settings",
      "B. A self-service interface for end users to submit requests and search knowledge",
      "C. A reporting dashboard for managers to track KPIs",
      "D. A development environment for building custom applications"
    ],
    ans: "B",
    topic: "Platform Navigation",
    exp: "El Service Portal es una interfaz de autoservicio moderna para usuarios finales, construida con widgets de AngularJS. Permite enviar solicitudes, buscar artículos de conocimiento, ver el estado de tickets y acceder a catálogos de servicios de forma amigable."
  },
  {
    id: 310,
    q: "On the Form header, which element do you use to access form templates?",
    opts: [
      "A. Stamp",
      "B. More Options (...)",
      "C. Pages",
      "D. Paperclip"
    ],
    ans: "B",
    topic: "Forms & Fields",
    exp: "El elemento More Options (...) en el encabezado del formulario proporciona acceso a las plantillas (templates) y otras funciones adicionales del formulario."
  },
  {
    id: 311,
    q: "What is the difference between an Assignment Group and an Assignment Rule in ServiceNow?",
    opts: [
      "A. They are the same thing with different names",
      "B. An Assignment Group is a collection of users; an Assignment Rule automatically assigns records to a group or user based on criteria",
      "C. Assignment Rules are only used in CMDB; Assignment Groups are used everywhere else",
      "D. An Assignment Group assigns records manually; an Assignment Rule requires admin approval"
    ],
    ans: "B",
    topic: "User Administration",
    exp: "Un Assignment Group es una colección de usuarios que pueden trabajar en tareas. Una Assignment Rule es una automatización que asigna registros automáticamente a un grupo o usuario cuando se cumplen ciertas condiciones (categoría, prioridad, etc.)."
  },
  {
    id: 312,
    q: "What is the CI Class Manager used for in ServiceNow?",
    opts: [
      "A. To import CI data from external sources into the CMDB",
      "B. To define, view, and manage the hierarchy of CI classes in the CMDB",
      "C. To create relationships between existing CIs automatically",
      "D. To generate reports on CI health and availability"
    ],
    ans: "B",
    topic: "CMDB",
    exp: "El CI Class Manager permite a los administradores definir, ver y gestionar la jerarquía de clases de Configuration Items en el CMDB, incluyendo sus atributos heredados y específicos."
  },
  {
    id: 313,
    q: "What is the purpose of a System Clone in ServiceNow?",
    opts: [
      "A. To create a backup of the instance data in an external storage system",
      "B. To copy the data and configuration from one instance to another (e.g., production to development)",
      "C. To duplicate a specific application within the same instance",
      "D. To export Update Sets from one instance to another"
    ],
    ans: "B",
    topic: "Platform Configuration",
    exp: "System Clone copia los datos y la configuración de una instancia origen (normalmente producción) a una instancia destino (normalmente desarrollo o test). Se usa para tener datos reales en entornos de desarrollo."
  },
  {
    id: 314,
    q: "What is a Catalog Variable Set in ServiceNow?",
    opts: [
      "A. A group of approval rules applied to a Catalog Item",
      "B. A reusable collection of variables that can be shared across multiple Catalog Items",
      "C. A set of default values automatically populated in a Catalog Item form",
      "D. A template for creating new Catalog Items quickly"
    ],
    ans: "B",
    topic: "Service Catalog",
    exp: "Un Catalog Variable Set es una colección reutilizable de variables que puede compartirse entre múltiples Catalog Items. Evita duplicar la configuración de variables comunes, como datos del solicitante o campos de aprobación."
  },
  {
    id: 315,
    q: "What is the difference between an Update Set in 'In Progress' state and one in 'Complete' state?",
    opts: [
      "A. 'In Progress' sets capture changes automatically; 'Complete' sets are locked and ready to move",
      "B. 'Complete' sets still capture new changes; 'In Progress' sets are read-only",
      "C. There is no functional difference between the two states",
      "D. 'In Progress' sets can be committed; 'Complete' sets must be retrieved first"
    ],
    ans: "A",
    topic: "Update Sets",
    exp: "Un Update Set 'In Progress' captura los cambios activamente. Cuando se marca como 'Complete' queda bloqueado y listo para ser exportado y aplicado en otra instancia. No se pueden agregar más cambios en estado Complete."
  },
  {
    id: 316,
    q: "What is the Workflow Editor in ServiceNow, and how does it differ from Flow Designer?",
    opts: [
      "A. They are identical tools with different names",
      "B. Workflow Editor is the legacy tool for creating workflows; Flow Designer is the modern no-code/low-code replacement",
      "C. Workflow Editor handles approvals only; Flow Designer handles all other automation",
      "D. Flow Designer is for administrators; Workflow Editor is for end users"
    ],
    ans: "B",
    topic: "Flow Designer",
    exp: "El Workflow Editor es la herramienta clásica (legacy) de ServiceNow para crear workflows basados en actividades. Flow Designer es su reemplazo moderno con interfaz visual no-code/low-code, mejor integración con IntegrationHub y más fácil de mantener."
  },
  {
    id: 317,
    q: "On the knowledge base record, which tab would you use to define which users are able to write articles to the knowledge base?",
    opts: [
      "A. Can Contribute",
      "B. Cannot Author",
      "C. Can Read",
      "D. Can Write",
      "E. Can Author"
    ],
    ans: "A",
    topic: "Knowledge Management",
    exp: "La pestaña 'Can Contribute' en el registro de la Knowledge Base define qué usuarios o grupos tienen permiso para escribir y contribuir artículos."
  },
  {
    id: 318,
    q: "What is an SLA Breach in ServiceNow?",
    opts: [
      "A. When an incident is assigned to the wrong team",
      "B. When a task exceeds the response or resolution time defined in the Service Level Agreement",
      "C. When a user submits a request outside of business hours",
      "D. When an Update Set is applied to the wrong instance"
    ],
    ans: "B",
    topic: "Platform Features",
    exp: "Un SLA Breach ocurre cuando una tarea supera el tiempo de respuesta o resolución definido en el Service Level Agreement. ServiceNow monitoriza continuamente los SLAs y puede disparar notificaciones o escalaciones automáticas cuando se incumple."
  },
  {
    id: 319,
    q: "What enables you to trace the connection from an infrastructure item, like a Server, to the Services that are dependent on that Server?",
    opts: [
      "A. Automapping Utility",
      "B. Relationships",
      "C. Service Tracer",
      "D. Transform Map"
    ],
    ans: "B",
    topic: "CMDB",
    exp: "Las Relationships (relaciones) en el CMDB permiten rastrear las conexiones entre CIs de infraestructura y los servicios que dependen de ellos."
  },
  {
    id: 320,
    q: "What section on a task record is used to see the most recent updates made to a record?",
    opts: [
      "A. Timeline",
      "B. Related List",
      "C. Activity Stream",
      "D. Audit Log"
    ],
    ans: "C",
    topic: "Forms & Fields",
    exp: "El Activity Stream muestra las actualizaciones más recientes de un registro, incluyendo comentarios, cambios de campo y notas de trabajo en orden cronológico."
  },
  {
    id: 321,
    q: "While using the CMDB, what do you call the component that needs to be managed in order to deliver services?",
    opts: [
      "A. Configuration Item",
      "B. Asset",
      "C. Catalog Items",
      "D. Data Flow",
      "E. Service Offerings"
    ],
    ans: "A",
    topic: "CMDB",
    exp: "Un Configuration Item (CI) es cualquier componente que debe gestionarse para entregar servicios de TI. Incluye hardware, software, documentación y servicios."
  },
  {
    id: 322,
    q: "What is the first step in the process to import spreadsheet data into ServiceNow?",
    opts: [
      "A. Select Import Set",
      "B. Run Data Scrubber",
      "C. Define Data Source",
      "D. Create Import Set",
      "E. Set Coalesce"
    ],
    ans: "C",
    topic: "Import / Transform Maps",
    exp: "El primer paso para importar datos desde una hoja de cálculo es 'Define Data Source' (definir la fuente de datos), donde se especifica el origen y tipo del archivo."
  },
  {
    id: 323,
    q: "Which of the following is true about Script Includes in ServiceNow?",
    opts: [
      "A. Script Includes run in the browser when a form loads",
      "B. Script Includes are reusable server-side JavaScript libraries called by other scripts",
      "C. Script Includes replace Business Rules for database operations",
      "D. Script Includes are only available in scoped applications"
    ],
    ans: "B",
    topic: "Business Rules",
    exp: "Los Script Includes son bibliotecas de JavaScript reutilizables del lado del servidor que pueden ser llamadas por Business Rules, otros Script Includes o REST APIs. Se ejecutan en el servidor, no en el cliente."
  },
  {
    id: 324,
    q: "If users would like to locate and assign a task to themselves in the Platform, what action could they perform from the list view to make the assignment? (Choose two.)",
    opts: [
      "A. Select the record using the check box, then select the Person icon",
      "B. Select the record using the check box then select the Assign To Me UI action on the List Header",
      "C. Double click on the Assigned to value, type the name of the user, and select the green check",
      "D. Right click on the Task number and select the Assign to me option in the menu",
      "E. Select the Task number, and select the Assign to me UI action on the form"
    ],
    ans: "CD",
    topic: "Lists & Filters",
    exp: "Desde la vista de lista, para asignarse una tarea: doble clic en el campo Assigned to y escribir el nombre (C), o clic derecho en el número de tarea y seleccionar 'Assign to me' (D)."
  },
  {
    id: 325,
    q: "What is the purpose of an Inbound Email Action in ServiceNow?",
    opts: [
      "A. To send automatic email replies to users when a record is created",
      "B. To process incoming emails and automatically create or update records based on defined rules",
      "C. To filter spam emails before they reach user inboxes",
      "D. To forward emails from ServiceNow to external ticketing systems"
    ],
    ans: "B",
    topic: "Platform Features",
    exp: "Las Inbound Email Actions procesan los emails entrantes y crean o actualizan registros automáticamente en ServiceNow basándose en reglas definidas, como el asunto del email o la dirección del remitente."
  },
  {
    id: 326,
    q: "What is Agent Workspace in ServiceNow?",
    opts: [
      "A. A module for configuring chatbot responses for Virtual Agent",
      "B. A unified interface for service desk agents to manage cases, chats and tasks from a single screen",
      "C. A reporting dashboard showing agent performance metrics",
      "D. A plugin that replaces the standard Now Platform UI for all users"
    ],
    ans: "B",
    topic: "Platform Navigation",
    exp: "Agent Workspace es una interfaz unificada diseñada para agentes de service desk que permite gestionar casos, chats en tiempo real y tareas desde una sola pantalla, mejorando la productividad y la experiencia del agente."
  },
  {
    id: 327,
    q: "What is an Outbound REST Message in ServiceNow used for?",
    opts: [
      "A. To receive data from external systems via REST API",
      "B. To send HTTP requests from ServiceNow to external REST APIs",
      "C. To expose ServiceNow table data as a REST endpoint",
      "D. To import data using the REST import set processor"
    ],
    ans: "B",
    topic: "Platform Features",
    exp: "Un Outbound REST Message permite a ServiceNow enviar solicitudes HTTP (GET, POST, PUT, DELETE) a APIs REST externas. Se configura en System Web Services > Outbound > REST Message y puede invocarse desde Business Rules, Flow Designer o Script Includes."
  },
  {
    id: 328,
    q: "When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?",
    opts: [
      "A. Select Data Source",
      "B. Schedule Transform",
      "C. Load Data",
      "D. Create Transform Map",
      "E. Field Alignment"
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "Create Transform Map define el destino de cada columna del origen en la tabla receptora, estableciendo la correspondencia campo a campo."
  },
  {
    id: 329,
    q: "On a form header, what icon would you click to access Template features?",
    opts: [
      "A. Context Menu",
      "B. Paper clip",
      "C. Stamp",
      "D. More options (...)"
    ],
    ans: "D",
    topic: "Forms & Fields",
    exp: "El icono More options (...) en el encabezado del formulario proporciona acceso a las plantillas (Templates) y otras funciones avanzadas del formulario."
  },
  {
    id: 330,
    q: "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that applies to the entire Incident table (all rows and all fields)?",
    opts: [
      "A. incident.*",
      "B. incident.all",
      "C. incident.!",
      "D. incident.None"
    ],
    ans: "D",
    topic: "Security / Access Control",
    exp: "En la nomenclatura de ACL de ServiceNow, incident.None significa que la regla aplica a nivel de fila (registro completo) para todos los registros de la tabla Incident, sin limitarse a un campo específico."
  },
  {
    id: 331,
    q: "On a list, what does each row show?",
    opts: [
      "A. A filter",
      "B. A record",
      "C. A table",
      "D. A field"
    ],
    ans: "B",
    topic: "Lists & Filters",
    exp: "En una vista de lista de ServiceNow, cada fila representa un registro completo de la tabla. Las columnas muestran los campos de ese registro."
  },
  {
    id: 332,
    q: "Which action enables personalization in a form for the admin role, only?",
    opts: [
      "A. Navigate to sys_form_properties list and set the property glide.ai.enable_personalize_form.admin to true",
      "B. Navigate to Context Menu > Configure > Form Layout and select 'Enable Personalization' and Enter the 'admin' role.",
      "C. Navigate to Context Menu > Configure > Table and add the role 'Admin' in the 'Available User' list box.",
      "D. Navigate to sys_properties list find the property glide.ui.personalize_form.role and set the Value to admin."
    ],
    ans: "D",
    topic: "Platform Configuration",
    exp: "Para habilitar personalización de formularios solo para el rol admin: en sys_properties, busca glide.ui.personalize_form.role y establece el valor como 'admin'."
  },
  {
    id: 333,
    q: "Which element is used to track items not saved with a field, in a record?",
    opts: [
      "A. Sidebar",
      "B. List Editor",
      "C. Activity formatter",
      "D. Dictionary"
    ],
    ans: "C",
    topic: "Forms & Fields",
    exp: "El Activity Formatter rastrea y muestra elementos que no se guardan como campos del registro, como comentarios de trabajo, notas y el historial de actividad."
  },
  {
    id: 334,
    q: "What does ServiceNow recommend as a best practice regarding data imports?",
    opts: [
      "A. Adjust your Transform maps, after the data is loaded into the target table.",
      "B. Use extremely large Import Sets, instead of multiple large Import Sets.",
      "C. Create a new import set table for each new data load.",
      "D. Plan time before your import to remove obsolete or inaccurate data.",
      "E. Monitor data quality and clean imported data, using the Data Scrub Workspace."
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "La mejor práctica de ServiceNow para importaciones es planificar tiempo antes del import para eliminar datos obsoletos o inexactos, garantizando la calidad de los datos importados."
  },
  {
    id: 335,
    q: "When an administrator sets a policy that is applied to all data entered into the Platform (UI, Import Sets, or Web Services), where does this policy run by default?",
    opts: [
      "A. Network",
      "B. Server",
      "C. Client",
      "D. Browser"
    ],
    ans: "B",
    topic: "UI Development",
    exp: "Las Data Policies se ejecutan en el Servidor por defecto, lo que garantiza que se apliquen independientemente del método de entrada de datos."
  },
  {
    id: 336,
    q: "If a user is on an Incident form and is alerted when they change the value of the Priority field, which type of script executes in the Platform?",
    opts: [
      "A. A server script",
      "B. A client script",
      "C. A fix script",
      "D. A business rule"
    ],
    ans: "B",
    topic: "Client Scripts",
    exp: "Un script que alerta al usuario cuando cambia un campo se ejecuta en el lado del cliente (navegador). Este es el comportamiento típico de un Client Script de tipo onChange."
  },
  {
    id: 337,
    q: "Which feature can be used to categorize a set of records from a list and make them visible to other users?",
    opts: [
      "A. Tags",
      "B. History",
      "C. Favorites",
      "D. Activity Formatter"
    ],
    ans: "A",
    topic: "Platform Navigation",
    exp: "Los Tags permiten categorizar conjuntos de registros desde una lista y compartirlos con otros usuarios, facilitando la organización y búsqueda de registros relacionados."
  },
  {
    id: 338,
    q: "The testing team needs to be able to perform activities in the test instance, as though they are a member of the Service Desk group. What role would they need to be able to switch between user accounts, without logging out and back in?",
    opts: [
      "A. service_desk",
      "B. impersonator",
      "C. admin",
      "D. incognito"
    ],
    ans: "B",
    topic: "User Administration",
    exp: "El rol 'impersonator' permite cambiar entre cuentas de usuario sin necesidad de cerrar y volver a abrir sesión, ideal para testing con diferentes perfiles."
  },
  {
    id: 339,
    q: "What are the benefits of building flows using Flow Designer? (Choose three.)",
    opts: [
      "A. Provides IDE for complicated scripting",
      "B. Provides built-in libraries /API for complex coding",
      "C. Automatically populates SLA records",
      "D. Provides natural-language descriptions of flow logic",
      "E. Supports No-Code application development",
      "F. Supports easy integration with 3rd party systems"
    ],
    ans: "DEF",
    topic: "Flow Designer",
    exp: "Los beneficios de Flow Designer son: descripciones en lenguaje natural (D), desarrollo sin código (E) e integración fácil con sistemas de terceros (F)."
  },
  {
    id: 340,
    q: "Which helps to visualize configuration items and their relationships?",
    opts: [
      "A. Tables",
      "B. Schema Map",
      "C. Flow Design",
      "D. Transform Map",
      "E. Dependency View"
    ],
    ans: "E",
    topic: "CMDB",
    exp: "Dependency View es la herramienta que visualiza gráficamente los Configuration Items y sus relaciones en el CMDB, mostrando dependencias de servicios e infraestructura."
  },
  {
    id: 341,
    q: "Which tables are children of the Task table and come with the base system? (Choose three.)",
    opts: [
      "A. Config",
      "B. Problem",
      "C. Dictionary",
      "D. cmdb",
      "E. Incident",
      "F. Change Request"
    ],
    ans: "BEF",
    topic: "Tables & Database",
    exp: "Las tablas hijas de Task que vienen con la instalación base de ServiceNow son: Problem (B), Incident (E) y Change Request (F). Todas extienden la tabla Task."
  },
  {
    id: 342,
    q: "Which role(s) are required to impersonate a user? (Choose two.)",
    opts: [
      "A. security_admin",
      "B. sys_admin",
      "C. impersonator",
      "D. sys_user",
      "E. admin"
    ],
    ans: "CE",
    topic: "User Administration",
    exp: "Para impersonar un usuario se necesitan los roles: impersonator (C) que otorga el permiso específico de impersonación, y admin (E) como rol base."
  },
  {
    id: 343,
    q: "Which set of steps is used to import spreadsheet data into a ServiceNow table?",
    opts: [
      "A. Select Data Source, Schedule Transform",
      "B. Load Data, Create Transform Map, Run Transform",
      "C. Define Data Source, Select Transform Map, Run Transform",
      "D. Select Import Set, Select Transform Map, Run Transform"
    ],
    ans: "B",
    topic: "Import / Transform Maps",
    exp: "El proceso estándar para importar desde una hoja de cálculo: Load Data (cargar archivo) → Create Transform Map (mapear campos) → Run Transform (ejecutar transformación)."
  },
  {
    id: 344,
    q: "What contains the configuration changes made in an instance (i.e. changes in a form) and helps to implement the changes from the Dev environment to another environment?",
    opts: [
      "A. Transform maps",
      "B. Update sets",
      "C. Import sets",
      "D. System dictionaries"
    ],
    ans: "B",
    topic: "Update Sets",
    exp: "Los Update Sets contienen los cambios de configuración realizados en una instancia y permiten implementarlos en otros entornos (Dev → Test → Production)."
  },
  {
    id: 345,
    q: "An administrator creates 'customer_table_admin' and 'customer_table_user' roles for the newly created 'Customer Table'. Which ACL rule would grant access to all rows and all fields to both the customer_table.admin and customer_table.user roles?",
    opts: [
      "A. customer.none",
      "B. customer.all",
      "C. customer.field",
      "D. customer.*"
    ],
    ans: "D",
    topic: "Security / Access Control",
    exp: "customer.* es el objeto de ACL que aplica a todos los campos de la tabla customer. El asterisco (*) funciona como comodín para todos los campos."
  },
  {
    id: 346,
    q: "Which tables are available by default in a ServiceNow instance? (Choose three.)",
    opts: [
      "A. User",
      "B. Issue",
      "C. Incident",
      "D. Project",
      "E. Task",
      "F. Item"
    ],
    ans: "ACE",
    topic: "Tables & Database",
    exp: "Las tablas disponibles por defecto en ServiceNow son: User [sys_user] (A), Incident [incident] (C) y Task [task] (E). Estas son tablas fundamentales de la plataforma."
  },
  {
    id: 347,
    q: "In a Knowledge Base record, where can an administrator find the User Criteria for who can read the articles?",
    opts: [
      "A. From the Accessible to tab",
      "B. From the Available to tab",
      "C. From the Can Access tab",
      "D. From the Can Read tab"
    ],
    ans: "D",
    topic: "Knowledge Management",
    exp: "La pestaña 'Can Read' en el registro de la Knowledge Base muestra los User Criteria que definen qué usuarios tienen permiso para leer los artículos de esa base de conocimiento."
  },
  {
    id: 348,
    q: "What action helps to see which modules are visible to a user?",
    opts: [
      "A. Install the Bomgar plug-in",
      "B. Initiate a Connect Chat session",
      "C. Launch a NowChat window",
      "D. Impersonate the user"
    ],
    ans: "D",
    topic: "User Administration",
    exp: "Impersonar al usuario permite al administrador ver exactamente qué módulos son visibles para ese usuario, replicando su experiencia en la plataforma."
  },
  {
    id: 349,
    q: "What are the different Notification methods that can be used to alert users when events that concern them have occurred? (Choose three.)",
    opts: [
      "A. Meeting Invitation",
      "B. Email",
      "C. Browser Pop ups",
      "D. Messenger",
      "E. SMS"
    ],
    ans: "ABE",
    topic: "Platform Features",
    exp: "Los métodos de notificación en ServiceNow son: Meeting Invitation (A), Email (B) y SMS (E). Estos son los tres canales de notificación soportados."
  },
  {
    id: 350,
    q: "What are the steps to apply an update set retrieved from another instance?",
    opts: [
      "A. Load the Update Set > Import the Update Set > Install",
      "B. Verify Update Set is Complete, Retrieve, Preview, Commit",
      "C. Verify Update Set is Complete, Test Connection, Apply",
      "D. Import the Update Set > Verify the Update Set is complete > Link the Update Set > Publish"
    ],
    ans: "B",
    topic: "Update Sets",
    exp: "Los pasos para aplicar un Update Set: verificar que esté Completo → Retrieve (recuperar) → Preview (previsualizar conflictos) → Commit (confirmar y aplicar)."
  },
  {
    id: 351,
    q: "After finishing your work on High Security Settings, what is a possible way to return to normal admin security levels?",
    opts: [
      "A. Select Global Update Set",
      "B. Log out and back in",
      "C. End Impersonation",
      "D. Select Normal role",
      "E. Use System Administration > Normal Security module"
    ],
    ans: "B",
    topic: "Security / Access Control",
    exp: "Para volver a los niveles normales de seguridad de administrador después de usar High Security Settings, la forma más directa es cerrar sesión y volver a iniciarla."
  },
  {
    id: 352,
    q: "Which feature can be used to give users the choice to easily populate the most-used fields for a specific table?",
    opts: [
      "A. Tags",
      "B. Formatter",
      "C. Template",
      "D. Reference type fields"
    ],
    ans: "C",
    topic: "Forms & Fields",
    exp: "Los Templates (plantillas) permiten a los usuarios rellenar fácilmente los campos más usados de un formulario con valores predefinidos, ahorrando tiempo en tareas repetitivas."
  },
  {
    id: 353,
    q: "What protects applications by restricting access to data in another application, in the same instance?",
    opts: [
      "A. Admin Center",
      "B. Access Control Rules",
      "C. Assignment Rules",
      "D. Application Scope"
    ],
    ans: "D",
    topic: "Security / Access Control",
    exp: "Application Scope protege las aplicaciones restringiendo el acceso a sus datos desde otras aplicaciones dentro de la misma instancia, creando límites de aislamiento."
  },
  {
    id: 354,
    q: "Which module in the Service Catalog application is used to create a new catalog item?",
    opts: [
      "A. Configuration Items",
      "B. Maintain Items",
      "C. Content Items",
      "D. Catalog Items"
    ],
    ans: "B",
    topic: "Service Catalog",
    exp: "El módulo 'Maintain Items' en la aplicación Service Catalog es donde los administradores crean y gestionan los Catalog Items."
  },
  {
    id: 355,
    q: "What helps to define the structure of a catalog item form that is displayed to the customer?",
    opts: [
      "A. Variables",
      "B. Catalog Description",
      "C. Catalog Definition",
      "D. Order Guides"
    ],
    ans: "A",
    topic: "Service Catalog",
    exp: "Las Variables definen la estructura del formulario de un Catalog Item que se muestra al cliente, incluyendo los campos de entrada, tipos de datos y opciones disponibles."
  },
  {
    id: 356,
    q: "Which displays the list of activities, or history on a form?",
    opts: [
      "A. Formatter",
      "B. Dictionary",
      "C. Sidebar",
      "D. History Menu"
    ],
    ans: "A",
    topic: "Forms & Fields",
    exp: "Un Formatter es el elemento de formulario que muestra la lista de actividades e historial, como el Activity Formatter que muestra el historial de trabajo en tareas."
  },
  {
    id: 357,
    q: "Where should an administrator navigate to add the 'Save' button in the form header?",
    opts: [
      "A. Context Menu > Form Design",
      "B. All > System Properties > UI Action Settings",
      "C. All > System Properties > UI Properties",
      "D. Context Menu > Form Layout"
    ],
    ans: "C",
    topic: "Platform Configuration",
    exp: "Para agregar el botón 'Save' en el encabezado del formulario: All > System Properties > UI Properties, donde se activa la propiedad correspondiente."
  },
  {
    id: 358,
    q: "What are the options that can be set to determine when a Business Rule executes? (Choose four.)",
    opts: [
      "A. Async",
      "B. Load",
      "C. Change",
      "D. Display",
      "E. After",
      "F. Before",
      "G. Submit",
      "H. Click"
    ],
    ans: "ADEF",
    topic: "Business Rules",
    exp: "Las opciones de timing para un Business Rule son: Async (asíncrono) (A), Display (al mostrar el formulario) (D), After (después de la operación DB) (E) y Before (antes) (F)."
  },
  {
    id: 359,
    q: "Which path is used on the Filter Navigator to display the list of records from the sys_user table?",
    opts: [
      "A. sys_user.display",
      "B. sys_user.do",
      "C. sys_user.list",
      "D. sys_user.view"
    ],
    ans: "C",
    topic: "Tables & Database",
    exp: "Para mostrar una lista de registros de cualquier tabla en ServiceNow, se usa el patrón tablename.list en el Application Navigator. Para sys_user: sys_user.list."
  },
  {
    id: 360,
    q: "Which access control rule applies to every field in the incident table?",
    opts: [
      "A. incident<=>*",
      "B. incident.all",
      "C. incident.*",
      "D. incident||*"
    ],
    ans: "C",
    topic: "Security / Access Control",
    exp: "incident.* es la ACL que aplica a todos los campos de la tabla Incident. El asterisco (*) es el comodín que representa todos los campos."
  },
  {
    id: 361,
    q: "What is the purpose of an application scope?",
    opts: [
      "A. Scope determines which parts of an application are available for use by other applications in ServiceNow",
      "B. Scope prevents applications from changing their own tables and business logic",
      "C. Scope determines the functionality of core services in the platform",
      "D. Scope determines all applications access each other's tables and business logic"
    ],
    ans: "A",
    topic: "Security / Access Control",
    exp: "El Application Scope determina qué partes de una aplicación están disponibles para que otras aplicaciones las usen, controlando el acceso y el aislamiento entre aplicaciones."
  },
  {
    id: 362,
    q: "On a Catalog Task record, how would an administrator change the priority choice options?",
    opts: [
      "A. In the Context menu of the form, select Configure Options",
      "B. Right-click the Priority Label > select Configure Lists",
      "C. Right-click the Priority Label > select Configure Choices",
      "D. Open the Data Dictionary > select Values"
    ],
    ans: "C",
    topic: "Forms & Fields",
    exp: "Para cambiar las opciones de un campo de elección como Priority: clic derecho sobre la etiqueta del campo > Configure Choices, que abre la gestión de la lista de opciones."
  },
  {
    id: 363,
    q: "Which sequence of actions applies an update set to an instance?",
    opts: [
      "A. Preview, Save, Commit",
      "B. Preview, Retrieve, Commit",
      "C. Retrieve, Commit, Preview",
      "D. Retrieve, Preview, Commit"
    ],
    ans: "D",
    topic: "Update Sets",
    exp: "La secuencia correcta para aplicar un Update Set es: Retrieve (recuperar desde instancia remota) → Preview (previsualizar) → Commit (confirmar y aplicar)."
  },
  {
    id: 364,
    q: "A customer asks you to make the following updates to a form: 1. When Caller field is populated, automatically look up caller location and load it in the Location field. 2. Add notice at the top of the page when the record is submitted. What type of script would you use to meet this requirement?",
    opts: [
      "A. UI script",
      "B. Server script",
      "C. JavaScript",
      "D. Client script"
    ],
    ans: "D",
    topic: "Client Scripts",
    exp: "Los Client Scripts son los adecuados para estas acciones: onChange para actualizar el campo Location automáticamente cuando cambia Caller, y onSubmit para mostrar avisos al guardar."
  },
  {
    id: 365,
    q: "When does a Business Rule execute in ServiceNow?",
    opts: [
      "A. When a user downloads a report",
      "B. Before or after a user logs into the platform",
      "C. Before or after a record is saved to the database",
      "D. Only when a record is deleted"
    ],
    ans: "C",
    topic: "Business Rules",
    exp: "Un Business Rule se ejecuta antes o después de que un registro se guarda en la base de datos (operaciones de insert, update, delete o query)."
  },
  {
    id: 366,
    q: "Where do UI Policies run?",
    opts: [
      "A. Client-side (browser)",
      "B. Knowledge Base",
      "C. Server-side (database)",
      "D. Within server-side scripts"
    ],
    ans: "A",
    topic: "UI Development",
    exp: "Las UI Policies se ejecutan en el lado del cliente (navegador del usuario). Por eso afectan únicamente la interfaz del formulario en tiempo real."
  },
  {
    id: 367,
    q: "You are creating a catalog item for ordering a new desktop computer. The computers have these options: Color: Black or Silver, RAM: 32 MB or 64MB, Keyboard: Standard or Ergonomic, Monitor: 24 Inch or 32 Inch. How would you add these options to the catalog item form?",
    opts: [
      "A. Add choices",
      "B. Add variables",
      "C. Add UI options",
      "D. Add fields"
    ],
    ans: "B",
    topic: "Service Catalog",
    exp: "Para agregar opciones de configuración a un Catalog Item se usan Variables. Cada opción (Color, RAM, etc.) es una variable con sus valores correspondientes."
  },
  {
    id: 368,
    q: "Which action launches the Form Design interface?",
    opts: [
      "A. In the Form context menu, select Configure > Form Design",
      "B. In the Form context menu, select Configure > Form Layout > Designer",
      "C. In the Form context menu, select User Experience > UX Dashboard",
      "D. In the Form context menu, select Configure > Forms > Developer",
      "E. In the form context menu, select Pages > Page Design"
    ],
    ans: "A",
    topic: "Forms & Fields",
    exp: "Para abrir la interfaz Form Design: Context Menu del formulario > Configure > Form Design. Esta interfaz proporciona un diseñador visual drag-and-drop."
  },
  {
    id: 369,
    q: "Which form element displays the list of activities, or history, on a task form?",
    opts: [
      "A. Action Formatter",
      "B. Activity Formatter",
      "C. Action Stream",
      "D. Sidebar"
    ],
    ans: "B",
    topic: "Forms & Fields",
    exp: "El Activity Formatter es el elemento de formulario que muestra el historial de actividades y comentarios de trabajo en un registro de tarea."
  },
  {
    id: 370,
    q: "Which feature helps to define the rules to restrict the permissions of users from viewing and interacting with data?",
    opts: [
      "A. CRUD Rules",
      "B. Access Control Rules",
      "C. Role Assignment Rules",
      "D. Scripted User Rules",
      "E. User Authentication Rules"
    ],
    ans: "B",
    topic: "Security / Access Control",
    exp: "Access Control Rules (ACLs) son las reglas que definen y restringen los permisos de los usuarios para ver e interactuar con los datos de la plataforma."
  },
  {
    id: 371,
    q: "Which actions can you take to open the Context Menu on a list, form, or column? (Choose two.)",
    opts: [
      "A. Select the Context Menu related link",
      "B. Double-click the list form or column heading",
      "C. Right-click on the list, form or column heading",
      "D. Use Ctrl+M command",
      "E. Select the Context Menu icon"
    ],
    ans: "CE",
    topic: "Platform Navigation",
    exp: "Para abrir el Context Menu: clic derecho en la lista, formulario o encabezado de columna (C), o hacer clic en el icono de Context Menu (E) que aparece al pasar el cursor."
  },
  {
    id: 372,
    q: "Your customer wants to update a notification so it is sent to the Caller's Manager. Which action supports this requirement?",
    opts: [
      "A. On the 'Who will receive' tab on the Notification record add the Caller field, then dot walk to the Caller's Manager field to add it",
      "B. On the Notification record create a flow and include a notification in the flow for 'All receivers'.",
      "C. On the 'Send to' tab on the Notification record, add the Caller field, then dot walk to the Caller's Manager field to add it.",
      "D. On the 'Send to' tab on the Notification record, set 'Who will receive' to Subscribable."
    ],
    ans: "A",
    topic: "Platform Features",
    exp: "Para enviar notificaciones al manager del Caller: en la pestaña 'Who will receive' de la notificación, agrega el campo Caller y luego usa dot-walking para llegar al campo Manager del Caller."
  },
  {
    id: 373,
    q: "What attributes of a field can a UI Policy Action change on a form? (Choose three.)",
    opts: [
      "A. Length",
      "B. Mandatory",
      "C. Visible Hidden",
      "D. Format",
      "E. Read Only"
    ],
    ans: "BCE",
    topic: "UI Development",
    exp: "Las UI Policy Actions pueden cambiar tres atributos de un campo: Mandatory (obligatorio) (B), Visible/Hidden (visible/oculto) (C) y Read Only (solo lectura) (E)."
  },
  {
    id: 374,
    q: "Where do you navigate to add a list of Incidents created by a user to the bottom of their user record?",
    opts: [
      "A. Context Menu > Configure > Related Records",
      "B. Right click on Form > Configure > Related Cases",
      "C. Context Menu > Configure > Related Lists",
      "D. Right-click on the Form > Configure > Add Lists"
    ],
    ans: "C",
    topic: "Forms & Fields",
    exp: "Para agregar una lista relacionada al formulario: Context Menu > Configure > Related Lists. Aquí puedes agregar listas de registros relacionados a la parte inferior del formulario."
  },
  {
    id: 375,
    q: "If you want to manage your personal tasks through a visual, drag-and-drop interface, what application would you use?",
    opts: [
      "A. Service Desk",
      "B. Virtual Agent Homepage",
      "C. Visual Task Boards",
      "D. Personal Task Tracker"
    ],
    ans: "C",
    topic: "Platform Features",
    exp: "Visual Task Boards proporciona una interfaz visual de drag-and-drop tipo Kanban para gestionar tareas personales, similar a herramientas como Trello."
  },
  {
    id: 376,
    q: "Which action enables a user to view and specify date and time formats in their instance?",
    opts: [
      "A. Select the User menu > Preferences > Time Settings > Toggle display time zone",
      "B. Ask the user to adjust the time zone on their personal computer",
      "C. Use the system properties to correct the instance's time zone",
      "D. Select the User menu > Preferences > Language & Region > Set date and time format and time zone",
      "E. Create a UI Script to set the default timezone"
    ],
    ans: "D",
    topic: "User Administration",
    exp: "Para configurar formatos de fecha/hora personales: User menu > Preferences > Language & Region > Set date and time format and time zone."
  },
  {
    id: 377,
    q: "A manager is complaining that they can't get the data they need on a report, because the data resides in two different tables. This data is used for many different reports in their department. You have checked to see if dot-walking will meet the requirement, and it is not possible. What else might you try to help this manager?",
    opts: [
      "A. Export the tables to spreadsheet",
      "B. Create a Database View",
      "C. Create a Report Template",
      "D. Create a Report Source",
      "E. Create a custom table"
    ],
    ans: "B",
    topic: "Reporting & Metrics",
    exp: "Una Database View combina datos de múltiples tablas en una vista virtual, permitiendo crear reportes que cruzan datos de tablas diferentes sin necesidad de dot-walking."
  },
  {
    id: 378,
    q: "Which script can run when a record is displayed, inserted, updated, deleted, or when a table is queried?",
    opts: [
      "A. Business rule",
      "B. Cheat script",
      "C. Record rule",
      "D. UI script",
      "E. Scheduled job"
    ],
    ans: "A",
    topic: "Business Rules",
    exp: "Los Business Rules pueden ejecutarse en cualquiera de estas operaciones de base de datos: Display, Insert, Update, Delete y Query. Son los scripts más versátiles del servidor."
  },
  {
    id: 379,
    q: "When you are viewing a record, like an Incident, how can you detect if someone else is also actively working on the Incident? (Choose two.)",
    opts: [
      "A. A notification appears asking the new user to collaborate",
      "B. A chat bubble automatically launches, so you can collaborate",
      "C. The Work notes list contains names of the other users",
      "D. User presence icon shows initials of users actively viewing the record",
      "E. An icon appears to the left of fields that have been updated by other users"
    ],
    ans: "DE",
    topic: "Collaboration",
    exp: "Para detectar si alguien más trabaja en el mismo registro: el icono de presencia de usuario muestra las iniciales (D) y aparece un icono junto a los campos actualizados por otros (E)."
  },
  {
    id: 380,
    q: "Which storefront is a single location for accessing pre-built spokes, to quickly integrate with third party services to build and share content?",
    opts: [
      "A. ServiceNow Store",
      "B. Integration Spoke Store",
      "C. Spoke Store",
      "D. ServiceNow Spoke Store"
    ],
    ans: "A",
    topic: "Platform Features",
    exp: "ServiceNow Store es el marketplace centralizado donde se pueden encontrar y descargar spokes preconstruidos y aplicaciones para integrar con servicios de terceros."
  },
  {
    id: 381,
    q: "What policies are applied to all data entered into the platform (i.e. through a record form (UI), Import Sets, or Web Services)?",
    opts: [
      "A. Data Policies",
      "B. Write Policies",
      "C. Data Integrity Policies",
      "D. Data Submission Policies"
    ],
    ans: "A",
    topic: "UI Development",
    exp: "Las Data Policies se aplican a todos los datos introducidos en la plataforma, independientemente del método: formulario UI, Import Sets o Web Services."
  },
  {
    id: 382,
    q: "Which actions would you take to edit the title on an application menu? (Choose two.)",
    opts: [
      "A. Select the Application name on the Navigator, then select the pencil icon",
      "B. Select System Definition > Dictionary > Application",
      "C. Select System Definitions > Application Menus then select the application",
      "D. Select Configuration > Applications, then select the application",
      "E. Select the form for the Application, then right-click, Configure > Form Designer"
    ],
    ans: "AC",
    topic: "Platform Configuration",
    exp: "Para editar el título de un menú de aplicación: seleccionar el nombre en el Navigator y hacer clic en el lápiz (A), o ir a System Definitions > Application Menus y seleccionar la aplicación (C)."
  },
  {
    id: 383,
    q: "Which field on every record contains a unique identifier for that record?",
    opts: [
      "A. sys_id",
      "B. sys_number_id",
      "C. sys_number",
      "D. sc_req_item"
    ],
    ans: "A",
    topic: "Tables & Database",
    exp: "El campo sys_id contiene el identificador único (GUID de 32 caracteres) que se asigna automáticamente a cada registro en ServiceNow."
  },
  {
    id: 384,
    q: "What type of table has a name, starting with u_, or x_?",
    opts: [
      "A. Base table",
      "B. Custom table",
      "C. Parent table",
      "D. Core table"
    ],
    ans: "B",
    topic: "Tables & Database",
    exp: "Las tablas personalizadas (Custom tables) tienen prefijos u_ (tablas globales personalizadas) o x_ (tablas de aplicaciones con scope). Ambos identifican tablas creadas por clientes o partners."
  },
  {
    id: 385,
    q: "If you have the Impersonate role what type of user are you not able to impersonate?",
    opts: [
      "A. Catalog User",
      "B. Customer",
      "C. System Administrator",
      "D. VIP",
      "E. Approver"
    ],
    ans: "C",
    topic: "User Administration",
    exp: "Con el rol impersonator no es posible impersonar a un System Administrator (admin). Esta restricción de seguridad previene la escalada de privilegios."
  },
  {
    id: 386,
    q: "What action can be performed by selecting the Additional actions menu in Table Builder?",
    opts: [
      "A. Schedule a job",
      "B. Duplicate the selected form view",
      "C. Add a new module",
      "D. Create a database index"
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "Desde el menú Additional actions en Table Builder se puede crear un índice de base de datos, lo que mejora el rendimiento de búsquedas en la tabla."
  },
  {
    id: 387,
    q: "Typically, based on Best Practice, which of the following interactions is used to make fields mandatory, read only, and/or hidden?",
    opts: [
      "A. Client Scripts",
      "B. Business Rules",
      "C. UI Actions",
      "D. UI Policies"
    ],
    ans: "D",
    topic: "UI Development",
    exp: "La mejor práctica para hacer campos obligatorios, de solo lectura o visibles/ocultos es usar UI Policies. Son más fáciles de mantener que Client Scripts y no requieren código."
  },
  {
    id: 388,
    q: "Which applications allow administrators to create and distribute data visualizations? (Choose two.)",
    opts: [
      "A. Performance Analytics",
      "B. Data Visualizations",
      "C. Indicators",
      "D. Reports",
      "E. Analytics Center"
    ],
    ans: "AD",
    topic: "Reporting & Metrics",
    exp: "Performance Analytics (A) y Reports (D) son las dos aplicaciones principales que permiten crear y distribuir visualizaciones de datos en ServiceNow."
  },
  {
    id: 389,
    q: "When working on a task, which field do you use to share knowledge and other customer visible details?",
    opts: [
      "A. Caller note",
      "B. Customer notes",
      "C. Description",
      "D. Additional comments"
    ],
    ans: "D",
    topic: "Forms & Fields",
    exp: "El campo Additional Comments (Comentarios adicionales) es visible para el cliente y se usa para compartir actualizaciones y conocimiento con los usuarios finales."
  },
  {
    id: 390,
    q: "Which ServiceNow resource can be used as a blueprint to map your IT services to ServiceNow?",
    opts: [
      "A. ServiceNow Wiki",
      "B. Configuration Management Database (CMDB)",
      "C. Common Services Data Model (CSDM)",
      "D. IT Service Management (ITSM)"
    ],
    ans: "C",
    topic: "CMDB",
    exp: "El Common Services Data Model (CSDM) es el blueprint de ServiceNow para mapear los servicios de TI a la plataforma, proporcionando un modelo estándar de datos."
  },
  {
    id: 391,
    q: "How can an administrator modify the layout of a form using Table Builder?",
    opts: [
      "A. By configuring form sections",
      "B. By editing system scripts",
      "C. By changing the database schema",
      "D. By altering the page header theme"
    ],
    ans: "A",
    topic: "Forms & Fields",
    exp: "En Table Builder, el diseño del formulario se modifica configurando las secciones del formulario, permitiendo organizar campos en diferentes secciones y diseños."
  },
  {
    id: 392,
    q: "What actions are required to refine the number of records displayed in a list view?",
    opts: [
      "A. Add embedded lists and form annotations",
      "B. Select the filter Icon and apply filter conditions",
      "C. Modify field properties and duplicate form views",
      "D. Right-click to configure relationship list"
    ],
    ans: "B",
    topic: "Lists & Filters",
    exp: "Para refinar los registros mostrados en una lista: selecciona el icono de filtro (embudo) y aplica las condiciones de filtro deseadas."
  },
  {
    id: 393,
    q: "How can you visually rearrange fields within a form view in Table Builder?",
    opts: [
      "A. By duplicating the form view",
      "B. By adding embedded lists",
      "C. By dragging fields into the form editor",
      "D. By modifying field properties"
    ],
    ans: "C",
    topic: "Forms & Fields",
    exp: "En Table Builder, los campos se reorganizan visualmente arrastrándolos y soltándolos (drag and drop) dentro del editor de formularios."
  },
  {
    id: 394,
    q: "Which is used to configure access to Applications and Modules?",
    opts: [
      "A. Roles",
      "B. Users",
      "C. Groups",
      "D. Departments"
    ],
    ans: "A",
    topic: "Security / Access Control",
    exp: "Los Roles son los que configuran el acceso a las aplicaciones y módulos en el Application Navigator de ServiceNow."
  },
  {
    id: 395,
    q: "Which options are available in the Data Visualization configuration panel, for how the data will be presented? (Choose two.)",
    opts: [
      "A. Time maps",
      "B. Data sources",
      "C. Configuration forms",
      "D. Chart mapping",
      "E. Metrics"
    ],
    ans: "BD",
    topic: "Reporting & Metrics",
    exp: "En el panel de configuración de Data Visualization, las opciones de presentación disponibles son: Data sources (fuentes de datos) (B) y Chart mapping (mapeo de gráficos) (D)."
  },
  {
    id: 396,
    q: "What is the role of form annotations within Table Builder?",
    opts: [
      "A. To create new form views",
      "B. To provide additional information on each field",
      "C. To rearrange fields in a form",
      "D. To add visual appeal with colors in the designer"
    ],
    ans: "B",
    topic: "Forms & Fields",
    exp: "Las anotaciones de formulario en Table Builder proporcionan información adicional sobre cada campo, como descripciones o instrucciones de ayuda para los usuarios."
  },
  {
    id: 397,
    q: "Which metric in the Security Center measures the level of instance hardening?",
    opts: [
      "A. Compliance score",
      "B. Security scanner",
      "C. Monitoring score",
      "D. Configuration score"
    ],
    ans: "D",
    topic: "Security / Access Control",
    exp: "El Configuration score en el Security Center mide el nivel de hardening (fortalecimiento) de la instancia, evaluando las configuraciones de seguridad aplicadas."
  },
  {
    id: 398,
    q: "What is the difference between a ServiceNow Application and a Plugin?",
    opts: [
      "A. Applications are built by ServiceNow only; Plugins are built by customers",
      "B. Applications are custom solutions built on the platform; Plugins are pre-built features that extend platform functionality and are activated, not installed",
      "C. Plugins replace Applications when activated",
      "D. There is no difference; the terms are interchangeable"
    ],
    ans: "B",
    topic: "Platform Configuration",
    exp: "Una Application es una solución personalizada construida sobre la plataforma (como ITSM, HRSD o apps propias). Un Plugin es una funcionalidad pre-construida por ServiceNow que se activa en la instancia para añadir capacidades adicionales. Los plugins no se desinstalan una vez activados."
  },
  {
    id: 399,
    q: "Which components are the customer's responsibility according to the Shared Responsibility Model? (Choose two.)",
    opts: [
      "A. Infrastructure management",
      "B. Authentication and authorization",
      "C. Media disposal and destruction",
      "D. Data encryption at rest",
      "E. Backup and restore"
    ],
    ans: "BD",
    topic: "Security / Access Control",
    exp: "Según el modelo de Responsabilidad Compartida de ServiceNow, el cliente es responsable de: la autenticación y autorización (B) y el cifrado de datos en reposo (D)."
  },
  {
    id: 400,
    q: "Which roles are required to configure the form layout using Table Builder? (Choose two.)",
    opts: [
      "A. read_only_user",
      "B. it_support_specialist",
      "C. app_engine_admin",
      "D. admin",
      "E. personalize_form"
    ],
    ans: "CD",
    topic: "Security / Access Control",
    exp: "Para configurar el diseño de formularios usando Table Builder se necesitan los roles: app_engine_admin (C) y admin (D)."
  },
  {
    id: 401,
    q: "An Administrator wants to review all the users having privileged access to identify users that no longer need this level of access. Which Security Center feature can help fulfill this requirement?",
    opts: [
      "A. Security hardening",
      "B. Security posture console",
      "C. Security scanner",
      "D. Customer actions"
    ],
    ans: "C",
    topic: "Security / Access Control",
    exp: "El Security Scanner en el Security Center ayuda a identificar usuarios con acceso privilegiado y otros problemas de seguridad que necesitan revisión."
  },
  {
    id: 402,
    q: "What encryption feature is included in ServiceNow by default?",
    opts: [
      "A. Data in transit",
      "B. Data at rest",
      "C. Data in use"
    ],
    ans: "A",
    topic: "Security / Access Control",
    exp: "ServiceNow incluye cifrado de datos en tránsito (Data in transit) por defecto, usando HTTPS/TLS para todas las comunicaciones entre el cliente y el servidor."
  },
  {
    id: 403,
    q: "Which action can be selected to apply pre-defined or custom conditions to filter and generate specified data in the Visualization Designer?",
    opts: [
      "A. Preview",
      "B. Run",
      "C. Execute",
      "D. Try It"
    ],
    ans: "B",
    topic: "Reporting & Metrics",
    exp: "La acción Run en el Visualization Designer aplica las condiciones predefinidas o personalizadas para filtrar y generar los datos especificados en la visualización."
  },
  {
    id: 404,
    q: "Which Security Center feature helps resolve platform related security issues and misconfigurations?",
    opts: [
      "A. Best practices",
      "B. Customer actions",
      "C. Security hardening",
      "D. Security scanner"
    ],
    ans: "D",
    topic: "Security / Access Control",
    exp: "El Security Scanner en el Security Center identifica y ayuda a resolver problemas de seguridad y configuraciones incorrectas en la plataforma ServiceNow."
  },
  {
    id: 405,
    q: "Which element allows administrators to add information to a form outside of existing fields on the record?",
    opts: [
      "A. By modifying the layout to two columns",
      "B. By duplicating a form view",
      "C. By dragging fields from the form elements panel",
      "D. By adding formatters to a form"
    ],
    ans: "D",
    topic: "Forms & Fields",
    exp: "Los Formatters permiten agregar información a un formulario que no está almacenada como campo en el registro, como el Activity Stream, separadores o información de ayuda."
  },
  {
    id: 406,
    q: "An Administrator wants to display a reminder message to any user submitting an incident. Which feature does this?",
    opts: [
      "A. Data Policy",
      "B. Client Script",
      "C. UI Policy",
      "D. Business rule"
    ],
    ans: "C",
    topic: "UI Development",
    exp: "Una UI Policy puede mostrar mensajes de recordatorio a los usuarios cuando envían un formulario, sin necesidad de escribir JavaScript personalizado."
  },
  {
    id: 407,
    q: "What is the primary purpose of Form Builder in the Now Platform?",
    opts: [
      "A. To create new tables within the platform",
      "B. To generate analytical reports from data tables",
      "C. To configure system settings and permissions",
      "D. To edit forms used for populating records"
    ],
    ans: "D",
    topic: "Forms & Fields",
    exp: "Form Builder (antes Table Builder) es la herramienta cuyo propósito principal es editar y diseñar los formularios usados para introducir y mostrar datos en los registros."
  },
  {
    id: 408,
    q: "Certain tables have a prefix, like x_. Which kind of table has a name that starts with this prefix?",
    opts: [
      "A. Scoped application table",
      "B. Excluded table",
      "C. Explanation table",
      "D. System table"
    ],
    ans: "A",
    topic: "Tables & Database",
    exp: "Las tablas con prefijo x_ son tablas de aplicaciones con scope (Scoped application tables), creadas por partners o clientes dentro de un application scope específico."
  }
];
