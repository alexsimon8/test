// CSA Exam Questions — Batch 2: Q101–Q200

const QUESTIONS_101_200 = [
  {
    id: 101,
    q: "What import utility do you use when the field names on the import set match the name of the fields on the Target table?",
    opts: [
      "A. Schema Mapping",
      "B. Automatic Mapping",
      "C. Mapping Assist",
      "D. Mapping Dashboard"
    ],
    ans: "B",
    topic: "Import / Transform Maps",
    exp: "Automatic Mapping mapea automáticamente los campos cuando los nombres del Import Set coinciden exactamente con los nombres de la tabla destino."
  },
  {
    id: 102,
    q: "As an IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?",
    opts: [
      "A. Knowledge",
      "B. ServiceNow Wiki",
      "C. Knowledge Now",
      "D. SharePoint",
      "E. Stack Overflow"
    ],
    ans: "A",
    topic: "Knowledge Management",
    exp: "Knowledge (Base de Conocimiento) es la interfaz de ServiceNow para consultar documentación interna, scripts de troubleshooting y FAQs."
  },
  {
    id: 103,
    q: "A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?",
    opts: [
      "A. Have them clear their cache.",
      "B. Have them use the gear icon to set the employee's time zone.",
      "C. Recommend they use Chrome, instead of Explorer.",
      "D. Use the system properties to correct the instance's time zone.",
      "E. Have them correct the time zone on their computer."
    ],
    ans: "B",
    topic: "User Administration",
    exp: "Para corregir fechas/horas incorrectas para un usuario específico, usa el icono de engranaje (User Preferences) para establecer la zona horaria del empleado."
  },
  {
    id: 104,
    q: "What are three security modules often used by the System Administrator? (Choose three.)",
    opts: [
      "A. System Properties > Security",
      "B. Utilities > Migrate Security",
      "C. System Security > Security",
      "D. Self-Service > My Access",
      "E. System Security > Access Control (ACL)",
      "F. Password Management > Security Questions",
      "G. System Security > High Security Settings"
    ],
    ans: "AEG",
    topic: "Security / Access Control",
    exp: "Los tres módulos de seguridad más usados por el admin son: System Properties > Security (A), System Security > Access Control ACL (E) y System Security > High Security Settings (G)."
  },
  {
    id: 105,
    q: "When testing a catalog item, having a manager approval flows, which of these best practices would you follow? (Choose three.)",
    opts: [
      "A. Make sure the latest flows are activated.",
      "B. Use the instance Incognito setting to quickly toggle between requester and approver.",
      "C. Impersonate the requester to ensure the form works.",
      "D. Make sure the requester's user record has a manager specified.",
      "E. Create and select your Testing Update Set, before starting the test cases.",
      "F. Use your Admin account, so you can approve the items quickly."
    ],
    ans: "ACD",
    topic: "Service Catalog",
    exp: "Las mejores prácticas al probar un Catalog Item con aprobación de manager: activar los últimos flows (A), impersonar al solicitante (C) y verificar que el usuario tenga un manager asignado (D)."
  },
  {
    id: 106,
    q: "What is a no-code approach to control the mandatory or read-only state of a form field?",
    opts: [
      "A. UI Action",
      "B. Client Script",
      "C. UI Script",
      "D. UI Rule",
      "E. UI Policy"
    ],
    ans: "E",
    topic: "UI Development",
    exp: "Las UI Policies son el enfoque sin código (no-code) para controlar si un campo es obligatorio, de solo lectura o visible. No requieren escribir JavaScript."
  },
  {
    id: 107,
    q: "When moving multiple update sets at one time, what might you do to facilitate the move?",
    opts: [
      "A. Batch",
      "B. Verify",
      "C. Test",
      "D. Preview"
    ],
    ans: "A",
    topic: "Update Sets",
    exp: "La función Batch permite mover múltiples Update Sets a la vez, agrupándolos en un solo lote para facilitar el proceso de migración."
  },
  {
    id: 108,
    q: "What is specified in an Access Control rule?",
    opts: [
      "A. Groups, Conditional Expressions and Workflows",
      "B. Table Schema, CRUD, and User Authentication",
      "C. Object and Operation being secured; Permissions required to access the object",
      "D. security_admin"
    ],
    ans: "C",
    topic: "Security / Access Control",
    exp: "Una regla ACL especifica: el Objeto que se está asegurando (tabla/campo), la Operación (read/write/create/delete) y los Permisos requeridos (roles, condiciones, scripts)."
  },
  {
    id: 109,
    q: "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
    opts: [
      "A. Star",
      "B. Clock",
      "C. Application",
      "D. Funnel"
    ],
    ans: "C",
    topic: "Platform Navigation",
    exp: "El icono de Application (rejilla de puntos) en el Application Navigator permite expandir y contraer la lista completa de aplicaciones y módulos."
  },
  {
    id: 110,
    q: "What do you call any component that needs to be managed in order to deliver services?",
    opts: [
      "A. CSDM Items",
      "B. CMDB",
      "C. Configuration Item",
      "D. Service Offerings",
      "E. Asset"
    ],
    ans: "C",
    topic: "CMDB",
    exp: "Un Configuration Item (CI) es cualquier componente que necesita ser gestionado para entregar servicios de TI. Ejemplos: servidores, aplicaciones, contratos."
  },
  {
    id: 111,
    q: "A new service catalog item is being developed, but should only be visible to managers inside the HR Department. What method would you use to fulfill this requirement?",
    opts: [
      "A. Specify the Dept_Mgr role on the catalog content block",
      "B. Add the Department Manager group to the catalog item's user criteria",
      "C. Add the Department Manager group to the catalog item's ACL",
      "D. Only publish the item in the HR service catalog",
      "E. Use a Dept_Mgr ACL on the HR service catalog"
    ],
    ans: "B",
    topic: "Service Catalog",
    exp: "Para restringir la visibilidad de un Catalog Item a un grupo específico, se usa User Criteria en el campo 'Available For' del ítem."
  },
  {
    id: 112,
    q: "A user wants to create a set of filter conditions, where they want to show records which satisfy two conditions: Incidents where the state is Closed AND Incidents where Assignment Group is Network. After clicking the Funnel icon, what should the user do?",
    opts: [
      "A. Define the first condition; click AND button; define second condition; click Run",
      "B. Define the first condition; click AND button; define second condition; press enter",
      "C. Define the first condition; click OR button; define second condition; press enter",
      "D. Define the first condition; click > icon on breadcrumb, define second condition; click Run",
      "E. Define the first condition; click > icon on breadcrumb, define second condition; press enter"
    ],
    ans: "A",
    topic: "Lists & Filters",
    exp: "Para crear un filtro con condición AND: define la primera condición, haz clic en el botón AND, define la segunda condición y haz clic en Run para aplicar."
  },
  {
    id: 113,
    q: "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that is specific to the Incident table and the Major Incident field?",
    opts: [
      "A. Incident.Major_Incident",
      "B. Incident=>major_incident",
      "C. incident<=>major_incident",
      "D. Incident||major_incident",
      "E. incident.major_incident"
    ],
    ans: "E",
    topic: "Security / Access Control",
    exp: "El nombre del objeto en una ACL sigue el formato tabla.campo en minúsculas y con punto de separación: incident.major_incident."
  },
  {
    id: 114,
    q: "Two departments (HR Onboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities' assignment group. However, both departments have their own service catalogs. What do you do, to support these requirements?",
    opts: [
      "A. Create one Catalog Item for HR Event Room Set Up and one for Facilities Event Room Set Up; then publish each to the appropriate Catalog.",
      "B. Create one Catalog Item for Event Room Set Up; then publish to both Catalogs.",
      "C. Create one Catalog Item for Event Room Set Up; then publish to the Parent Catalog, which is accessible to both HR and Facilities.",
      "D. Create one Catalog Item for Event Room Set Up; then use ACLs to control access."
    ],
    ans: "B",
    topic: "Service Catalog",
    exp: "Un único Catalog Item puede publicarse en múltiples catálogos. Esto evita duplicar configuración manteniendo un solo ítem para actualizar."
  },
  {
    id: 115,
    q: "After finishing your work on High Security Settings, what do you do to return to normal admin security levels?",
    opts: [
      "A. Select Normal role",
      "B. Log out and back in",
      "C. Use System Administration > Normal Security module",
      "D. Select Global Update Set",
      "E. End Impersonation"
    ],
    ans: "B",
    topic: "Security / Access Control",
    exp: "Para regresar a los niveles de seguridad normales después de trabajar en High Security Settings, debes cerrar sesión y volver a entrar."
  },
  {
    id: 116,
    q: "What type of field allows you to look up values from one other table?",
    opts: [
      "A. Reference",
      "B. Verify",
      "C. Options",
      "D. Selections",
      "E. Dot walk",
      "F. Lookup"
    ],
    ans: "A",
    topic: "Forms & Fields",
    exp: "El tipo de campo Reference permite hacer referencia y buscar valores desde otra tabla. Es el campo de relación más común en ServiceNow."
  },
  {
    id: 117,
    q: "Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?",
    opts: [
      "A. Process Automation > Flow Designer",
      "B. Process Automation > Flow Administration",
      "C. Process Automation > Workflow Editor",
      "D. Process Automation > Process Flow",
      "E. Process Automation > Active Flows"
    ],
    ans: "A",
    topic: "Flow Designer",
    exp: "Process Automation > Flow Designer es el módulo para crear automatizaciones de lógica de negocio como aprobaciones, tareas y notificaciones de forma visual."
  },
  {
    id: 118,
    q: "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
    opts: [
      "A. Report Dashboard > Create New",
      "B. Reports > Getting Started",
      "C. Performance Analytics > Reports",
      "D. Self-Service > Reports",
      "E. Reports > Create New"
    ],
    ans: "E",
    topic: "Reporting & Metrics",
    exp: "Para crear nuevos reportes, el analista debe ir a Reports > Create New. Esta es la ruta estándar para iniciar la creación de reportes en ServiceNow."
  },
  {
    id: 119,
    q: "What are the steps for applying an update set to an instance?",
    opts: [
      "A. Retrieve, Preview, Commit",
      "B. Specify, Transform, Apply",
      "C. Retrieve, Assess, Apply",
      "D. Get, Test, Push",
      "E. Pull, Review, Push"
    ],
    ans: "A",
    topic: "Update Sets",
    exp: "Los pasos para aplicar un Update Set son: Retrieve (recuperar desde instancia remota) → Preview (previsualizar y resolver conflictos) → Commit (confirmar y aplicar)."
  },
  {
    id: 120,
    q: "When importing spreadsheet data into ServiceNow, in which step does the data get written to the receiving table?",
    opts: [
      "A. Run Transform",
      "B. Run Import",
      "C. Import Dataset",
      "D. Execute Transform",
      "E. Schedule Transform"
    ],
    ans: "A",
    topic: "Import / Transform Maps",
    exp: "En el paso 'Run Transform' es cuando los datos del Import Set se transforman y escriben en la tabla destino de ServiceNow."
  },
  {
    id: 121,
    q: "What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two.)",
    opts: [
      "A. On list Context Menu, select Group By > Category",
      "B. On the Filter Menu, select Group By > Category",
      "C. Click Group On icon, select Category",
      "D. On Navigator Filter, type tablename.group.category and press enter",
      "E. On the Category column title, click Context menu > Group By Category"
    ],
    ans: "AE",
    topic: "Lists & Filters",
    exp: "Para agrupar registros por categoría: desde el menú contextual de la lista selecciona Group By > Category (A) o haz clic en el título de la columna Categoría y selecciona Group By Category (E)."
  },
  {
    id: 122,
    q: "Which collaboration tool is available from the banner, using the bubble icon?",
    opts: [
      "A. Now Messenger",
      "B. Agent Chat",
      "C. Connect Chat",
      "D. Collaborate Now",
      "E. Live Feed"
    ],
    ans: "C",
    topic: "Collaboration",
    exp: "Connect Chat es la herramienta de colaboración accesible desde el banner (barra superior) mediante el icono de burbuja de conversación."
  },
  {
    id: 123,
    q: "On the knowledge base record, which tab would you use to define which users are not able to write articles to the knowledge base?",
    opts: [
      "A. Can Contribute",
      "B. Cannot Author",
      "C. Cannot Contribute",
      "D. Cannot Write",
      "E. Read Only"
    ],
    ans: "C",
    topic: "Knowledge Management",
    exp: "La pestaña 'Cannot Contribute' en el registro de la Knowledge Base define qué usuarios o grupos NO pueden escribir artículos en esa base de conocimiento."
  },
  {
    id: 124,
    q: "Which features allow you to update multiple records at one time? (Choose two.)",
    opts: [
      "A. List Editor",
      "B. Field Update Action",
      "C. Bulk Record Update",
      "D. Data Remediation Dashboard",
      "E. Update Selected Action"
    ],
    ans: "AE",
    topic: "Lists & Filters",
    exp: "Para actualizar múltiples registros a la vez: List Editor (A) permite editar en línea y Update Selected Action (E) aplica cambios a los registros seleccionados."
  },
  {
    id: 125,
    q: "Categories in the knowledge base, by default, can be created and edited by which knowledge workers? (Choose two.)",
    opts: [
      "A. Knowledge Authors",
      "B. Knowledge Contributors",
      "C. Knowledge Controller",
      "D. Knowledge Managers",
      "E. Knowledge Category Managers",
      "F. Knowledge Submitters",
      "G. Knowledge Owners",
      "H. Knowledge Taxonomy Owner"
    ],
    ans: "BD",
    topic: "Knowledge Management",
    exp: "Por defecto, las categorías de la Knowledge Base pueden ser creadas y editadas por Knowledge Contributors (B) y Knowledge Managers (D)."
  },
  {
    id: 126,
    q: "Which collaboration tool opens a sidebar and allows you to create new conversations with other ServiceNow users?",
    opts: [
      "A. Skype Now",
      "B. Collaborate Now",
      "C. Agent Messenger",
      "D. Agent Chat",
      "E. Connect Chat"
    ],
    ans: "E",
    topic: "Collaboration",
    exp: "Connect Chat abre un panel lateral que permite crear nuevas conversaciones con otros usuarios de ServiceNow directamente desde la plataforma."
  },
  {
    id: 127,
    q: "What module would you use if you wanted to view a list of all of the fields on the Incident table? (Choose two.)",
    opts: [
      "A. Tables & Columns",
      "B. Dictionary",
      "C. Data Class Manager",
      "D. Dictionary Dashboard",
      "E. Database View",
      "F. Schema"
    ],
    ans: "AB",
    topic: "Tables & Database",
    exp: "Para ver todos los campos de la tabla Incident: Tables & Columns (A) muestra la estructura de tablas y columnas, y Dictionary (B) muestra las definiciones de campos."
  },
  {
    id: 128,
    q: "What component causes a flow to run after a record has been created or updated?",
    opts: [
      "A. Date-based trigger",
      "B. On-change trigger",
      "C. Record-based trigger",
      "D. Application-based trigger",
      "E. Updated-date trigger"
    ],
    ans: "C",
    topic: "Flow Designer",
    exp: "El Record-based trigger dispara un flujo cuando un registro es creado o actualizado. Es el tipo de trigger más común en Flow Designer."
  },
  {
    id: 129,
    q: "What type of field is Boolean and appears as a check box?",
    opts: [
      "A. Yes/No",
      "B. True/False",
      "C. On/Off",
      "D. Binary",
      "E. 0/1"
    ],
    ans: "B",
    topic: "Forms & Fields",
    exp: "El tipo de campo True/False es de tipo Boolean y se muestra como una casilla de verificación (checkbox) en los formularios de ServiceNow."
  },
  {
    id: 130,
    q: "Which module is used to access the knowledge bases which are available to you?",
    opts: [
      "A. Knowledge > Home",
      "B. Self Service > Knowledge",
      "C. Knowledge > All",
      "D. Knowledge > Knowledge Bases",
      "E. Knowledge > Overview"
    ],
    ans: "B",
    topic: "Knowledge Management",
    exp: "Self Service > Knowledge es el módulo que los usuarios finales usan para acceder a las bases de conocimiento disponibles para ellos."
  },
  {
    id: 131,
    q: "A customer requests the following data quality measures be added: Incident numbers should be read only, on all lists and forms, for all users. Short Description field should be mandatory, on all records, across all applications, on Insert. Which type of policy would you use to meet this requirement?",
    opts: [
      "A. Data Quality Policy",
      "B. Dictionary Design Policy",
      "C. UI Data Policy",
      "D. UI Policy",
      "E. Field Criteria Policy",
      "F. Data Policy"
    ],
    ans: "F",
    topic: "UI Development",
    exp: "Data Policy aplica reglas de calidad de datos independientemente de cómo se ingresen (formulario, API, importación). Es diferente de UI Policy que solo aplica en formularios."
  },
  {
    id: 132,
    q: "What type of user (persona) has clearly defined paths and workflows in the platform and have one or more roles (ie itil and approver_user)?",
    opts: [
      "A. Workflow User",
      "B. Request Fulfiller",
      "C. ITSM User",
      "D. Approving Manager",
      "E. Service Desk User",
      "F. Process User"
    ],
    ans: "F",
    topic: "User Administration",
    exp: "Un Process User es un tipo de usuario con rutas y flujos de trabajo claramente definidos en la plataforma, con roles como itil y approver_user."
  },
  {
    id: 133,
    q: "Which module would you use to customize your instances banner image, text and colors?",
    opts: [
      "A. System UI > UI Pages > Branding",
      "B. Service Portal > Portals > Branding",
      "C. System Properties > Basic Configuration UI16",
      "D. System Properties > Branding",
      "E. Homepage Admin > Pages > Branding"
    ],
    ans: "C",
    topic: "Platform Configuration",
    exp: "System Properties > Basic Configuration UI16 permite personalizar la imagen del banner, texto y colores de la instancia de ServiceNow."
  },
  {
    id: 134,
    q: "Which database provides a logical model of your company infrastructure by identifying, controlling, maintaining and verifying CIs that exist?",
    opts: [
      "A. IMDB",
      "B. ITSM",
      "C. CSDM",
      "D. CMDB",
      "E. LDAP"
    ],
    ans: "D",
    topic: "CMDB",
    exp: "El CMDB (Configuration Management Database) proporciona un modelo lógico de la infraestructura identificando, controlando y verificando los Configuration Items (CIs)."
  },
  {
    id: 135,
    q: "Which module is used as the first step for importing data?",
    opts: [
      "A. Coalesce Data",
      "B. Transform Data",
      "C. Import Data",
      "D. Load Data"
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "Load Data es el primer paso en el proceso de importación: carga el archivo (CSV, Excel, XML) en el Import Set como área de preparación."
  },
  {
    id: 136,
    q: "When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?",
    opts: [
      "A. Flow Manager",
      "B. Flow Designer",
      "C. Flow Editor",
      "D. Workflow Editor",
      "E. Workflow Designer"
    ],
    ans: "B",
    topic: "Flow Designer",
    exp: "Flow Designer es la herramienta de ServiceNow para orquestar procesos de negocio con mínimo conocimiento técnico, usando una interfaz visual de drag-and-drop."
  },
  {
    id: 137,
    q: "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
    opts: [
      "A. Look up their password, so you can login with their account",
      "B. Initiate a Connect Chat session",
      "C. Install the Bomgar plug-in",
      "D. Impersonate the user",
      "E. Launch a NowChat window"
    ],
    ans: "D",
    topic: "User Administration",
    exp: "Impersonar al usuario permite al administrador ver la plataforma exactamente como la ve ese usuario, incluyendo qué módulos son visibles para él."
  },
  {
    id: 138,
    q: "What is a key difference between Reporting and Performance Analytics?",
    opts: [
      "A. Performance Analytics contains snapshots of data taken over time; Reporting shows only the data as it is, at the moment the report is run.",
      "B. Performance Analytics can show trends; Reports cannot.",
      "C. Reports can be run on a scheduled basis; Performance Analytics cannot.",
      "D. Performance Analytics data can be published to Dashboards; Reports cannot.",
      "E. Performance Analytics shows KPIs; Reporting does not."
    ],
    ans: "A",
    topic: "Reporting & Metrics",
    exp: "Performance Analytics toma snapshots de datos a lo largo del tiempo para mostrar tendencias históricas. Reporting solo muestra el estado actual de los datos en el momento de ejecutar el informe."
  },
  {
    id: 139,
    q: "While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. Right click on Priority and select what?",
    opts: [
      "A. Configure Lists",
      "B. Show Options",
      "C. Configure Task",
      "D. Show Choices",
      "E. Show Choice List",
      "F. Configure Options"
    ],
    ans: "E",
    topic: "Forms & Fields",
    exp: "Para cambiar las etiquetas de las opciones de un campo de elección, haz clic derecho sobre el campo y selecciona 'Show Choice List' para acceder y modificar la lista de opciones."
  },
  {
    id: 140,
    q: "Your customer would like to create a new template to notify users who are affected by network outages at their site. Which module would you use to create a new notification?",
    opts: [
      "A. System Notification > Email > Notifications",
      "B. Administration > Notification Overview",
      "C. System Properties > Email > Settings",
      "D. User Preferences > Email > Notifications",
      "E. Click Gear > Notifications > New"
    ],
    ans: "A",
    topic: "Platform Features",
    exp: "Para crear nuevas notificaciones de email, se usa el módulo System Notification > Email > Notifications."
  },
  {
    id: 141,
    q: "When designing a flow, how do you reference data from a record, in that flow?",
    opts: [
      "A. Drag the table icon onto the flow definition",
      "B. Use the condition builder to specify the desired values",
      "C. Specify the source table on the data pill related list",
      "D. Drag the data pill onto the flow definition",
      "E. Add the table reference using the slush bucket"
    ],
    ans: "D",
    topic: "Flow Designer",
    exp: "En Flow Designer, los datos de un registro se referencian arrastrando el data pill (píldora de datos) hacia la definición del flujo donde se necesitan."
  },
  {
    id: 142,
    q: "On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four.)",
    opts: [
      "A. Group",
      "B. Department",
      "C. My reports",
      "D. Team",
      "E. Dashboards",
      "F. Global",
      "G. Admin",
      "H. Analytics",
      "I. All",
      "J. Company"
    ],
    ans: "ACFI",
    topic: "Reporting & Metrics",
    exp: "En la página de Reports, las secciones que muestran visibilidad a diferentes audiencias son: Group (A), My reports (C), Global (F) y All (I)."
  },
  {
    id: 143,
    q: "Which tool is used to define relationships between fields in an import set table and a target table?",
    opts: [
      "A. Transform Schema",
      "B. Schema Map",
      "C. Dictionary Map",
      "D. Transform Map",
      "E. Field Transformer"
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "El Transform Map define las relaciones (mappings) entre los campos de la Import Set Table y los campos de la tabla destino en ServiceNow."
  },
  {
    id: 144,
    q: "Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?",
    opts: [
      "A. Agent Workspace",
      "B. Chat bot",
      "C. Virtual Agent",
      "D. Knowledge Chat",
      "E. Now Support"
    ],
    ans: "C",
    topic: "Platform Features",
    exp: "Virtual Agent proporciona asistencia a los usuarios para obtener información, tomar decisiones y realizar tareas comunes mediante una interfaz de mensajería conversacional."
  },
  {
    id: 145,
    q: "Which feature allows you to automate business logic for a particular application or process such as approvals, tasks notifications, and record operations?",
    opts: [
      "A. Flows",
      "B. Action Sequences",
      "C. Action Sets",
      "D. Task Flows",
      "E. Flow Diagrams"
    ],
    ans: "A",
    topic: "Flow Designer",
    exp: "Los Flows (flujos) en Flow Designer permiten automatizar lógica de negocio como aprobaciones, notificaciones y operaciones de registros para aplicaciones y procesos."
  },
  {
    id: 146,
    q: "From a form, what would you click to add additional fields to the form? (Choose two.)",
    opts: [
      "A. Context Menu > Form > Layout",
      "B. Context Menu > Configure > Form Layout",
      "C. Context Menu > Configure > Form Design",
      "D. Right click on header > Add > Field",
      "E. Context Menu > Form > Designer",
      "F. Right click on header > Configure > UX Dashboard"
    ],
    ans: "BC",
    topic: "Forms & Fields",
    exp: "Para agregar campos a un formulario: Context Menu > Configure > Form Layout (B) para editar la disposición o Context Menu > Configure > Form Design (C) para usar el diseñador visual."
  },
  {
    id: 147,
    q: "What is the name of the table relationship, where two or more tables are related in a bi-directional relationship, so that the related records are visible from both tables in a related list?",
    opts: [
      "A. Database View",
      "B. Many to Many",
      "C. One to Many",
      "D. Extended"
    ],
    ans: "B",
    topic: "Tables & Database",
    exp: "Una relación Many to Many (Muchos a Muchos) es bidireccional y permite que los registros relacionados sean visibles desde ambas tablas en sus respectivas listas relacionadas."
  },
  {
    id: 148,
    q: "On a Form header, what is the three bar icon called?",
    opts: [
      "A. Pancake icon",
      "B. Additional Actions or Context Menu",
      "C. Hamburger icon",
      "D. Cake icon"
    ],
    ans: "B",
    topic: "Forms & Fields",
    exp: "El icono de tres barras en el encabezado del formulario se llama 'Additional Actions' o 'Context Menu'. Proporciona acceso a opciones adicionales de configuración del formulario."
  },
  {
    id: 149,
    q: "Group records are stored in which table?",
    opts: [
      "A. Group [sn_user_group]",
      "B. Group [sys_user_group]",
      "C. Group [s_sys_group]",
      "D. Group [u_sys_group]"
    ],
    ans: "B",
    topic: "Tables & Database",
    exp: "Los registros de grupos se almacenan en la tabla Group [sys_user_group]. El prefijo 'sys_' identifica las tablas nativas del sistema."
  },
  {
    id: 150,
    q: "What function do you use to add buttons, links, and context menu items on forms and lists?",
    opts: [
      "A. UI Policies",
      "B. UI Settings",
      "C. UI Actions",
      "D. UI Config"
    ],
    ans: "C",
    topic: "UI Development",
    exp: "Las UI Actions se usan para agregar botones, enlaces y elementos de menú contextual en formularios y listas de ServiceNow."
  },
  {
    id: 151,
    q: "On a Business Rule, the When setting determines at what point the rule executes. What are the options for specifying that timing?",
    opts: [
      "A. Before, After, Async, Display",
      "B. Prior to, Synchronous, on Update",
      "C. Insert, Update, Delete, Query",
      "D. Before, Synchronous, Scheduled Job, View"
    ],
    ans: "A",
    topic: "Business Rules",
    exp: "Las opciones de timing para un Business Rule son: Before (antes de la operación DB), After (después), Async (asíncrono, en background) y Display (al cargar el formulario)."
  },
  {
    id: 152,
    q: "What are different types of Data Sources, which may be imported into ServiceNow? (Choose four.)",
    opts: [
      "A. Local Sources (i.e. XML, CSV, Excel)",
      "B. Implementation Spoke",
      "C. DataHub",
      "D. JDBC Connection",
      "E. Network Server",
      "F. LDAP Connection"
    ],
    ans: "ADEF",
    topic: "Import / Transform Maps",
    exp: "Los tipos de Data Source para importar en ServiceNow incluyen: Fuentes locales como XML/CSV/Excel (A), JDBC Connection (D), Network Server (E) y LDAP Connection (F)."
  },
  {
    id: 153,
    q: "What are the components that make up a filter condition? (Choose three.)",
    opts: [
      "A. Operator",
      "B. Match Criteria",
      "C. Value",
      "D. Column",
      "E. Field"
    ],
    ans: "ACE",
    topic: "Lists & Filters",
    exp: "Los componentes de una condición de filtro son: Field/Campo (E), Operator/Operador (A) y Value/Valor (C). Siempre en ese orden: campo → operador → valor."
  },
  {
    id: 154,
    q: "When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?",
    opts: [
      "A. Turn your computer off and on again",
      "B. Clear browser cache",
      "C. End Impersonation",
      "D. Log out and back in"
    ],
    ans: "C",
    topic: "User Administration",
    exp: "Para finalizar la impersonación y volver a tu propia cuenta, usa la opción 'End Impersonation' en el menú de usuario."
  },
  {
    id: 155,
    q: "What controls the publishing and retiring process for knowledge articles?",
    opts: [
      "A. Approval Policies",
      "B. Approval Definitions",
      "C. Workflow Designer",
      "D. Workflows",
      "E. State Lifecycle"
    ],
    ans: "D",
    topic: "Knowledge Management",
    exp: "Los Workflows controlan el proceso de publicación y retiro de artículos de Knowledge Base, gestionando las transiciones de estado del artículo."
  },
  {
    id: 156,
    q: "What type of query allows you to filter list data using normal words, instead of the condition builder?",
    opts: [
      "A. Natural Language Query",
      "B. Alexa Query",
      "C. Machine Learning Query",
      "D. Predictive Intelligence Query",
      "E. Auto-suggest Query"
    ],
    ans: "A",
    topic: "Lists & Filters",
    exp: "Natural Language Query (NLQ) permite filtrar datos de listas usando palabras normales en lenguaje natural, en lugar del constructor de condiciones tradicional."
  },
  {
    id: 157,
    q: "Tables may have a One to Many relationships. From the Service Catalog, what are examples of tables having a one to many relationships? (Choose three.)",
    opts: [
      "A. One Approval can have many Requests",
      "B. One Request can have many Requested Items",
      "C. One Requested Item can have many Approvals",
      "D. One Requested Item can have many Catalog Tasks",
      "E. One Cart can have many Requests"
    ],
    ans: "BCD",
    topic: "Service Catalog",
    exp: "En Service Catalog: un REQ puede tener muchos RITMs (B), un RITM puede tener muchas aprobaciones (C) y un RITM puede tener muchas Catalog Tasks (D)."
  },
  {
    id: 158,
    q: "On a filter condition, which component is always a choice list?",
    opts: [
      "A. Operator",
      "B. Filter Criteria",
      "C. Operation",
      "D. Match Criteria"
    ],
    ans: "A",
    topic: "Lists & Filters",
    exp: "El Operator (operador) en una condición de filtro siempre es una lista de opciones (choice list), como 'is', 'is not', 'contains', 'starts with', etc."
  },
  {
    id: 159,
    q: "A Role is defined as what?",
    opts: [
      "A. A collection of permissions",
      "B. A set of user access policies",
      "C. A Persona in a workflow",
      "D. A set of access control rules"
    ],
    ans: "A",
    topic: "Security / Access Control",
    exp: "Un Role en ServiceNow es una colección de permisos que se asigna a usuarios o grupos para controlar qué pueden ver y hacer en la plataforma."
  },
  {
    id: 160,
    q: "A user is complaining that they are seeing a blank page, when they click Create New, from your custom inventory application. You have confirmed that they can see the Inventory application on the application navigator. What could be the cause of this issue?",
    opts: [
      "A. Create New module has a broken link",
      "B. Known intermittent issue with UI15",
      "C. User should be using Chrome instead of Explorer for their browser",
      "D. User has read role, but not the write role on the Inventory table",
      "E. User session has timed out"
    ],
    ans: "D",
    topic: "Security / Access Control",
    exp: "Si el usuario puede ver la aplicación pero ve una página en blanco al crear, probablemente tiene rol de lectura pero no de escritura en la tabla de esa aplicación."
  },
  {
    id: 161,
    q: "What resource can you use to view details of the tables and configuration items (CIs) associated with a particular use case?",
    opts: [
      "A. Scenario Dashboard",
      "B. CI Use Case Modeler",
      "C. CMDB Use Case Modeler",
      "D. Common Service Data Model (CSDM) product view"
    ],
    ans: "D",
    topic: "CMDB",
    exp: "La vista de producto del Common Service Data Model (CSDM) permite ver detalles de tablas y CIs asociados con casos de uso específicos."
  },
  {
    id: 162,
    q: "A manager wants to view a snapshot of month-end Sales performance data, as compared to Sales targets. In addition, the manager wants to be able to see those monthly numbers trended over time, and forecasted into the future. What capability do you suggest for this manager?",
    opts: [
      "A. Scheduled Reports, a custom snapshot table, and a Trend report",
      "B. Scheduled Reports and Excel",
      "C. Scheduled Reports, a custom snapshot table, and a Projection report",
      "D. Performance Analytics",
      "E. Key Performance Indicators"
    ],
    ans: "D",
    topic: "Reporting & Metrics",
    exp: "Performance Analytics es la capacidad adecuada para ver snapshots históricos, tendencias y proyecciones futuras de datos de rendimiento."
  },
  {
    id: 163,
    q: "What are advantages of using Flow Designer? (Choose three.)",
    opts: [
      "A. Supports advanced developers",
      "B. Enables complicated scripting",
      "C. Reduces technical debt",
      "D. Less manual scripting",
      "E. Smooth integration with 3rd party systems"
    ],
    ans: "CDE",
    topic: "Flow Designer",
    exp: "Las ventajas de Flow Designer son: reduce deuda técnica (C) al usar configuración en lugar de código, requiere menos scripting manual (D) y facilita la integración con sistemas de terceros (E)."
  },
  {
    id: 164,
    q: "Your customer requires that they be able to monitor which users are performing Impersonations in their instance. What would you do to meet that requirement?",
    opts: [
      "A. Add the role Log Write [sn_log_write] to the Impersonator Group",
      "B. Create user update set for impersonation tracking",
      "C. Activate the glide.sys.log_impersonation prop",
      "D. From User icon, select Elevate Roles",
      "E. On the Impersonator role record, right click and select Create Log"
    ],
    ans: "C",
    topic: "User Administration",
    exp: "Para monitorear impersonaciones, se debe activar la propiedad glide.sys.log_impersonation que registra eventos de impersonación en el System Log."
  },
  {
    id: 165,
    q: "When a flow runs an action, it generates a runtime value, which stays the same for the duration of the flow. What is the name of this runtime value?",
    opts: [
      "A. Trigger runtime value",
      "B. Sequence runtime value",
      "C. Starting runtime value",
      "D. Data pill runtime value",
      "E. Input runtime value"
    ],
    ans: "D",
    topic: "Flow Designer",
    exp: "El Data Pill (píldora de datos) es el valor en tiempo de ejecución generado cuando un flujo ejecuta una acción. Mantiene su valor durante toda la ejecución del flujo."
  },
  {
    id: 166,
    q: "The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?",
    opts: [
      "A. Request + Response",
      "B. Save + Update",
      "C. Write + Read",
      "D. Submit + Query",
      "E. Insert + Verify"
    ],
    ans: "A",
    topic: "Platform Features",
    exp: "El round-trip entre cliente y servidor consiste en: Request (solicitud del cliente al servidor) + Response (respuesta del servidor al cliente)."
  },
  {
    id: 167,
    q: "When importing data, what happens to imported rows, if no coalesce field is specified?",
    opts: [
      "A. All rows are rejected from the import, as coalesce field is required.",
      "B. All rows are treated as new records. No existing records are updated.",
      "C. Duplicate rows are rejected from the import.",
      "D. All rows are treated as new records, but errors will be flagged in the import log."
    ],
    ans: "B",
    topic: "Import / Transform Maps",
    exp: "Si no se especifica un campo de coalesce, todos los registros importados se tratan como nuevos registros. No se buscan coincidencias ni se actualiza ningún registro existente."
  },
  {
    id: 168,
    q: "What is the most common role that has access to almost all platform features, functions, and data?",
    opts: [
      "A. Security Admin [security_admin]",
      "B. Sys Admin [sys_admin]",
      "C. Admin [sn_admin]",
      "D. System Administrator [admin]",
      "E. Base Admin [base_admin]"
    ],
    ans: "D",
    topic: "Security / Access Control",
    exp: "El rol System Administrator [admin] es el más común con acceso a casi todas las funciones, características y datos de la plataforma ServiceNow."
  },
  {
    id: 169,
    q: "What feature do you use to specify which users are able to access a Service Catalog Item?",
    opts: [
      "A. Can Read Role",
      "B. Catalog User Role",
      "C. Can Order Tab",
      "D. User Criteria"
    ],
    ans: "D",
    topic: "Service Catalog",
    exp: "User Criteria es la funcionalidad que permite especificar qué usuarios pueden acceder (ver y pedir) un Catalog Item específico del Service Catalog."
  },
  {
    id: 170,
    q: "Which component of a table contains a piece of data for one record?",
    opts: [
      "A. Factor",
      "B. Field",
      "C. Datapoint",
      "D. Element",
      "E. Item"
    ],
    ans: "B",
    topic: "Tables & Database",
    exp: "Un Field (campo) es el componente de una tabla que contiene un dato específico para un registro. Es equivalente a una columna en el contexto de un registro específico."
  },
  {
    id: 171,
    q: "What type of field has a drop down list, from which you can pick from pre-defined options?",
    opts: [
      "A. Choice",
      "B. Picker",
      "C. Drop down",
      "D. Option"
    ],
    ans: "A",
    topic: "Forms & Fields",
    exp: "El tipo de campo Choice muestra una lista desplegable con opciones predefinidas. Se configura en el Dictionary y las opciones se gestionan en la Choice List."
  },
  {
    id: 172,
    q: "User records are stored in which table?",
    opts: [
      "A. User [sys_user]",
      "B. User [sn_user]",
      "C. User [u_sys_user]",
      "D. User [s_user]"
    ],
    ans: "A",
    topic: "Tables & Database",
    exp: "Los registros de usuarios se almacenan en la tabla User [sys_user]. Esta es una de las tablas principales del sistema en ServiceNow."
  },
  {
    id: 173,
    q: "What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?",
    opts: [
      "A. Notifications",
      "B. Alerts",
      "C. Texts",
      "D. Events",
      "E. Emails"
    ],
    ans: "A",
    topic: "Platform Features",
    exp: "Las Notifications pueden dispararse por eventos y se usan para informar a los usuarios sobre actividades o actualizaciones en ServiceNow mediante email, SMS o notificaciones push."
  },
  {
    id: 174,
    q: "Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?",
    opts: [
      "A. Agent Assist",
      "B. Virtual Agent",
      "C. Now Messenger",
      "D. Connect Agent"
    ],
    ans: "B",
    topic: "Platform Features",
    exp: "Virtual Agent permite proporcionar artículos de knowledge base a través de una interfaz de mensajería conversacional, ayudando a los usuarios a encontrar respuestas automáticamente."
  },
  {
    id: 175,
    q: "Which role can manage multiple knowledge bases?",
    opts: [
      "A. knowledge_base_admin",
      "B. kb_admin",
      "C. sn_kb_admin",
      "D. knowledge_admin"
    ],
    ans: "D",
    topic: "Knowledge Management",
    exp: "El rol knowledge_admin puede gestionar múltiples bases de conocimiento en ServiceNow, incluyendo crear, editar y administrar todas las Knowledge Bases."
  },
  {
    id: 176,
    q: "Which statement correctly describes the differences between a Client Script and a Business Rule?",
    opts: [
      "A. A Client Script executes before a record is loaded and a Business Rule executes after a record is loaded",
      "B. A Client Script executes on the server and a Business Rule executes on the client",
      "C. A Client Script executes on the client and a Business Rule executes on the server",
      "D. A Client Script executes before a record is loaded and a Business Rule executes after a record is updated"
    ],
    ans: "C",
    topic: "Business Rules",
    exp: "La diferencia clave: Client Script se ejecuta en el cliente (navegador del usuario), Business Rule se ejecuta en el servidor. Esta distinción es fundamental para el rendimiento y la seguridad."
  },
  {
    id: 177,
    q: "What are benefits of assigning work tasks to a group, rather than to an individual? (Choose four.)",
    opts: [
      "A. Group members can choose their tasks from My Groups Work",
      "B. Groups can assign tasks to users based on on-call schedules",
      "C. Site support members can pick tasks, based on Location",
      "D. Groups can assign tasks to users based on skills",
      "E. Group members can avoid tasks, which are nearing SLA breach",
      "F. Groups can assign tasks based on availability"
    ],
    ans: "ABDF",
    topic: "User Administration",
    exp: "Beneficios de asignar a grupos: los miembros pueden elegir tareas (A), asignación por guardias (B), por habilidades (D) y por disponibilidad (F). Mejora la flexibilidad y distribución del trabajo."
  },
  {
    id: 178,
    q: "What ServiceNow feature allows you to include data from a secondary related table on a report?",
    opts: [
      "A. SQL",
      "B. Dot Walking",
      "C. Outer Join",
      "D. Joins"
    ],
    ans: "B",
    topic: "Reporting & Metrics",
    exp: "Dot Walking permite acceder a datos de tablas relacionadas en un reporte. Por ejemplo, en un reporte de Incidents, puedes acceder a campos del usuario asignado usando dot-walking."
  },
  {
    id: 179,
    q: "What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five.)",
    opts: [
      "A. Browser tab title",
      "B. Module text color",
      "C. Preferred browser",
      "D. Base theme",
      "E. Font style",
      "F. Animation style",
      "G. Header background color",
      "H. Banner Image"
    ],
    ans: "ABDGH",
    topic: "Platform Configuration",
    exp: "Desde Basic Configuration UI16 se puede gestionar: título de la pestaña del navegador (A), tema base (D), color de fondo del header (G), imagen del banner (H) y color del texto del módulo (B)."
  },
  {
    id: 180,
    q: "Which field (or fields) is used as a unique key during imports?",
    opts: [
      "A. Match Fields",
      "B. Coalesce Fields",
      "C. Key Fields",
      "D. Sys IDs"
    ],
    ans: "B",
    topic: "Import / Transform Maps",
    exp: "Los Coalesce Fields son los campos usados como clave única durante las importaciones para determinar si actualizar un registro existente o crear uno nuevo."
  },
  {
    id: 181,
    q: "You are asked to create an option in the Service Catalog, which will allow a user to click Get Help and describe the issue they are having. These forms should create incident records, which are automatically routed to the Service Desk. Which method would you use?",
    opts: [
      "A. Create Record Producer",
      "B. Create Catalog Item",
      "C. Create Order Guide",
      "D. Create Content Item"
    ],
    ans: "A",
    topic: "Service Catalog",
    exp: "Un Record Producer es el método correcto para crear un formulario en el catálogo que genere registros de Incident automáticamente y los enrute al Service Desk."
  },
  {
    id: 182,
    q: "What is the result of the order in which access controls are evaluated?",
    opts: [
      "A. Ensures user has access to the fields in a table, before considering their access to the table",
      "B. Ensures user can get to work as quickly as possible",
      "C. Ensures user has access to the application, before evaluating access to a module within the application",
      "D. Ensures user has access to a table, before evaluating access to a field in the table"
    ],
    ans: "D",
    topic: "Security / Access Control",
    exp: "Las ACL se evalúan de arriba a abajo: primero la tabla, luego el campo. Un usuario debe tener acceso a la tabla antes de que se evalúe el acceso a campos específicos."
  },
  {
    id: 183,
    q: "Which tool graphically displays an infrastructure view for a configuration item (CI) and its relationship with other CIs?",
    opts: [
      "A. Schema Map",
      "B. Dependency View",
      "C. Dependency Map",
      "D. Database View"
    ],
    ans: "B",
    topic: "CMDB",
    exp: "Dependency View muestra gráficamente un CI y sus relaciones con otros CIs en el CMDB, proporcionando una vista de infraestructura visual."
  },
  {
    id: 184,
    q: "What are examples of Core tables in the ServiceNow platform?",
    opts: [
      "A. Configuration, Connect, Chat",
      "B. Team, Party, Awards",
      "C. User, Task, Incident",
      "D. Work, Caller, Timecard"
    ],
    ans: "C",
    topic: "Tables & Database",
    exp: "Las tablas Core principales en ServiceNow son: User [sys_user], Task [task] e Incident [incident]. Estas son tablas fundamentales de la plataforma."
  },
  {
    id: 185,
    q: "Which tab on the knowledge base record, would you use to identify the sets of users who are able to read articles in that knowledge base?",
    opts: [
      "A. Access List",
      "B. Can Access",
      "C. Accessible to",
      "D. Can Read"
    ],
    ans: "D",
    topic: "Knowledge Management",
    exp: "La pestaña 'Can Read' en el registro de la Knowledge Base identifica qué usuarios o grupos tienen permiso para leer los artículos de esa base de conocimiento."
  },
  {
    id: 186,
    q: "What are the main components of the Form Design interface? (Choose three.)",
    opts: [
      "A. Field Layout",
      "B. Page Header",
      "C. Field Navigator",
      "D. Field Picker",
      "E. Form Layout"
    ],
    ans: "BCE",
    topic: "Forms & Fields",
    exp: "Los componentes principales de la interfaz Form Design son: Page Header (B) que muestra el nombre del formulario, Field Navigator (C) para buscar campos y Form Layout (E) para organizar los campos."
  },
  {
    id: 187,
    q: "What is used to determine user access to knowledge bases or a knowledge article?",
    opts: [
      "A. sn_ko_read, sn_article_read",
      "B. Privacy Settings",
      "C. Read Access Flag",
      "D. User Criteria"
    ],
    ans: "D",
    topic: "Knowledge Management",
    exp: "User Criteria determina el acceso de usuarios a bases de conocimiento y artículos específicos, definiendo quién puede leer, contribuir o gestionar el contenido."
  },
  {
    id: 188,
    q: "What are the three key tables in an enterprise CMDB? (Choose three.)",
    opts: [
      "A. cmdb",
      "B. sn_cmdb_bak",
      "C. cmdb_rel_ci",
      "D. sn_cmdb",
      "E. cmdb_bak",
      "F. cmdb_ci",
      "G. sn_cmdb_ci"
    ],
    ans: "ACF",
    topic: "CMDB",
    exp: "Las tres tablas clave del CMDB son: cmdb (tabla base), cmdb_rel_ci (relaciones entre CIs) y cmdb_ci (Configuration Items específicos)."
  },
  {
    id: 189,
    q: "What is the best practice related to using the Default Update Set for moving customizations between instances?",
    opts: [
      "A. Merge Default update sets before moving between instances",
      "B. Submit Default update set to application repository",
      "C. You should not use the Default Update sets for moving between instances",
      "D. Keep Default update set to maximum of 20 records, for troubleshooting purposes"
    ],
    ans: "C",
    topic: "Update Sets",
    exp: "La mejor práctica es NO usar el Default Update Set para mover personalizaciones entre instancias. Se deben crear Update Sets específicos y con nombre para cada cambio o proyecto."
  },
  {
    id: 190,
    q: "On what part of the ServiceNow instance, would you find the option to Impersonate User?",
    opts: [
      "A. Module",
      "B. Content Frame",
      "C. Application Navigator",
      "D. Banner"
    ],
    ans: "D",
    topic: "User Administration",
    exp: "La opción 'Impersonate User' se encuentra en el Banner (barra superior), haciendo clic en el nombre del usuario o icono de perfil en la esquina superior derecha."
  },
  {
    id: 191,
    q: "Which application is used primarily to load data into ServiceNow?",
    opts: [
      "A. Import Hub",
      "B. System Import Sets",
      "C. Data Import Configuration",
      "D. Import Management"
    ],
    ans: "B",
    topic: "Import / Transform Maps",
    exp: "System Import Sets es la aplicación principal usada para cargar datos en ServiceNow desde fuentes externas."
  },
  {
    id: 192,
    q: "If a knowledge base has no access details specified, what users are able to read articles in that knowledge base?",
    opts: [
      "A. itil users",
      "B. Any user with an article's permalink",
      "C. Any active user",
      "D. No users",
      "E. Users with kb_user role"
    ],
    ans: "C",
    topic: "Knowledge Management",
    exp: "Si una Knowledge Base no tiene detalles de acceso especificados, cualquier usuario activo puede leer sus artículos por defecto."
  },
  {
    id: 193,
    q: "How would you define an Access Control, to allow a user with itil role to have permission to create incident records?",
    opts: [
      "A. Name: incident.None; Operation: create; Role: itil",
      "B. Name: incident.Any; Operation: write; Permission: itil",
      "C. Name: incident.*; Permission: write; Role: itil",
      "D. Name: incident.None; Permission: create; Role: itil",
      "E. Name: incident.*;Operation: write; Permission: itil"
    ],
    ans: "A",
    topic: "Security / Access Control",
    exp: "Para permitir crear registros de Incident al rol itil: Name = incident.None (toda la tabla), Operation = create, Role = itil. 'None' indica que aplica a todos los campos de la tabla."
  },
  {
    id: 194,
    q: "What Service Catalog feature do you use to organize items into logical groups?",
    opts: [
      "A. Categories",
      "B. Variable Sets",
      "C. Sections",
      "D. Catalog Items"
    ],
    ans: "A",
    topic: "Service Catalog",
    exp: "Las Categories (Categorías) en el Service Catalog organizan los ítems en grupos lógicos, facilitando la navegación y búsqueda de los usuarios."
  },
  {
    id: 195,
    q: "When creating a new notification, what must you define? (Choose three.)",
    opts: [
      "A. The associated knowledge base",
      "B. Settings for handing inactive user accounts",
      "C. Under what conditions is the notification sent",
      "D. Who receives the notification",
      "E. What the content of the notification"
    ],
    ans: "CDE",
    topic: "Platform Features",
    exp: "Al crear una notificación se deben definir: las condiciones de envío (C), los destinatarios (D) y el contenido del mensaje (E)."
  },
  {
    id: 196,
    q: "The ServiceNow platform supports a wide variety of plug-and-play applications. You can choose from the included workflows of build your own workflow. Which of these workflows are included in the platform? (Choose three.)",
    opts: [
      "A. Federal Workflows",
      "B. Customer Workflows",
      "C. Infrastructure Workflows",
      "D. Manufacturing Workflows",
      "E. Employee Workflows",
      "F. IT Workflows"
    ],
    ans: "BEF",
    topic: "Platform Features",
    exp: "ServiceNow incluye tres tipos principales de workflows: Customer Workflows (B) para CRM, Employee Workflows (E) para RRHH y IT Workflows (F) para ITSM."
  },
  {
    id: 197,
    q: "An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
    opts: [
      "A. The Assignment Group manager field is empty.",
      "B. The manager does not have the itil role.",
      "C. The manager is not a member of the Service Desk group.",
      "D. The manager is not a member of the Network and Hardware groups."
    ],
    ans: "D",
    topic: "User Administration",
    exp: "My Groups Work muestra las tareas de los grupos de los que eres miembro. Si el manager no es miembro de esos grupos (solo manager), no aparecerán las tareas."
  },
  {
    id: 198,
    q: "You have been asked to configure a form so an employee could order tablet and select the standard accessory options to purchase with it. These standard options are: carrying case, screen cleaner, tablet stand, and screen protector. What approach would you take? (Choose three.)",
    opts: [
      "A. Create Catalog Item for the Tablet, and add a variable set to the form, for the accessory options.",
      "B. Create a Record producer, and on the form, add a check box variable for each accessory option.",
      "C. On Shopping Cart configuration, select option to show the Add Accessories button.",
      "D. Create one Catalog Item for each: tablet, carrying case, screen cleaner, tablet stand, and screen protector.",
      "E. Create Catalog Item for the tablet, and on the form, add a check box variable for each accessory option."
    ],
    ans: "ADE",
    topic: "Service Catalog",
    exp: "Para configurar accesorios opcionales: crear Catalog Item para el tablet con variable set (A), crear ítems individuales para los accesorios (D) o agregar checkboxes en el formulario (E)."
  },
  {
    id: 199,
    q: "Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationships?",
    opts: [
      "A. Dependency View",
      "B. CI Class Map",
      "C. Business Service Map",
      "D. CSDM Schema"
    ],
    ans: "A",
    topic: "CMDB",
    exp: "Dependency View es la utilidad de ServiceNow que proporciona una interfaz gráfica interactiva para visualizar CIs y sus relaciones en el CMDB."
  },
  {
    id: 200,
    q: "What is the definition of a group?",
    opts: [
      "A. A collection of subject matter experts",
      "B. A team of users",
      "C. An escalation pod",
      "D. A collection of users",
      "E. A department"
    ],
    ans: "D",
    topic: "User Administration",
    exp: "Un grupo en ServiceNow es una colección de usuarios que generalmente comparten una función o responsabilidad común, usada para asignación de trabajo y control de acceso."
  }
];
