// CSA Exam Questions — Batch 1: Q1–Q100
// Each object: { id, q, opts, ans, topic, exp }
// opts: full option strings including letter prefix
// ans: correct letter(s) as sorted string e.g. "A", "AB", "ACD"

const QUESTIONS_001_100 = [
  {
    id: 1,
    q: "A Service Catalog may include which of the following components?",
    opts: [
      "A. Order Guides, Exchange Rates, Calendars",
      "B. Order Guides, Catalog Items, and Interceptors",
      "C. Catalog Items, Asset Contracts, Task Surveys",
      "D. Record Producers, Order Guides, and Catalog Items"
    ],
    ans: "D",
    topic: "Service Catalog",
    exp: "El Service Catalog incluye Record Producers (para crear registros desde el catálogo), Order Guides (para agrupar ítems relacionados) y Catalog Items (los ítems que los usuarios pueden solicitar)."
  },
  {
    id: 2,
    q: "Which one of the following statements applies to a set of fields when they are coalesced during an import?",
    opts: [
      "A. If a match is found using the coalesce fields, the existing record is updated with the information being imported",
      "B. If a match is not found using the coalesce fields, the system does not create a Transform Map",
      "C. If a match is found using the coalesce fields, the system creates a new record",
      "D. If a match is not found using the coalesce fields, the existing record is updated with the information being imported"
    ],
    ans: "A",
    topic: "Import / Transform Maps",
    exp: "Coalesce = campo clave de búsqueda. Si hay coincidencia: se actualiza el registro existente. Si no hay coincidencia: se crea un registro nuevo."
  },
  {
    id: 3,
    q: "As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",
    opts: [
      "A. A metric is a report gauge used on homepages to display real-time data",
      "B. A metric is a time measurement used to report the effectiveness of workflows and SLAs",
      "C. A metric is used to measure and evaluate the effectiveness of IT service management processes",
      "D. A metric is a comparative measurement used to report the effectiveness of flows and SLAs"
    ],
    ans: "C",
    topic: "Reporting & Metrics",
    exp: "Las métricas en ServiceNow miden y evalúan la efectividad de los procesos de gestión de servicios de TI (ITSM). Son distintas de los gauges de informe."
  },
  {
    id: 4,
    q: "The display sequence is controlled in a Service Catalog Item using which of the following?",
    opts: [
      "A. The Default Value field in the Catalog Item form",
      "B. The Sequence field in the Catalog Item form",
      "C. The Order field in the Variable form",
      "D. The Choice field in the Variable form"
    ],
    ans: "C",
    topic: "Service Catalog",
    exp: "El orden de visualización de las variables de un Catalog Item se controla con el campo 'Order' dentro del formulario de la Variable, no en el propio Catalog Item."
  },
  {
    id: 5,
    q: "Reports can be created from which different places in the platform? (Choose two.)",
    opts: [
      "A. List column heading",
      "B. Metrics module",
      "C. Statistics module",
      "D. View / Run module"
    ],
    ans: "AD",
    topic: "Reporting & Metrics",
    exp: "Los reportes se pueden crear desde: (A) clic derecho en el encabezado de una columna de lista, y (D) el módulo View/Run en el menú de Reports."
  },
  {
    id: 6,
    q: "Knowledge Base Search results can be sorted by which of the following? (Choose three.)",
    opts: [
      "A. Most recent update",
      "B. Popularity",
      "C. Relevancy",
      "D. Manager assignment",
      "E. Number of views"
    ],
    ans: "ACE",
    topic: "Knowledge Management",
    exp: "Los resultados de búsqueda en Knowledge Base se pueden ordenar por: Actualización más reciente (A), Relevancia (C) y Número de vistas (E). Popularidad y asignación de manager no son opciones estándar."
  },
  {
    id: 7,
    q: "What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?",
    opts: [
      "A. RITM (Number)>REQ (Number)>PROCUREMENT (Number)",
      "B. REQ (Number)>RITM (Number)>PROCUREMENT (Number)",
      "C. REQ (Number)>RITM (Number)>TASK (Number)",
      "D. FULFILLMENT (Number)>RITM (Number)>TASK (Number)"
    ],
    ans: "C",
    topic: "Service Catalog",
    exp: "La jerarquía es: REQ (Request) → RITM (Request Item) → TASK (Tarea de fulfillment). Esta es la ruta estándar para ver las tareas de cumplimiento."
  },
  {
    id: 8,
    q: "Which term refers to application menus and modules which you may want to access quickly and often?",
    opts: [
      "A. Breadcrumb",
      "B. Favorite",
      "C. Tag",
      "D. Bookmark"
    ],
    ans: "B",
    topic: "Platform Navigation",
    exp: "Los 'Favorites' (Favoritos) son accesos directos en el Application Navigator para módulos y páginas de uso frecuente. Se marcan con una estrella."
  },
  {
    id: 9,
    q: "What is generated from the Service Catalog once a user places an order for an item or service?",
    opts: [
      "A. A change request",
      "B. An Order Guide",
      "C. A request",
      "D. An SLA"
    ],
    ans: "C",
    topic: "Service Catalog",
    exp: "Cuando un usuario hace un pedido en el Service Catalog, se genera un REQ (Request/Solicitud) con su correspondiente RITM (Request Item)."
  },
  {
    id: 10,
    q: "From the User menu, which actions can a user select? (Choose three.)",
    opts: [
      "A. Send Notifications",
      "B. Log Out ServiceNow",
      "C. Elevate Roles",
      "D. Impersonate Users",
      "E. Order from Service Catalog",
      "F. Approve Records"
    ],
    ans: "BCD",
    topic: "Platform Navigation",
    exp: "Desde el menú de usuario (esquina superior derecha) se puede: Cerrar sesión (B), Elevar roles temporalmente (C) e Impersonar usuarios para pruebas (D)."
  },
  {
    id: 11,
    q: "Buttons, form links, and context menu items are all examples of what type of functionality?",
    opts: [
      "A. Business Rule",
      "B. UI Action",
      "C. Client Script",
      "D. UI Policy"
    ],
    ans: "B",
    topic: "UI Development",
    exp: "Las UI Actions son botones, enlaces de formulario y elementos de menú contextual que se ejecutan cuando el usuario interactúa con la interfaz."
  },
  {
    id: 12,
    q: "Which of the following is true of Service Catalog Items in relation to the Service Catalog?",
    opts: [
      "A. They run behind the scenes.",
      "B. They are the building blocks.",
      "C. They are optional.",
      "D. They provide options."
    ],
    ans: "B",
    topic: "Service Catalog",
    exp: "Los Catalog Items son los bloques de construcción del Service Catalog. Sin ellos el catálogo no tendría contenido para ofrecer a los usuarios."
  },
  {
    id: 13,
    q: "Table Access Control rules are processed in the following order:",
    opts: [
      "A. any table name (wildcard), parent table name, table name",
      "B. table name, parent table name, any table name (wildcard)",
      "C. parent table name, table name, any table name (wildcard)",
      "D. any table name (wildcard), table name, parent table name"
    ],
    ans: "B",
    topic: "Security / Access Control",
    exp: "Las ACL se procesan de más específico a menos específico: Nombre de tabla específico → Tabla padre → Comodín (*). La primera regla que coincide se aplica."
  },
  {
    id: 14,
    q: "What is the platform name for the User table?",
    opts: [
      "A. u_users",
      "B. sys_users",
      "C. x_users",
      "D. sys_user"
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "La tabla de usuarios en ServiceNow se llama 'sys_user' (sin 's' al final). El prefijo 'sys_' indica tablas de sistema nativas de ServiceNow."
  },
  {
    id: 15,
    q: "A REQ number in the Service Catalog represents:",
    opts: [
      "A. the order number",
      "B. the stage",
      "C. the task to complete",
      "D. the individual item in the order"
    ],
    ans: "A",
    topic: "Service Catalog",
    exp: "REQ = Request (Solicitud) = número de orden completa. RITM = ítem individual dentro de esa orden. TASK = tarea de fulfillment."
  },
  {
    id: 16,
    q: "Which would NOT appear in the History section of the Application Navigator?",
    opts: [
      "A. Records",
      "B. UI Pages",
      "C. Lists",
      "D. Forms"
    ],
    ans: "B",
    topic: "Platform Navigation",
    exp: "El historial del Application Navigator registra records, listas y formularios visitados. Las UI Pages no aparecen en el historial de navegación."
  },
  {
    id: 17,
    q: "Which one of the following statements is a recommendation from ServiceNow about Update Sets?",
    opts: [
      "A. Avoid using the Default Update Set as an Update Set for moving customizations from instance to instance",
      "B. Before moving customizations from instance to instance with Update Sets, ensure that both instances are different versions",
      "C. Use the Baseline Update Set to store the contents of items after they are changed the first time",
      "D. Once an Update Set is closed as 'Complete', change it back to 'In Progress' until it is applied to another instance"
    ],
    ans: "A",
    topic: "Update Sets",
    exp: "ServiceNow recomienda NO usar el Default Update Set para mover personalizaciones. Se debe crear un Update Set específico para cada proyecto."
  },
  {
    id: 18,
    q: "Which of the following is used to initiate a flow?",
    opts: [
      "A. A Trigger",
      "B. Core Action",
      "C. A spoke",
      "D. An Event"
    ],
    ans: "A",
    topic: "Flow Designer",
    exp: "En Flow Designer, un Trigger (disparador) es lo que inicia un flujo. Puede ser un trigger de record, scheduled o manual. Las acciones y spokes son partes del flujo, no lo inician."
  },
  {
    id: 19,
    q: "For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?",
    opts: [
      "A. Service Catalog variables can only be used in Record Producers",
      "B. Service Catalog variables can only be used in Order Guides",
      "C. Service Catalog variables cannot affect the order price",
      "D. Service Catalog variables are global by default"
    ],
    ans: "D",
    topic: "Service Catalog",
    exp: "Las variables del Service Catalog son globales por defecto, lo que significa que pueden reutilizarse en múltiples Catalog Items."
  },
  {
    id: 20,
    q: "Which one of the following statements is true about Column Context Menus?",
    opts: [
      "A. It displays actions such as creating quick reports, configuring the list, and exporting data",
      "B. It displays actions related to filtering options, assigning tags, and search",
      "C. It displays actions related to viewing and filtering the entire list",
      "D. It displays actions such as view form, view related task, and add relationship"
    ],
    ans: "A",
    topic: "Lists & Filters",
    exp: "El Column Context Menu (clic en encabezado de columna) ofrece acciones como crear reportes rápidos, configurar la lista y exportar datos."
  },
  {
    id: 21,
    q: "Which ServiceNow products can be used to discover and populate the CMDB? (Choose two.)",
    opts: [
      "A. Discovery",
      "B. IntegrationHub ETL",
      "C. Finder",
      "D. CMDB Plug-in",
      "E. CMDB Integration Dashboard"
    ],
    ans: "AB",
    topic: "CMDB",
    exp: "Discovery descubre infraestructura automáticamente. IntegrationHub ETL permite importar datos de fuentes externas al CMDB."
  },
  {
    id: 22,
    q: "When using the Load Data and Transform Map process, what is the Mapping Assist used for?",
    opts: [
      "A. Mapping fields using the Import Log",
      "B. Mapping fields using Transform History",
      "C. Mapping fields using an SLA",
      "D. Mapping fields using a Field Map"
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "Mapping Assist es una herramienta visual que ayuda a mapear campos del origen al destino usando un Field Map, de forma intuitiva."
  },
  {
    id: 23,
    q: "Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?",
    opts: [
      "A. The CMDB contains data about tangible and intangible business assets",
      "B. The CMDB contains the Business Rules that direct the intangible, configurable assets used by a company",
      "C. The CMDB archives all Service Management PaaS equipment metadata and usage statistics",
      "D. The CMDB contains ITIL process data pertaining to configuration items"
    ],
    ans: "A",
    topic: "CMDB",
    exp: "El CMDB almacena datos sobre Configuration Items (CIs), que incluyen activos tangibles (servidores, laptops) e intangibles (aplicaciones, servicios)."
  },
  {
    id: 24,
    q: "In what order should filter elements be specified?",
    opts: [
      "A. Field, Operator, then Value",
      "B. Field, Operator, then Condition",
      "C. Operator, Condition, then Value",
      "D. Value, Operator, then Field"
    ],
    ans: "A",
    topic: "Lists & Filters",
    exp: "Los filtros en ServiceNow siempre siguen el orden: Campo → Operador → Valor. Ejemplo: 'Priority' (campo) 'is' (operador) 'High' (valor)."
  },
  {
    id: 25,
    q: "Which statement is true about business rules?",
    opts: [
      "A. A business rule must run before a database action occurs",
      "B. A business rule can be a piece of Javascript",
      "C. A business rule must not run before a database action occurs",
      "D. A business rule monitors fields on a form"
    ],
    ans: "B",
    topic: "Business Rules",
    exp: "Los Business Rules son scripts de JavaScript que se ejecutan en el servidor. Pueden correr antes (before), después (after), o de forma asíncrona respecto a operaciones de base de datos."
  },
  {
    id: 26,
    q: "Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)",
    opts: [
      "A. onSubmit",
      "B. onUpdate",
      "C. onCellEdit",
      "D. onLoad",
      "E. onEdit",
      "F. onChange"
    ],
    ans: "ACDF",
    topic: "Client Scripts",
    exp: "Los 4 tipos de Client Scripts son: onLoad, onChange, onSubmit y onCellEdit. onUpdate y onEdit no existen como tipos de client script en ServiceNow."
  },
  {
    id: 27,
    q: "Which type of tables may be extended by other tables, but do not extend another table?",
    opts: [
      "A. Base Tables",
      "B. Core Tables",
      "C. Extended Tables",
      "D. Custom Tables"
    ],
    ans: "A",
    topic: "Tables & Database",
    exp: "Las Base Tables (como Task) son tablas raíz que otras tablas extienden (herencia). Ellas mismas no extienden ninguna otra tabla. Incident, Change, Problem extienden Task."
  },
  {
    id: 28,
    q: "Which of the following statement describes the purpose of an Order Guide?",
    opts: [
      "A. Order Guides restrict the number of items in an order to only one item per request",
      "B. Order Guide provide a list of guidelines for Administrators on how to set up item variables",
      "C. Order Guide provide the ability to order multiple, related items as one request",
      "D. Order Guides take the user directly to the checkout without prompting for information"
    ],
    ans: "C",
    topic: "Service Catalog",
    exp: "Un Order Guide agrupa múltiples Catalog Items relacionados que se piden juntos en una sola solicitud. Ejemplo: 'Nuevo empleado' que incluye laptop, accesos y teléfono."
  },
  {
    id: 29,
    q: "Which tool is used to have conversations with logged-in users in real-time?",
    opts: [
      "A. Connect Chat",
      "B. Now Messenger",
      "C. User Presence",
      "D. Comments"
    ],
    ans: "A",
    topic: "Collaboration",
    exp: "Connect Chat es la herramienta de mensajería en tiempo real de ServiceNow para comunicación entre usuarios dentro de la plataforma."
  },
  {
    id: 30,
    q: "Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)",
    opts: [
      "A. Service Processes",
      "B. User Permissions",
      "C. Tables and Fields",
      "D. A Database",
      "E. The Dependency View"
    ],
    ans: "ACDE",
    topic: "CMDB",
    exp: "El CMDB se asocia con: Procesos de servicio (A), Tablas y campos (C), una base de datos (D) y la vista de dependencias (E). Los permisos de usuario no son un concepto central del CMDB."
  },
  {
    id: 31,
    q: "What is a formatter? Select one of the following.",
    opts: [
      "A. A formatter allows you to configure applications on your instance",
      "B. A formatter is a form element used to display information that is not a field in the record",
      "C. A formatter allows you to populate fields automatically",
      "D. A formatter is a set of conditions applied to a table to help find and work with data"
    ],
    ans: "B",
    topic: "Forms & Fields",
    exp: "Un Formatter es un elemento de formulario que muestra información que no es un campo del registro (como separadores, Activity Stream, o Approval History)."
  },
  {
    id: 32,
    q: "When searching using the App Navigator search field, what can be returned? (Choose four.)",
    opts: [
      "A. Names of Applications and Modules",
      "B. Names of Modules",
      "C. Names of Applications",
      "D. Favorites",
      "E. History Records",
      "F. Titles of Dashboard Gauges"
    ],
    ans: "ABCD",
    topic: "Platform Navigation",
    exp: "El campo de búsqueda del App Navigator devuelve: nombres de aplicaciones y módulos (A, B, C) y Favoritos (D). No devuelve historial ni títulos de gauges."
  },
  {
    id: 33,
    q: "Which technique is used to get information from a series of referenced fields from different tables?",
    opts: [
      "A. Table-Walking",
      "B. Sys_ID Pulling",
      "C. Dot-Walking",
      "D. Record-Hopping"
    ],
    ans: "C",
    topic: "Tables & Database",
    exp: "Dot-Walking (caminar con puntos) permite acceder a campos de tablas relacionadas usando la notación de puntos. Ejemplo: caller_id.department.name."
  },
  {
    id: 34,
    q: "What is a schema map?",
    opts: [
      "A. A schema map enables administrators to define records from specific tables as trouble sources for Configuration Items",
      "B. A schema map graphically organizes the visual task boards for the CMDB",
      "C. A schema map graphically displays the Configuration Items that support a business service",
      "D. A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema"
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "El Schema Map muestra visualmente las tablas y sus relaciones en la base de datos, permitiendo navegar entre ellas fácilmente."
  },
  {
    id: 35,
    q: "Which one of the following statements best describes the purpose of an Update Set?",
    opts: [
      "A. An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit to other systems",
      "B. By default, an Update Set includes customizations, Business Rules, and homepages",
      "C. An Update Set is a group of customizations that is moved from Production to Development",
      "D. By default, the changes included in an Update Set are visible only in the instance to which they are applied"
    ],
    ans: "A",
    topic: "Update Sets",
    exp: "Un Update Set agrupa una serie de cambios/personalizaciones en un conjunto con nombre para moverlo como unidad entre instancias (Dev → Test → Prod)."
  },
  {
    id: 36,
    q: "Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)",
    opts: [
      "A. Banner Image",
      "B. Record Number Format",
      "C. Browser Tab Title",
      "D. System Date Format",
      "E. Form Header Size"
    ],
    ans: "ACD",
    topic: "Platform Configuration",
    exp: "Desde Basic Configuration UI16 se puede personalizar: Banner Image (A), Browser Tab Title (C) y System Date Format (D). El formato de número de registro y el tamaño del header del formulario se configuran en otro lugar."
  },
  {
    id: 37,
    q: "What is the function of user impersonation?",
    opts: [
      "A. Testing and visibility",
      "B. Activate verbose logging",
      "C. View custom perspectives",
      "D. Unlock Application master list"
    ],
    ans: "A",
    topic: "User Administration",
    exp: "La impersonación de usuarios sirve para testing y visibilidad: permite a un admin ver la plataforma exactamente como la ve un usuario específico, sin necesitar su contraseña."
  },
  {
    id: 38,
    q: "What information does the System Dictionary contain?",
    opts: [
      "A. The human-readable labels and language settings",
      "B. The definition for each table and column",
      "C. The information on how tables relate to each other",
      "D. The language dictionary used for spell checking"
    ],
    ans: "B",
    topic: "Tables & Database",
    exp: "El System Dictionary contiene la definición de cada tabla y columna de la base de datos: tipo de campo, longitud, etiqueta, valor por defecto, etc."
  },
  {
    id: 39,
    q: "When working on a form, what is the difference between Insert and Update operations?",
    opts: [
      "A. Insert creates a new record and Update saves changes, both remain on the form",
      "B. Insert creates a new record and Update saves changes, both exit the form",
      "C. Insert saves changes and exits the form, Update saves changes and remains on the form",
      "D. Insert saves changes and remains on the form, Update saves changes and exits the form"
    ],
    ans: "B",
    topic: "Forms & Fields",
    exp: "Insert crea un nuevo registro y actualiza permaneciendo en el formulario. Update (Save) guarda los cambios y permanece en el mismo registro. Ambos guardan, pero el comportamiento posterior difiere."
  },
  {
    id: 40,
    q: "How is the Event Log different from the Event Registry?",
    opts: [
      "A. Event Log contains generated Events, the Event Registry is a table of Event definitions",
      "B. Event Log is formatted in the Log style, the Event Registry displays different fields",
      "C. Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were triggered during the day (24-hour period)",
      "D. Event Log is the same as the Event Registry"
    ],
    ans: "A",
    topic: "Platform Configuration",
    exp: "Event Log = registro de eventos generados (instancias reales). Event Registry = catálogo/definición de los tipos de eventos disponibles. Son tablas diferentes con propósitos distintos."
  },
  {
    id: 41,
    q: "What is a Dictionary Override?",
    opts: [
      "A. A Dictionary Override is an incoming customer update in an Update Set which applies to the same objects as a newer local customer update",
      "B. A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT services",
      "C. A Dictionary Override is a task within a flow that requests an action before the flow can continue",
      "D. A Dictionary Override sets field properties in extended tables"
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "Un Dictionary Override permite cambiar las propiedades de un campo heredado (como hacerlo obligatorio o cambiar su etiqueta) en una tabla extendida, sin modificar la tabla padre."
  },
  {
    id: 42,
    q: "Which group of permissions is used to control Application and Module access?",
    opts: [
      "A. Access Control Rules",
      "B. UI Policies",
      "C. Roles",
      "D. Assignment Rules"
    ],
    ans: "C",
    topic: "Security / Access Control",
    exp: "Los Roles controlan el acceso a aplicaciones y módulos en el Application Navigator. Las ACL controlan acceso a tablas y campos específicos."
  },
  {
    id: 43,
    q: "What is a Record Producer?",
    opts: [
      "A. A Record Producer is a type of Catalog Item that is used for Requests, not Services",
      "B. A Record Producer creates user records",
      "C. A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests",
      "D. A Record Producer is a type of a Catalog Item that allows users to create task-based records from the Service Catalog"
    ],
    ans: "D",
    topic: "Service Catalog",
    exp: "Un Record Producer es un tipo de Catalog Item que permite a los usuarios crear registros de cualquier tabla (como Incidents, Problems, Changes) directamente desde el Service Catalog."
  },
  {
    id: 44,
    q: "Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?",
    opts: [
      "A. They direct the user to a record producer",
      "B. They direct the user to a catalog property",
      "C. They direct the user to a catalog UI policy",
      "D. They direct the user to a catalog client script"
    ],
    ans: "A",
    topic: "Service Catalog",
    exp: "Servicios como 'Create Incident' o 'Password Reset' en el catálogo son Record Producers: dirigen al usuario a crear un registro en una tabla de ServiceNow."
  },
  {
    id: 45,
    q: "What is the Import Set Table?",
    opts: [
      "A. A table where data will be placed, post-transformation",
      "B. A table that determines relationships",
      "C. A staging area for imported records",
      "D. A repository for Update Set information"
    ],
    ans: "C",
    topic: "Import / Transform Maps",
    exp: "La Import Set Table es el área de preparación (staging) donde los datos importados se almacenan temporalmente antes de ser transformados y enviados a la tabla destino."
  },
  {
    id: 46,
    q: "What is a characteristic of importing data into ServiceNow?",
    opts: [
      "A. An existing Transform Map can be used one time on the same import set",
      "B. Coalesce fields are used only after running Transform",
      "C. Any user can manage and set up import sets",
      "D. An existing Transform Map can be used multiple times on the same import set"
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "Un Transform Map existente puede reutilizarse múltiples veces sobre el mismo Import Set. Los campos de coalesce se configuran antes de la transformación."
  },
  {
    id: 47,
    q: "What module in the Service Catalog application does an Administrator access to begin creating a new item?",
    opts: [
      "A. Maintain Categories",
      "B. Maintain Items",
      "C. Content Items",
      "D. Items"
    ],
    ans: "B",
    topic: "Service Catalog",
    exp: "Para crear nuevos ítems del catálogo, el administrador va al módulo 'Maintain Items' dentro de la aplicación Service Catalog."
  },
  {
    id: 48,
    q: "Which of the following allows a user to edit field values in a list without opening the form?",
    opts: [
      "A. Data Editor",
      "B. Edit Menu",
      "C. List Editor",
      "D. Form Designer"
    ],
    ans: "C",
    topic: "Lists & Filters",
    exp: "El List Editor permite editar valores de campos directamente desde la vista de lista, sin necesidad de abrir el formulario del registro."
  },
  {
    id: 49,
    q: "Which three Variable Types can be added to a Service Catalog Item?",
    opts: [
      "A. True/False, Multiple Choice, and Ordered",
      "B. True/False, Checkbox, and Number List",
      "C. Number List, Single Line Text, and Reference",
      "D. Multiple Choice, Select Box, and Checkbox"
    ],
    ans: "D",
    topic: "Service Catalog",
    exp: "Los tipos de variable más comunes del Service Catalog incluyen Multiple Choice (botones de radio), Select Box (desplegable) y Checkbox (casilla de verificación)."
  },
  {
    id: 50,
    q: "How are Workflows moved between instances?",
    opts: [
      "A. Workflows are moved using Update Sets",
      "B. Workflows are moved using Transform Maps",
      "C. Workflows are moved using Application Sets",
      "D. Workflows cannot be moved between instances"
    ],
    ans: "A",
    topic: "Update Sets",
    exp: "Los Workflows se mueven entre instancias usando Update Sets, al igual que otras personalizaciones de la plataforma."
  },
  {
    id: 51,
    q: "The baseline Service Catalog homepage contains links to which of the following components?",
    opts: [
      "A. Record Producers, Order Guides, and Catalog Items",
      "B. Order Guides, Item Variables, and flows",
      "C. Order Guides, Catalog Items, and flows",
      "D. Record Producers, Order Guides, and Item Variables"
    ],
    ans: "A",
    topic: "Service Catalog",
    exp: "La página principal base del Service Catalog contiene enlaces a Record Producers, Order Guides y Catalog Items."
  },
  {
    id: 52,
    q: "Which of the following statements is true when a new table is created by extending another table?",
    opts: [
      "A. The new table archives the parent table and assumed its roles in the database",
      "B. The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but none of the existing fields",
      "C. The new table inherits all of the fields of the parent table and can also contain new fields unique to itself",
      "D. The new table inherits all of the fields, but does not inherit Access Control rules, Client Scripts, and UI Policies of the parent table"
    ],
    ans: "C",
    topic: "Tables & Database",
    exp: "Cuando una tabla extiende otra, hereda todos los campos de la tabla padre y puede agregar campos únicos propios. También hereda Business Rules, Client Scripts, ACLs y UI Policies."
  },
  {
    id: 53,
    q: "Where can Admins check which release is running on an ServiceNow instance?",
    opts: [
      "A. Memory Stats module",
      "B. Stats module",
      "C. System.upgraded table",
      "D. Transactions log"
    ],
    ans: "B",
    topic: "Platform Configuration",
    exp: "El módulo Stats (System Diagnostics > Stats) muestra información sobre la versión de ServiceNow que está corriendo en la instancia."
  },
  {
    id: 54,
    q: "A knowledge article must be which of the following states to display to a user?",
    opts: [
      "A. Published",
      "B. Drafted",
      "C. Retired",
      "D. Reviewed"
    ],
    ans: "A",
    topic: "Knowledge Management",
    exp: "Un artículo de Knowledge Base debe estar en estado 'Published' (Publicado) para que los usuarios puedan verlo. Los artículos en Draft o Retired no son visibles para los usuarios finales."
  },
  {
    id: 55,
    q: "What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?",
    opts: [
      "A. Answer Agent",
      "B. live Feed",
      "C. Virtual Agent",
      "D. Connect Chat"
    ],
    ans: "C",
    topic: "Platform Features",
    exp: "Virtual Agent es la plataforma de chatbot conversacional de ServiceNow que ayuda a los usuarios a obtener información y completar tareas comunes mediante lenguaje natural."
  },
  {
    id: 56,
    q: "What is the purpose of a Related List?",
    opts: [
      "A. To create a one-to-many relationship",
      "B. To dot walk to a core table",
      "C. To present related fields",
      "D. To present related records"
    ],
    ans: "D",
    topic: "Forms & Fields",
    exp: "Un Related List muestra en el formulario los registros relacionados de otra tabla. Por ejemplo, en un Incident se pueden ver sus Tareas relacionadas."
  },
  {
    id: 57,
    q: "Which one of the following statements describes the purpose of a Service Catalog flow?",
    opts: [
      "A. A Service Catalog flow generates three basic components: item variable types, tasks, and approvals",
      "B. Although a Service Catalog flow cannot send notifications, the flow drives complex fulfillment processes",
      "C. A Service Catalog flow is used to drive complex fulfillment processes and sends notifications to defined users or groups",
      "D. A Service Catalog flow generates three basic components: item variable types, tasks, and notifications"
    ],
    ans: "C",
    topic: "Flow Designer",
    exp: "Un Service Catalog flow impulsa procesos de fulfillment complejos y envía notificaciones a usuarios o grupos definidos."
  },
  {
    id: 58,
    q: "Which term best describes something that is created, has work performed upon it, and is eventually moved to a state of closed?",
    opts: [
      "A. report",
      "B. flow",
      "C. event",
      "D. task"
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "Un Task (tarea) en ServiceNow es algo que se crea, tiene trabajo realizado y eventualmente se cierra. La tabla Task es la tabla base de Incident, Change Request, Problem, etc."
  },
  {
    id: 59,
    q: "Which are valid Service Now User Authentication Methods? (Choose three.)",
    opts: [
      "A. XML feed",
      "B. Local database",
      "C. LDAP",
      "D. SSO",
      "E. FTP authentication"
    ],
    ans: "BCD",
    topic: "User Administration",
    exp: "ServiceNow soporta autenticación mediante: Base de datos local (B), LDAP (C) y SSO/SAML (D). XML feed y FTP no son métodos de autenticación."
  },
  {
    id: 60,
    q: "Access Control rules may be defined with which of the following permission requirements? (Choose three.)",
    opts: [
      "A. Roles",
      "B. Conditional Expressions",
      "C. Assignment Rules",
      "D. Scripts",
      "E. User Criteria",
      "F. Groups"
    ],
    ans: "ABD",
    topic: "Security / Access Control",
    exp: "Las ACL pueden requerir: Roles (A), Expresiones condicionales (B) y Scripts (D). Se pueden combinar con lógica AND para mayor precisión."
  },
  {
    id: 61,
    q: "Which section of the ServiceNow UI allows you to perform a global search?",
    opts: [
      "A. Application Navigator",
      "B. Banner frame",
      "C. List pane",
      "D. Content frame"
    ],
    ans: "B",
    topic: "Platform Navigation",
    exp: "La búsqueda global se realiza desde el Banner Frame (barra superior), usando el campo de búsqueda con el icono de lupa."
  },
  {
    id: 62,
    q: "How do you make a list filter available to everyone?",
    opts: [
      "A. Make active, assign a name, and save",
      "B. Assign a group, set visibility, and save",
      "C. Assign a name, set visibility, and save",
      "D. Make active, set visibility, and save"
    ],
    ans: "C",
    topic: "Lists & Filters",
    exp: "Para que un filtro de lista esté disponible para todos: asígnale un nombre, configura la visibilidad como 'Everyone' y guarda."
  },
  {
    id: 63,
    q: "What would NOT appear in the Application Navigator if 'service' is typed into the filter field?",
    opts: [
      "A. Configuration > Business Services",
      "B. Self-Service > Knowledge",
      "C. Service Portal > Widgets",
      "D. Incident > Assigned to me"
    ],
    ans: "D",
    topic: "Platform Navigation",
    exp: "El filtro del Application Navigator busca en nombres de aplicaciones y módulos. 'Incident > Assigned to me' no contiene la palabra 'service' por lo que no aparecería."
  },
  {
    id: 64,
    q: "Which of the following is used to categorize, flag, and locate records?",
    opts: [
      "A. Search",
      "B. Favorites",
      "C. Tags",
      "D. Bookmarks"
    ],
    ans: "C",
    topic: "Platform Navigation",
    exp: "Los Tags (etiquetas) se usan para categorizar, marcar y localizar registros en ServiceNow. Son visibles en listas y pueden compartirse."
  },
  {
    id: 65,
    q: "Which tool should be used to populate commonly used fields in a form?",
    opts: [
      "A. Template",
      "B. Reference Qualifier",
      "C. Formatter",
      "D. Assignment Rule"
    ],
    ans: "A",
    topic: "Forms & Fields",
    exp: "Los Templates (plantillas) permiten pre-rellenar automáticamente campos comunes de un formulario con valores predefinidos."
  },
  {
    id: 66,
    q: "How is a group defined in ServiceNow?",
    opts: [
      "A. A group is one record stored in the Group Type [sys_user_group_type] table",
      "B. A group is one record stored in the Group [sys_user_group] table",
      "C. A group defines a set of users that share the same location",
      "D. A group defines a set of users that share the same job title"
    ],
    ans: "B",
    topic: "User Administration",
    exp: "Un grupo en ServiceNow es un registro en la tabla Group [sys_user_group]. Los grupos se usan para asignar trabajo y controlar acceso."
  },
  {
    id: 67,
    q: "What is a role in ServiceNow?",
    opts: [
      "A. A role is one record in the Role [user_sys_role] table",
      "B. A role is a set of modules for a particular application",
      "C. A role is one record in the Role [sys_user_role] table",
      "D. A role is a persona used in Live Feed Chat"
    ],
    ans: "C",
    topic: "Security / Access Control",
    exp: "Un rol en ServiceNow es un registro en la tabla Role [sys_user_role] que agrupa permisos y se asigna a usuarios o grupos para controlar el acceso."
  },
  {
    id: 68,
    q: "What is a Notification?",
    opts: [
      "A. A new Knowledge article created by a Business Rule",
      "B. A tool for alerting users that events that concern them have occurred",
      "C. A message Connect related to a Change Request",
      "D. An email file attachment"
    ],
    ans: "B",
    topic: "Platform Features",
    exp: "Una Notification es una herramienta que alerta a los usuarios sobre eventos que les conciernen, típicamente mediante email, SMS o notificaciones push."
  },
  {
    id: 69,
    q: "Which one of the following is NOT a type of Visual Task Board?",
    opts: [
      "A. Flexible",
      "B. Freeform",
      "C. Feature",
      "D. Guided boards"
    ],
    ans: "C",
    topic: "Platform Features",
    exp: "Los tipos de Visual Task Board son: Flexible (columnas configurables), Freeform (libre) y Guided (guiado con workflow). 'Feature' no es un tipo de Visual Task Board."
  },
  {
    id: 70,
    q: "What is (are) best practice(s) regarding users/groups/roles? (Choose two.)",
    opts: [
      "A. You should never assign roles to groups.",
      "B. You should assign roles to users.",
      "C. You should add users to groups.",
      "D. You should assign roles to groups."
    ],
    ans: "CD",
    topic: "User Administration",
    exp: "Las mejores prácticas son: agregar usuarios a grupos (C) y asignar roles a grupos (D). Esto simplifica la administración y el mantenimiento de permisos."
  },
  {
    id: 71,
    q: "What are two ways to generate an Event? (Choose two.)",
    opts: [
      "A. Business Rule",
      "B. Workflow",
      "C. Log entry",
      "D. Knowledge article publication"
    ],
    ans: "AB",
    topic: "Platform Features",
    exp: "Los Events pueden generarse mediante Business Rules (usando gs.eventQueue()) y Workflows. Estos son los dos métodos principales de generación de eventos."
  },
  {
    id: 72,
    q: "Which core table in the ServiceNow platform provides a series of standard fields used on each of the tables that extend it, such as the Incident [incident] and Problem [problem] tables?",
    opts: [
      "A. Task [task]",
      "B. Assignment [assignment]",
      "C. Service [service]",
      "D. Workflow [workflow]"
    ],
    ans: "A",
    topic: "Tables & Database",
    exp: "La tabla Task [task] es la tabla base que provee campos estándar (como Number, Assigned to, State, Priority) a todas las tablas que la extienden: Incident, Problem, Change, etc."
  },
  {
    id: 73,
    q: "Which of the following statements describes how data is organized in a table?",
    opts: [
      "A. A column is a field in the database and a record is one user",
      "B. A column is one field and a record is one row",
      "C. A column is one field and a record is one column",
      "D. A column contains data from one user and a record is one set of fields"
    ],
    ans: "B",
    topic: "Tables & Database",
    exp: "En una tabla de base de datos: una columna = un campo (atributo), y un registro = una fila (un conjunto completo de datos de un elemento)."
  },
  {
    id: 74,
    q: "What is a sys_id?",
    opts: [
      "A. Unique 32-character identifier that is assigned to every record",
      "B. A client-side Business Rule",
      "C. A server-side Business Rule",
      "D. Unique 64-character identifier that is assigned to every record"
    ],
    ans: "A",
    topic: "Tables & Database",
    exp: "El sys_id es un identificador único de 32 caracteres (GUID) que se asigna automáticamente a cada registro en ServiceNow."
  },
  {
    id: 75,
    q: "When creating a global custom table named 'abc', what is the table name that is automatically assigned by the platform?",
    opts: [
      "A. snc_abc",
      "B. abc",
      "C. u_abc",
      "D. sys_abc"
    ],
    ans: "C",
    topic: "Tables & Database",
    exp: "Las tablas personalizadas globales reciben el prefijo 'u_' automáticamente. Por ejemplo, una tabla llamada 'abc' se crea como 'u_abc'."
  },
  {
    id: 76,
    q: "Access Control rules may provide access security for which of the following database objects?",
    opts: [
      "A. For a specific role, group, or user",
      "B. For a specific row, column, or table",
      "C. For specific groups",
      "D. For a specific CMDB Configuration Item"
    ],
    ans: "B",
    topic: "Security / Access Control",
    exp: "Las ACL (Access Control Lists) pueden proveer seguridad a nivel de tabla (tabla completa), columna (campo específico) o fila (registro específico)."
  },
  {
    id: 77,
    q: "What is the primary application used to load data into ServiceNow?",
    opts: [
      "A. Service Level Management",
      "B. Configuration",
      "C. System Import Sets",
      "D. System Update Sets"
    ],
    ans: "C",
    topic: "Import / Transform Maps",
    exp: "System Import Sets es la aplicación principal para importar datos externos a ServiceNow. Permite cargar datos, mapearlos y transformarlos a tablas de destino."
  },
  {
    id: 78,
    q: "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
    opts: [
      "A. Select Data Source, Schedule Transform",
      "B. Load Data, Create Transform Map, Run Transform",
      "C. Define Data Source, Select Transform Map, Run Transform",
      "D. Select Import Set, Select Transform Map, Run Transform"
    ],
    ans: "B",
    topic: "Import / Transform Maps",
    exp: "El proceso estándar para importar desde una hoja de cálculo es: Load Data (cargar el archivo), Create Transform Map (mapear campos) y Run Transform (ejecutar la transformación)."
  },
  {
    id: 79,
    q: "Which tool is used for creating dependencies between configuration items in the CMDB?",
    opts: [
      "A. CI Relationship Editor",
      "B. CMDB Builder",
      "C. CI Service Manager",
      "D. CI Class Manager"
    ],
    ans: "A",
    topic: "CMDB",
    exp: "El CI Relationship Editor es la herramienta para crear y gestionar relaciones entre Configuration Items en el CMDB."
  },
  {
    id: 80,
    q: "What is the difference between a UI Policy and a Data Policy?",
    opts: [
      "A. Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI Policies are set only by web services",
      "B. Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies",
      "C. Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form interactions",
      "D. Data Policies run only after UI Policies run successfully"
    ],
    ans: "C",
    topic: "UI Development",
    exp: "Data Policies se aplican independientemente de cómo se ingresan los datos (formulario, API, importación). UI Policies solo se aplican en la interfaz de usuario del formulario."
  },
  {
    id: 81,
    q: "Which one of the following is an accurate list of changes that are captured in an Update Set?",
    opts: [
      "A. Changes made to: tables, forms, schedules, and client scripts",
      "B. Changes made to: tables, forms, Business Rules, and data records",
      "C. Changes made to: tables, forms, groups, and configuration items (CIs)",
      "D. Changes made to: tables, forms, views, and fields"
    ],
    ans: "D",
    topic: "Update Sets",
    exp: "Los Update Sets capturan cambios en: tablas, formularios, vistas y campos. No capturan datos de registros ni grupos."
  },
  {
    id: 82,
    q: "What are the steps to retrieve an Update Set?",
    opts: [
      "A. Verify Update Set is Complete, Retrieve, Preview, Apply",
      "B. Verify Update Set is Complete, Test Connection, Apply",
      "C. Verify Update Set is Complete, Test Connection, Commit",
      "D. Verify Update Set is Complete, Retrieve, Preview, Commit"
    ],
    ans: "D",
    topic: "Update Sets",
    exp: "Los pasos para aplicar un Update Set son: verificar que esté Completo → Retrieve (recuperar desde instancia fuente) → Preview (vista previa y revisión) → Commit (aplicar)."
  },
  {
    id: 83,
    q: "IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as",
    opts: [
      "A. an action",
      "B. a spoke",
      "C. a connection",
      "D. an integration step"
    ],
    ans: "B",
    topic: "Flow Designer",
    exp: "En IntegrationHub, las integraciones con APIs de terceros se llaman 'spokes'. Cada spoke es un conjunto de acciones predefinidas para un sistema externo."
  },
  {
    id: 84,
    q: "Which of the following protects applications by identifying and restricting access to available files and data?",
    opts: [
      "A. Application Configuration",
      "B. Verbose Log",
      "C. Access Control Rules",
      "D. Application Scope"
    ],
    ans: "D",
    topic: "Security / Access Control",
    exp: "Application Scope protege las aplicaciones restringiendo el acceso a sus archivos y datos. Evita que otras aplicaciones o scripts accedan a recursos de una aplicación con ámbito."
  },
  {
    id: 85,
    q: "Which one statement correctly describes Access Control rule evaluation?",
    opts: [
      "A. Table access rules are evaluated from the general to the specific",
      "B. If more than one rule applies to a record, the older rule is evaluated first",
      "C. If a row level rule and a field level rule exist, both rules must be true before an operation is allowed",
      "D. The role with the most permissions evaluates the rules first"
    ],
    ans: "C",
    topic: "Security / Access Control",
    exp: "Para que una operación sea permitida, tanto la regla a nivel de fila (tabla/registro) como la regla a nivel de campo deben evaluarse como verdaderas (lógica AND)."
  },
  {
    id: 86,
    q: "ServiceNow contains a resource which provides the following: A standard and shared set of service related definitions across ServiceNow products and platform that will enable and support true service level reporting. A CMDB framework across our products and platform that will enable and support multiple configuration strategies. What resource do these statements describe?",
    opts: [
      "A. Common Services Data Model (CSDM)",
      "B. Information Technology Service Management (ITSM)",
      "C. Configuration Management Database (CMDB)",
      "D. Information Technology Infrastructure Library (ITIL)"
    ],
    ans: "A",
    topic: "CMDB",
    exp: "El Common Services Data Model (CSDM) es el marco estándar de ServiceNow que define cómo estructurar los datos de servicios en el CMDB para soportar reporting y múltiples estrategias de configuración."
  },
  {
    id: 87,
    q: "An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
    opts: [
      "A. The Service Desk > My Groups Work list shows active work tasks that are not yet assigned.",
      "B. The manager does not have the itil role.",
      "C. The manager is not a member of the Service Desk group.",
      "D. The manager is not a member of the Network and Hardware groups.",
      "E. The Assignment Group manager field is empty."
    ],
    ans: "D",
    topic: "User Administration",
    exp: "El módulo 'My Groups Work' muestra las tareas de los grupos de los que el usuario es miembro. Si el manager no es miembro (solo manager), no verá las tareas."
  },
  {
    id: 88,
    q: "What do you need to do before you can use an Application-based trigger in your flow?",
    opts: [
      "A. Activate application trigger spoke",
      "B. Activate trigger security rules",
      "C. Activate application spoke, and plug-ins as needed",
      "D. Assign Application trigger role [sn_app_trigger_write] to SME",
      "E. Activate application plugins only"
    ],
    ans: "C",
    topic: "Flow Designer",
    exp: "Para usar un Application-based trigger necesitas activar el application spoke correspondiente y los plugins necesarios para esa aplicación."
  },
  {
    id: 89,
    q: "The ServiceNow platform includes which types of interfaces? (Choose three.)",
    opts: [
      "A. Now Mobile Apps",
      "B. Agent Control Center",
      "C. Back Office Dashboard",
      "D. Service Portals",
      "E. Now Platform® User Interfaces",
      "F. Field Service Taskboard"
    ],
    ans: "ADE",
    topic: "Platform Navigation",
    exp: "ServiceNow incluye tres tipos de interfaces principales: Now Mobile Apps (A), Service Portals (D) y Now Platform User Interfaces (E) — la interfaz principal de administración."
  },
  {
    id: 90,
    q: "Which of the following are not included in an Update Set, by default? (Choose four.)",
    opts: [
      "A. Homepages",
      "B. Data",
      "C. Published Workflows",
      "D. Business Rules",
      "E. Schedules",
      "F. Database changes",
      "G. Related Lists",
      "H. Report Definitions",
      "I. Scheduled Jobs",
      "J. Client Scripts",
      "K. Views"
    ],
    ans: "ABEI",
    topic: "Update Sets",
    exp: "Los Update Sets NO incluyen por defecto: Homepages (A), Data/registros (B), Schedules (E) y Scheduled Jobs (I). Sí incluyen Business Rules, Client Scripts, Workflows publicados, etc."
  },
  {
    id: 91,
    q: "You are showing your customer a new form that you have created for their new application. They would like to add a field to the form. Where could you do that? (Choose two.)",
    opts: [
      "A. Select Fields and Columns module",
      "B. Right click on form header, select Configure > Form Layout",
      "C. Click on context menu, select Configure > Form Designer",
      "D. Select Field Class Manager module"
    ],
    ans: "BC",
    topic: "Forms & Fields",
    exp: "Para agregar campos a un formulario: clic derecho en el encabezado del formulario > Configure > Form Layout (B) o Context Menu > Configure > Form Designer (C)."
  },
  {
    id: 92,
    q: "Which ServiceNow resource is a framework that ensures the data your ServiceNow application requires maps correctly to the appropriate CMDB tables?",
    opts: [
      "A. Common Service Date Model (CSDM)",
      "B. Service Mapping Utility (SMU)",
      "C. Service Schema Map (SSM)",
      "D. CMDB Class Manager (CMDBCM)",
      "E. CI Class Manager (C/CM)"
    ],
    ans: "A",
    topic: "CMDB",
    exp: "El CSDM (Common Services Data Model) es el framework que asegura que los datos de tu aplicación se mapeen correctamente a las tablas del CMDB."
  },
  {
    id: 93,
    q: "What do you activate when you want to add applications or functionality within your development instance?",
    opts: [
      "A. App Package",
      "B. Updated Pack",
      "C. Patch",
      "D. Plugin",
      "E. App Updated Set"
    ],
    ans: "D",
    topic: "Platform Configuration",
    exp: "Los Plugins son los componentes que se activan para agregar funcionalidad adicional a una instancia de ServiceNow. Una vez activado, no se puede desactivar."
  },
  {
    id: 94,
    q: "What field contains a record's 32-character, unique identifier?",
    opts: [
      "A. sn_rec_id",
      "B. rec_id",
      "C. u_id",
      "D. sys_id",
      "E. sn_gu_id",
      "F. sn_sys_id",
      "G. id"
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "El campo sys_id contiene el identificador único de 32 caracteres (GUID) de cada registro en ServiceNow."
  },
  {
    id: 95,
    q: "Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non-managers) can submit the order?",
    opts: [
      "A. Create Record Producer and use the Available For list to specify First Line [sn_first_line] role",
      "B. Create Catalog Item and use the Not Available list to specify the Manager Group",
      "C. Create Catalog Item and use the Available For list to specify ITIL [itil] role",
      "D. Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role"
    ],
    ans: "B",
    topic: "Service Catalog",
    exp: "Para restringir quién puede ver/pedir un Catalog Item, se usa la lista 'Not Available' para excluir al grupo Manager, asegurando que solo los trabajadores de primera línea puedan hacer el pedido."
  },
  {
    id: 96,
    q: "What is used frequently to move customizations from one instance to another?",
    opts: [
      "A. Update Sets",
      "B. Code Sets",
      "C. Update Packs",
      "D. Configuration Logs",
      "E. Remote Sets",
      "F. Local Sets",
      "G. Code Packs"
    ],
    ans: "A",
    topic: "Update Sets",
    exp: "Los Update Sets son el mecanismo estándar para mover personalizaciones entre instancias de ServiceNow (Dev → Test → Production)."
  },
  {
    id: 97,
    q: "What icon do you use to change the label on a Favorite?",
    opts: [
      "A. Clock",
      "B. Hamburger",
      "C. Pencil",
      "D. Three dots",
      "E. Triangle",
      "F. Star"
    ],
    ans: "C",
    topic: "Platform Navigation",
    exp: "Para cambiar la etiqueta de un Favorito, se usa el icono de lápiz (Pencil) que aparece al pasar el cursor sobre el favorito en el Application Navigator."
  },
  {
    id: 98,
    q: "What needs to be specified, when creating a Business Rule? (Choose four.)",
    opts: [
      "A. UI action",
      "B. Table",
      "C. Fields to update",
      "D. Who can run",
      "E. Script to run",
      "F. Application scope",
      "G. Update set",
      "H. Timing",
      "I. Condition to evaluate"
    ],
    ans: "BEHI",
    topic: "Business Rules",
    exp: "Al crear un Business Rule se debe especificar: la Tabla (B) sobre la que actúa, el Script (E), el Timing/cuándo se ejecuta (H) y la Condición (I) que lo dispara."
  },
  {
    id: 99,
    q: "What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?",
    opts: [
      "A. Task Escalation Clock",
      "B. Service Level Agreements",
      "C. Inactivity Monitor",
      "D. Response Time Clock",
      "E. Business Time Remaining"
    ],
    ans: "B",
    topic: "Platform Features",
    exp: "Los Service Level Agreements (SLAs) rastrean el tiempo que una tarea ha estado abierta y ayudan a asegurar que se complete dentro del tiempo acordado."
  },
  {
    id: 100,
    q: "What is a quick way to create a report from a list view?",
    opts: [
      "A. Click on filter breadcrumb, drag and drop on the Report > Create New module",
      "B. Click Funnel, define filter conditions, click Create Report",
      "C. Click Context Menu, select Create Report",
      "D. Apply filter, right click on column header, select Bar Chart",
      "E. Apply filter, right click on column header, select Create Report"
    ],
    ans: "D",
    topic: "Reporting & Metrics",
    exp: "Para crear un reporte rápido desde una lista: aplica un filtro, haz clic derecho en el encabezado de una columna y selecciona 'Bar Chart' (u otro tipo de gráfico). Esto crea un reporte directamente."
  }
];
