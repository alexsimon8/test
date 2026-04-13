// CSA Exam Questions — Batch 3: Q201–Q300

const QUESTIONS_201_300 = [
  {
    id: 201,
    q: "On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four.)",
    opts: [
      "A. Group",
      "B. Department",
      "C. My reports",
      "D. Team",
      "E. Global",
      "F. All"
    ],
    ans: "ACEF",
    topic: "Reporting & Metrics",
    exp: "En la página de Reports, las secciones que controlan visibilidad a diferentes audiencias son: Group (A), My reports (C), Global (E) y All (F)."
  },
  {
    id: 202,
    q: "On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?",
    opts: [
      "A. Label",
      "B. Column",
      "C. Data Element",
      "D. Field",
      "E. Attribute"
    ],
    ans: "D",
    topic: "Lists & Filters",
    exp: "En una condición de filtro, el elemento basado en la tabla y los derechos de acceso del usuario se llama Field (campo). Los campos disponibles dependen de los permisos del usuario."
  },
  {
    id: 203,
    q: "You have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval. The approvers and users should be automatically notified at each approval level. What feature would you use to manage the approvals and notifications?",
    opts: [
      "A. Approval Chains",
      "B. Flows",
      "C. Approver Delegates",
      "D. Parent-Child Approvers",
      "E. Approval Criteria"
    ],
    ans: "B",
    topic: "Flow Designer",
    exp: "Los Flows (flujos) en Flow Designer permiten gestionar aprobaciones multinivel y enviar notificaciones automáticas a cada nivel del proceso de aprobación."
  },
  {
    id: 204,
    q: "Groups are stored in what table?",
    opts: [
      "A. User Group [user_groups]",
      "B. Groups [sys_user_groups]",
      "C. Group [sn_sys_user_group]",
      "D. Group [sys_user_group]",
      "E. User Groups [sn_user_groups]"
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "Los grupos se almacenan en la tabla Group [sys_user_group]. El prefijo sys_ indica que es una tabla nativa del sistema."
  },
  {
    id: 205,
    q: "When managing tags, you can adjust who is able to see it. What are the visibility options? (Choose three.)",
    opts: [
      "A. Groups and Users",
      "B. Me",
      "C. Roles and Permissions",
      "D. Everyone",
      "E. Admins"
    ],
    ans: "ABD",
    topic: "Platform Navigation",
    exp: "Las opciones de visibilidad para los Tags son: Me (solo yo) (B), Groups and Users (grupos y usuarios específicos) (A) y Everyone (todos) (D)."
  },
  {
    id: 206,
    q: "What module enables an administrator to define destinations for imported data on any ServiceNow table?",
    opts: [
      "A. Field Transform",
      "B. Schema Map",
      "C. Transform Map",
      "D. Import Map"
    ],
    ans: "C",
    topic: "Import / Transform Maps",
    exp: "El Transform Map define el destino de los datos importados, mapeando los campos del Import Set a los campos de la tabla destino en ServiceNow."
  },
  {
    id: 207,
    q: "On the Form header, which icon do you use to access form templates?",
    opts: [
      "A. Stamp",
      "B. Pages",
      "C. More Options (...)",
      "D. Paperclip"
    ],
    ans: "C",
    topic: "Forms & Fields",
    exp: "El icono More Options (...) en el encabezado del formulario proporciona acceso a las plantillas (templates) y otras opciones adicionales del formulario."
  },
  {
    id: 208,
    q: "When using the Data Pill Picker, use which keys to dot-walk to fields in other tables?",
    opts: [
      "A. Plus, Minus",
      "B. Ctrl <, Ctrl >",
      "C. Arrows",
      "D. Ctrl C, Ctrl V",
      "E. Shift F4, Shift F5"
    ],
    ans: "C",
    topic: "Flow Designer",
    exp: "En el Data Pill Picker de Flow Designer, se usan las teclas de flecha (Arrows) para navegar y hacer dot-walk hacia campos de tablas relacionadas."
  },
  {
    id: 209,
    q: "In what order are Access Controls evaluated?",
    opts: [
      "A. Field-level - most specific to most general; then Table-level - most specific to most general",
      "B. Field-level - most general to most specific; then Row-level - most specific to most general",
      "C. Table-level - most specific to most general; then Field-level - most specific to most general",
      "D. Table-level - most specific to most general; then Row-level - most specific to most general"
    ],
    ans: "C",
    topic: "Security / Access Control",
    exp: "Las ACL se evalúan: primero a nivel de tabla (de más específico a más general), luego a nivel de campo (de más específico a más general). La primera regla que coincide se aplica."
  },
  {
    id: 210,
    q: "What instance resource allows you to access guided tours, information about actions, and instructions on how to use inputs and outputs in your flow?",
    opts: [
      "A. Docs",
      "B. Community",
      "C. Help Panel (question mark icon)",
      "D. Wiki"
    ],
    ans: "C",
    topic: "Flow Designer",
    exp: "El Help Panel (icono de signo de interrogación) en Flow Designer proporciona tours guiados, información sobre acciones y instrucciones para usar inputs y outputs."
  },
  {
    id: 211,
    q: "The Report Designer contains different sections for configuring your report. Which section is used to specify grouping and calculations to be run against the data?",
    opts: [
      "A. Style",
      "B. Group by",
      "C. Configure",
      "D. Format",
      "E. Data"
    ],
    ans: "C",
    topic: "Reporting & Metrics",
    exp: "La sección Configure en el Report Designer es donde se especifican las agrupaciones y los cálculos que se ejecutarán contra los datos del reporte."
  },
  {
    id: 212,
    q: "What icon do you use to change the icon and color on a Favorite?",
    opts: [
      "A. Clock",
      "B. Pencil",
      "C. Triangle",
      "D. Star"
    ],
    ans: "B",
    topic: "Platform Navigation",
    exp: "El icono de Lápiz (Pencil) se usa para editar un Favorito, permitiendo cambiar tanto el ícono como el color del mismo en el Application Navigator."
  },
  {
    id: 213,
    q: "You have heard about a new application released by ServiceNow. You want to try it out, to see if it might be useful for your company's ServiceNow implementation. What would be the best way to get hands-on experience with the new application?",
    opts: [
      "A. Search the wiki for the sales demo request form",
      "B. Check the latest release notes at docs.servicenow.com",
      "C. Activate the application plug-in, on your personal dev instance",
      "D. Activate the application plug-in, on your company's production instance"
    ],
    ans: "C",
    topic: "Platform Configuration",
    exp: "La mejor forma de probar una nueva aplicación es activar su plugin en tu instancia de desarrollo personal (PDI), nunca en producción para evitar impactos no deseados."
  },
  {
    id: 214,
    q: "When looking at a long list of records, you want to quickly filter, to show only those which have Category of Hardware. How might you do that?",
    opts: [
      "A. On the Category column header, right click and select Show > Hardware",
      "B. Right click on magnifier, type Hardware and click enter",
      "C. On the list, locate and right click on the value Hardware, select Show Matching",
      "D. On Breadcrumb, click > icon, type Hardware and click enter",
      "E. Click Funnel icon, type Hardware and click enter"
    ],
    ans: "C",
    topic: "Lists & Filters",
    exp: "Para filtrar rápidamente por un valor: localiza el valor Hardware en la lista, haz clic derecho sobre él y selecciona 'Show Matching' para filtrar por ese valor."
  },
  {
    id: 215,
    q: "When looking at a long list of records, you want to quickly filter, to show only those which have Short Description containing email. How might you do that?",
    opts: [
      "A. Click List Magnifier to expand column search, on Short Description, type email, click enter",
      "B. On Search box, select text, type email, click enter",
      "C. Click List Magnifier to expand column search, on Short Description, type *email, click enter",
      "D. Click List Magnifier to expand column search, on Short Description, type %email, click enter"
    ],
    ans: "C",
    topic: "Lists & Filters",
    exp: "Para buscar registros que contengan 'email' en Short Description: usa el List Magnifier para expandir la búsqueda de columna, escribe *email (con asterisco) y pulsa enter."
  },
  {
    id: 216,
    q: "When importing spreadsheet data into ServiceNow, what is the first step in the process?",
    opts: [
      "A. Run Data Scrubber",
      "B. Set Coalesce",
      "C. Select Import Set",
      "D. Load Data",
      "E. Define Data Source"
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "El primer paso del proceso de importación es Load Data (Cargar Datos), donde se carga el archivo de hoja de cálculo en el Import Set de ServiceNow."
  },
  {
    id: 217,
    q: "Tables may be set up with Many to Many relationships. What is a classic example of a scenario where the tables would have many to many relationships?",
    opts: [
      "A. Vendors can sell multiple products; and products can be sold by multiple vendors.",
      "B. A Task can trigger many Workflows; and a Workflow can trigger many Tasks.",
      "C. Requests can contain many Items; and Items can be any item from the catalog.",
      "D. A Configuration Item can belong to multiple Classes, and Classes can contain multiple Configuration Items."
    ],
    ans: "A",
    topic: "Tables & Database",
    exp: "El ejemplo clásico de relación Many to Many: un proveedor puede vender múltiples productos y un producto puede ser vendido por múltiples proveedores."
  },
  {
    id: 218,
    q: "What section on a task record would you use to see the most recent update made to a record?",
    opts: [
      "A. Audit Log",
      "B. Timeline",
      "C. Activity",
      "D. Journal"
    ],
    ans: "C",
    topic: "Forms & Fields",
    exp: "La sección Activity en un registro de tarea muestra el historial de actualizaciones, incluyendo la más reciente, con marca de tiempo y usuario que realizó el cambio."
  },
  {
    id: 219,
    q: "The Employee On-boarding team has asked for a way for managers to order computers, monitors, business cards, and cell phones for new employees. How would you proceed to meet this requirement?",
    opts: [
      "A. Create Requested Item",
      "B. Create Record Producer",
      "C. Create On-boarding Bot",
      "D. Create Order Guide"
    ],
    ans: "D",
    topic: "Service Catalog",
    exp: "Un Order Guide es la solución perfecta para agrupar múltiples ítems relacionados (computadora, monitor, tarjetas, teléfono) en un solo proceso de pedido para nuevos empleados."
  },
  {
    id: 220,
    q: "Which interface allows users to search articles, submit requests, and browse communication notices?",
    opts: [
      "A. Service Portal",
      "B. Employee Self Service",
      "C. Customer Service Management",
      "D. One Stop Shop"
    ],
    ans: "A",
    topic: "Platform Navigation",
    exp: "Service Portal es la interfaz que permite a los usuarios buscar artículos de conocimiento, enviar solicitudes y consultar avisos de comunicación de forma amigable."
  },
  {
    id: 221,
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
    exp: "Para agrupar por categoría desde la lista: usa el Context Menu de la lista > Group By > Category (A) o haz clic en el título de la columna Category > Group By Category (E)."
  },
  {
    id: 222,
    q: "To apply a UI Policy to all views, which field should be set to true in its definition record?",
    opts: [
      "A. Global",
      "B. Reverse if false",
      "C. On load",
      "D. Inherit"
    ],
    ans: "A",
    topic: "UI Development",
    exp: "Para que una UI Policy aplique a todas las vistas del formulario, el campo 'Global' debe estar marcado como true en el registro de definición de la UI Policy."
  },
  {
    id: 223,
    q: "What are the steps for importing data using an import set?",
    opts: [
      "A. Select source file; Run automap; Transform data; Clean up target table",
      "B. Identity source; Import transform map; Run transformer; Verify import",
      "C. Setup LDAP; Test map; Create update set; Run import; Apply update set",
      "D. Load the data; Create transform map; Transform data; Clean up import table"
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "Los pasos estándar para importar datos usando Import Sets son: Cargar datos → Crear transform map → Transformar datos → Limpiar la tabla de import."
  },
  {
    id: 224,
    q: "When moving a homepage or dashboard between instances, what must you remember?",
    opts: [
      "A. Manually add them to the update set",
      "B. They cannot be moved via update set",
      "C. They are automatically added to the update set",
      "D. Create a separate update set for them"
    ],
    ans: "A",
    topic: "Update Sets",
    exp: "Las homepages y dashboards NO se agregan automáticamente a los Update Sets. Debes agregarlos manualmente al Update Set antes de mover entre instancias."
  },
  {
    id: 225,
    q: "A Service Catalog project will involve building 80 catalog items. For each of the catalog items, the following fields will be mandatory on the forms: Requested for, Requested by, Approving manager, Delivery instructions. All of the other variables will be specific to the individual catalog item. What features would you use when designing the catalog item form?",
    opts: [
      "A. Create a Variable Set Template; then apply to all of the catalog items.",
      "B. Create one Variable Set for the four variables; then add that variable set to each of the 80 catalog items.",
      "C. Create a Record Producer that contains the four fields; then add to the record producer related list on the Catalog Items.",
      "D. Create a Flow Designer Action, with Variable Set Data Pill, then apply flow to all of the 80 catalog items.",
      "E. Create an Order Guide, which includes all variables; then copy and hide variables as needed."
    ],
    ans: "B",
    topic: "Service Catalog",
    exp: "La solución eficiente es crear un único Variable Set con los 4 campos comunes y luego agregarlo a cada uno de los 80 Catalog Items, evitando configuración duplicada."
  },
  {
    id: 226,
    q: "What access does a user need to be able to import articles to a knowledge base?",
    opts: [
      "A. sn_knowledge_import",
      "B. sn_knowledge_contribute",
      "C. Can contribute",
      "D. Can import"
    ],
    ans: "C",
    topic: "Knowledge Management",
    exp: "Para importar artículos a una Knowledge Base, el usuario necesita el permiso 'Can contribute' en esa base de conocimiento."
  },
  {
    id: 227,
    q: "When importing data from a spreadsheet, which step defines where the incoming data columns will be written to the receiving table?",
    opts: [
      "A. Schedule Transform",
      "B. Field Matching",
      "C. Select Data Source",
      "D. Create Transform Map",
      "E. Load Data"
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "El paso 'Create Transform Map' es donde se define el mapeo entre las columnas del archivo de origen y los campos de la tabla destino en ServiceNow."
  },
  {
    id: 228,
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
    exp: "Create Transform Map define el destino de cada columna del origen en la tabla receptora de ServiceNow, estableciendo el mapeo campo a campo."
  },
  {
    id: 229,
    q: "What are the steps for importing data using an import set?",
    opts: [
      "A. Select source file; Run automap; Transform data; Clean up target table",
      "B. Identity source; Import transform map; Run transformer; Verify import",
      "C. Setup LDAP; Test map; Create update set; Run import; Apply update set",
      "D. Load the data; Create transform map; Transform data; Clean up import table"
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "El proceso de Import Set: cargar datos (Load Data) → crear mapa de transformación → transformar datos → limpiar la tabla de importación."
  },
  {
    id: 230,
    q: "Which type of scripts run in the browser?",
    opts: [
      "A. Script Include Scripts",
      "B. Access Control Scripts",
      "C. Business Rule Scripts",
      "D. UI Policies and Client Scripts"
    ],
    ans: "D",
    topic: "Client Scripts",
    exp: "Los UI Policies y Client Scripts se ejecutan en el navegador del cliente (browser), a diferencia de Business Rules y Script Includes que se ejecutan en el servidor."
  },
  {
    id: 231,
    q: "Which modules can you use to create a new table? (Choose two.)",
    opts: [
      "A. Dictionary",
      "B. Schema Map",
      "C. Tables",
      "D. Tables & Columns"
    ],
    ans: "CD",
    topic: "Tables & Database",
    exp: "Se puede crear una nueva tabla usando el módulo Tables (C) o Tables & Columns (D). Ambos permiten crear y gestionar la estructura de tablas en ServiceNow."
  },
  {
    id: 232,
    q: "Which one of the following describes the primary operations performed against tables in the ServiceNow platform?",
    opts: [
      "A. Create, Read, Upload, Delete",
      "B. Capture, Rate, Write, Develop",
      "C. Create, Rate, Update, Delete",
      "D. Create, Read, Write, Delete"
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "Las operaciones CRUD básicas en ServiceNow son: Create (crear), Read (leer), Write (escribir/actualizar) y Delete (eliminar). Estas son las operaciones fundamentales de base de datos."
  },
  {
    id: 233,
    q: "How is a user defined in ServiceNow?",
    opts: [
      "A. A user is a record stored in the Profile [sys_user_profile] table",
      "B. A user is a record stored in the User [sys_user] table",
      "C. A user is a record stored in the User Preference [sys_user_preference] table",
      "D. A user is a field in the LDAP integration"
    ],
    ans: "B",
    topic: "User Administration",
    exp: "Un usuario en ServiceNow es un registro almacenado en la tabla User [sys_user], que contiene toda la información del perfil, roles y preferencias del usuario."
  },
  {
    id: 234,
    q: "Which ServiceNow utility gives a Service Desk agent the ability to trace a Service having an issue, to see which CIs supporting that service have active issues?",
    opts: [
      "A. CI Dependency View",
      "B. Event Management Homepage",
      "C. Service Dashboard",
      "D. CI Health Dashboard"
    ],
    ans: "A",
    topic: "CMDB",
    exp: "CI Dependency View permite a un agente rastrear un servicio con problemas y ver qué CIs que soportan ese servicio tienen issues activos."
  },
  {
    id: 235,
    q: "Which feature enables business process owners to organize Flow Designer content into unified and digitized cross-enterprise processes via a digitized task board interface?",
    opts: [
      "A. Flow Designer",
      "B. Workflow Editor",
      "C. Process Workflow Designer",
      "D. Process Automation Designer"
    ],
    ans: "D",
    topic: "Flow Designer",
    exp: "Process Automation Designer permite a los dueños de procesos organizar contenido de Flow Designer en procesos empresariales unificados mediante una interfaz de tablero de tareas digital."
  },
  {
    id: 236,
    q: "An IT user calls the service desk because they need to work on task records. All they can see is Self Service on their homepage when they login to the ServiceNow instance. What issue could explain this? (Choose two.)",
    opts: [
      "A. Their user account does not have itil role",
      "B. Their user account was not approved by their manager",
      "C. Their user account is not logged in properly",
      "D. Their user account failed LDAP authentication",
      "E. Their user account does not belong to any groups, which contain the itil role"
    ],
    ans: "AE",
    topic: "Security / Access Control",
    exp: "Si un usuario solo ve Self Service, probablemente no tiene el rol itil (A) o no pertenece a ningún grupo que contenga ese rol (E). El rol itil es necesario para acceder a los módulos de gestión."
  },
  {
    id: 237,
    q: "On a related list, which buttons are commonly used for managing the records on the list? (Choose three.)",
    opts: [
      "A. Add",
      "B. Edit",
      "C. Publish",
      "D. Manage",
      "E. New"
    ],
    ans: "ABE",
    topic: "Forms & Fields",
    exp: "Los botones comunes en las Related Lists son: Add (agregar relación existente) (A), Edit (editar) (B) y New (crear nuevo registro relacionado) (E)."
  },
  {
    id: 238,
    q: "A customer requests the following data quality measures be added: Incident numbers should be read only, on all lists and forms, for all users. Short Description field should be mandatory, on all records, across all applications, on Insert. Which type of policy would you use?",
    opts: [
      "A. Data Quality Policy",
      "B. Dictionary Design Policy",
      "C. Data Policy",
      "D. Field Criteria Policy"
    ],
    ans: "C",
    topic: "UI Development",
    exp: "Data Policy aplica reglas de datos independientemente del método de entrada (formulario, API, importación). Es la solución correcta para reglas de calidad de datos globales."
  },
  {
    id: 239,
    q: "On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?",
    opts: [
      "A. Application Navigator",
      "B. Service Desk Homepage",
      "C. Self Service Module",
      "D. Favorites"
    ],
    ans: "A",
    topic: "Platform Navigation",
    exp: "El Application Navigator (panel izquierdo) es donde se accede a todas las aplicaciones y módulos, incluyendo Incident Management."
  },
  {
    id: 240,
    q: "What catalog tool would you use to create a catalog item or record producer?",
    opts: [
      "A. Catalog Builder",
      "B. Workflow Designer",
      "C. Catalog Designer",
      "D. Catalog Formatter"
    ],
    ans: "A",
    topic: "Service Catalog",
    exp: "Catalog Builder es la herramienta visual de ServiceNow para crear y configurar Catalog Items y Record Producers en el Service Catalog."
  },
  {
    id: 241,
    q: "On a form, which type of field has this icon which can be clicked, to see a preview of the associated record?",
    opts: [
      "A. Lookup",
      "B. Preview",
      "C. Reference",
      "D. Snapshot",
      "E. Quickview",
      "F. Drilldown"
    ],
    ans: "C",
    topic: "Forms & Fields",
    exp: "El tipo de campo Reference tiene el icono de información (i) que al hacer clic muestra una vista previa del registro referenciado sin necesidad de navegar a él."
  },
  {
    id: 242,
    q: "While on an Incident record, how would you add a Tag for 'Special Handling' to the record?",
    opts: [
      "A. Click on the Context menu, select Add Tag, type Special Handling, press enter",
      "B. Click on the More options (...) icon, click Add Tag, type Special Handling, press enter",
      "C. On the Tag field, select Special Handling from the choice list",
      "D. On the Special Handling field, check the box"
    ],
    ans: "B",
    topic: "Platform Navigation",
    exp: "Para agregar un Tag a un registro: haz clic en el icono More options (...), selecciona Add Tag, escribe el nombre 'Special Handling' y presiona enter."
  },
  {
    id: 243,
    q: "What feature allows you to limit who is able to contribute or read knowledge within a knowledge base?",
    opts: [
      "A. Roles",
      "B. Groups",
      "C. User Criteria",
      "D. Categories"
    ],
    ans: "C",
    topic: "Knowledge Management",
    exp: "User Criteria es la funcionalidad que controla quién puede leer o contribuir en una Knowledge Base, permitiendo definir reglas basadas en roles, grupos y otros atributos."
  },
  {
    id: 244,
    q: "When moving a homepage or dashboard between instances, what must you remember?",
    opts: [
      "A. Manually add them to the update set",
      "B. They cannot be moved via update set",
      "C. They are automatically added to the update set",
      "D. Create a separate update set for them"
    ],
    ans: "A",
    topic: "Update Sets",
    exp: "Las homepages y dashboards deben agregarse manualmente al Update Set. No se capturan automáticamente como otras personalizaciones."
  },
  {
    id: 245,
    q: "What is the platform name for the Group table?",
    opts: [
      "A. sys_groups",
      "B. group",
      "C. sys_user_group",
      "D. sys_group"
    ],
    ans: "C",
    topic: "Tables & Database",
    exp: "La tabla de grupos en ServiceNow se llama sys_user_group. Almacena todos los grupos de usuarios de la plataforma."
  },
  {
    id: 246,
    q: "Many actions are included with flow designer, what are some frequently used core actions? (Choose four.)",
    opts: [
      "A. Look for Update",
      "B. Create Record",
      "C. Ask for Approval",
      "D. Look Up Record",
      "E. Wait for Condition",
      "F. Wait for Match"
    ],
    ans: "BCDE",
    topic: "Flow Designer",
    exp: "Las acciones core más usadas en Flow Designer son: Create Record (B), Ask for Approval (C), Look Up Record (D) y Wait for Condition (E)."
  },
  {
    id: 247,
    q: "What role enables someone to authorize a request, with no other permissions on the platform?",
    opts: [
      "A. Approval Group [approval_group]",
      "B. Authorize [authorize_user]",
      "C. Reviewer [reviewer_user]",
      "D. Verification [verify_user]",
      "E. Approver [approver_user]"
    ],
    ans: "E",
    topic: "Security / Access Control",
    exp: "El rol Approver [approver_user] permite a alguien autorizar/aprobar solicitudes sin necesitar ningún otro permiso en la plataforma."
  },
  {
    id: 248,
    q: "On the knowledge base record, which tab would you use to define which users are not able to write articles to the knowledge base?",
    opts: [
      "A. Can Contribute",
      "B. Cannot Author",
      "C. Can Read",
      "D. Can Write",
      "E. Can Author"
    ],
    ans: "A",
    topic: "Knowledge Management",
    exp: "La pestaña 'Can Contribute' muestra quién puede escribir artículos. Para definir quién NO puede escribir, se gestiona desde esta misma sección excluyendo usuarios/grupos."
  },
  {
    id: 249,
    q: "What types of entities can receive task assignments, in ServiceNow? (Choose two.)",
    opts: [
      "A. Users",
      "B. Departments",
      "C. Groups",
      "D. Teams"
    ],
    ans: "AC",
    topic: "User Administration",
    exp: "En ServiceNow, las tareas pueden asignarse a dos tipos de entidades: Users (usuarios individuales) y Groups (grupos de usuarios)."
  },
  {
    id: 250,
    q: "The Report Designer contains different sections for configuring your report. Which section is used to adjust the look of your report, including colors, titles and legend layout?",
    opts: [
      "A. Layout",
      "B. Format",
      "C. Configure",
      "D. Style"
    ],
    ans: "D",
    topic: "Reporting & Metrics",
    exp: "La sección Style en el Report Designer permite ajustar la apariencia visual del reporte, incluyendo colores, títulos y diseño de leyendas."
  },
  {
    id: 251,
    q: "How would you distinguish between a Base Class table and a Parent Class table?",
    opts: [
      "A. Extended tables are always extended from Parent tables. Extended tables are usually extended from Base tables.",
      "B. Extended tables can be extended from Parent tables or Base tables; but they cannot be extended from both.",
      "C. Base Class tables always have tables extended from them. Parent tables do not have tables extended from them.",
      "D. Base Class table is not extended from another table. Parent class tables may be extended from another table."
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "Una Base Class table no extiende ninguna otra tabla (es la raíz). Una Parent Class table puede extender otra tabla y a su vez ser extendida por otras tablas."
  },
  {
    id: 252,
    q: "When a custom table is created, which access control rules are automatically created? (Choose four.)",
    opts: [
      "A. create",
      "B. delete",
      "C. execute",
      "D. update",
      "E. read",
      "F. write"
    ],
    ans: "ABEF",
    topic: "Security / Access Control",
    exp: "Al crear una tabla personalizada, se crean automáticamente 4 ACL: create (A), delete (B), read (E) y write (F). Estas cubren las operaciones CRUD básicas."
  },
  {
    id: 253,
    q: "Which banner icon do you use to change your personal system settings, like your instance color scheme?",
    opts: [
      "A. Magnifier",
      "B. Question mark",
      "C. Gear",
      "D. Chat bubbles"
    ],
    ans: "C",
    topic: "Platform Navigation",
    exp: "El icono de Engranaje (Gear) en el banner permite acceder a las configuraciones personales del sistema, incluyendo el esquema de colores de la instancia."
  },
  {
    id: 254,
    q: "Which banner icon do you use to change your personal system settings, like your instance color scheme?",
    opts: [
      "A. Magnifier",
      "B. Question mark",
      "C. Gear",
      "D. Chat bubbles"
    ],
    ans: "C",
    topic: "Platform Navigation",
    exp: "El icono Gear (engranaje) en el banner da acceso a System Settings personales, donde puedes cambiar el tema de color, accesibilidad y otras preferencias."
  },
  {
    id: 255,
    q: "When building an extended table from a base table, which fields do you need to create? (Choose two.)",
    opts: [
      "A. The fields that are not in the base table.",
      "B. The mandatory fields for the base table.",
      "C. The fields that are specific to the extended table.",
      "D. The reference fields for the base table."
    ],
    ans: "AC",
    topic: "Tables & Database",
    exp: "Al crear una tabla extendida solo necesitas crear: los campos que no están en la tabla base (A) y los campos específicos de la tabla extendida (C). Los campos de la base se heredan automáticamente."
  },
  {
    id: 256,
    q: "While showing a customer their Incident form, they ask to change the Priority field title to display their internal terminology PValue. How would you do that? (Choose two.)",
    opts: [
      "A. Right click on Priority and select Configure Label",
      "B. Right click on Priority and select Configure Dictionary",
      "C. Right click on Priority and select Configure Display Settings",
      "D. Right click on Priority and select Configure Column"
    ],
    ans: "AB",
    topic: "Forms & Fields",
    exp: "Para cambiar la etiqueta de un campo: clic derecho > Configure Label (A) para cambiar la etiqueta solo en esa vista, o Configure Dictionary (B) para cambiarla en toda la plataforma."
  },
  {
    id: 257,
    q: "As administrator, what must you do to access features of High Security Settings?",
    opts: [
      "A. Impersonate Security Admin",
      "B. Select Elevate Roles",
      "C. Add security_admin role to your user account",
      "D. Use System Administration > Elevate Roles module"
    ],
    ans: "B",
    topic: "Security / Access Control",
    exp: "Para acceder a las funciones de High Security Settings, el administrador debe seleccionar 'Elevate Roles' desde el menú de usuario, lo que eleva temporalmente sus privilegios."
  },
  {
    id: 258,
    q: "What section on the notes tab, shows the history of the work documented on the record?",
    opts: [
      "A. Audit Log",
      "B. Timeline",
      "C. Journal",
      "D. Diary",
      "E. Activity"
    ],
    ans: "E",
    topic: "Forms & Fields",
    exp: "La sección Activity en la pestaña Notes muestra el historial completo del trabajo documentado en el registro, incluyendo comentarios, actualizaciones y cambios de estado."
  },
  {
    id: 259,
    q: "How would you navigate to the Schema map for a table?",
    opts: [
      "A. System Definition > Tables; Select Table; Go to Related links and click Show Schema Map",
      "B. System Dictionary > Show Schema Map; Select Table",
      "C. System Definition > Show Schema Map; Select Table",
      "D. System Definition > Dictionary; Select Table; Go to Related links and click Show Schema Map"
    ],
    ans: "A",
    topic: "Tables & Database",
    exp: "Para navegar al Schema Map de una tabla: System Definition > Tables, selecciona la tabla y en los Related Links haz clic en Show Schema Map."
  },
  {
    id: 260,
    q: "Which is the base table of the configuration management database hierarchy?",
    opts: [
      "A. cmdb_ci",
      "B. cmdb",
      "C. cmdb_rel_ci",
      "D. ucmdb"
    ],
    ans: "B",
    topic: "CMDB",
    exp: "La tabla cmdb es la tabla base de la jerarquía del CMDB. Todas las demás tablas de Configuration Items (como cmdb_ci) extienden esta tabla base."
  },
  {
    id: 261,
    q: "Which best describes a field in a ServiceNow table?",
    opts: [
      "A. A field is a table row.",
      "B. A field is an item that appears in a menu list.",
      "C. A field is a table cell that stores data.",
      "D. A field is a record in a table."
    ],
    ans: "C",
    topic: "Tables & Database",
    exp: "Un campo en ServiceNow es una celda de tabla que almacena un dato específico. Cada campo corresponde a una columna de la tabla para un registro específico."
  },
  {
    id: 262,
    q: "What are examples of UI Actions relating to forms? (Choose three.)",
    opts: [
      "A. Form Columns",
      "B. Form View",
      "C. Form Buttons",
      "D. Form Context Menu",
      "E. Form Links"
    ],
    ans: "CDE",
    topic: "UI Development",
    exp: "Los tipos de UI Actions relacionadas con formularios son: Form Buttons (botones en el formulario) (C), Form Context Menu (elementos de menú contextual) (D) y Form Links (enlaces) (E)."
  },
  {
    id: 263,
    q: "Here is an example of the criteria set for a knowledge base: Companies: ACME North America, Departments: HR, Groups: ACME Managers, Match All: Yes. In this example, what users would have access to this knowledge base?",
    opts: [
      "A. Members of the ACME Manager group, who are also members of HR Department and part of ACME North America",
      "B. Employees of ACME North America, who are members of HR Department or the ACME Managers group",
      "C. Users which are either members of ACME North America, or HR Department, or ACME Managers group",
      "D. Members of the ACME Managers group, and HR department, regardless of geography"
    ],
    ans: "A",
    topic: "Knowledge Management",
    exp: "Con 'Match All: Yes', el usuario debe cumplir TODOS los criterios simultáneamente: ser de ACME North America AND del departamento HR AND del grupo ACME Managers."
  },
  {
    id: 264,
    q: "In Flow Designer, where is the data from an action stored so it can be used in subsequent actions in the flow?",
    opts: [
      "A. Data Pill",
      "B. Data Element",
      "C. Data Trigger",
      "D. Field Value",
      "E. Field Icon"
    ],
    ans: "A",
    topic: "Flow Designer",
    exp: "Los Data Pills almacenan los datos de salida de una acción en el flujo, permitiendo que esos valores sean referenciados y usados en acciones posteriores del mismo flujo."
  },
  {
    id: 265,
    q: "A customer has asked for the following updates to a form: Make Resolution code Mandatory, when state is changed to Resolved. Hide Major Incident check box, unless logged in user has Major Incident Manager role. What type of rule(s) would you use to implement this requirement?",
    opts: [
      "A. Form Constraint",
      "B. UI Design",
      "C. Field Limiter",
      "D. UI Policy",
      "E. Dictionary Design"
    ],
    ans: "D",
    topic: "UI Development",
    exp: "Las UI Policies son la herramienta adecuada para controlar dinámicamente la visibilidad y obligatoriedad de campos basándose en condiciones como el estado del registro o el rol del usuario."
  },
  {
    id: 266,
    q: "What setting allows users to view a Knowledge Base article even if they are not logged in?",
    opts: [
      "A. The Public setting",
      "B. The View All setting",
      "C. The ESS role",
      "D. The Allow All role"
    ],
    ans: "A",
    topic: "Knowledge Management",
    exp: "El ajuste 'Public' en una Knowledge Base permite que los artículos sean visibles para usuarios no autenticados, es decir, sin necesidad de iniciar sesión."
  },
  {
    id: 267,
    q: "When adding a related list to a form, you choose the related list from the list collector. What is an example of a related list you might see on the list collector? (Choose three.)",
    opts: [
      "A. Problem==Parent",
      "B. HR Case->Parent",
      "C. Catalog Task->Parent",
      "D. Outage->Task number",
      "E. Release Phase==Parent"
    ],
    ans: "BCD",
    topic: "Forms & Fields",
    exp: "En el selector de Related Lists, se muestran relaciones como HR Case->Parent (B), Catalog Task->Parent (C) y Outage->Task number (D), usando -> para indicar la relación de referencia."
  },
  {
    id: 268,
    q: "How is the ServiceNow platform set up so that Administrators can easily configure their instances to send an email at the end of an upgrade?",
    opts: [
      "A. Administrators can update the email notification named 'System Upgraded' in the System Logs module by adding the appropriate User to receive it.",
      "B. Administrators can update the email notification named 'System Upgraded' in the Notifications module by adding the appropriate User to receive it.",
      "C. Administrators can write a Client Script to send out an email to the Administrator when an Update is complete.",
      "D. Administrators can write a Business Rule to send an email to the Administrator when an Update is complete."
    ],
    ans: "B",
    topic: "Platform Features",
    exp: "La plataforma tiene una notificación predefinida 'System Upgraded' en el módulo Notifications que los administradores pueden actualizar para añadir los usuarios que recibirán el email."
  },
  {
    id: 269,
    q: "A customer wants to be able to identify and track components of their infrastructure that support their eCommerce service. What ServiceNow products could support this requirement? (Choose three.)",
    opts: [
      "A. Asset Management",
      "B. Discovery",
      "C. Configuration Management (CMDB)",
      "D. Service Mapping",
      "E. Performance Analytics"
    ],
    ans: "BCD",
    topic: "CMDB",
    exp: "Para identificar y rastrear componentes de infraestructura: Discovery (descubrimiento automático) (B), CMDB (repositorio de CIs) (C) y Service Mapping (mapeo de servicios) (D)."
  },
  {
    id: 270,
    q: "For your implementation, the following tables are extended from each other: Incident table is extended from Task table. Super Incident table is extended from Incident table. In this situation, which table(s) are Parent, Child and Base tables? (Choose five.)",
    opts: [
      "A. Super Incident table is a Parent table",
      "B. Incident table is a Child table",
      "C. Super Incident is a Base table",
      "D. Incident table is a Base table",
      "E. Task table is a Child table",
      "F. Incident table is a Parent table",
      "G. Super Incident table is a Child table",
      "H. Task table is a Parent table",
      "I. Task table is a Base table"
    ],
    ans: "BFGHI",
    topic: "Tables & Database",
    exp: "Task: Base (I) y Parent (H). Incident: Child de Task (B) y Parent de Super Incident (F). Super Incident: Child de Incident (G). Task es Base porque no extiende ninguna otra tabla."
  },
  {
    id: 271,
    q: "What capability allows users to create dashboards with widgets to visualize data over time in order to identify areas of improvement?",
    opts: [
      "A. Scheduled Reports",
      "B. Performance Analytics",
      "C. Analytics Reports",
      "D. Reporting"
    ],
    ans: "B",
    topic: "Reporting & Metrics",
    exp: "Performance Analytics permite crear dashboards con widgets que visualizan datos a lo largo del tiempo, mostrando tendencias y áreas de mejora para toma de decisiones."
  },
  {
    id: 272,
    q: "Which type of ServiceNow script runs on the web browser?",
    opts: [
      "A. Server script",
      "B. Database script",
      "C. Client script",
      "D. Local script"
    ],
    ans: "C",
    topic: "Client Scripts",
    exp: "Los Client Scripts se ejecutan en el navegador web del usuario (lado del cliente). Los Business Rules y Script Includes se ejecutan en el servidor."
  },
  {
    id: 273,
    q: "When selecting the Target table for an import, which tables can you select? (Choose three.)",
    opts: [
      "A. Tables outside of ServiceNow",
      "B. Tables within the global scope",
      "C. Related tables, using Dot Walk",
      "D. Tables which allow write access to other applications",
      "E. Tables within the existing application scope"
    ],
    ans: "BDE",
    topic: "Import / Transform Maps",
    exp: "Para la tabla destino en un import, puedes seleccionar: tablas dentro del scope global (B), tablas que permiten escritura a otras aplicaciones (D) y tablas dentro del scope de la aplicación actual (E)."
  },
  {
    id: 274,
    q: "What is a sys_id?",
    opts: [
      "A. Unique 32-character identifier that is assigned to every record",
      "B. A client-side Business Rule",
      "C. A server-side Business Rule",
      "D. Unique 64-character identifier that is assigned to every record"
    ],
    ans: "A",
    topic: "Tables & Database",
    exp: "El sys_id es un identificador único de 32 caracteres (UUID/GUID) asignado automáticamente a cada registro en ServiceNow para identificarlo de forma única en toda la plataforma."
  },
  {
    id: 275,
    q: "What tool is used to import data from various data sources, and map that data into ServiceNow tables?",
    opts: [
      "A. Transform Set",
      "B. Data Pack",
      "C. Update Set",
      "D. Import Set"
    ],
    ans: "D",
    topic: "Import / Transform Maps",
    exp: "Import Set es la herramienta principal para importar datos de diversas fuentes y mapearlos a tablas de ServiceNow mediante Transform Maps."
  },
  {
    id: 276,
    q: "When you set a policy that is applied to all data entered into the platform (UI, Import Sets, or Web Services), where does this policy run by default?",
    opts: [
      "A. Client",
      "B. Network",
      "C. Browser",
      "D. Server"
    ],
    ans: "D",
    topic: "UI Development",
    exp: "Las Data Policies se ejecutan en el Servidor por defecto, lo que garantiza que se apliquen independientemente de cómo se introduzcan los datos (formulario, API, importación)."
  },
  {
    id: 277,
    q: "On what part of the ServiceNow instance, would you find the option to Impersonate User?",
    opts: [
      "A. User Menu",
      "B. Content Frame",
      "C. Application Navigator",
      "D. Module"
    ],
    ans: "A",
    topic: "User Administration",
    exp: "La opción Impersonate User se encuentra en el User Menu (menú de usuario), accesible haciendo clic en el nombre del usuario o icono de perfil en el banner."
  },
  {
    id: 278,
    q: "How would you describe the relationship between the Incident and Task table?",
    opts: [
      "A. Incident table has a one to many relationship with the Task table",
      "B. Incident table is extended from Task table",
      "C. Incident table is related to the Task table via the INC number",
      "D. Incident table has a many to many relationship with the Task table",
      "E. Incident table is a database view of the Task table"
    ],
    ans: "B",
    topic: "Tables & Database",
    exp: "La tabla Incident extiende (hereda de) la tabla Task. Esto significa que Incident tiene todos los campos de Task más sus propios campos específicos."
  },
  {
    id: 279,
    q: "Which flow components allow you to specify when a flow should be run?",
    opts: [
      "A. Trigger and Condition Pill",
      "B. Condition and Table",
      "C. Trigger Criteria and Clock",
      "D. Trigger and Condition",
      "E. Scope and Trigger Condition"
    ],
    ans: "D",
    topic: "Flow Designer",
    exp: "En Flow Designer, el Trigger (disparador) y la Condition (condición) son los componentes que especifican cuándo debe ejecutarse un flujo."
  },
  {
    id: 280,
    q: "Which feature helps to automatically allocate a critical, high-priority, service request to the appropriate assignment group or team member?",
    opts: [
      "A. Assignment Rule",
      "B. User Policy",
      "C. Predictive Intelligence",
      "D. UI Policy"
    ],
    ans: "A",
    topic: "Platform Features",
    exp: "Las Assignment Rules asignan automáticamente registros al grupo o miembro del equipo apropiado basándose en criterios como categoría, prioridad u otros campos del registro."
  },
  {
    id: 281,
    q: "The Report Designer contains different sections for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report?",
    opts: [
      "A. Type",
      "B. Properties",
      "C. Configure",
      "D. Sources",
      "E. Data"
    ],
    ans: "E",
    topic: "Reporting & Metrics",
    exp: "La sección Data en el Report Designer es donde se especifica el nombre del reporte y la tabla o fuente de datos que se usará para generarlo."
  },
  {
    id: 282,
    q: "You are editing a new Incident record and would like the 'Save' button to be located on the Form header. Which action would need to be taken for that button to appear?",
    opts: [
      "A. Context Menu > Form Design > add the 'Save' button.",
      "B. All > System Properties > UI Properties > Turn on the glide.ui.advanced property.",
      "C. All > System Properties > UI Properties > Turn on the 'Save' button.",
      "D. Context Menu > Form Layout > add the 'Save' button."
    ],
    ans: "C",
    topic: "Platform Configuration",
    exp: "Para mostrar el botón 'Save' en el header del formulario: All > System Properties > UI Properties > activar la propiedad del botón 'Save'."
  },
  {
    id: 283,
    q: "Which features ensures data consistency while importing data using import sets and web services?",
    opts: [
      "A. UI Policy",
      "B. Data Policy",
      "C. Business Rule",
      "D. Client Script",
      "E. CSDM"
    ],
    ans: "B",
    topic: "UI Development",
    exp: "Data Policy garantiza la consistencia de datos durante importaciones y web services, aplicando reglas de obligatoriedad y solo lectura independientemente del método de entrada."
  },
  {
    id: 284,
    q: "When using Flow Designer, what is the Flow Execution initiated by?",
    opts: [
      "A. A flow logic",
      "B. An existing subflow",
      "C. An execution data pill",
      "D. A trigger"
    ],
    ans: "D",
    topic: "Flow Designer",
    exp: "La ejecución de un flujo en Flow Designer siempre es iniciada por un Trigger (disparador). Sin trigger, el flujo no puede ejecutarse."
  },
  {
    id: 285,
    q: "What is the name of the string that displays filter criteria?",
    opts: [
      "A. Breadcrumb",
      "B. Choice",
      "C. Menu",
      "D. Topic"
    ],
    ans: "A",
    topic: "Lists & Filters",
    exp: "El Breadcrumb (migas de pan) es la cadena de texto que muestra los criterios de filtro activos en una lista, permitiendo ver y modificar los filtros aplicados."
  },
  {
    id: 286,
    q: "Which system property is added and set to true in order to see impersonation events in the System Log?",
    opts: [
      "A. glide.sys.all_impersonation",
      "B. glide.user_setting",
      "C. glide.impersonation_setting",
      "D. glide.sys.log_impersonation",
      "E. glide.sys.admin_login"
    ],
    ans: "D",
    topic: "User Administration",
    exp: "La propiedad glide.sys.log_impersonation debe activarse (true) para que los eventos de impersonación queden registrados en el System Log."
  },
  {
    id: 287,
    q: "What process allows users to create, categorize, review, approve and browse important information in a centralized location that is shared by the entire organization?",
    opts: [
      "A. Self Service Management",
      "B. Knowledge Management",
      "C. Business Information Management",
      "D. Information Portal Management",
      "E. Knowledge-Centered Management"
    ],
    ans: "B",
    topic: "Knowledge Management",
    exp: "Knowledge Management es el proceso que permite crear, categorizar, revisar y compartir información importante en una ubicación centralizada accesible para toda la organización."
  },
  {
    id: 288,
    q: "A colleague wants to rearrange the columns on their My Work List. Once the user has navigated to the list, where should they navigate to select and arrange the columns?",
    opts: [
      "A. Right click on any column header, Context Menu > Configure > List Layout",
      "B. Click List Context Menu > Configure > List Layout",
      "C. Click List Context Menu > Personalize > List",
      "D. Click Personalize List"
    ],
    ans: "D",
    topic: "Lists & Filters",
    exp: "Para reorganizar columnas en una lista: haz clic en el botón 'Personalize List' (icono de columnas) que aparece en el encabezado de la lista."
  },
  {
    id: 289,
    q: "You are looking at a list of Active Incidents. You want to exclude Incidents with the state of Resolved. How might you do that?",
    opts: [
      "A. On Search, select State, type not Resolved, press enter",
      "B. On State column title, right-click, select Filter Out > Resolved",
      "C. On the list of records, locate and right click on the Resolved value, select Filter Out",
      "D. On the list of records, locate and right-click on the Resolved value, select Exclude",
      "E. Click Funnel icon, click AND, Select Resolved, is Not, State, click Run"
    ],
    ans: "C",
    topic: "Lists & Filters",
    exp: "Para excluir registros con un valor específico: localiza el valor 'Resolved' en la lista, haz clic derecho sobre él y selecciona 'Filter Out' para excluirlos del filtro."
  },
  {
    id: 290,
    q: "Roles can inherit permissions from other roles. Which role inherits all of the permissions of the catalog role, and the user_criteria_admin role, plus has permissions to create Items and Services?",
    opts: [
      "A. Sys Admin [sys_admin]",
      "B. Catalog Admin [catalog_admin]",
      "C. Catalog Author [sn_catalog_write]",
      "D. Item Admin [sn_item_admin]"
    ],
    ans: "B",
    topic: "Security / Access Control",
    exp: "El rol Catalog Admin hereda los permisos de catalog y user_criteria_admin, y además tiene permisos para crear ítems y servicios en el Service Catalog."
  },
  {
    id: 291,
    q: "What component of the ServiceNow infrastructure defines every table and field in the system?",
    opts: [
      "A. Schema",
      "B. Field Map",
      "C. Table Class Manager",
      "D. Dictionary",
      "E. Data Atlas"
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "El Dictionary (Diccionario) define cada tabla y campo del sistema en ServiceNow, incluyendo tipo de datos, longitud, etiquetas y otras propiedades de los campos."
  },
  {
    id: 292,
    q: "Which data consistency settings can be achieved using UI Policy? (Choose three.)",
    opts: [
      "A. Setting fields to accept the data in an expected format",
      "B. Setting fields to accept the data with 'n' number of characters",
      "C. Setting fields hidden",
      "D. Settings fields read-only",
      "E. Setting fields mandatory"
    ],
    ans: "CDE",
    topic: "UI Development",
    exp: "Las UI Policies pueden: ocultar campos (C), hacerlos de solo lectura (D) y hacerlos obligatorios (E). Estas configuraciones se aplican dinámicamente basadas en condiciones."
  },
  {
    id: 293,
    q: "A customer wants to use a client script to validate things on a form in order to make sure the submission makes sense. What type of client script would you recommend to meet this requirement?",
    opts: [
      "A. onSubmit()",
      "B. onSubmission()",
      "C. onUpdate()",
      "D. onLoad()"
    ],
    ans: "A",
    topic: "Client Scripts",
    exp: "onSubmit() es el tipo de Client Script que se ejecuta cuando el usuario intenta guardar/enviar el formulario, ideal para validaciones antes de que los datos se envíen al servidor."
  },
  {
    id: 294,
    q: "An order from the Service Catalog has been placed. Two records in the Platform are created as a result. Which two records are associated with this newly ordered item? (Choose two.)",
    opts: [
      "A. A record of sc_req_item table",
      "B. A record of sc_task",
      "C. An incident record",
      "D. A change record",
      "E. A problem record"
    ],
    ans: "AB",
    topic: "Service Catalog",
    exp: "Cuando se realiza un pedido en el Service Catalog se crean: un registro RITM en sc_req_item (A) y puede crearse un sc_task (B) si el flujo lo genera. El REQ es el padre de ambos."
  },
  {
    id: 295,
    q: "What action will allow you to personalize layouts of columns in a list?",
    opts: [
      "A. Context Menu > View > Personalize",
      "B. Click Gear Icon > Personalize window options > Select the appropriate columns",
      "C. Select the column to be personalized and right at the header > Choose the options to personalize",
      "D. Select the column to be personalized > Click Edit icon (Pencil) > Choose the options to personalize"
    ],
    ans: "B",
    topic: "Lists & Filters",
    exp: "Para personalizar el diseño de columnas de una lista: haz clic en el icono Gear > Personalize window options > selecciona las columnas apropiadas."
  },
  {
    id: 296,
    q: "An order for new office equipment has been placed through the Service Catalog. How would you view the lists of requests after the orders have been placed?",
    opts: [
      "A. All > Tables and Columns > Tasks",
      "B. In the Navigation Filter, type 'requests.list' and press the Enter key",
      "C. All > Service Catalog > Requests",
      "D. All > Service Catalog > Open Records > Items"
    ],
    ans: "D",
    topic: "Service Catalog",
    exp: "Para ver los ítems de solicitudes del catálogo: All > Service Catalog > Open Records > Items, que muestra los RITMs (Request Items) activos."
  },
  {
    id: 297,
    q: "Which path would you take to access the table configuration page from a form?",
    opts: [
      "A. The Form Context menu > View > Show Table",
      "B. The Form Context menu > View > Table",
      "C. The Form Context menu > Configure > Dictionary",
      "D. The Form Context menu > Configure > Table"
    ],
    ans: "D",
    topic: "Tables & Database",
    exp: "Para acceder a la configuración de la tabla desde un formulario: Form Context Menu > Configure > Table, que abre la página de configuración de la tabla subyacente."
  },
  {
    id: 298,
    q: "Which admin role is required to make changes to High Security Settings?",
    opts: [
      "A. high_sec_admin",
      "B. sn_acl_admin",
      "C. admin",
      "D. security_admin"
    ],
    ans: "D",
    topic: "Security / Access Control",
    exp: "El rol security_admin es requerido para realizar cambios en High Security Settings. Este rol debe ser elevado temporalmente por un administrador."
  },
  {
    id: 299,
    q: "What is the most common role that has access to almost all platform features, functions, and data?",
    opts: [
      "A. Super User [sn_super_user]",
      "B. Security Admin [security_admin]",
      "C. System Administrator [admin]",
      "D. Base Admin [base_admin]",
      "E. System Manager [sys_manager]"
    ],
    ans: "C",
    topic: "Security / Access Control",
    exp: "System Administrator [admin] es el rol más común con acceso a casi todas las funciones y datos de la plataforma. Es el rol de administrador estándar en ServiceNow."
  },
  {
    id: 300,
    q: "When moving multiple update sets at one time, what might you do to facilitate the move?",
    opts: [
      "A. Preview",
      "B. Batch",
      "C. List",
      "D. Map"
    ],
    ans: "B",
    topic: "Update Sets",
    exp: "La función Batch permite agrupar y mover múltiples Update Sets simultáneamente, simplificando el proceso de migración cuando hay varios conjuntos de cambios."
  }
];
