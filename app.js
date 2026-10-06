const MODULES = {
  dashboard: { label: "Visão geral", icon: "◫", group: "Gestão" },
  analytics: { label: "Análises e desempenho", icon: "⌁", group: "Gestão", title: "Análises e desempenho", description: "Indicadores comparativos, eficiência por categoria e visão executiva da entressafra." },
  deadlines: { label: "Prazos e alertas", icon: "◷", group: "Gestão", title: "Central de prazos e alertas", description: "Reformas atrasadas, entregas próximas e documentos que exigem atenção." },
  quality: { label: "Qualidade dos dados", icon: "✓", group: "Gestão", title: "Qualidade e integridade dos dados", description: "Diagnóstico automático de campos vazios, duplicidades e registros que precisam de revisão." },
  search: { label: "Pesquisa global", title: "Pesquisa em todo o sistema", description: "Resultados encontrados em todos os módulos operacionais." },
  plantio: { label: "Equipamentos de plantio", icon: "⌁", group: "Operação", title: "Equipamentos de plantio", description: "Situação, pendências e previsão de entrega dos equipamentos das frentes 4001 e 4002.", key: "frota", columns: ["frota", "equipamento", "modelo", "frente", "status", "pendencias", "previsaoEntrega"] },
  caminhoesReforma: { label: "Reforma de caminhões", icon: "▰", group: "Reformas", title: "Reforma de caminhões", description: "Acompanhamento de limpeza, localização, pendências e execução da reforma.", key: "frota", columns: ["frota", "placa", "funcao", "localizacao", "status", "pendencias", "inicio", "fim"] },
  carretasReforma: { label: "Reforma de carretas", icon: "▱", group: "Reformas", title: "Reforma de implementos rodoviários", description: "Controle da reforma, limpeza, lubrificação, pneus e programação dos implementos.", key: "frota", columns: ["frota", "placa", "grupo", "funcao", "localizacao", "status", "pendencias", "inicio", "fim"] },
  colhedoras: { label: "Colhedoras", icon: "◩", group: "Reformas", title: "Reforma de colhedoras", description: "Planejamento e andamento das reformas de colhedoras.", key: "frota", columns: ["frota", "localizacao", "status", "pendencias", "inicio", "fim", "dias"] },
  tratores: { label: "Tratores", icon: "◇", group: "Reformas", title: "Reforma de tratores", description: "Situação atual, local, pendências e duração prevista das reformas.", key: "frota", columns: ["frota", "localizacao", "status", "pendencias", "inicio", "fim", "dias"] },
  transbordos: { label: "Transbordos", icon: "▧", group: "Reformas", title: "Reforma de transbordos", description: "Programação, pendências e progresso dos transbordos.", key: "frota", columns: ["frota", "localizacao", "status", "pendencias", "inicio", "fim", "dias"] },
  vivencias: { label: "Vivências", icon: "⌂", group: "Reformas", title: "Reforma de vivências", description: "Acompanhamento das áreas de vivência usadas na operação.", key: "frota", columns: ["frota", "localizacao", "status", "pendencias"] },
  cci: { label: "Caminhões CCI", icon: "◈", group: "Reformas", title: "Caminhões de combate a incêndio", description: "Controle das reformas dos caminhões CCI e suas pendências.", key: "frota", columns: ["frota", "localizacao", "status", "pendencias"] },
  caminhoesInfo: { label: "Documentos de caminhões", icon: "▤", group: "Documentação", title: "Documentação dos caminhões", description: "CRLV, ANTT, placas, rádio, adesivos e demais documentos da frota.", key: "frota", columns: ["frota", "placa", "ano", "operacao", "antt", "possuiCrlv", "radio", "pintura"] },
  tacografos: { label: "Tacógrafos", icon: "◷", group: "Documentação", title: "Controle de tacógrafos", description: "Aferições, vencimentos e situação dos tacógrafos da frota." },
  carretasInfo: { label: "Documentos de carretas", icon: "▥", group: "Documentação", title: "Documentação das carretas", description: "Placas, lacres, CRLV, ANTT, faixas e itens de segurança.", key: "frota", columns: ["frota", "placa", "grupo", "situacaoPlaca", "lacre", "possuiCrlv", "antt", "faixaParachoque", "faixaRefletiva", "observacao"] },
  radios: { label: "Controle de rádios", icon: "⌁", group: "Controles", title: "Controle de rádios", description: "Identificação, frota, setor, disponibilidade e tipo de rádio.", key: "frota", columns: ["frota", "identificador", "descricao", "setor", "possuiRadio", "carregador", "tipo"] },
  axiagro: { label: "AXIAGRO", icon: "◉", group: "Controles", title: "Controle AXIAGRO", description: "Gestão dos celulares, suportes, lacres, fusíveis, endereços MAC e estoque de equipamentos AXIAGRO." },
  gpsMonitoramento: { label: "Acompanhamento de GPS", icon: "⌖", group: "Controles", title: "Acompanhamento de GPS", description: "Acompanhe antenas, capacetes, monitores e volantes elétricos instalados nas frotas e seus locais de trabalho.", columns: ["tipoEquipamento", "identificadorGps", "frota", "localTrabalho", "situacaoGps", "dataInstalacao", "observacao"] },
  axiagroControle: { label: "AXIAGRO · Celulares", title: "Controle de celulares AXIAGRO", key: "frota", columns: ["frota", "frente", "statusCelular", "statusSuporte", "numeroLacre", "fusivel", "statusAparelho", "mac", "observacao"] },
  axiagroEstoque: { label: "AXIAGRO · Estoque", title: "Estoque AXIAGRO", key: "equipamento", columns: ["equipamento", "modelo", "quantidade"] },
  frotasBusca: { label: "Busca Frota · Usina", icon: "▦", group: "Cadastros", title: "Frotas cadastradas da usina", description: "Base oficial da Busca Frota para seleção segura de equipamentos.", key: "frota", columns: ["numeroEquipamento", "numeroFrota", "equipamento", "modelo", "ano", "placa", "chassi", "situacao", "grupo", "departamento", "empresa"] },
  funcionarios: { label: "Distribuição de funcionários", icon: "♙", group: "Controles", title: "Distribuição de funcionários", description: "Cadastro e distribuição da equipe agrícola por local de trabalho.", key: "cadastro", columns: ["cadastro", "nome", "cargo", "local", "area", "admissao", "situacao", "observacao"] },
  curvaS: { label: "Curva S e cronograma", icon: "⌇", group: "Controles", title: "Curva S e cronograma", description: "Planejado, realizado, manutenção, previsões e datas de execução.", key: "frota", columns: ["frota", "grupo", "funcao", "planejado", "realizado", "emManutencao", "previsao", "consideracoes", "inicioPlanejado", "fimPlanejado"] },
  activity: { label: "Histórico de alterações", icon: "↻", group: "Dados", title: "Histórico de alterações", description: "Registro local das inclusões, edições e exclusões realizadas no sistema." },
  raw: { label: "Planilha original", icon: "⊞", group: "Dados", title: "Consulta da planilha original", description: "Todos os dados importados, organizados por aba e linha para conferência." }
};

const LABELS = {
  frota: "Frota", placa: "Placa", ano: "Ano", funcao: "Função", grupo: "Grupo", equipamento: "Equipamento",
  modelo: "Modelo", frente: "Frente", status: "Situação", statusNormalizado: "Situação padronizada", pendencias: "Pendências",
  localizacao: "Localização", inicio: "Início", fim: "Fim", dias: "Dias", previsaoEntrega: "Previsão de entrega",
  identificador: "Identificador", descricao: "Descrição", setor: "Setor", possuiRadio: "Possui rádio", carregador: "Carregador", tipo: "Tipo",
  operacao: "Operação", placaDianteira: "Placa dianteira", placaTraseira: "Placa traseira", antt: "ANTT", tacografo: "Tacógrafo",
  orcamento: "Orçamento", dataAfericao: "Data de aferição", vencimento: "Vencimento", dnit: "DNIT", der: "DER", possuiCrlv: "Possui CRLV",
  anoCrlv: "Ano CRLV", radio: "Rádio", adesivo: "Adesivo", tara: "Tara", pintura: "Pintura", limpeza: "Limpeza",
  limpezaSeco: "Limpeza a seco", limpezaPipa: "Limpeza com pipa", porcasFaltantes: "Porcas de roda faltantes", parafusosFaltantes: "Parafusos faltantes",
  lubrificacao: "Lubrificação", obsLubrificacao: "Observação da lubrificação", calibracao: "Calibração", pneus: "Pneus", conjunto: "Conjunto",
  situacaoPlaca: "Situação da placa", lacre: "Lacre", numeroDianteiro: "Número dianteiro", numeros: "Números", adesivoVeiculoLongo: "Adesivo veículo longo",
  faixaParachoque: "Faixa do para-choque", faixaRefletiva: "Faixa refletiva", cordaLonas: "Corda das lonas", caboSeguranca: "Cabo de segurança",
  observacao: "Observação", planejado: "Planejado", realizado: "Realizado", emManutencao: "Em manutenção", previsao: "Previsão",
  consideracoes: "Considerações", inicioPlanejado: "Início planejado", fimPlanejado: "Fim planejado", diasPlanejados: "Dias planejados",
  entrada: "Entrada", saida: "Saída", diasTrabalhados: "Dias trabalhados", rc: "RC", cdc: "CDC"
  ,statusCelular: "Status do celular", statusSuporte: "Status do suporte", numeroLacre: "Nº do lacre", fusivel: "Fusível",
  statusAparelho: "Status do aparelho", mac: "MAC", quantidade: "Quantidade"
  ,empresa: "Empresa", cadastro: "Cadastro", nome: "Nome do funcionário", admissao: "Admissão", cargo: "Cargo",
  local: "Local de trabalho", area: "Área", situacao: "Situação", numeroEquipamento: "Nº equipamento", numeroFrota: "Nº frota", empresa: "Empresa"
  ,tipoEquipamento: "Equipamento GPS", identificadorGps: "Identificação GPS", localTrabalho: "Local de trabalho", situacaoGps: "Situação", dataInstalacao: "Data da instalação"
};

const state = { data: null, route: "dashboard", query: "", status: "Todos", company: "Todas", page: 1, pageSize: 25, sortBy: "", sortDir: "asc", selected: null, rawSheet: null, viewMode: "table", documentFilter: "Todos", documentView: "cards", axiagroTab: "instalacoes", axiagroFilter: "Todos", axiagroFront: "Todas", selectedAxiagroInstallation: null, employeeLocation: "Todos", employeeView: "locations", selectedTeam: null, teamQuery: "", teamStatus: "Todas", gpsTypeFilter: "Todos", purchaseOrderFilter: "Todos" };
const PATCH_KEY = "entressafra-v1-patches";
const NEW_KEY = "entressafra-v1-new";
const DELETE_KEY = "entressafra-v1-deleted";
const AUDIT_KEY = "entressafra-v1-audit";
const TEAMS_KEY = "entressafra-v1-teams";
const DELETED_TEAMS_KEY = "entressafra-v1-deleted-teams";
const AXIAGRO_INSTALLATIONS_KEY = "entressafra-v1-axiagro-installations";
const AXIAGRO_STOCK_MIGRATION_KEY = "entressafra-v1-axiagro-stock-migrated";
const AXIAGRO_PHONE_SEED_KEY = "entressafra-v1-axiagro-phone-seeded";
const GPS_EQUIPMENT_KEY = "entressafra-v1-gps-equipments";
const AXIAGRO_PURCHASE_ORDERS_KEY = "entressafra-v1-axiagro-purchase-orders";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
const slug = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const isBlank = (value) => value === "" || value === null || value === undefined || value === " ";

function stored(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function save(key, value) {
  if (key === PATCH_KEY) {
    let previous = {}; try { previous = JSON.parse(localStorage.getItem(key) || "{}"); } catch {}
    const changedAt = new Date().toISOString();
    Object.entries(value).forEach(([id, patch]) => {
      const old = previous[id] || {}; const fieldTimes = { ...(old._syncFieldAt || {}) };
      Object.keys(patch).filter(field => field !== "_syncFieldAt").forEach(field => {
        if (JSON.stringify(patch[field]) !== JSON.stringify(old[field])) fieldTimes[field] = changedAt;
      });
      value[id] = { ...patch, _syncFieldAt: fieldTimes };
    });
  }
  localStorage.setItem(key, JSON.stringify(value)); window.FirebaseSync?.queue?.();
}

function applyLocalChanges() {
  const patches = stored(PATCH_KEY, {});
  const additions = stored(NEW_KEY, {});
  const deleted = new Set(stored(DELETE_KEY, []));
  Object.entries(state.data.modules).forEach(([module, rows]) => {
    state.data.modules[module] = rows
      .map(row => ({ ...row, ...(patches[row.id] || {}) }))
      .filter(row => !deleted.has(row.id));
    if (additions[module]) state.data.modules[module].push(...additions[module].filter(row => !deleted.has(row.id)));
  });
}

function ensureAxiagroPhoneStock() {
  const stock = state.data.modules.axiagroEstoque || (state.data.modules.axiagroEstoque=[]);
  if (!stock.some(row=>slug(row.equipamento).includes("celular axiagro"))) stock.unshift({ id:"axiagro-stock-celular", equipamento:"Celular AXIAGRO", modelo:"Smartphone operacional", quantidade:0, _sourceRow:"Sistema" });
}

function migrateAxiagroControlsToStock() {
  const controls=state.data.modules.axiagroControle||[]; const stock=state.data.modules.axiagroEstoque||[]; const patches=stored(PATCH_KEY,{});
  const phone=stock.find(row=>slug(row.equipamento).includes("celular axiagro"));
  const support=stock.find(row=>slug(row.equipamento).includes("suportes carregadores"))||stock.find(row=>slug(row.equipamento).includes("suporte"));
  const targets=[]; if(support&&!patches[support.id]?.migratedFromControls)targets.push(support); if(phone&&!patches[phone.id]?.migratedFromControls)targets.push(phone);
  targets.forEach(item=>{item.quantidade=Math.max(Number(item.quantidade)||0,controls.length);patches[item.id]={...(patches[item.id]||{}),quantidade:item.quantidade,migratedFromControls:true};});
  if(targets.length)save(PATCH_KEY,patches); localStorage.setItem(AXIAGRO_STOCK_MIGRATION_KEY,"1"); localStorage.setItem(AXIAGRO_PHONE_SEED_KEY,"1");
}

function nav() {
  const groups = [...new Set(Object.values(MODULES).map(item => item.group).filter(Boolean))];
  $("#mainNav").innerHTML = groups.map(group => `
    <div class="nav-label">${group}</div>
    ${Object.entries(MODULES).filter(([, item]) => item.group === group).map(([key, item]) => `
      <button class="nav-item ${state.route === key ? "active" : ""}" data-route="${key}">
        <span class="nav-icon">${item.icon}</span><span>${item.label}</span>
      </button>`).join("")}
  `).join("");
}

function navigate(route) {
  const previousRoute=state.route;
  state.route = MODULES[route] ? route : "dashboard";
  state.page = 1; state.status = "Todos"; state.rawSheet = null; state.sortBy = ""; state.sortDir = "asc";
  if (previousRoute !== state.route) {
    state.documentFilter = "Todos";
    if (["caminhoesInfo","tacografos","gpsMonitoramento","axiagro"].includes(previousRoute) || ["caminhoesInfo","tacografos","gpsMonitoramento","axiagro"].includes(state.route)) state.query = "";
  }
  location.hash = state.route;
  nav(); render();
  $("#sidebar").classList.remove("open");
}

function allMaintenance() {
  const keys = ["plantio", "caminhoesReforma", "carretasReforma", "colhedoras", "tratores", "transbordos", "vivencias", "cci"];
  return keys.flatMap(module => state.data.modules[module].map(row => ({ ...row, _module: module })));
}

function normalizeStatus(record) {
  const text = slug(record.statusNormalizado || record.status);
  if (text.includes("conclu") || text.includes("feito") || text === "ok") return "Concluído";
  if (text.includes("andamento") || text.includes("manutencao")) return "Em andamento";
  if (text.includes("pend") || text.includes("aguard")) return "Pendente";
  return "Não informado";
}

function badge(value, field = "") {
  const text = String(value || "Não informado");
  const norm = slug(text);
  let klass = "";
  if (norm.includes("no controle") || norm.includes("nao encontrado")) klass = "danger";
  else if (norm.includes("feito") || norm.includes("conclu") || norm === "ok" || norm === "sim" || norm === "realizado" || norm === "ativo" || norm === "campo" || norm === "controle") klass = "done";
  else if (norm.includes("andamento") || norm.includes("manutencao")) klass = "progress";
  else if (norm.includes("pend") || norm.includes("aguard") || norm === "nao" || norm.includes("verificar")) klass = "pending";
  else if (norm.includes("venc") || norm.includes("danific") || norm.includes("quebrado") || norm.includes("acidente")) klass = "danger";
  return `<span class="badge ${klass}">${escapeHtml(text)}</span>`;
}

function formatValue(value, field) {
  if (isBlank(value)) return '<span style="color:#a4afab">—</span>';
  if (/data|inicio|fim|previsao|vencimento|entrada|saida/i.test(field) && /^\d{4}-\d{2}-\d{2}/.test(String(value))) {
    const [year, month, day] = String(value).slice(0, 10).split("-");
    return `${day}/${month}/${year}`;
  }
  if (/status|radio|antt|tacografo|crlv|limpeza|lacre|faixa|pintura|adesivo/i.test(field)) return badge(value, field);
  return escapeHtml(value);
}

function pageHeading(title, description, actions = true) {
  return `<div class="page-heading">
    <div><span class="eyebrow">Controle EntreSafra</span><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></div>
    ${actions ? `<div class="heading-actions"><button class="secondary-button" data-action="print">Imprimir</button><button class="secondary-button" data-action="export-csv">Exportar CSV</button></div>` : ""}
  </div>`;
}

function renderDashboard() {
  const rows = allMaintenance();
  const status = { "Concluído": 0, "Em andamento": 0, "Pendente": 0, "Não informado": 0 };
  rows.forEach(row => status[normalizeStatus(row)]++);
  const withPendencies = rows.filter(row => !isBlank(row.pendencias) && !["ok", "-", " "].includes(slug(row.pendencias))).length;
  const infoTrucks = state.data.modules.caminhoesInfo;
  const expired = infoTrucks.filter(row => slug(row.vencimento).includes("vencido") || slug(row.vencimento).includes("verificar")).length;
  const total = rows.length || 1;
  const completion = Math.round(status["Concluído"] / total * 100);
  const categoryKeys = ["caminhoesReforma", "carretasReforma", "colhedoras", "tratores", "transbordos", "vivencias", "cci"];
  const categories = categoryKeys.map(key => {
    const list = state.data.modules[key];
    return { key, total: list.length, done: list.filter(row => normalizeStatus(row) === "Concluído").length };
  });
  const alerts = rows.filter(row => normalizeStatus(row) !== "Concluído" && !isBlank(row.pendencias)).slice(0, 6);
  const bars = Object.entries(status).filter(([name]) => name !== "Não informado").map(([name, count]) => {
    const cls = name === "Pendente" ? "amber" : name === "Em andamento" ? "" : "";
    return `<div class="status-row"><span>${name}</span><div class="bar ${cls}"><span style="width:${Math.round(count / total * 100)}%"></span></div><strong>${count}</strong></div>`;
  }).join("");

  return `${pageHeading("Gestão da manutenção", "Visão consolidada da entressafra: progresso das reformas, pendências críticas, documentação e ativos operacionais.", false)}
    <div class="metrics">
      <article class="metric"><span class="label">Equipamentos acompanhados</span><strong>${rows.length}</strong><small>${state.data.meta.sheetCount} abas importadas</small></article>
      <article class="metric"><span class="label">Reformas concluídas</span><strong>${status["Concluído"]}</strong><small>${completion}% do total monitorado</small></article>
      <article class="metric warning"><span class="label">Em andamento</span><strong>${status["Em andamento"]}</strong><small>${withPendencies} registros com observações</small></article>
      <article class="metric danger"><span class="label">Documentos a verificar</span><strong>${expired}</strong><small>vencidos ou marcados para revisão</small></article>
    </div>
    <div class="dashboard-grid">
      <div class="stack">
        <section class="panel"><div class="panel-header"><div><h3>Progresso das reformas</h3><p>Consolidado dos módulos de manutenção</p></div><span class="badge done">${completion}% concluído</span></div><div class="panel-body status-bars">${bars}</div></section>
        <section class="panel"><div class="panel-header"><div><h3>Resultado por categoria</h3><p>Equipamentos concluídos sobre o total cadastrado</p></div></div><div class="panel-body category-list">
          ${categories.map(item => `<button class="category-item" data-route="${item.key}" style="width:100%;border:0;background:none;text-align:left;cursor:pointer"><strong>${MODULES[item.key].label}</strong><span>${item.done}/${item.total}</span><span>${item.total ? Math.round(item.done / item.total * 100) : 0}%</span></button>`).join("")}
        </div></section>
      </div>
      <div class="stack">
        <section class="panel"><div class="panel-header"><div><h3>Pendências recentes</h3><p>Itens que pedem acompanhamento</p></div></div><div class="panel-body alert-list">
          ${alerts.length ? alerts.map(item => `<button class="alert ${normalizeStatus(item) === "Pendente" ? "red" : ""}" data-open="${item._module}|${item.id}" style="border-top:0;border-right:0;border-bottom:0;text-align:left;width:100%;cursor:pointer"><strong>Frota ${escapeHtml(item.frota || "não informada")} · ${MODULES[item._module].label}</strong><span>${escapeHtml(item.pendencias)}</span></button>`).join("") : "<div class='empty-state'><strong>Nenhuma pendência registrada</strong></div>"}
        </div></section>
        <section class="panel"><div class="panel-header"><div><h3>Base importada</h3><p>${escapeHtml(state.data.meta.sourceFile)}</p></div></div><div class="panel-body"><div class="category-list"><div class="category-item"><strong>Abas de origem</strong><span></span><span>${state.data.meta.sheetCount}</span></div><div class="category-item"><strong>Rádios cadastrados</strong><span></span><span>${state.data.modules.radios.length}</span></div><div class="category-item"><strong>Implementos rodoviários</strong><span></span><span>${state.data.modules.carretasReforma.length}</span></div></div></div></section>
      </div>
    </div>`;
}

function parseDate(value) {
  if (!value) return null;
  const text = String(value).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(text)) return new Date(`${text.slice(0, 10)}T12:00:00`);
  const match = text.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  return match ? new Date(`${match[3]}-${match[2].padStart(2,"0")}-${match[1].padStart(2,"0")}T12:00:00`) : null;
}

function maintenanceCategories() {
  return ["caminhoesReforma", "carretasReforma", "colhedoras", "tratores", "transbordos", "vivencias", "cci"].map(key => {
    const rows = state.data.modules[key];
    const done = rows.filter(row => normalizeStatus(row) === "Concluído").length;
    const progress = rows.filter(row => normalizeStatus(row) === "Em andamento").length;
    const pending = rows.filter(row => normalizeStatus(row) === "Pendente").length;
    return { key, label: MODULES[key].label, total: rows.length, done, progress, pending, rate: rows.length ? Math.round(done / rows.length * 100) : 0 };
  });
}

function renderAnalytics() {
  const categories = maintenanceCategories();
  const total = categories.reduce((sum, item) => sum + item.total, 0);
  const done = categories.reduce((sum, item) => sum + item.done, 0);
  const progress = categories.reduce((sum, item) => sum + item.progress, 0);
  const best = [...categories].sort((a,b) => b.rate - a.rate)[0];
  const curve = state.data.modules.curvaS;
  const planned = curve.reduce((sum,row) => sum + (Number(row.planejado) || 0), 0);
  const realized = curve.reduce((sum,row) => sum + (Number(row.realizado) || 0), 0);
  const maxTotal = Math.max(...categories.map(item => item.total), 1);
  return `${pageHeading(MODULES.analytics.title, MODULES.analytics.description, false)}
    <div class="metrics">
      <article class="metric"><span class="label">Avanço consolidado</span><strong>${total ? Math.round(done/total*100) : 0}%</strong><small>${done} de ${total} reformas concluídas</small></article>
      <article class="metric"><span class="label">Melhor desempenho</span><strong style="font-size:20px">${best.label}</strong><small>${best.rate}% concluído</small></article>
      <article class="metric warning"><span class="label">Em execução</span><strong>${progress}</strong><small>equipamentos em andamento</small></article>
      <article class="metric"><span class="label">Curva S realizada</span><strong>${planned ? Math.round(realized/planned*100) : 0}%</strong><small>${realized} realizados de ${planned} planejados</small></article>
    </div>
    <div class="analytics-grid">
      <section class="panel"><div class="panel-header"><div><h3>Desempenho por categoria</h3><p>Comparativo entre concluído, em andamento e pendente</p></div></div><div class="panel-body chart-area">
        ${categories.map(item => `<button class="chart-row" data-route="${item.key}"><span>${item.label}</span><div class="stacked-bar" title="${item.done} concluídos, ${item.progress} em andamento, ${item.pending} pendentes"><i class="done" style="width:${item.total ? item.done/item.total*100 : 0}%"></i><i class="progress" style="width:${item.total ? item.progress/item.total*100 : 0}%"></i><i class="pending" style="width:${item.total ? item.pending/item.total*100 : 0}%"></i></div><strong>${item.rate}%</strong></button>`).join("")}
        <div class="chart-legend"><span><i class="done"></i>Concluído</span><span><i class="progress"></i>Em andamento</span><span><i class="pending"></i>Pendente</span></div>
      </div></section>
      <section class="panel"><div class="panel-header"><div><h3>Volume da frota</h3><p>Quantidade acompanhada em cada reforma</p></div></div><div class="panel-body vertical-chart">
        ${categories.map(item => `<button data-route="${item.key}" title="${item.label}: ${item.total}"><strong>${item.total}</strong><span style="height:${Math.max(8,item.total/maxTotal*170)}px"></span><small>${item.label.replace("Reforma de ","").replace("Caminhões ","CCI ")}</small></button>`).join("")}
      </div></section>
    </div>
    <section class="panel insight-panel"><div class="panel-header"><div><h3>Leitura executiva</h3><p>Pontos calculados automaticamente a partir da base atual</p></div></div><div class="insights">
      ${categories.sort((a,b)=>a.rate-b.rate).slice(0,3).map((item,index)=>`<article><span class="insight-rank">0${index+1}</span><div><strong>${item.label}</strong><p>${item.pending} pendentes e ${item.progress} em andamento. Avanço atual de ${item.rate}%.</p></div><button class="secondary-button" data-route="${item.key}">Abrir</button></article>`).join("")}
    </div></section>`;
}

function deadlineItems() {
  const today = new Date(); today.setHours(12,0,0,0);
  const items = [];
  allMaintenance().forEach(row => {
    const date = parseDate(row.fim || row.previsaoEntrega || row.previsao);
    if (!date || normalizeStatus(row) === "Concluído") return;
    const days = Math.ceil((date - today) / 86400000);
    items.push({ ...row, date, days, kind: "Reforma", module: row._module });
  });
  state.data.modules.caminhoesInfo.forEach(row => {
    const date = parseDate(row.vencimento);
    const explicit = slug(row.vencimento).includes("vencido") || slug(row.vencimento).includes("verificar");
    if (!date && !explicit) return;
    const days = date ? Math.ceil((date - today) / 86400000) : -1;
    if (days <= 90) items.push({ ...row, date, days, kind: "Tacógrafo", module: "caminhoesInfo" });
  });
  return items.sort((a,b) => a.days - b.days);
}

function renderDeadlines() {
  const items = deadlineItems();
  const late = items.filter(item => item.days < 0).length;
  const critical = items.filter(item => item.days >= 0 && item.days <= 7).length;
  const upcoming = items.filter(item => item.days > 7 && item.days <= 30).length;
  return `${pageHeading(MODULES.deadlines.title, MODULES.deadlines.description, false)}
    <div class="metrics compact-metrics"><article class="metric danger"><span class="label">Atrasados ou vencidos</span><strong>${late}</strong><small>ação imediata recomendada</small></article><article class="metric warning"><span class="label">Próximos 7 dias</span><strong>${critical}</strong><small>itens críticos</small></article><article class="metric"><span class="label">Próximos 30 dias</span><strong>${upcoming}</strong><small>programar atendimento</small></article><article class="metric"><span class="label">Total monitorado</span><strong>${items.length}</strong><small>prazos ativos</small></article></div>
    <section class="panel"><div class="panel-header"><div><h3>Linha do tempo de atenção</h3><p>Ordenada pelos itens mais urgentes</p></div><span class="badge danger">${late} atrasados</span></div><div class="deadline-list">
      ${items.length ? items.map(item => `<button class="deadline-item ${item.days < 0 ? "late" : item.days <= 7 ? "critical" : ""}" data-open="${item.module}|${item.id}"><span class="deadline-date"><strong>${item.date ? item.date.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"}) : "Revisar"}</strong><small>${item.days < 0 ? `${Math.abs(item.days)}d atraso` : item.days === 0 ? "Hoje" : `${item.days} dias`}</small></span><span class="deadline-main"><strong>Frota ${escapeHtml(item.frota || "não informada")} · ${escapeHtml(item.kind)}</strong><small>${escapeHtml(MODULES[item.module].label)}${item.placa ? ` · ${escapeHtml(item.placa)}` : ""}</small></span><span>${badge(item.days < 0 ? "Atrasado" : item.days <= 7 ? "Crítico" : "Programado")}</span><span class="deadline-arrow">›</span></button>`).join("") : `<div class="empty-state"><strong>Nenhum prazo crítico</strong>Não há entregas ou documentos próximos do vencimento.</div>`}
    </div></section>`;
}

function audit(action, module, record, details = "", changes = []) {
  const log = stored(AUDIT_KEY, []);
  const user = window.FirebaseSync?.user;
  log.unshift({ id: `${Date.now()}-${Math.random().toString(36).slice(2,8)}`, entityId: record?.id || "", action, module, record: record?.frota || record?.placa || record?.nome || record?.equipamento || record?.id || "Registro", details, changes, user: user?.email || "Usuário autenticado", userId: user?.uid || "", at: new Date().toISOString() });
  save(AUDIT_KEY, log.slice(0, 300));
}

function notificationStorageKey(){return `entressafra-v1-notifications-seen-${window.FirebaseSync?.user?.uid||"guest"}`;}
function readSeenNotifications(){try{return new Set(JSON.parse(localStorage.getItem(notificationStorageKey())||"[]").map(String))}catch{return new Set()}}
function saveSeenNotifications(seen){localStorage.setItem(notificationStorageKey(),JSON.stringify([...seen].slice(-500)));}
function relevantNotifications(){const userId=window.FirebaseSync?.user?.uid;return stored(AUDIT_KEY,[]).filter(item=>item.userId&&item.userId!==userId).sort((a,b)=>(Date.parse(b.at)||0)-(Date.parse(a.at)||0));}
function initializeNotificationCenter(){
  const key=notificationStorageKey();
  let pending=[];try{pending=JSON.parse(localStorage.getItem("entressafra-v1-pending-notifications")||"[]")}catch{}
  if(localStorage.getItem(key)===null){const pendingIds=new Set(pending.map(item=>String(item.id))); const seen=relevantNotifications().filter(item=>!pendingIds.has(String(item.id))).map(item=>String(item.id)); saveSeenNotifications(new Set(seen));}
  localStorage.removeItem("entressafra-v1-pending-notifications");
}
function renderNotificationCenter(){
  const button=$("#notificationButton"), popover=$("#notificationPopover"); if(!button||!popover)return;
  if(!window.FirebaseSync?.user){$("#notificationWrap").classList.add("hidden");return;} $("#notificationWrap").classList.remove("hidden");
  const items=relevantNotifications(); const seen=readSeenNotifications(); const unread=items.filter(item=>!seen.has(String(item.id))); const count=$("#notificationCount"); count.textContent=unread.length>99?"99+":String(unread.length); count.classList.toggle("hidden",!unread.length); button.setAttribute("aria-label",unread.length?`${unread.length} notificações não lidas`:"Notificações");
  popover.innerHTML=`<div class="notification-head"><div><strong>Notificações</strong><small>${unread.length?`${unread.length} não lida${unread.length===1?'':'s'}`:'Tudo em dia'}</small></div><button type="button" data-notifications-read-all ${unread.length?'':'disabled'}>Marcar lidas</button></div>${items.length?`<div class="notification-list">${items.slice(0,20).map(item=>`<button class="notification-item ${seen.has(String(item.id))?'':'unread'}" type="button" data-notification-id="${escapeHtml(item.id)}"><span class="notification-dot"></span><span class="notification-content"><strong>${escapeHtml(item.record||'Registro')} · ${escapeHtml(item.action)}</strong><small>${escapeHtml(item.user||'Usuário não identificado')} · ${escapeHtml(MODULES[item.module]?.label||item.module||'Sistema')}</small><span>${escapeHtml(item.details||'Alteração registrada')}</span><time>${new Date(item.at).toLocaleString('pt-BR')}</time></span></button>`).join('')}</div>`:`<div class="notification-empty"><strong>Sem alterações recentes</strong><span>As mudanças dos outros usuários aparecerão aqui.</span></div>`}<button class="notification-history" type="button" data-notifications-history>Abrir histórico de alterações</button>`;
}
function markAllNotificationsRead(){const seen=readSeenNotifications();relevantNotifications().forEach(item=>seen.add(String(item.id)));saveSeenNotifications(seen);renderNotificationCenter();}

function renderActivity() {
  const log = stored(AUDIT_KEY, []);
  return `${pageHeading(MODULES.activity.title, MODULES.activity.description, false)}<section class="panel"><div class="panel-header"><div><h3>Alterações do sistema</h3><p>Usuário responsável, módulo e detalhes de cada alteração</p></div><span class="badge">${log.length} eventos</span></div><div class="activity-list">${log.length ? log.map(item => `<article class="activity-item"><span class="activity-icon ${slug(item.action)}">${item.action === "Exclusão" ? "−" : item.action === "Inclusão" ? "+" : "↻"}</span><div><strong>${escapeHtml(item.action)} · ${escapeHtml(item.record)}</strong><p>${escapeHtml(MODULES[item.module]?.label || item.module)}${item.details ? ` · ${escapeHtml(item.details)}` : ""}</p><small class="activity-actor">Por ${escapeHtml(item.user || "Usuário não identificado")}</small>${item.changes?.length ? `<ul class="activity-changes">${item.changes.map(change=>`<li><b>${escapeHtml(LABELS[change.field]||change.field)}:</b> ${escapeHtml(change.before||"(vazio)")} → ${escapeHtml(change.after||"(vazio)")}</li>`).join("")}</ul>` : ""}</div><time>${new Date(item.at).toLocaleString("pt-BR")}</time></article>`).join("") : `<div class="empty-state"><strong>Nenhuma alteração registrada</strong>As próximas alterações aparecerão aqui.</div>`}</div></section>`;
}

function moduleHealth(module) {
  const config = MODULES[module]; const rows = state.data.modules[module] || []; const columns = config?.columns || [];
  const cells = rows.length * columns.length;
  const missing = rows.reduce((sum,row) => sum + columns.filter(column => isBlank(row[column])).length, 0);
  const keys = rows.map(row => slug(row[config?.key])).filter(Boolean);
  const duplicates = keys.length - new Set(keys).size;
  const completeness = cells ? Math.round((cells-missing)/cells*100) : 100;
  return { module, rows:rows.length, missing, duplicates, completeness };
}

function renderQuality() {
  const modules = Object.keys(MODULES).filter(key => key !== "axiagroControle" && MODULES[key].columns && state.data.modules[key]);
  const health = modules.map(moduleHealth).sort((a,b)=>a.completeness-b.completeness || b.missing-a.missing);
  const totalRows = health.reduce((sum,item)=>sum+item.rows,0); const missing = health.reduce((sum,item)=>sum+item.missing,0); const duplicates = health.reduce((sum,item)=>sum+item.duplicates,0);
  const average = health.length ? Math.round(health.reduce((sum,item)=>sum+item.completeness,0)/health.length) : 100;
  return `${pageHeading(MODULES.quality.title,MODULES.quality.description,false)}<div class="metrics"><article class="metric"><span class="label">Integridade média</span><strong>${average}%</strong><small>considerando os campos principais</small></article><article class="metric"><span class="label">Registros analisados</span><strong>${totalRows}</strong><small>em ${health.length} módulos</small></article><article class="metric warning"><span class="label">Campos não preenchidos</span><strong>${missing}</strong><small>oportunidades de completar a base</small></article><article class="metric ${duplicates?'danger':''}"><span class="label">Chaves duplicadas</span><strong>${duplicates}</strong><small>frotas ou cadastros repetidos</small></article></div><section class="panel"><div class="panel-header"><div><h3>Diagnóstico por módulo</h3><p>Abra um módulo para revisar e corrigir seus registros</p></div></div><div class="quality-list">${health.map(item=>`<button class="quality-row" data-route="${item.module}"><div><strong>${escapeHtml(MODULES[item.module].label)}</strong><small>${item.rows} registros · ${item.missing} campos vazios${item.duplicates?` · ${item.duplicates} duplicados`:''}</small></div><div class="quality-score"><span><i style="width:${item.completeness}%"></i></span><strong>${item.completeness}%</strong></div><b>Revisar →</b></button>`).join('')}</div></section>`;
}

function renderGlobalSearch() {
  const query = slug(state.query);
  const modules = Object.keys(MODULES).filter(key => key !== "axiagroControle" && MODULES[key].columns && state.data.modules[key]);
  const groups = modules.map(module=>({module,rows:(state.data.modules[module]||[]).filter(row=>query&&slug(Object.values(row).join(' ')).includes(query)).slice(0,12)})).filter(group=>group.rows.length);
  const total = groups.reduce((sum,group)=>sum+group.rows.length,0);
  return `${pageHeading('Pesquisa global',state.query?`Resultados para “${state.query}” em toda a operação.`:'Digite no campo superior para pesquisar todos os módulos.',false)}${query?`<div class="search-summary"><strong>${total}</strong><span>resultados exibidos em ${groups.length} módulos</span></div>${groups.length?`<div class="global-results">${groups.map(group=>`<section class="panel"><div class="panel-header"><div><h3>${escapeHtml(MODULES[group.module].label)}</h3><p>${group.rows.length} resultados encontrados</p></div><button class="secondary-button" data-route="${group.module}">Abrir módulo</button></div><div class="result-list">${group.rows.map(row=>`<button data-open="${group.module}|${row.id}"><strong>${escapeHtml(row.frota||row.placa||row.nome||row.equipamento||row.cadastro||'Registro')}</strong><span>${escapeHtml(row.pendencias||row.descricao||row.cargo||row.localizacao||row.local||row.status||'Ver detalhes')}</span><b>›</b></button>`).join('')}</div></section>`).join('')}</div>`:`<div class="empty-state"><strong>Nenhum resultado encontrado</strong>Tente outro nome, frota, placa, cadastro ou palavra-chave.</div>`}`:`<div class="empty-state"><strong>Pesquisa integrada</strong>Encontre equipamentos, documentos, funcionários, rádios e controles AXIAGRO em uma única busca.</div>`}`;
}

function filteredRows(module) {
  let rows = state.data.modules[module] || [];
  const query = slug(state.query);
  if (query) rows = rows.filter(row => slug(Object.values(row).join(" ")).includes(query));
  if (state.status !== "Todos") rows = rows.filter(row => normalizeStatus(row) === state.status);
  if (module === "frotasBusca" && state.company !== "Todas") rows = rows.filter(row => String(row.empresa || "") === state.company);
  if (state.sortBy) rows = [...rows].sort((a,b) => String(a[state.sortBy] ?? "").localeCompare(String(b[state.sortBy] ?? ""), "pt-BR", { numeric:true }) * (state.sortDir === "desc" ? -1 : 1));
  return rows;
}

function renderKanban(module, rows) {
  const groups = ["Pendente", "Em andamento", "Concluído", "Não informado"];
  return `<div class="kanban">${groups.map(group => {
    const list = rows.filter(row => normalizeStatus(row) === group);
    return `<section class="kanban-column"><header><span class="kanban-dot ${slug(group).replace(/\s+/g,"-")}"></span><strong>${group}</strong><span>${list.length}</span></header><div>${list.length ? list.map(row => `<button class="kanban-card" data-open="${module}|${row.id}"><span class="eyebrow">Frota ${escapeHtml(row.frota || "—")}</span><strong>${escapeHtml(row.placa || row.equipamento || row.funcao || "Equipamento")}</strong><p>${escapeHtml(row.pendencias || row.localizacao || "Sem observações")}</p>${row.fim || row.previsaoEntrega ? `<small>Prazo: ${formatValue(row.fim || row.previsaoEntrega,"fim")}</small>` : ""}</button>`).join("") : `<div class="kanban-empty">Nenhum item</div>`}</div></section>`;
  }).join("")}</div>`;
}

function renderModule(module) {
  const config = MODULES[module];
  const rows = filteredRows(module);
  const health = moduleHealth(module);
  const pages = Math.max(1, Math.ceil(rows.length / state.pageSize));
  state.page = Math.min(state.page, pages);
  const start = (state.page - 1) * state.pageSize;
  const visible = rows.slice(start, start + state.pageSize);
  const hasStatus = (state.data.modules[module] || []).some(row => "status" in row);
  const columns = config.columns;
  const summary = hasStatus ? ["Concluído", "Em andamento", "Pendente"].map(name => ({name, count: rows.filter(row => normalizeStatus(row) === name).length})) : [];
  return `${pageHeading(config.title, config.description)}
    <div class="module-summary"><article><span>Total filtrado</span><strong>${rows.length}</strong></article>${hasStatus ? summary.map(item => `<article><span>${item.name}</span><strong>${item.count}</strong></article>`).join("") : `<article><span>Integridade</span><strong>${health.completeness}%</strong></article><article><span>Campos vazios</span><strong>${health.missing}</strong></article><article><span>Duplicados</span><strong>${health.duplicates}</strong></article>`}</div>
    <section class="panel">
      <div class="toolbar">
        <label class="field-inline"><span>⌕</span><input data-local-search type="search" value="${escapeHtml(state.query)}" placeholder="Buscar neste módulo"></label>
        ${hasStatus ? `<label class="field-inline"><span>Situação</span><select data-status-filter>${["Todos", "Concluído", "Em andamento", "Pendente", "Não informado"].map(value => `<option ${state.status === value ? "selected" : ""}>${value}</option>`).join("")}</select></label>` : ""}
        ${module === "frotasBusca" ? `<label class="field-inline"><span>Empresa</span><select data-company-filter><option>Todas</option>${[...new Set((state.data.modules.frotasBusca||[]).map(row=>row.empresa).filter(Boolean))].sort().map(value=>`<option ${state.company===value?'selected':''}>${escapeHtml(value)}</option>`).join('')}</select></label>` : ""}
        <label class="field-inline compact-select"><span>Linhas</span><select data-page-size>${[10,25,50,100].map(value=>`<option ${state.pageSize===value?'selected':''}>${value}</option>`).join('')}</select></label><div class="spacer"></div>${hasStatus ? `<div class="view-toggle"><button class="${state.viewMode === "table" ? "active" : ""}" data-view="table" title="Tabela">▤</button><button class="${state.viewMode === "kanban" ? "active" : ""}" data-view="kanban" title="Kanban">▦</button></div>` : ""}<span class="badge">${health.completeness}% completo</span><span class="badge">${rows.length} registros</span>
      </div>
      ${hasStatus && state.viewMode === "kanban" ? renderKanban(module, rows) : `<div class="table-wrap"><table><thead><tr>${columns.map(column => `<th><button class="sort-button ${state.sortBy===column?'active':''}" data-sort="${column}">${LABELS[column] || column}${state.sortBy===column?` <span>${state.sortDir==='asc'?'↑':'↓'}</span>`:''}</button></th>`).join("")}<th></th></tr></thead>
        <tbody>${visible.length ? visible.map(row => `<tr data-open="${module}|${row.id}">${columns.map(column => `<td><span class="cell-truncate" title="${escapeHtml(row[column])}">${formatValue(row[column], column)}</span></td>`).join("")}<td><button class="row-action" data-edit="${module}|${row.id}" aria-label="Editar">•••</button></td></tr>`).join("") : `<tr><td colspan="${columns.length + 1}"><div class="empty-state"><strong>Nenhum registro encontrado</strong>Experimente alterar os filtros ou a busca.</div></td></tr>`}</tbody>
      </table></div>
      <div class="table-footer"><span>Exibindo ${rows.length ? start + 1 : 0}–${Math.min(start + state.pageSize, rows.length)} de ${rows.length}</span><div class="pagination"><button data-page="${state.page - 1}" ${state.page <= 1 ? "disabled" : ""}>‹</button><span class="badge">${state.page} / ${pages}</span><button data-page="${state.page + 1}" ${state.page >= pages ? "disabled" : ""}>›</button></div></div>`}
    </section>`;
}

function truckDocumentStatus(row) {
  const text = slug(row.vencimento);
  const deviceStatus=slug(row.tacografo);
  const date = parseDate(row.vencimento);
  const days = date ? Math.ceil((date - new Date()) / 86400000) : null;
  if (text.includes("vencido") || (days !== null && days < 0)) return { key:"Vencidos", label:"Vencido", tone:"danger", days };
  if (/danific|pendente|manutenc|nao possui|sem tacografo/.test(deviceStatus)) return { key:"Revisar", label:"Revisar equipamento", tone:"pending", days };
  if (text.includes("verificar") || text.includes("acidente") || !row.vencimento) return { key:"Revisar", label:"Revisar", tone:"pending", days };
  if (days !== null && days <= 90) return { key:"90 dias", label:`Vence em ${days} dias`, tone:"pending", days };
  return { key:"Válidos", label:"Válido", tone:"done", days };
}

function documentCompleteness(row) {
  const fields = ["frota","placa","operacao","possuiCrlv","anoCrlv","antt","radio","pintura"];
  return Math.round(fields.filter(field=>!isBlank(row[field])).length/fields.length*100);
}

function renderTruckDocuments() {
  const source = state.data.modules.caminhoesInfo || [];
  const query = slug(state.query);
  const enriched = source.map(row=>({ ...row, _docStatus:truckDocumentStatus(row), _complete:documentCompleteness(row) }));
  const noCrlv = enriched.filter(row=>slug(row.possuiCrlv)!=="sim").length;
  const pending = enriched.filter(row=>slug(row.possuiCrlv)!=="sim" || isBlank(row.antt) || /pendente|verificar|aguardando|acidente/i.test(`${row.radio} ${row.pintura}`)).length;
  let rows = enriched.filter(row=>!query || slug(Object.values(row).join(" ")).includes(query));
  if (state.documentFilter === "Sem CRLV") rows=rows.filter(row=>slug(row.possuiCrlv)!=="sim");
  if (state.documentFilter === "Pendências") rows=rows.filter(row=>slug(row.possuiCrlv)!=="sim" || isBlank(row.antt) || /pendente|verificar|aguardando|acidente/i.test(`${row.radio} ${row.pintura}`));
  if (state.documentFilter === "Completos") rows=rows.filter(row=>row._complete>=90);
  rows.sort((a,b)=>(a._docStatus.days??99999)-(b._docStatus.days??99999));
  return `${pageHeading("Documentos de caminhões","Documentação individual da frota: CRLV, ANTT, placas, rádio, adesivos e demais itens.")}<div class="metrics"><article class="metric"><span class="label">Veículos monitorados</span><strong>${source.length}</strong><small>cadastros documentais</small></article><article class="metric danger"><span class="label">Sem CRLV confirmado</span><strong>${noCrlv}</strong><small>verifique a documentação</small></article><article class="metric warning"><span class="label">Pendências documentais</span><strong>${pending}</strong><small>revisar informações</small></article><article class="metric"><span class="label">Cadastros completos</span><strong>${enriched.filter(row=>row._complete>=90).length}</strong><small>documentos preenchidos</small></article></div><section class="panel truck-documents"><div class="toolbar"><label class="field-inline"><span>⌕</span><input data-local-search type="search" value="${escapeHtml(state.query)}" placeholder="Buscar frota, placa ou operação"></label><div class="document-filters">${["Todos","Sem CRLV","Pendências","Completos"].map(value=>`<button class="filter-chip ${state.documentFilter===value?'active':''}" data-document-filter="${value}">${value}</button>`).join('')}</div><div class="spacer"></div><div class="view-toggle"><button class="${state.documentView==='cards'?'active':''}" data-document-view="cards" title="Cartões">▦</button><button class="${state.documentView==='table'?'active':''}" data-document-view="table" title="Tabela">▤</button></div><span class="badge">${rows.length} veículos</span></div>${state.documentView==='cards'?`<div class="document-grid">${rows.map(row=>`<article class="document-card"><button class="document-card-main" data-open="caminhoesInfo|${row.id}"><header><div><span class="eyebrow">Frota ${escapeHtml(row.frota)}</span><h3>${escapeHtml(row.placa||'Sem placa')}</h3></div>${badge(row._complete>=90?'Completo':'Revisar')}</header><p>${escapeHtml(row.operacao||'Operação não informada')} · ${escapeHtml(row.ano||'Ano não informado')}</p><div class="doc-chips"><span class="${slug(row.possuiCrlv)==='sim'?'ok':'missing'}">CRLV ${escapeHtml(row.anoCrlv||'—')}</span><span class="${!isBlank(row.antt)?'ok':'missing'}">ANTT</span><span class="${!isBlank(row.radio)?'ok':'missing'}">Rádio</span></div><div class="completeness"><span><i style="width:${row._complete}%"></i></span><small>${row._complete}% preenchido</small></div></button><button class="document-edit" data-edit="caminhoesInfo|${row.id}">Editar documentos</button></article>`).join('')}</div>`:`<div class="table-wrap"><table><thead><tr><th>Frota</th><th>Placa</th><th>Operação</th><th>CRLV</th><th>ANTT</th><th>Rádio</th><th>Adesivos</th><th>Completude</th><th></th></tr></thead><tbody>${rows.map(row=>`<tr><td><strong>${escapeHtml(row.frota)}</strong></td><td>${escapeHtml(row.placa)}</td><td>${escapeHtml(row.operacao)}</td><td>${badge(row.possuiCrlv||'Não informado')}</td><td>${formatValue(row.antt,'antt')}</td><td>${formatValue(row.radio,'radio')}</td><td>${formatValue(row.pintura,'pintura')}</td><td><span class="badge">${row._complete}%</span></td><td><button class="row-action" data-edit="caminhoesInfo|${row.id}">Editar</button></td></tr>`).join('')}</tbody></table></div>`}${!rows.length?`<div class="empty-state"><strong>Nenhum veículo encontrado</strong>Ajuste a busca ou os filtros documentais.</div>`:''}</section>`;
}

function renderTacographs() {
  const source = state.data.modules.caminhoesInfo || [];
  const query = slug(state.query);
  const rows = source.map(row=>({ ...row, _docStatus:truckDocumentStatus(row) }))
    .filter(row=>!query || slug(`${row.frota} ${row.placa} ${row.operacao} ${row.tacografo}`).includes(query))
    .filter(row=>state.documentFilter==="Todos" || row._docStatus.key===state.documentFilter)
    .sort((a,b)=>(a._docStatus.days??99999)-(b._docStatus.days??99999));
  const expired=source.filter(row=>truckDocumentStatus(row).key==="Vencidos").length;
  const upcoming=source.filter(row=>truckDocumentStatus(row).key==="90 dias").length;
  const review=source.filter(row=>truckDocumentStatus(row).key==="Revisar").length;
  const withStatus=source.filter(row=>!isBlank(row.tacografo)).length;
  const withoutStatus=source.length-withStatus;
  return `${pageHeading(MODULES.tacografos.title,MODULES.tacografos.description)}<div class="metrics"><article class="metric"><span class="label">Veículos monitorados</span><strong>${source.length}</strong><small>${withStatus} com situação informada · ${withoutStatus} sem cadastro</small></article><article class="metric danger"><span class="label">Vencidos</span><strong>${expired}</strong><small>precisam de aferição</small></article><article class="metric warning"><span class="label">Vencem em até 90 dias</span><strong>${upcoming}</strong><small>programar atendimento</small></article><article class="metric"><span class="label">Sem data de vencimento</span><strong>${review}</strong><small>confirmar cadastro</small></article></div><section class="panel truck-documents"><div class="toolbar"><label class="field-inline"><span>⌕</span><input data-local-search type="search" value="${escapeHtml(state.query)}" placeholder="Buscar frota, placa ou situação"></label><div class="document-filters">${["Todos","Vencidos","90 dias","Revisar","Válidos"].map(value=>`<button class="filter-chip ${state.documentFilter===value?'active':''}" data-document-filter="${value}">${value}</button>`).join('')}</div><span class="spacer"></span><span class="badge">${rows.length} veículos</span></div><div class="table-wrap"><table><thead><tr><th>Frota</th><th>Placa</th><th>Operação</th><th>Situação do tacógrafo</th><th>Data da aferição</th><th>Vencimento</th><th>Situação do prazo</th><th></th></tr></thead><tbody>${rows.map(row=>`<tr><td><strong>${escapeHtml(row.frota||'—')}</strong></td><td>${escapeHtml(row.placa||'—')}</td><td>${escapeHtml(row.operacao||'—')}</td><td>${isBlank(row.tacografo)?badge('Não cadastrado'):badge(row.tacografo)}</td><td>${formatValue(row.dataAfericao,'dataAfericao')}</td><td>${formatValue(row.vencimento,'vencimento')}</td><td>${badge(row._docStatus.label)}</td><td><button class="secondary-button" data-tacograph-edit="${escapeHtml(row.id)}">Editar tacógrafo</button></td></tr>`).join('')}</tbody></table></div>${!rows.length?`<div class="empty-state"><strong>Nenhum veículo encontrado</strong>Revise os filtros ou a pesquisa.</div>`:''}</section>`;
}

function renderGpsMonitoring() {
  const all=stored(GPS_EQUIPMENT_KEY,[]);
  const query=slug(state.query);
  const types=["Antena GPS","Capacete","Monitor","Volante elétrico"];
  const rows=all.filter(item=>(state.gpsTypeFilter==="Todos"||item.tipoEquipamento===state.gpsTypeFilter)&&(!query||slug(`${item.identificadorGps} ${item.tipoEquipamento} ${item.frota} ${item.localTrabalho} ${item.modelo}`).includes(query)))
    .sort((a,b)=>String(a.frota).localeCompare(String(b.frota),"pt-BR",{numeric:true})||String(a.tipoEquipamento).localeCompare(String(b.tipoEquipamento),"pt-BR"));
  const installed=all.filter(item=>item.situacaoGps==="Instalado").length;
  const inMaintenance=all.filter(item=>item.situacaoGps==="Em manutenção").length;
  const fleetCount=new Set(all.filter(item=>item.frota).map(item=>String(item.frota))).size;
  return `${pageHeading(MODULES.gpsMonitoramento.title,MODULES.gpsMonitoramento.description)}<div class="metrics"><article class="metric"><span class="label">Equipamentos cadastrados</span><strong>${all.length}</strong><small>identificadores GPS únicos</small></article><article class="metric"><span class="label">Instalados</span><strong>${installed}</strong><small>em ${fleetCount} frotas</small></article><article class="metric warning"><span class="label">Em manutenção</span><strong>${inMaintenance}</strong><small>aguardando retorno à operação</small></article><article class="metric"><span class="label">Tipos monitorados</span><strong>${new Set(all.map(item=>item.tipoEquipamento).filter(Boolean)).size}</strong><small>antena, capacete, monitor e volante</small></article></div><section class="panel"><div class="panel-header"><div><h3>Equipamentos e localização</h3><p>Um cadastro para cada identificador de GPS, associado à frota e ao local de trabalho.</p></div><button class="primary-button" data-gps-new>＋ Cadastrar equipamento</button></div><div class="toolbar"><label class="field-inline"><span>⌕</span><input data-local-search type="search" value="${escapeHtml(state.query)}" placeholder="Buscar ID, frota ou local"></label><div class="document-filters">${["Todos",...types].map(value=>`<button class="filter-chip ${state.gpsTypeFilter===value?'active':''}" data-gps-type="${escapeHtml(value)}">${escapeHtml(value)}</button>`).join("")}</div><span class="spacer"></span><span class="badge">${rows.length} de ${all.length} equipamentos</span></div><div class="table-wrap"><table><thead><tr><th>Equipamento</th><th>Identificação GPS</th><th>Frota</th><th>Local de trabalho</th><th>Situação</th><th>Instalado em</th><th>Observação</th><th></th></tr></thead><tbody>${rows.map(item=>`<tr><td><strong>${escapeHtml(item.tipoEquipamento||"—")}</strong>${item.modelo?`<small class="table-subline">${escapeHtml(item.modelo)}</small>`:""}</td><td><span class="asset-identifier"><small>ID GPS</small>${escapeHtml(item.identificadorGps||"—")}</span></td><td>${escapeHtml(item.frota||"—")}</td><td>${escapeHtml(item.localTrabalho||"—")}</td><td>${badge(item.situacaoGps||"Instalado")}</td><td>${formatValue(item.dataInstalacao,"dataInstalacao")}</td><td>${escapeHtml(item.observacao||"—")}</td><td><button class="row-action" data-gps-edit="${escapeHtml(item.id)}" title="Editar equipamento">✎</button></td></tr>`).join("")}</tbody></table></div>${!rows.length?`<div class="empty-state"><strong>${all.length?"Nenhum equipamento encontrado":"Nenhum GPS cadastrado ainda"}</strong>${all.length?"Ajuste a busca ou o filtro de equipamento.":"Cadastre antenas, capacetes, monitores e volantes elétricos com seus identificadores."}</div>`:""}</section>`;
}

function renderAxiagroInstallations(stock) {
  const allInstallations = stored(AXIAGRO_INSTALLATIONS_KEY, []);
  const installations = allInstallations;
  const selected = installations.find(item=>item.id===state.selectedAxiagroInstallation);
  const stockById = new Map(stock.map(item=>[item.id,item]));
  if(selected){
    const items=(selected.items||[]).map(entry=>({...entry,stock:stockById.get(entry.stockId)})).filter(entry=>entry.stock);
    return `<div class="installation-detail"><div class="team-detail-head"><button class="secondary-button" data-installation-back>← Todos os equipamentos</button><div><span class="eyebrow">Kit AXIAGRO instalado</span><h2>Frota ${escapeHtml(selected.fleet)}</h2><p>${escapeHtml(selected.description||'Equipamento')} · Frente ${escapeHtml(selected.front||'—')} · ${escapeHtml(selected.location||'Local não informado')}</p></div><button class="secondary-button" data-installation-edit="${selected.id}">Editar equipamento</button></div><div class="installation-summary"><article><span>Itens instalados</span><strong>${items.reduce((sum,item)=>sum+Number(item.quantity),0)}</strong></article><article><span>Tipos de componente</span><strong>${items.length}</strong></article><article><span>Identificados</span><strong>${items.filter(item=>item.mac||item.seal).length}</strong><small>com MAC ou lacre registrado</small></article></div><div class="team-add"><div><h3>Instalar componente</h3><p>Celulares recebem MAC e cabos USB recebem número de lacre.</p></div><button class="primary-button" data-install-item="${selected.id}">＋ Instalar componente</button></div><div class="team-members"><div class="panel-header"><div><h3>Componentes instalados</h3><p>Inventário identificado e vinculado a esta frota</p></div></div>${items.length?`<div class="table-wrap"><table><thead><tr><th>Componente</th><th>Identificação</th><th>Situação</th><th>Qtd.</th><th>Instalado em</th><th></th></tr></thead><tbody>${items.map(item=>`<tr><td><strong>${escapeHtml(item.stock.equipamento)}</strong><small class="table-subline">${escapeHtml(item.stock.modelo||'')}</small></td><td>${item.mac?`<span class="asset-identifier"><small>MAC</small>${escapeHtml(item.mac)}</span>`:item.seal?`<span class="asset-identifier"><small>Lacre</small>${escapeHtml(item.seal)}</span>`:'—'}</td><td>${badge(item.status||'OK')}</td><td>${item.quantity}</td><td>${new Date(item.installedAt).toLocaleDateString('pt-BR')}</td><td><button class="row-action remove-member" data-remove-install-item="${selected.id}|${item.entryId||item.stockId}" title="Retirar componente">×</button></td></tr>`).join('')}</tbody></table></div>`:`<div class="empty-state"><strong>Nenhum componente instalado</strong>Instale um item do estoque para montar o kit deste equipamento.</div>`}</div></div>`;
  }
  const totalInstalled=installations.reduce((sum,item)=>sum+(item.items||[]).reduce((s,entry)=>s+Number(entry.quantity),0),0);
  const installedTypes=new Set(installations.flatMap(item=>(item.items||[]).map(entry=>entry.stockId))).size;
  const availableUnits=stock.reduce((sum,item)=>sum+(Number(item.quantidade)||0),0);
  const lowStockTypes=stock.filter(item=>Number(item.quantidade)<=2).length;
  const damagedUnits=installations.reduce((sum,item)=>sum+(item.returns||[]).filter(entry=>slug(entry.status)==="danificado").reduce((total,entry)=>total+Number(entry.quantity||0),0),0);
  const fronts=[...new Set(installations.map(item=>String(item.front||"Não definida")))].sort((a,b)=>a.localeCompare(b,"pt-BR",{numeric:true}));
  const query=slug(state.query);
  const visible=installations.filter(item=>
    (state.axiagroFront==="Todas"||String(item.front||"Não definida")===state.axiagroFront)&&
    (!query||slug(`${item.fleet} ${item.front} ${item.description} ${item.location} ${item.operationalStatus} ${(item.items||[]).map(entry=>`${stockById.get(entry.stockId)?.equipamento||""} ${entry.mac||""} ${entry.seal||""}`).join(" ")}`).includes(query))
  );
  return `<div class="installations-overview"><div class="installation-overview-head"><div><span class="eyebrow">Patrimônio instalado</span><h2>Frotas e equipamentos AXIAGRO</h2><p>Consulte a situação e a localização de cada frota, veja os componentes instalados e acompanhe o estoque em tempo real.</p></div><button class="primary-button" data-installation-new>＋ Cadastrar frota</button></div><div class="installation-summary"><article class="installation-kpi"><span class="installation-kpi-icon">▣</span><div><small>Frotas cadastradas</small><strong>${installations.length}</strong><span>equipamentos monitorados</span></div></article><article class="installation-kpi"><span class="installation-kpi-icon green">⌁</span><div><small>Componentes instalados</small><strong>${totalInstalled}</strong><span>${installedTypes} tipos de componente em uso</span></div></article><article class="installation-kpi"><span class="installation-kpi-icon blue">▦</span><div><small>Unidades disponíveis</small><strong>${availableUnits}</strong><span>${stock.length} itens no catálogo</span></div></article><article class="installation-kpi ${damagedUnits||lowStockTypes?"attention":""}"><span class="installation-kpi-icon amber">!</span><div><small>Itens para reposição</small><strong>${damagedUnits}</strong><span>danificados · ${lowStockTypes} tipos com estoque baixo</span></div></article></div><section class="installation-fleet-panel"><div class="installation-fleet-heading"><div><span class="eyebrow">VISÃO DA OPERAÇÃO</span><h3>Equipamentos por frota</h3><p>Filtre por frente ou pesquise identificação, local e componente.</p></div><span class="badge">${visible.length} de ${installations.length} frotas</span></div><div class="installation-toolbar"><label class="field-inline"><span>⌕</span><input data-local-search type="search" value="${escapeHtml(state.query)}" placeholder="Buscar frota, local, MAC ou lacre"></label><div class="document-filters">${["Todas",...fronts].map(front=>`<button class="filter-chip ${state.axiagroFront===front?'active':''}" data-axiagro-front="${escapeHtml(front)}">${front==="Todas"?"Todas":`Frente ${escapeHtml(front)}`}</button>`).join("")}</div></div>${visible.length?`<div class="installation-grid">${visible.map(item=>{const entries=item.items||[];const count=entries.reduce((sum,entry)=>sum+Number(entry.quantity),0);const componentNames=[...new Set(entries.map(entry=>stockById.get(entry.stockId)?.equipamento).filter(Boolean))];const status=item.operationalStatus||"Em operação";const statusClass=slug(status).includes("manutenc")?"pending":slug(status).includes("indispon")?"danger":"done";return `<button class="installation-card" data-installation-open="${escapeHtml(item.id)}"><span class="installation-card-icon">${escapeHtml(String(item.fleet).slice(-2))}</span><span class="installation-card-main"><span class="installation-card-eyebrow">AXIAGRO · FRENTE ${escapeHtml(item.front||"—")}</span><strong>Frota ${escapeHtml(item.fleet)}</strong><small>${escapeHtml(item.description||"Equipamento não informado")}</small><span class="installation-card-status ${statusClass}">${badge(status)}<span>⌖ ${escapeHtml(item.location||"Local não informado")}</span></span><span class="installation-component-list">${componentNames.length?componentNames.slice(0,3).map(name=>`<i>${escapeHtml(name)}</i>`).join(""):`<i class="empty-component">Nenhum componente instalado</i>`}${componentNames.length>3?`<i>+${componentNames.length-3}</i>`:""}</span></span><span class="installation-card-count ${count?"has-items":""}"><strong>${count}</strong><small>peças</small></span><span class="installation-card-arrow">›</span></button>`}).join("")}</div>`:`<div class="empty-state"><strong>${installations.length?"Nenhuma frota encontrada":"Nenhum equipamento cadastrado"}</strong>${installations.length?"Altere a busca ou selecione outra frente.":"Cadastre a frota para começar a acompanhar os componentes AXIAGRO."}</div>`}</section></div>`;
}

const AXIAGRO_ORDER_STAGES=["Solicitado","Aprovado","Pedido realizado","Em trânsito","Recebido","Cancelado"];
function renderAxiagroPurchaseOrders(stock){
  const orders=stored(AXIAGRO_PURCHASE_ORDERS_KEY,[]);
  const stockById=new Map(stock.map(item=>[item.id,item]));
  const query=slug(state.query);
  const filtered=orders.filter(order=>(state.purchaseOrderFilter==="Todos"||order.status===state.purchaseOrderFilter)&&(!query||slug(`${order.equipmentName} ${order.model} ${order.requester} ${order.supplier} ${order.orderNumber} ${order.notes}`).includes(query)))
    .sort((a,b)=>(Date.parse(b.updatedAt||b.requestedAt)||0)-(Date.parse(a.updatedAt||a.requestedAt)||0));
  const open=orders.filter(order=>!['Recebido','Cancelado'].includes(order.status)).length;
  const ordered=orders.filter(order=>['Pedido realizado','Em trânsito'].includes(order.status)).length;
  const received=orders.filter(order=>order.status==='Recebido').reduce((sum,order)=>sum+Number(order.quantity||0),0);
  return `<div class="purchase-orders-page"><div class="purchase-orders-intro"><div><span class="eyebrow">COMPRAS · AXIAGRO</span><h2>Pedidos e reposição</h2><p>Registre a necessidade, acompanhe cada etapa e receba a quantidade aprovada direto no estoque AXIAGRO.</p></div><button class="primary-button" data-purchase-new>＋ Registrar pedido</button></div><div class="purchase-order-summary"><article><span>Pedidos em aberto</span><strong>${open}</strong><small>aguardando conclusão</small></article><article><span>Em compra / transporte</span><strong>${ordered}</strong><small>pedido realizado ou em trânsito</small></article><article><span>Unidades recebidas</span><strong>${received}</strong><small>somadas ao estoque</small></article></div><div class="toolbar purchase-order-toolbar"><label class="field-inline"><span>⌕</span><input data-local-search type="search" value="${escapeHtml(state.query)}" placeholder="Buscar item, fornecedor ou número do pedido"></label><div class="document-filters">${["Todos",...AXIAGRO_ORDER_STAGES].map(value=>`<button class="filter-chip ${state.purchaseOrderFilter===value?'active':''}" data-purchase-filter="${escapeHtml(value)}">${escapeHtml(value)}</button>`).join("")}</div><span class="spacer"></span><span class="badge">${filtered.length} pedidos</span></div>${filtered.length?`<div class="purchase-order-list">${filtered.map(order=>{const stockItem=stockById.get(order.stockId);const stageIndex=AXIAGRO_ORDER_STAGES.indexOf(order.status);const progress=order.status==="Cancelado"?0:Math.max(0,Math.min(100,stageIndex/4*100));const terminal=["Recebido","Cancelado"].includes(order.status);return `<article class="purchase-order-card ${order.status==="Cancelado"?"cancelled":""}"><div class="purchase-order-card-head"><div><span class="eyebrow">${escapeHtml(order.requestNumber||`PED-${String(order.createdAt||"").slice(0,10).replaceAll("-","")}-${String(order.id).slice(-4)}`)}</span><h3>${escapeHtml(order.equipmentName||stockItem?.equipamento||"Item AXIAGRO")}</h3><p>${escapeHtml(order.model||stockItem?.modelo||"Modelo não informado")} · Quantidade: <strong>${escapeHtml(order.quantity)}</strong></p></div><div class="purchase-order-card-actions">${badge(order.status||"Solicitado")}<button class="row-action" data-purchase-edit="${escapeHtml(order.id)}" ${terminal?"disabled title=\"Pedido encerrado\"":"title=\"Editar pedido\""}>✎</button></div></div><div class="purchase-order-progress"><div class="purchase-order-progress-track"><i style="width:${progress}%"></i></div><div class="purchase-order-stages">${AXIAGRO_ORDER_STAGES.slice(0,5).map((stage,index)=>`<span class="${stageIndex>=index&&order.status!=="Cancelado"?"reached":""}">${stage}</span>`).join("")}</div></div><div class="purchase-order-meta"><span><small>Solicitado por</small><strong>${escapeHtml(order.requester||"—")}</strong></span><span><small>Data do pedido</small><strong>${formatValue(order.requestedAt,"dataPedido")}</strong></span><span><small>Previsão de chegada</small><strong>${formatValue(order.expectedDate,"dataPrevisao")}</strong></span><span><small>Fornecedor / OC</small><strong>${escapeHtml([order.supplier,order.orderNumber].filter(Boolean).join(" · ")||"Aguardando cotação")}</strong></span></div>${order.notes?`<p class="purchase-order-notes">${escapeHtml(order.notes)}</p>`:""}<div class="purchase-order-update"><label><span>Atualizar andamento</span><select data-purchase-status="${escapeHtml(order.id)}" ${terminal?"disabled":""}>${AXIAGRO_ORDER_STAGES.map(stage=>`<option ${order.status===stage?"selected":""}>${stage}</option>`).join("")}</select></label>${order.stockReceivedAt?`<small>✓ ${Number(order.quantity)} unidade(s) adicionada(s) ao estoque em ${new Date(order.stockReceivedAt).toLocaleDateString("pt-BR")}</small>`:terminal&&order.status==="Cancelado"?`<small>Pedido cancelado · sem entrada no estoque</small>`:""}</div></article>`}).join("")}</div>`:`<div class="empty-state purchase-order-empty"><strong>${orders.length?"Nenhum pedido encontrado":"Nenhum pedido de compra registrado"}</strong>${orders.length?"Altere a busca ou o filtro de andamento.":"Registre uma necessidade de compra para iniciar o acompanhamento."}<br>${!orders.length?`<button class="primary-button" data-purchase-new>＋ Registrar primeiro pedido</button>`:""}</div>`}</div>`;
}

function renderAxiagro() {
  const controls = state.data.modules.axiagroControle || [];
  const stock = state.data.modules.axiagroEstoque || [];
  const duplicateValues = field => { const counts=new Map(); controls.forEach(row=>{const value=slug(row[field]);if(value)counts.set(value,(counts.get(value)||0)+1)});return new Set([...counts].filter(([,count])=>count>1).map(([value])=>value)); };
  const duplicateMacs = duplicateValues("mac"); const duplicateSeals = duplicateValues("numeroLacre");
  const issuesFor = row => { const issues=[]; if(slug(row.statusCelular).includes("no controle"))issues.push("Sem controle"); if(row.fusivel==="X"||slug(row.fusivel)==="-")issues.push("Fusível"); if(row.statusAparelho==="-"||isBlank(row.statusAparelho))issues.push("Aparelho"); if(/verificar|reforma|nao encontrado|não encontrado/i.test(`${row.statusSuporte} ${row.observacao}`))issues.push("Suporte"); if(!row.mac)issues.push("Sem MAC"); if(duplicateMacs.has(slug(row.mac)))issues.push("MAC duplicado"); if(duplicateSeals.has(slug(row.numeroLacre)))issues.push("Lacre duplicado"); return issues; };
  const enriched = controls.map(row=>({...row,_issues:issuesFor(row)}));
  const active = controls.filter(row => ["ativo","campo","controle"].includes(slug(row.statusCelular))).length;
  const noControl = controls.filter(row => slug(row.statusCelular).includes("no controle")).length;
  const attention = enriched.filter(row => row._issues.length).length;
  const installations=stored(AXIAGRO_INSTALLATIONS_KEY,[]);
  const damagedByStock=new Map(); const installedByStock=new Map();
  installations.forEach(installation=>{(installation.items||[]).forEach(entry=>installedByStock.set(entry.stockId,(installedByStock.get(entry.stockId)||0)+Number(entry.quantity||0)));(installation.returns||[]).filter(entry=>slug(entry.status)==='danificado').forEach(entry=>damagedByStock.set(entry.stockId,(damagedByStock.get(entry.stockId)||0)+Number(entry.quantity||0)));});
  const knownStock = stock.filter(row => Number.isFinite(Number(row.quantidade)));
  const totalStock = knownStock.reduce((sum,row) => sum + Number(row.quantidade), 0);
  const lowStock = knownStock.filter(row => Number(row.quantidade) <= 2).length;
  const query = slug(state.query);
  let controlRows = enriched.filter(row => !query || slug(Object.values(row).join(" ")).includes(query));
  let stockRows = stock.filter(row => !query || slug(Object.values(row).join(" ")).includes(query));
  if(state.axiagroFilter==="Atenção")controlRows=controlRows.filter(row=>row._issues.length);
  if(state.axiagroFilter==="Campo")controlRows=controlRows.filter(row=>slug(row.statusCelular)==="campo");
  if(state.axiagroFilter==="Controle")controlRows=controlRows.filter(row=>slug(row.statusCelular)==="controle");
  if(state.axiagroFilter==="Sem controle")controlRows=controlRows.filter(row=>slug(row.statusCelular).includes("no controle"));
  if(state.axiagroFilter==="Duplicados")controlRows=controlRows.filter(row=>duplicateMacs.has(slug(row.mac))||duplicateSeals.has(slug(row.numeroLacre)));
  if(state.axiagroFilter==="Sem estoque")stockRows=stockRows.filter(row=>Number(row.quantidade)===0);
  if(state.axiagroFilter==="Estoque baixo")stockRows=stockRows.filter(row=>Number(row.quantidade)>0&&Number(row.quantidade)<=2);
  if(state.axiagroFilter==="Disponível")stockRows=stockRows.filter(row=>Number(row.quantidade)>2);
  const controlColumns = MODULES.axiagroControle.columns;
  const stockColumns = MODULES.axiagroEstoque.columns;
  const isControl = state.axiagroTab === "controle";
  const isInstallation = state.axiagroTab === "instalacoes";
  const isPurchaseOrders = state.axiagroTab === "pedidos";
  const rows = isControl ? controlRows : stockRows;
  const columns = isControl ? controlColumns : stockColumns;
  const module = isControl ? "axiagroControle" : "axiagroEstoque";
  const installedTotal=installations.reduce((sum,item)=>sum+(item.items||[]).reduce((total,entry)=>total+Number(entry.quantity),0),0); const damagedTotal=[...damagedByStock.values()].reduce((sum,value)=>sum+value,0);
  return `${pageHeading("Gestão AXIAGRO", "Controle os componentes instalados por frota e a disponibilidade automática do estoque.")}
    <div class="metrics axiagro-metrics">
      <article class="metric"><span class="label">Frotas com AXIAGRO</span><strong>${installations.length}</strong><small>equipamentos cadastrados nas instalações</small></article>
      <article class="metric"><span class="label">Componentes instalados</span><strong>${installedTotal}</strong><small>celulares, cabos e acessórios em uso</small></article>
      <article class="metric"><span class="label">Itens disponíveis</span><strong>${totalStock}</strong><small>${stock.length} tipos no catálogo</small></article>
      <article class="metric danger"><span class="label">Danificados / pedir</span><strong>${damagedTotal}</strong><small>${lowStock} tipos com estoque baixo</small></article>
    </div>
    <section class="panel axiagro-panel">
      <div class="subnav axiagro-subnav"><button class="${isInstallation ? "active" : ""}" data-axiagro-tab="instalacoes"><span>⌘</span><div><strong>Instalações por equipamento</strong><small>${installations.length} frotas</small></div></button><button class="${state.axiagroTab==="estoque" ? "active" : ""}" data-axiagro-tab="estoque"><span>▦</span><div><strong>Estoque AXIAGRO</strong><small>${stock.length} tipos de componente</small></div></button><button class="${isPurchaseOrders ? "active" : ""}" data-axiagro-tab="pedidos"><span>▤</span><div><strong>Pedidos de compra</strong><small>${stored(AXIAGRO_PURCHASE_ORDERS_KEY,[]).filter(order=>!['Recebido','Cancelado'].includes(order.status)).length} em aberto</small></div></button></div>
      ${isInstallation?renderAxiagroInstallations(stock):isPurchaseOrders?renderAxiagroPurchaseOrders(stock):`<div class="toolbar"><label class="field-inline"><span>⌕</span><input data-local-search type="search" value="${escapeHtml(state.query)}" placeholder="Buscar equipamento ou modelo..."></label><div class="axiagro-filters">${["Todos","Sem estoque","Estoque baixo","Disponível"].map(value=>`<button class="filter-chip ${state.axiagroFilter===value?'active':''}" data-axiagro-filter="${value}">${value}</button>`).join('')}</div><div class="spacer"></div><button class="primary-button" data-axiagro-new="${module}">＋ Adicionar item</button></div>
      <div class="table-wrap"><table><thead><tr><th>Equipamento</th><th>Modelo</th><th>Disponível</th><th>Instalado</th><th>Danificado</th><th>Ação</th><th></th></tr></thead><tbody>
        ${rows.length ? rows.map(row => {const available=Number(row.quantidade)||0;const installed=installedByStock.get(row.id)||0;const damaged=damagedByStock.get(row.id)||0;return `<tr data-open="${module}|${row.id}"><td><strong>${escapeHtml(row.equipamento)}</strong></td><td>${escapeHtml(row.modelo||'—')}</td><td>${badge(available>0?`${available} disponível`:'Sem estoque')}</td><td><span class="badge">${installed} instalado${installed===1?'':'s'}</span></td><td>${damaged?`<span class="badge danger">${damaged} danificado${damaged===1?'':'s'}</span>`:'<span class="badge done">0</span>'}</td><td>${damaged||available<=2?`<button class="purchase-order" data-purchase-new="${row.id}">＋ Registrar pedido</button>`:'<span class="badge done">Regular</span>'}</td><td><button class="row-action" data-edit="${module}|${row.id}" aria-label="Editar">•••</button></td></tr>`}).join("") : `<tr><td colspan="7"><div class="empty-state"><strong>Nenhum registro encontrado</strong>Ajuste sua busca ou o filtro.</div></td></tr>`}
      </tbody></table></div><div class="table-footer"><span>${rows.length} registros exibidos</span><span>${isControl?`${attention} controles exigem revisão`:`${lowStock} itens precisam de reposição`}</span></div>`}
    </section>`;
}

function renderTeams(source) {
  const teams = stored(TEAMS_KEY, []);
  const employeeById = new Map(source.map(employee => [employee.id, employee]));
  const selected = teams.find(team => team.id === state.selectedTeam);
  if (selected) {
    const members = (selected.members || []).map(id => employeeById.get(id)).filter(Boolean);
    const available = source.filter(employee => !(selected.members || []).includes(employee.id));
    const capacity = Number(selected.capacity) || 0;
    const occupancy = capacity ? Math.min(100, Math.round(members.length / capacity * 100)) : 0;
    const memberTeams = new Map(); teams.forEach(team => (team.members || []).forEach(id => { const list = memberTeams.get(id) || []; list.push(team); memberTeams.set(id, list); }));
    const conflicts = members.filter(employee => (memberTeams.get(employee.id) || []).length > 1).length;
    const inactive = members.filter(employee => slug(employee.situacao) !== "ativo").length;
    const memberQuery = slug(state.teamQuery);
    const visibleMembers = members.filter(employee => !memberQuery || slug(`${employee.nome} ${employee.cadastro} ${employee.cargo} ${employee.local}`).includes(memberQuery));
    return `<div class="team-detail-head"><button class="secondary-button" data-team-back>← Todas as equipes</button><div><span class="eyebrow">Equipe personalizada</span><h2>${escapeHtml(selected.name)}</h2><p>${escapeHtml(selected.location || "Local não definido")}${selected.leader ? ` · Responsável: ${escapeHtml(selected.leader)}` : ""}</p><div class="team-meta"><span>${badge(selected.status || "Ativa")}</span><span>${escapeHtml(selected.shift || "Não informado")}</span>${capacity ? `<span>${members.length}/${capacity} vagas</span>` : ""}</div></div><div class="heading-actions"><button class="secondary-button" data-team-export="${selected.id}">Exportar CSV</button><button class="secondary-button" data-team-duplicate="${selected.id}">Duplicar</button><button class="secondary-button" data-team-edit="${selected.id}">Editar equipe</button><button class="danger-button" data-team-delete="${selected.id}">Apagar lista</button></div></div>
      <div class="team-kpis"><article><span>Integrantes</span><strong>${members.length}</strong><small>${capacity ? `${occupancy}% da capacidade` : "sem limite definido"}</small></article><article class="${conflicts ? "warning" : ""}"><span>Em outras equipes</span><strong>${conflicts}</strong><small>possíveis conflitos de escala</small></article><article class="${inactive ? "warning" : ""}"><span>Fora de atividade</span><strong>${inactive}</strong><small>férias, afastados ou inativos</small></article><article><span>Cargos</span><strong>${new Set(members.map(item=>item.cargo).filter(Boolean)).size}</strong><small>funções diferentes</small></article></div>
      ${selected.description ? `<div class="team-note">${escapeHtml(selected.description)}</div>` : ""}
      <div class="team-add"><div><h3>Adicionar funcionário</h3><p>Busque por nome ou cadastro. O sistema também identifica vínculos com outras equipes.</p></div><div class="team-search"><input id="teamEmployeeSearch" list="team-employee-options" placeholder="Nome ou número do cadastro"><datalist id="team-employee-options">${available.map(employee=>`<option value="${escapeHtml(employee.nome)}">${escapeHtml(employee.cadastro)} · ${escapeHtml(employee.cargo)} · ${escapeHtml(employee.local)}</option>`).join("")}</datalist><button class="primary-button" data-team-add="${selected.id}">Adicionar</button></div></div>
      <div class="team-members"><div class="panel-header"><div><h3>Integrantes</h3><p>${visibleMembers.length} de ${members.length} funcionários</p></div><label class="field-inline team-member-filter"><span>⌕</span><input data-team-member-search type="search" value="${escapeHtml(state.teamQuery)}" placeholder="Filtrar integrantes..."></label></div>${members.length ? `<div class="table-wrap"><table><thead><tr><th>Cadastro</th><th>Funcionário</th><th>Cargo</th><th>Local atual</th><th>Situação</th><th>Escala</th><th></th></tr></thead><tbody>${visibleMembers.map(employee=>{const links=memberTeams.get(employee.id)||[];return `<tr data-open="funcionarios|${employee.id}"><td>${escapeHtml(employee.cadastro)}</td><td><strong>${escapeHtml(employee.nome)}</strong></td><td>${escapeHtml(employee.cargo)}</td><td>${escapeHtml(employee.local)}</td><td>${badge(employee.situacao)}</td><td>${links.length>1?`<span class="badge pending">${links.length} equipes</span>`:`<span class="badge done">Exclusiva</span>`}</td><td><button class="row-action remove-member" data-team-remove="${selected.id}|${employee.id}" title="Remover somente desta lista">×</button></td></tr>`}).join("")}</tbody></table></div>${!visibleMembers.length?`<div class="empty-state"><strong>Nenhum integrante encontrado</strong>Limpe o filtro para ver todos.</div>`:""}` : `<div class="empty-state"><strong>Equipe sem integrantes</strong>Digite o nome de um funcionário acima para começar.</div>`}</div>`;
  }
  const allAssignments = teams.flatMap(team => team.members || []);
  const assigned = new Set(allAssignments).size;
  const duplicates = allAssignments.length - assigned;
  const query = slug(state.teamQuery);
  const filtered = teams.filter(team => (!query || slug(`${team.name} ${team.location} ${team.leader}`).includes(query)) && (state.teamStatus === "Todas" || (team.status || "Ativa") === state.teamStatus));
  return `<div class="team-overview"><div class="team-overview-head"><div><span class="eyebrow">Central de equipes</span><h2>Equipes personalizadas</h2><p>Planeje grupos, acompanhe capacidade e identifique conflitos sem alterar a base.</p></div><button class="primary-button" data-team-new>＋ Nova equipe</button></div>${teams.length ? `<div class="team-summary"><article><span>Equipes</span><strong>${teams.length}</strong></article><article><span>Pessoas escaladas</span><strong>${assigned}</strong></article><article><span>Disponíveis</span><strong>${Math.max(0,source.length-assigned)}</strong></article><article class="${duplicates?"warning":""}"><span>Dupla alocação</span><strong>${duplicates}</strong></article></div><div class="team-toolbar"><label class="field-inline"><span>⌕</span><input data-team-search type="search" value="${escapeHtml(state.teamQuery)}" placeholder="Buscar equipe, local ou responsável"></label><label class="field-inline"><span>Situação</span><select data-team-status><option>Todas</option>${["Ativa","Planejada","Suspensa","Encerrada"].map(value=>`<option ${state.teamStatus===value?"selected":""}>${value}</option>`).join("")}</select></label><span class="badge">${filtered.length} resultados</span></div><div class="team-grid">${filtered.map(team=>{const members=(team.members||[]).map(id=>employeeById.get(id)).filter(Boolean);const capacity=Number(team.capacity)||0;return `<article class="team-card"><button class="team-card-main" data-team-open="${team.id}"><span class="team-avatar">${escapeHtml(team.name.slice(0,2).toUpperCase())}</span><div><strong>${escapeHtml(team.name)}</strong><small>${escapeHtml(team.location || "Sem local de referência")}</small><div class="team-meta"><span>${badge(team.status||"Ativa")}</span><span>${escapeHtml(team.shift||"Não informado")}</span></div></div><span class="team-size"><strong>${members.length}${capacity?`/${capacity}`:""}</strong><small>pessoas</small></span></button><footer><span>${team.leader ? `Responsável: ${escapeHtml(team.leader)}` : "Sem responsável"}</span><div><button class="row-action" data-team-duplicate="${team.id}" title="Duplicar equipe">⧉</button><button class="row-action" data-team-edit="${team.id}" title="Editar equipe">✎</button><button class="row-action" data-team-delete="${team.id}" title="Apagar lista">×</button></div></footer></article>`}).join("")}</div>${!filtered.length?`<div class="empty-state"><strong>Nenhuma equipe encontrada</strong>Ajuste a busca ou o filtro de situação.</div>`:""}` : `<div class="empty-state team-empty"><strong>Nenhuma equipe personalizada</strong>Crie uma lista e adicione funcionários usando os nomes já cadastrados.<br><button class="primary-button" data-team-new>＋ Criar primeira equipe</button></div>`}</div>`;
}

function renderEmployees() {
  const source = state.data.modules.funcionarios || [];
  const locations = [...new Set(source.map(row => row.local).filter(Boolean))].sort((a,b) => a.localeCompare(b,"pt-BR"));
  const areas = [...new Set(source.map(row => row.area).filter(Boolean))];
  const query = slug(state.query);
  let rows = source.filter(row => !query || slug(Object.values(row).join(" ")).includes(query));
  if (state.employeeLocation !== "Todos") rows = rows.filter(row => row.local === state.employeeLocation);
  const locationStats = locations.map(local => {
    const list = source.filter(row => row.local === local);
    const roles = new Set(list.map(row => row.cargo).filter(Boolean));
    return { local, count: list.length, roles: roles.size, area: list[0]?.area || "" };
  }).sort((a,b) => b.count-a.count);
  const recent = source.filter(row => String(row.admissao).endsWith("2026")).length;
  const pageSize = 30;
  const pages = Math.max(1, Math.ceil(rows.length / pageSize));
  state.page = Math.min(state.page, pages);
  const visible = rows.slice((state.page-1)*pageSize, state.page*pageSize);
  const columns = MODULES.funcionarios.columns;
  return `${pageHeading("Distribuição de funcionários", "Organize a equipe por local de trabalho, consulte a base de ativos e cadastre novos colaboradores.")}
    <div class="metrics employee-metrics"><article class="metric"><span class="label">Funcionários ativos</span><strong>${source.filter(row=>slug(row.situacao)==="ativo").length}</strong><small>${source.length} registros na base</small></article><article class="metric"><span class="label">Locais de trabalho</span><strong>${locations.length}</strong><small>equipes distribuídas por operação</small></article><article class="metric"><span class="label">Áreas</span><strong>${areas.length}</strong><small>${areas.map(escapeHtml).join(" e ")}</small></article><article class="metric"><span class="label">Admissões em 2026</span><strong>${recent}</strong><small>colaboradores admitidos no ano</small></article></div>
    <section class="panel employee-panel">
      <div class="toolbar employee-toolbar">${state.employeeView !== "teams" ? `<label class="field-inline"><span>⌕</span><input data-local-search type="search" value="${escapeHtml(state.query)}" placeholder="Buscar nome, cadastro ou cargo"></label><label class="field-inline"><span>Local</span><select data-location-filter><option>Todos</option>${locations.map(local=>`<option ${state.employeeLocation===local?"selected":""}>${escapeHtml(local)}</option>`).join("")}</select></label>` : `<span class="badge">Listas personalizadas não alteram a base de funcionários</span>`}<div class="spacer"></div><div class="view-toggle employee-views"><button class="${state.employeeView==="locations"?"active":""}" data-employee-view="locations" title="Locais">▦</button><button class="${state.employeeView==="list"?"active":""}" data-employee-view="list" title="Lista completa">▤</button><button class="${state.employeeView==="teams"?"active":""}" data-employee-view="teams" title="Equipes personalizadas">♙</button></div>${state.employeeView !== "teams" ? `<span class="badge">${rows.length} funcionários</span>` : ""}</div>
      ${state.employeeView === "teams" ? renderTeams(source) : state.employeeView === "locations" && state.employeeLocation === "Todos" ? `<div class="location-grid">${locationStats.map((item,index)=>`<button class="location-card" data-employee-location="${escapeHtml(item.local)}"><span class="location-index">${String(index+1).padStart(2,"0")}</span><div><strong>${escapeHtml(item.local)}</strong><small>${escapeHtml(item.area)}</small></div><span class="location-count"><strong>${item.count}</strong><small>pessoas</small></span><div class="location-bar"><i style="width:${item.count/locationStats[0].count*100}%"></i></div><footer>${item.roles} cargos diferentes <b>Ver equipe →</b></footer></button>`).join("")}</div>` : `<div class="employee-context">${state.employeeLocation !== "Todos" ? `<button class="secondary-button" data-clear-location>← Todos os locais</button><div><span class="eyebrow">Equipe selecionada</span><h3>${escapeHtml(state.employeeLocation)}</h3></div>` : `<div><span class="eyebrow">Base completa</span><h3>Todos os funcionários</h3></div>`}</div><div class="table-wrap"><table><thead><tr>${columns.map(column=>`<th>${LABELS[column]}</th>`).join("")}<th></th></tr></thead><tbody>${visible.map(row=>`<tr data-open="funcionarios|${row.id}">${columns.map(column=>`<td><span class="cell-truncate" title="${escapeHtml(row[column])}">${column === "situacao" ? badge(row[column]) : formatValue(row[column],column)}</span></td>`).join("")}<td><button class="row-action" data-edit="funcionarios|${row.id}" aria-label="Editar">•••</button></td></tr>`).join("")}</tbody></table></div><div class="table-footer"><span>Exibindo ${rows.length?(state.page-1)*pageSize+1:0}–${Math.min(state.page*pageSize,rows.length)} de ${rows.length}</span><div class="pagination"><button data-page="${state.page-1}" ${state.page<=1?"disabled":""}>‹</button><span class="badge">${state.page} / ${pages}</span><button data-page="${state.page+1}" ${state.page>=pages?"disabled":""}>›</button></div></div>`}
    </section>`;
}

function renderRaw() {
  if (!state.rawSheet) {
    return `${pageHeading(MODULES.raw.title, MODULES.raw.description, false)}<div class="sheet-grid">${state.data.rawSheets.map((sheet, index) => `<button class="sheet-card" data-raw-sheet="${index}"><strong>${escapeHtml(sheet.name)}</strong><span>${sheet.rows.length} linhas com dados · ${sheet.maxColumn} colunas</span></button>`).join("")}</div>`;
  }
  const sheet = state.data.rawSheets[state.rawSheet.index];
  const maxCols = Math.max(...sheet.rows.map(row => row.values.length));
  const letters = Array.from({ length: maxCols }, (_, i) => {
    let n = i + 1, text = ""; while (n) { n--; text = String.fromCharCode(65 + (n % 26)) + text; n = Math.floor(n / 26); } return text;
  });
  return `${pageHeading(sheet.name, `${sheet.rows.length} linhas importadas da aba original.`, false)}<div style="margin-bottom:12px"><button class="secondary-button" data-back-raw>← Voltar às abas</button></div><section class="panel"><div class="table-wrap"><table class="raw-table"><thead><tr><th>Linha</th>${letters.map(l => `<th>${l}</th>`).join("")}</tr></thead><tbody>${sheet.rows.map(row => `<tr><td>${row.row}</td>${letters.map((_, i) => `<td>${formatValue(row.values[i] || "", "raw")}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
}

function render() {
  $("#breadcrumb").textContent = MODULES[state.route].label;
  $("#newRecordButton").classList.toggle("hidden", ["dashboard", "analytics", "deadlines", "quality", "search", "axiagro", "tacografos", "gpsMonitoramento", "frotasBusca", "activity", "raw"].includes(state.route));
  const special = { dashboard: renderDashboard, analytics: renderAnalytics, deadlines: renderDeadlines, quality: renderQuality, search: renderGlobalSearch, caminhoesInfo: renderTruckDocuments, tacografos: renderTacographs, gpsMonitoramento: renderGpsMonitoring, axiagro: renderAxiagro, funcionarios: renderEmployees, activity: renderActivity, raw: renderRaw };
  $("#app").innerHTML = special[state.route] ? special[state.route]() : renderModule(state.route);
  if(!["dashboard","analytics","deadlines","quality","search","activity","raw"].includes(state.route)){
    const anchor=$("#app .metrics, #app .module-summary, #app .page-heading");
    anchor?.insertAdjacentHTML("afterend",renderProgressInsights(state.route));
  }
  bindViewEvents();
  renderNotificationCenter();
}

function renderProgressInsights(route){
  let rows=[]; let title="Progresso do módulo"; let bucketFor;
  const source=state.data.modules[route]||[];
  if(route==="gpsMonitoramento"){
    rows=stored(GPS_EQUIPMENT_KEY,[]); title="Instalação e situação dos equipamentos GPS";
    bucketFor=row=>({"Instalado":"done","Em manutenção":"progress","Em estoque":"pending","Retirado":"pending"}[row.situacaoGps]||"unknown");
  }else if(route==="tacografos"){
    rows=state.data.modules.caminhoesInfo||[]; title="Aferição e vencimentos da frota";
    bucketFor=row=>({"Vencidos":"pending","90 dias":"progress","Válidos":"done","Revisar":"unknown"}[truckDocumentStatus(row).key]||"unknown");
  }else if(route==="caminhoesInfo"){
    rows=source; title="Completude da documentação";
    bucketFor=row=>documentCompleteness(row)>=90?"done":"pending";
  }else if(route==="funcionarios"){
    rows=source; title="Situação da equipe";
    bucketFor=row=>slug(row.situacao)==="ativo"?"done":isBlank(row.situacao)?"unknown":"pending";
  }else if(route==="axiagro"){
    if(state.axiagroTab==="estoque"){
      rows=state.data.modules.axiagroEstoque||[]; title="Disponibilidade do estoque AXIAGRO";
      bucketFor=row=>Number(row.quantidade)>2?"done":Number(row.quantidade)>0?"progress":"pending";
    }else if(state.axiagroTab==="pedidos"){
      rows=stored(AXIAGRO_PURCHASE_ORDERS_KEY,[]); title="Andamento dos pedidos AXIAGRO";
      bucketFor=row=>row.status==="Recebido"?"done":row.status==="Cancelado"?"unknown":["Pedido realizado","Em trânsito"].includes(row.status)?"progress":"pending";
    }else if(state.axiagroTab==="controle"){
      rows=state.data.modules.axiagroControle||[]; title="Condição dos equipamentos AXIAGRO";
      bucketFor=row=>/danific|reforma|pendente|nao encontrado|não encontrado/i.test(`${row.statusAparelho} ${row.statusSuporte} ${row.statusCelular}`)?"pending":!isBlank(row.mac)?"done":"unknown";
    }else{
      rows=stored(AXIAGRO_INSTALLATIONS_KEY,[]); title="Kits AXIAGRO instalados";
      bucketFor=row=>(row.items||[]).length?"done":"unknown";
    }
  }else if(route==="carretasInfo"){
    rows=source; title="Conformidade dos documentos de carretas";
    bucketFor=row=>slug(row.possuiCrlv)==="sim"&&!isBlank(row.antt)?"done":isBlank(row.possuiCrlv)&&isBlank(row.antt)?"unknown":"pending";
  }else if(route==="curvaS"){
    rows=source; title="Planejado versus realizado";
    bucketFor=row=>Number(row.realizado)>=Number(row.planejado)&&Number(row.planejado)>0?"done":Number(row.realizado)>0?"progress":Number(row.planejado)>0?"pending":"unknown";
  }else{
    rows=source; title=`Andamento · ${MODULES[route]?.label||"módulo"}`;
    bucketFor=row=>{
      if("status" in row)return ({"Concluído":"done","Em andamento":"progress","Pendente":"pending","Não informado":"unknown"})[normalizeStatus(row)]||"unknown";
      const value=row.situacaoGps||row.operationalStatus||row.situacao||row.possuiRadio||row.possuiCrlv||row.tacografo||"";
      const normalized=slug(value);
      if(/conclu|feito|realizado|ativo|instalado|^sim$|^ok$/.test(normalized))return "done";
      if(/andamento|manutenc|reforma/.test(normalized))return "progress";
      if(/pend|venc|danific|inativo|retirado|^nao$/.test(normalized))return "pending";
      return "unknown";
    };
  }
  const counts={done:0,progress:0,pending:0,unknown:0}; rows.forEach(row=>counts[bucketFor(row)]++);
  const total=rows.length; const pct=key=>total?Math.round(counts[key]/total*100):0;
  const donePct=pct("done"), progressPct=pct("progress"), pendingPct=pct("pending");
  const legend=[{key:"done",label:"Concluído / instalado",count:counts.done},{key:"progress",label:"Em andamento",count:counts.progress},{key:"pending",label:"Atenção necessária",count:counts.pending},{key:"unknown",label:"Sem informação",count:counts.unknown}];
  return `<section class="progress-insights panel"><div class="panel-header"><div><span class="eyebrow">VISÃO DO MÓDULO</span><h3>${escapeHtml(title)}</h3><p>${total?`${total} registros considerados · atualizado a partir dos dados atuais`:"Cadastre registros para começar a acompanhar o andamento."}</p></div><span class="badge ${total&&donePct>=70?"done":""}">${donePct}% concluído / instalado</span></div><div class="progress-insights-content"><div class="progress-donut-wrap"><div class="progress-donut" style="--done:${donePct}%;--progress:${donePct+progressPct}%;--pending:${donePct+progressPct+pendingPct}%"><div><strong>${donePct}%</strong><small>andamento</small></div></div><span>${counts.done} de ${total} registros concluídos ou instalados</span></div><div class="progress-chart-list">${legend.map(item=>`<div class="progress-chart-row"><div><span class="progress-chart-dot ${item.key}"></span><span>${item.label}</span><strong>${item.count}</strong></div><div class="progress-chart-track"><i class="${item.key}" style="width:${pct(item.key)}%"></i></div></div>`).join("")}</div></div></section>`;
}

function bindViewEvents() {
  $$('[data-route]', $("#app")).forEach(button => button.addEventListener("click", () => navigate(button.dataset.route)));
  $$('[data-open]').forEach(element => element.addEventListener("click", event => {
    if (event.target.closest("[data-edit], [data-team-remove]")) return;
    const [module, id] = element.dataset.open.split("|"); openDetails(module, id);
  }));
  $$('[data-edit]').forEach(button => button.addEventListener("click", event => { event.stopPropagation(); const [module, id] = button.dataset.edit.split("|"); openForm(module, id); }));
  $$('[data-tacograph-edit]').forEach(button => button.addEventListener("click", () => openTacographDialog(button.dataset.tacographEdit)));
  $$("[data-gps-new]").forEach(button=>button.addEventListener("click",()=>openGpsDialog()));
  $$("[data-gps-edit]").forEach(button=>button.addEventListener("click",()=>openGpsDialog(button.dataset.gpsEdit)));
  $$('[data-gps-type]').forEach(button=>button.addEventListener("click",()=>{state.gpsTypeFilter=button.dataset.gpsType;render();}));
  $$('[data-purchase-new]').forEach(button=>button.addEventListener("click",event=>{event.stopPropagation();openPurchaseOrderDialog(null,button.dataset.purchaseNew||null);}));
  $$('[data-purchase-edit]').forEach(button=>button.addEventListener("click",()=>openPurchaseOrderDialog(button.dataset.purchaseEdit)));
  $$('[data-purchase-filter]').forEach(button=>button.addEventListener("click",()=>{state.purchaseOrderFilter=button.dataset.purchaseFilter;render();}));
  $$('[data-purchase-status]').forEach(select=>select.addEventListener("change",()=>updatePurchaseOrderStatus(select.dataset.purchaseStatus,select.value)));
  const localSearch = $("[data-local-search]");
  if (localSearch) localSearch.addEventListener("input", event => { state.query = event.target.value; state.page = 1; render(); requestAnimationFrame(() => { const input = $("[data-local-search]"); input?.focus(); input?.setSelectionRange(input.value.length, input.value.length); }); });
  const statusFilter = $("[data-status-filter]");
  if (statusFilter) statusFilter.addEventListener("change", event => { state.status = event.target.value; state.page = 1; render(); });
  const companyFilter = $("[data-company-filter]");
  if (companyFilter) companyFilter.addEventListener("change", event => { state.company = event.target.value; state.page = 1; render(); });
  $$('[data-page]').forEach(button => button.addEventListener("click", () => { state.page = Number(button.dataset.page); render(); }));
  $$('[data-view]').forEach(button => button.addEventListener("click", () => { state.viewMode = button.dataset.view; render(); }));
  $$('[data-document-filter]').forEach(button => button.addEventListener("click", () => { state.documentFilter=button.dataset.documentFilter; render(); }));
  $$('[data-document-view]').forEach(button => button.addEventListener("click", () => { state.documentView=button.dataset.documentView; render(); }));
  $$('[data-sort]').forEach(button => button.addEventListener("click", () => { const column=button.dataset.sort; state.sortDir=state.sortBy===column&&state.sortDir==='asc'?'desc':'asc'; state.sortBy=column; state.page=1; render(); }));
  $("[data-page-size]")?.addEventListener("change", event => { state.pageSize=Number(event.target.value); state.page=1; render(); });
  $$('[data-axiagro-tab]').forEach(button => button.addEventListener("click", () => { state.axiagroTab = button.dataset.axiagroTab; state.axiagroFilter="Todos"; state.purchaseOrderFilter="Todos"; state.query = ""; render(); }));
  $$('[data-axiagro-filter]').forEach(button => button.addEventListener("click", () => { state.axiagroFilter=button.dataset.axiagroFilter; render(); }));
  $$('[data-axiagro-front]').forEach(button => button.addEventListener("click", () => { state.axiagroFront=button.getAttribute("data-axiagro-front") || "Todas"; state.selectedAxiagroInstallation=null; render(); }));
  $("[data-axiagro-new]")?.addEventListener("click", event => openForm(event.currentTarget.dataset.axiagroNew));
  $("[data-installation-new]")?.addEventListener("click", () => openInstallationDialog());
  $$('[data-installation-open]').forEach(button=>button.addEventListener("click",()=>{state.selectedAxiagroInstallation=button.dataset.installationOpen;render();}));
  $("[data-installation-back]")?.addEventListener("click",()=>{state.selectedAxiagroInstallation=null;render();});
  $("[data-installation-edit]")?.addEventListener("click",event=>openInstallationDialog(event.currentTarget.dataset.installationEdit));
  $("[data-install-item]")?.addEventListener("click",event=>installAxiagroItem(event.currentTarget.dataset.installItem));
  $$('[data-remove-install-item]').forEach(button=>button.addEventListener("click",event=>{const [installationId,entryId]=event.currentTarget.dataset.removeInstallItem.split("|");openAxiagroReturnDialog(installationId,entryId);}));
  $$('[data-employee-view]').forEach(button => button.addEventListener("click", () => { state.employeeView = button.dataset.employeeView; state.page = 1; render(); }));
  $$('[data-employee-location]').forEach(button => button.addEventListener("click", () => { state.employeeLocation = button.dataset.employeeLocation; state.employeeView = "list"; state.page = 1; render(); }));
  $("[data-location-filter]")?.addEventListener("change", event => { state.employeeLocation = event.target.value; state.employeeView = event.target.value === "Todos" ? state.employeeView : "list"; state.page = 1; render(); });
  $("[data-clear-location]")?.addEventListener("click", () => { state.employeeLocation = "Todos"; state.employeeView = "locations"; state.page = 1; render(); });
  $$('[data-team-new]').forEach(button => button.addEventListener("click", () => openTeamDialog()));
  $$('[data-team-open]').forEach(button => button.addEventListener("click", () => { state.selectedTeam = button.dataset.teamOpen; state.teamQuery = ""; render(); }));
  $("[data-team-back]")?.addEventListener("click", () => { state.selectedTeam = null; state.teamQuery = ""; render(); });
  $$('[data-team-edit]').forEach(button => button.addEventListener("click", () => openTeamDialog(button.dataset.teamEdit)));
  $$('[data-team-delete]').forEach(button => button.addEventListener("click", () => deleteTeam(button.dataset.teamDelete)));
  $$('[data-team-duplicate]').forEach(button => button.addEventListener("click", () => duplicateTeam(button.dataset.teamDuplicate)));
  $$('[data-team-export]').forEach(button => button.addEventListener("click", () => exportTeam(button.dataset.teamExport)));
  $("[data-team-add]")?.addEventListener("click", event => addTeamMember(event.currentTarget.dataset.teamAdd));
  $("#teamEmployeeSearch")?.addEventListener("keydown", event => { if (event.key === "Enter") { event.preventDefault(); addTeamMember($("[data-team-add]")?.dataset.teamAdd); } });
  $("[data-team-search]")?.addEventListener("input", event => { state.teamQuery = event.target.value; render(); requestAnimationFrame(() => { const input=$("[data-team-search]"); input?.focus(); input?.setSelectionRange(input.value.length,input.value.length); }); });
  $("[data-team-member-search]")?.addEventListener("input", event => { state.teamQuery = event.target.value; render(); requestAnimationFrame(() => { const input=$("[data-team-member-search]"); input?.focus(); input?.setSelectionRange(input.value.length,input.value.length); }); });
  $("[data-team-status]")?.addEventListener("change", event => { state.teamStatus = event.target.value; render(); });
  $$('[data-team-remove]').forEach(button => button.addEventListener("click", event => { event.stopPropagation(); const [teamId,employeeId]=button.dataset.teamRemove.split("|"); removeTeamMember(teamId,employeeId); }));
  $$('[data-action="print"]').forEach(button => button.addEventListener("click", () => print()));
  $$('[data-action="export-csv"]').forEach(button => button.addEventListener("click", () => exportCsv(state.route)));
  $$('[data-raw-sheet]').forEach(button => button.addEventListener("click", () => { state.rawSheet = { index: Number(button.dataset.rawSheet) }; render(); }));
  $("[data-back-raw]")?.addEventListener("click", () => { state.rawSheet = null; render(); });
}

function openInstallationDialog(installationId=null){
  const installation=stored(AXIAGRO_INSTALLATIONS_KEY,[]).find(item=>item.id===installationId)||{};
  const fleetInput=$("#installationFleet"); const fleetOptions=$("#installation-fleet-options") || document.createElement("datalist"); fleetOptions.id="installation-fleet-options"; fleetOptions.innerHTML=(state.data.modules.frotasBusca||[]).map(item=>`<option value="${escapeHtml(item.frota)}">${escapeHtml(`${item.equipamento} · ${item.placa||item.chassi||'sem identificação'}`)}</option>`).join(""); if(!fleetOptions.parentElement) document.body.appendChild(fleetOptions); fleetInput?.setAttribute("list","installation-fleet-options");
  $("#installationFleet").value=installation.fleet||""; $("#installationFront").value=installation.front||""; $("#installationDescription").value=installation.description||""; $("#installationLocation").value=installation.location||""; $("#installationStatus").value=installation.operationalStatus||"Em operação";
  $("#installationForm").dataset.installationId=installationId||""; $("#installationDialog").showModal();
}

function saveInstallation(event){
  event.preventDefault(); const values=Object.fromEntries(new FormData(event.currentTarget).entries()); const id=event.currentTarget.dataset.installationId; const installations=stored(AXIAGRO_INSTALLATIONS_KEY,[]);
  if (state.data.modules.frotasBusca?.length && !state.data.modules.frotasBusca.some(item => String(item.frota).trim() === String(values.fleet).trim())) return toast("Selecione uma frota existente na Busca Frota.");
  if(id){const item=installations.find(entry=>entry.id===id);if(item)Object.assign(item,values,{updatedAt:new Date().toISOString()});}
  else {const item={id:`installation-${Date.now()}`,...values,items:[],createdAt:new Date().toISOString()};installations.push(item);state.selectedAxiagroInstallation=item.id;}
  save(AXIAGRO_INSTALLATIONS_KEY,installations); audit(id?"Edição":"Inclusão","axiagroControle",{id:id||state.selectedAxiagroInstallation,frota:values.fleet},"Equipamento AXIAGRO"); $("#installationDialog").close(); toast("Equipamento AXIAGRO salvo."); render();
}

function openPurchaseOrderDialog(orderId=null,stockId=null){
  const orders=stored(AXIAGRO_PURCHASE_ORDERS_KEY,[]);const order=orders.find(item=>item.id===orderId)||{};const form=$("#purchaseOrderForm");form.reset();form.dataset.orderId=orderId||"";
  const items=state.data.modules.axiagroEstoque||[];$("#purchaseStockItem").innerHTML=`<option value="">Selecione o item</option>${items.map(item=>`<option value="${escapeHtml(item.id)}">${escapeHtml(item.equipamento)} · ${escapeHtml(item.modelo||"sem modelo")} · estoque: ${Number(item.quantidade)||0}</option>`).join("")}`;
  $("#purchaseStockItem").value=order.stockId||stockId||"";$("#purchaseQuantity").value=order.quantity||1;$("#purchaseRequester").value=order.requester||window.FirebaseSync?.user?.email||"";
  const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());const todayValue=today.toISOString().slice(0,10);
  $("#purchaseRequestedAt").value=order.requestedAt||todayValue;$("#purchaseSupplier").value=order.supplier||"";$("#purchaseExternalNumber").value=order.orderNumber||"";$("#purchaseExpectedDate").value=order.expectedDate||"";$("#purchaseNotes").value=order.notes||"";
  $("#purchaseOrderDialogTitle").textContent=orderId?"Editar pedido de compra":"Registrar pedido de compra";$("#purchaseOrderDialog").showModal();
}

function savePurchaseOrder(event){
  event.preventDefault();const form=event.currentTarget;const id=form.dataset.orderId||"";const values=Object.fromEntries(new FormData(form).entries());values.quantity=Math.max(1,Math.floor(Number(values.quantity)||1));
  const stockItem=findRecord("axiagroEstoque",values.stockId);if(!stockItem)return toast("Selecione um item cadastrado no estoque AXIAGRO.");
  const orders=stored(AXIAGRO_PURCHASE_ORDERS_KEY,[]);const now=new Date().toISOString();let order;
  if(id){order=orders.find(item=>item.id===id);if(!order||["Recebido","Cancelado"].includes(order.status))return toast("Este pedido já foi encerrado e não pode ser editado.");const changes=Object.entries(values).filter(([field,next])=>String(order[field]??"")!==String(next??"")).map(([field,next])=>({field,before:String(order[field]??""),after:String(next??"")}));Object.assign(order,values,{equipmentName:stockItem.equipamento,model:stockItem.modelo||"",updatedAt:now});audit("Edição","axiagroEstoque",{id:order.id,equipamento:order.equipmentName},`Pedido ${order.requestNumber} atualizado`,changes);}
  else{order={id:`purchase-${crypto.randomUUID()}`,requestNumber:`AX-${now.slice(0,10).replaceAll("-","")}-${Math.random().toString(36).slice(2,6).toUpperCase()}`,...values,equipmentName:stockItem.equipamento,model:stockItem.modelo||"",status:"Solicitado",createdAt:now,updatedAt:now};orders.push(order);audit("Inclusão","axiagroEstoque",{id:order.id,equipamento:order.equipmentName},`Pedido ${order.requestNumber} · ${order.quantity} unidade(s)`,Object.entries(values).map(([field,value])=>({field,before:"",after:String(value)})));}
  save(AXIAGRO_PURCHASE_ORDERS_KEY,orders);$("#purchaseOrderDialog").close();toast(id?"Pedido atualizado.":"Pedido de compra registrado.");render();
}

function updatePurchaseOrderStatus(orderId,nextStatus){
  const orders=stored(AXIAGRO_PURCHASE_ORDERS_KEY,[]);const order=orders.find(item=>item.id===orderId);if(!order)return;
  if(["Recebido","Cancelado"].includes(order.status))return toast("Este pedido já foi encerrado.");
  if(!AXIAGRO_ORDER_STAGES.includes(nextStatus))return;
  if(nextStatus==="Recebido"){
    const stockItem=findRecord("axiagroEstoque",order.stockId);if(!stockItem)return toast("O item original não existe no estoque. Verifique o cadastro antes de receber.");
    changeAxiagroStock(order.stockId,Number(order.quantity)||0);order.stockReceivedAt=new Date().toISOString();
  }
  const previous=order.status;order.status=nextStatus;order.updatedAt=new Date().toISOString();save(AXIAGRO_PURCHASE_ORDERS_KEY,orders);
  audit("Atualização","axiagroEstoque",{id:order.id,equipamento:order.equipmentName},`Pedido ${order.requestNumber}: ${previous} → ${nextStatus}`,[{field:"status",before:previous,after:nextStatus}]);
  toast(nextStatus==="Recebido"?`${order.quantity} unidade(s) recebida(s) e adicionada(s) ao estoque.`:`Andamento atualizado: ${nextStatus}.`);render();
}

function openGpsDialog(id=null){
  const records=stored(GPS_EQUIPMENT_KEY,[]); const record=records.find(item=>item.id===id)||{}; const form=$("#gpsEquipmentForm");
  form.reset(); form.dataset.gpsId=id||"";
  const fleets=state.data.modules.frotasBusca||[]; const list=$("#gpsFleetOptions");
  list.innerHTML=fleets.map(item=>`<option value="${escapeHtml(item.frota)}">${escapeHtml(`${item.equipamento||"Equipamento"} · ${item.empresa||""} · ${item.placa||item.chassi||""}`)}</option>`).join("");
  $("#gpsEquipmentType").value=record.tipoEquipamento||"Antena GPS";
  $("#gpsEquipmentIdentifier").value=record.identificadorGps||"";
  $("#gpsEquipmentModel").value=record.modelo||"";
  $("#gpsFleet").value=record.frota||"";
  $("#gpsWorkLocation").value=record.localTrabalho||"";
  $("#gpsEquipmentStatus").value=record.situacaoGps||"Instalado";
  $("#gpsInstallDate").value=record.dataInstalacao?String(record.dataInstalacao).slice(0,10):"";
  $("#gpsEquipmentNotes").value=record.observacao||"";
  $("#gpsEquipmentDialogTitle").textContent=id?"Editar equipamento GPS":"Cadastrar equipamento GPS";
  $("#gpsEquipmentDialog").showModal();
}

function saveGpsEquipment(event){
  event.preventDefault();
  const form=event.currentTarget; const id=form.dataset.gpsId||""; const values=Object.fromEntries(new FormData(form).entries());
  values.frota=values.frota.trim(); values.identificadorGps=values.identificadorGps.trim(); values.localTrabalho=values.localTrabalho.trim();
  const records=stored(GPS_EQUIPMENT_KEY,[]);
  const duplicate=records.find(item=>slug(item.identificadorGps)===slug(values.identificadorGps)&&item.id!==id);
  if(duplicate)return toast("Esse identificador GPS já está cadastrado. Confira o número antes de salvar.");
  const fleetList=state.data.modules.frotasBusca||[];
  if(fleetList.length&&!fleetList.some(item=>String(item.frota).trim()===values.frota))return toast("Selecione uma frota existente na Busca Frota.");
  const now=new Date().toISOString();
  let record;
  if(id){record=records.find(item=>item.id===id);if(!record)return toast("O cadastro GPS não foi encontrado.");const changes=Object.entries(values).filter(([field,next])=>String(record[field]??"")!==String(next??"")).map(([field,next])=>({field,before:String(record[field]??""),after:String(next??"")}));Object.assign(record,values,{updatedAt:now});audit("Edição","gpsMonitoramento",record,`Equipamento ${record.tipoEquipamento} · ID ${record.identificadorGps}`,changes);}
  else{record={id:`gps-${crypto.randomUUID()}`,...values,createdAt:now,updatedAt:now};records.push(record);audit("Inclusão","gpsMonitoramento",record,`Equipamento ${record.tipoEquipamento} · ID ${record.identificadorGps}`,Object.entries(values).filter(([,value])=>value).map(([field,value])=>({field,before:"",after:String(value)})));}
  save(GPS_EQUIPMENT_KEY,records); $("#gpsEquipmentDialog").close(); toast(id?"Equipamento GPS atualizado.":"Equipamento GPS cadastrado."); render();
}

function openTacographDialog(id) {
  const record=findRecord("caminhoesInfo",id); if(!record)return;
  const form=$("#tacographForm"); form.dataset.recordId=id;
  $("#tacographFleet").value=record.frota||"";
  const status=$("#tacographStatus");
  const storedStatus=String(record.tacografo||"").trim();
  const current=["ok","sim"].includes(slug(storedStatus))?"SIM":storedStatus;
  status.innerHTML=[...new Set([current,"SIM","Pendente","Danificado","Não possui"])].filter(Boolean).map(value=>`<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
  status.value=current;
  const toInput=value=>{const date=parseDate(value);return date?`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`:"";};
  $("#tacographDone").value=toInput(record.dataAfericao);
  $("#tacographDue").value=toInput(record.vencimento);
  $("#tacographDialog").showModal();
}

function saveTacograph(event) {
  event.preventDefault();
  const id=event.currentTarget.dataset.recordId; const record=findRecord("caminhoesInfo",id); if(!record)return;
  const values={tacografo:$("#tacographStatus").value,dataAfericao:$("#tacographDone").value,vencimento:$("#tacographDue").value};
  const changes=Object.entries(values).filter(([field,next])=>String(record[field]??"")!==String(next??"")).map(([field,next])=>({field,before:String(record[field]??""),after:String(next??"")}));
  const patches=stored(PATCH_KEY,{}); patches[id]={...(patches[id]||{}),...values}; save(PATCH_KEY,patches); Object.assign(record,values);
  audit("Edição","tacografos",record,changes.length?`Campos alterados: ${changes.map(change=>LABELS[change.field]||change.field).join(", ")}`:"Nenhum campo alterado",changes);
  $("#tacographDialog").close(); toast("Dados do tacógrafo atualizados."); render();
}

function changeAxiagroStock(stockId,delta){
  const item=findRecord("axiagroEstoque",stockId); if(!item)return false; const next=Math.max(0,(Number(item.quantidade)||0)+delta); item.quantidade=next;
  const patches=stored(PATCH_KEY,{}); patches[stockId]={...(patches[stockId]||{}),quantidade:next}; save(PATCH_KEY,patches); return true;
}

function isAxiagroPhone(stock){return /celular|telefone|smartphone/i.test(`${stock?.equipamento||''} ${stock?.modelo||''}`);}
function isAxiagroUsbCable(stock){return /cabo.*(usb|carregador)|(usb.*cabo)/i.test(`${stock?.equipamento||''} ${stock?.modelo||''}`);}

function updateAxiagroIdentificationFields(){
  const stock=findRecord("axiagroEstoque",$("#axiagroItemStock")?.value); const phone=isAxiagroPhone(stock); const cable=isAxiagroUsbCable(stock);
  $("#axiagroMacField")?.classList.toggle("hidden",!phone); $("#axiagroSealField")?.classList.toggle("hidden",!cable);
  if($("#axiagroItemMac")) $("#axiagroItemMac").required=phone; if($("#axiagroItemSeal")) $("#axiagroItemSeal").required=cable;
  if(phone||cable){$("#axiagroItemQuantity").value="1";$("#axiagroItemQuantity").max="1";}else $("#axiagroItemQuantity").removeAttribute("max");
}

function installAxiagroItem(installationId){
  const stock=state.data.modules.axiagroEstoque||[]; const select=$("#axiagroItemStock");
  select.innerHTML=`<option value="">Selecione um item do estoque</option>${stock.map(item=>`<option value="${item.id}" ${Number(item.quantidade)<=0?'disabled':''}>${escapeHtml(item.equipamento)} · disponível: ${escapeHtml(item.quantidade)}</option>`).join('')}`;
  $("#axiagroItemForm").reset(); $("#axiagroItemForm").dataset.installationId=installationId; updateAxiagroIdentificationFields(); $("#axiagroItemDialog").showModal();
}

function saveAxiagroItem(event){
  event.preventDefault(); const values=Object.fromEntries(new FormData(event.currentTarget).entries()); const quantity=Number(values.quantity)||0; const stock=findRecord("axiagroEstoque",values.stockId);
  if(!stock||quantity<1||Number(stock.quantidade)<quantity)return toast("Quantidade indisponível no estoque.");
  if(isAxiagroPhone(stock)&&!values.mac?.trim())return toast("Informe o MAC do celular."); if(isAxiagroUsbCable(stock)&&!values.seal?.trim())return toast("Informe o número do lacre do cabo USB.");
  const installations=stored(AXIAGRO_INSTALLATIONS_KEY,[]); const installation=installations.find(item=>item.id===event.currentTarget.dataset.installationId); if(!installation)return;
  const normalizedMac=slug(values.mac).replace(/[^a-f0-9]/g,''); const duplicate=installations.flatMap(item=>item.items||[]).find(item=>normalizedMac&&slug(item.mac).replace(/[^a-f0-9]/g,'')===normalizedMac);
  if(duplicate)return toast("Este MAC já está instalado em outra frota.");
  installation.items||=[]; installation.items.push({entryId:`axi-item-${Date.now()}`,stockId:values.stockId,quantity,status:values.status||"OK",mac:values.mac?.trim()||"",seal:values.seal?.trim()||"",notes:values.notes?.trim()||"",installedAt:new Date().toISOString()});
  changeAxiagroStock(values.stockId,-quantity); installation.updatedAt=new Date().toISOString(); save(AXIAGRO_INSTALLATIONS_KEY,installations); audit("Movimentação","axiagroEstoque",stock,`${quantity} instalado na frota ${installation.fleet}${values.mac?` · MAC ${values.mac}`:''}${values.seal?` · lacre ${values.seal}`:''}`); $("#axiagroItemDialog").close(); toast("Componente identificado e instalado. Estoque atualizado."); render();
}

function openAxiagroReturnDialog(installationId,entryId){
  const installation=stored(AXIAGRO_INSTALLATIONS_KEY,[]).find(item=>item.id===installationId); const entry=installation?.items?.find(item=>(item.entryId||item.stockId)===entryId); if(!entry)return;
  const stock=findRecord("axiagroEstoque",entry.stockId); $("#axiagroReturnDescription").textContent=`${stock?.equipamento||'Componente'}${entry.mac?` · MAC ${entry.mac}`:''}${entry.seal?` · lacre ${entry.seal}`:''} · Frota ${installation.fleet}`;
  $("#axiagroReturnForm").reset(); $("#axiagroReturnForm").dataset.installationId=installationId; $("#axiagroReturnForm").dataset.entryId=entryId; $("#axiagroReturnDialog").showModal();
}

function removeAxiagroItem(event){
  event.preventDefault(); const installationId=event.currentTarget.dataset.installationId; const entryId=event.currentTarget.dataset.entryId; const values=Object.fromEntries(new FormData(event.currentTarget).entries());
  const installations=stored(AXIAGRO_INSTALLATIONS_KEY,[]); const installation=installations.find(item=>item.id===installationId); const index=installation?.items?.findIndex(item=>(item.entryId||item.stockId)===entryId); if(index===undefined||index<0)return;
  const entry=installation.items[index]; const stock=findRecord("axiagroEstoque",entry.stockId); const returnedOk=slug(values.status)==="ok"; if(returnedOk)changeAxiagroStock(entry.stockId,Number(entry.quantity));
  installation.items.splice(index,1); installation.returns||=[]; installation.returns.push({...entry,status:values.status,returnNotes:values.notes?.trim()||"",returnedAt:new Date().toISOString()}); installation.updatedAt=new Date().toISOString(); save(AXIAGRO_INSTALLATIONS_KEY,installations);
  audit("Movimentação","axiagroEstoque",stock||{id:entry.stockId},`${entry.quantity} retirado da frota ${installation.fleet} · ${values.status}`); $("#axiagroReturnDialog").close(); toast(returnedOk?"Item OK devolvido ao estoque disponível.":"Item danificado separado. Estoque marcado para fazer pedido."); render();
}

function openTeamDialog(teamId = null) {
  const team = stored(TEAMS_KEY, []).find(item => item.id === teamId) || {};
  state.selectedTeam = teamId || state.selectedTeam;
  $("#teamDialogTitle").textContent = teamId ? "Editar equipe" : "Nova equipe";
  $("#teamName").value = team.name || "";
  $("#teamLocation").value = team.location || "";
  $("#teamLeader").value = team.leader || "";
  $("#teamShift").value = team.shift || "Não informado";
  $("#teamStatus").value = team.status || "Ativa";
  $("#teamCapacity").value = team.capacity || "";
  $("#teamDescription").value = team.description || "";
  $("#teamForm").dataset.teamId = teamId || "";
  $("#teamDialog").showModal();
}

function saveTeam(event) {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(event.currentTarget).entries());
  if (values.frota && state.data.modules.frotasBusca?.length && !state.data.modules.frotasBusca.some(item => String(item.frota).trim() === String(values.frota).trim())) return toast("Selecione uma frota existente na base Busca Frota.");
  const id = event.currentTarget.dataset.teamId;
  const teams = stored(TEAMS_KEY, []);
  if (id) {
    const team = teams.find(item => item.id === id);
    if (team) Object.assign(team, values, { updatedAt: new Date().toISOString() });
    audit("Edição", "funcionarios", { id, frota: values.name }, "Equipe personalizada atualizada");
  } else {
    const team = { id: `team-${Date.now()}`, ...values, members: [], createdAt: new Date().toISOString() };
    teams.push(team); state.selectedTeam = team.id;
    audit("Inclusão", "funcionarios", { id: team.id, frota: team.name }, "Nova equipe personalizada");
  }
  save(TEAMS_KEY, teams); $("#teamDialog").close(); toast("Equipe salva com sucesso."); render();
}

function deleteTeam(teamId) {
  const teams = stored(TEAMS_KEY, []); const team = teams.find(item => item.id === teamId); if (!team) return;
  if (!confirm(`Apagar apenas a lista “${team.name}”? Nenhum cadastro de funcionário será excluído.`)) return;
  const deletedTeams=stored(DELETED_TEAMS_KEY,[]); if(!deletedTeams.includes(teamId))deletedTeams.push(teamId); save(DELETED_TEAMS_KEY,deletedTeams); save(TEAMS_KEY, teams.filter(item => item.id !== teamId)); state.selectedTeam = null;
  audit("Exclusão", "funcionarios", { id: teamId, frota: team.name }, "Lista apagada; cadastros preservados"); toast("Lista apagada. Os funcionários continuam cadastrados."); render();
}

function addTeamMember(teamId) {
  const input = $("#teamEmployeeSearch"); const name = input?.value.trim(); if (!name) return toast("Digite o nome ou cadastro do funcionário.");
  const employees = state.data.modules.funcionarios || [];
  const term = slug(name);
  const exact = employees.filter(employee => slug(employee.nome) === term || slug(employee.cadastro) === term);
  const matches = exact.length ? exact : employees.filter(employee => slug(`${employee.nome} ${employee.cadastro}`).includes(term));
  if (!matches.length) return toast("Funcionário não encontrado na base.");
  if (matches.length > 1) return toast(`${matches.length} funcionários encontrados. Digite mais letras ou o cadastro.`);
  const teams = stored(TEAMS_KEY, []); const team = teams.find(item => item.id === teamId); if (!team) return;
  const employee = matches[0]; team.members ||= [];
  if (team.members.includes(employee.id)) return toast("Este funcionário já está nesta equipe.");
  const otherTeams = teams.filter(item => item.id !== teamId && (item.members || []).includes(employee.id));
  team.members.push(employee.id); team.updatedAt = new Date().toISOString(); save(TEAMS_KEY, teams);
  audit("Edição", "funcionarios", employee, `Adicionado à equipe ${team.name}`); toast(otherTeams.length ? `${employee.nome} adicionado. Atenção: já integra ${otherTeams.length} outra equipe.` : `${employee.nome} adicionado à equipe.`); render();
}

function duplicateTeam(teamId) {
  const teams = stored(TEAMS_KEY, []); const original = teams.find(item => item.id === teamId); if (!original) return;
  const copy = { ...original, id: `team-${Date.now()}`, name: `${original.name} · Cópia`, members: [...(original.members || [])], status: "Planejada", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  teams.push(copy); save(TEAMS_KEY, teams); state.selectedTeam = copy.id;
  audit("Inclusão", "funcionarios", { id: copy.id, frota: copy.name }, `Equipe duplicada de ${original.name}`); toast("Equipe duplicada como planejada."); render();
}

function exportTeam(teamId) {
  const team = stored(TEAMS_KEY, []).find(item => item.id === teamId); if (!team) return;
  const employees = new Map((state.data.modules.funcionarios || []).map(item => [item.id,item]));
  const rows = (team.members || []).map(id => employees.get(id)).filter(Boolean);
  const columns = ["cadastro","nome","cargo","local","area","situacao","admissao"];
  const csv = [[`Equipe: ${team.name}`],[`Local: ${team.location || ""}`],[`Responsável: ${team.leader || ""}`],[`Turno: ${team.shift || ""}`],[],columns.map(key=>LABELS[key]),...rows.map(row=>columns.map(key=>row[key]||""))].map(line=>line.map(value=>`"${String(value).replace(/"/g,'""')}"`).join(";")).join("\r\n");
  const blob = new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}); const link=document.createElement("a"); link.href=URL.createObjectURL(blob); link.download=`equipe-${slug(team.name).replace(/\s+/g,"-")}.csv`; link.click(); URL.revokeObjectURL(link.href); toast("Lista da equipe exportada.");
}

function removeTeamMember(teamId, employeeId) {
  const teams = stored(TEAMS_KEY, []); const team = teams.find(item => item.id === teamId); if (!team) return;
  const employee = findRecord("funcionarios", employeeId); team.members = (team.members || []).filter(id => id !== employeeId); team.updatedAt=new Date().toISOString(); save(TEAMS_KEY, teams);
  audit("Edição", "funcionarios", employee || {id:employeeId}, `Removido da equipe ${team.name}; cadastro preservado`); toast("Removido apenas desta lista. O cadastro foi preservado."); render();
}

function findRecord(module, id) { return (state.data.modules[module] || []).find(row => row.id === id); }
function openDetails(module, id) {
  const record = findRecord(module, id); if (!record) return;
  state.selected = { module, id };
  $("#detailTitle").textContent = `${MODULES[module].label} · ${record.frota || record.placa || "Registro"}`;
  $("#detailBody").innerHTML = `<div class="detail-grid">${Object.entries(record).filter(([key]) => !key.startsWith("_") && !["id", "statusNormalizado"].includes(key)).map(([key, value]) => `<div class="detail-item"><span>${LABELS[key] || key}</span><strong>${formatValue(value, key)}</strong></div>`).join("")}</div>`;
  $("#detailDialog").showModal();
}

function inputType(field, value) {
  if (/data|inicio|fim|previsao|vencimento|entrada|saida/i.test(field) && (/^\d{4}-\d{2}-\d{2}/.test(String(value)) || isBlank(value))) return "date";
  if (["ano", "dias", "grupo", "planejado", "realizado", "emManutencao", "diasPlanejados", "diasTrabalhados", "porcasFaltantes", "parafusosFaltantes"].includes(field)) return "number";
  return "text";
}

function openForm(module = state.route, id = null) {
  const config = MODULES[module];
  const original = id ? findRecord(module, id) : {};
  if (!config || !config.columns) return;
  state.selected = { module, id };
  const fields = [...new Set([...config.columns, ...Object.keys(original).filter(key => !key.startsWith("_") && !["id", "statusNormalizado", ...(module === "caminhoesInfo" ? ["tacografo", "dataAfericao", "vencimento"] : [])].includes(key))])];
  $("#dialogEyebrow").textContent = config.label;
  $("#dialogTitle").textContent = id ? "Editar registro" : "Novo registro";
  $("#deleteButton").classList.toggle("hidden", !id);
  $("#formFields").innerHTML = `<div class="form-grid">${fields.map(field => {
    const value = original[field] ?? "";
    const isLong = /pendencia|observacao|considera|descricao/i.test(field);
    if (module === "funcionarios" && field === "local") {
      const locations = [...new Set((state.data.modules.funcionarios || []).map(row => row.local).filter(Boolean))].sort();
      return `<div class="form-field"><label for="field-${field}">${LABELS[field]}</label><input id="field-${field}" name="${field}" list="employee-location-options" value="${escapeHtml(value)}" placeholder="Selecione ou digite um novo local"><datalist id="employee-location-options">${locations.map(local=>`<option value="${escapeHtml(local)}"></option>`).join("")}</datalist></div>`;
    }
    if (field === "frota" && state.data.modules.frotasBusca?.length) {
      const fleets = state.data.modules.frotasBusca; return `<div class="form-field"><label for="field-${field}">${LABELS[field]}</label><input id="field-${field}" name="${field}" list="fleet-options" value="${escapeHtml(value)}" required placeholder="Pesquise a frota na Busca Frota"><datalist id="fleet-options">${fleets.map(item=>`<option value="${escapeHtml(item.frota)}">${escapeHtml(`${item.equipamento} · ${item.placa||item.chassi||'sem identificação'}`)}</option>`).join("")}</datalist><small class="field-help">Frota vinculada à base Busca Frota.</small></div>`;
    }
    if (field === "equipamento" && state.data.modules.frotasBusca?.length) {
      const equipment = [...new Map(state.data.modules.frotasBusca.map(item => [`${item.equipamento}|${item.modelo}`, item])).values()]; return `<div class="form-field"><label for="field-${field}">${LABELS[field]}</label><input id="field-${field}" name="${field}" list="equipment-options" value="${escapeHtml(value)}" placeholder="Pesquise o equipamento na Busca Frota"><datalist id="equipment-options">${equipment.map(item=>`<option value="${escapeHtml(item.equipamento)}">${escapeHtml(`${item.modelo||''} · Frota ${item.frota}`)}</option>`).join("")}</datalist><small class="field-help">Equipamento vinculado à base Busca Frota.</small></div>`;
    }
    if (field === "modelo" && state.data.modules.frotasBusca?.length) {
      const models = [...new Set(state.data.modules.frotasBusca.map(item => item.modelo).filter(Boolean))].sort(); return `<div class="form-field"><label for="field-${field}">${LABELS[field]}</label><input id="field-${field}" name="${field}" list="model-options" value="${escapeHtml(value)}" placeholder="Pesquise o modelo na Busca Frota"><datalist id="model-options">${models.map(model=>`<option value="${escapeHtml(model)}"></option>`).join("")}</datalist></div>`;
    }
    if (module === "funcionarios" && field === "situacao") return `<div class="form-field"><label for="field-${field}">${LABELS[field]}</label><select id="field-${field}" name="${field}">${[value,"Ativo","Férias","Afastado","Inativo"].filter((v,i,a)=>v&&a.indexOf(v)===i).map(v=>`<option ${v===value?"selected":""}>${escapeHtml(v)}</option>`).join("")}</select></div>`;
    if (field === "status") return `<div class="form-field"><label for="field-${field}">${LABELS[field]}</label><select id="field-${field}" name="${field}">${[value, "FEITO", "FEITO (C/ Pend)", "EM ANDAMENTO", "PENDENTE", "AG. MANUTENÇÃO"].filter((v, i, a) => v && a.indexOf(v) === i).map(v => `<option ${v === value ? "selected" : ""}>${escapeHtml(v)}</option>`).join("")}</select></div>`;
    return `<div class="form-field ${isLong ? "wide" : ""}"><label for="field-${field}">${LABELS[field] || field}</label>${isLong ? `<textarea id="field-${field}" name="${field}">${escapeHtml(value)}</textarea>` : `<input id="field-${field}" name="${field}" type="${inputType(field, value)}" value="${escapeHtml(String(value).slice(0, 10) === String(value) || inputType(field, value) !== "date" ? value : String(value).slice(0, 10))}">`}</div>`;
  }).join("")}</div>`;
  $("#recordDialog").showModal();
}

function persistForm(event) {
  event.preventDefault();
  const { module, id } = state.selected;
  const values = Object.fromEntries(new FormData(event.currentTarget).entries());
  if ("status" in values) values.statusNormalizado = normalizeStatus(values);
  if (id) {
    const record=findRecord(module,id); const changes=Object.entries(values).filter(([field,next])=>String(record?.[field]??"")!==String(next??"")).map(([field,next])=>({field,before:String(record?.[field]??""),after:String(next??"")}));
    const patches = stored(PATCH_KEY, {}); patches[id] = { ...(patches[id] || {}), ...values }; save(PATCH_KEY, patches);
    Object.assign(record, values); audit("Edição", module, record, changes.length?`Campos alterados: ${changes.map(change=>LABELS[change.field]||change.field).join(", ")}`:"Nenhum campo alterado", changes); toast("Registro atualizado com sucesso.");
  } else {
    const additions = stored(NEW_KEY, {}); const record = { ...values, id: `${module}-novo-${Date.now()}`, _sourceRow: "Novo" };
    (additions[module] ||= []).push(record); save(NEW_KEY, additions); state.data.modules[module].push(record); audit("Inclusão", module, record, `Cadastro criado com ${Object.keys(values).filter(field=>values[field]).length} campos preenchidos`, Object.entries(values).filter(([,value])=>value).map(([field,value])=>({field,before:"",after:String(value)}))); toast("Novo registro adicionado.");
  }
  $("#recordDialog").close(); render();
}

function deleteSelected() {
  const { module, id } = state.selected;
  if (!id || !confirm("Excluir este registro do sistema? A linha original continuará disponível na consulta da planilha.")) return;
  const removedRecord = findRecord(module, id);
  const deleted = stored(DELETE_KEY, []); if (!deleted.includes(id)) deleted.push(id); save(DELETE_KEY, deleted);
  state.data.modules[module] = state.data.modules[module].filter(row => row.id !== id);
  audit("Exclusão", module, removedRecord || { id }, "Registro removido da visão operacional");
  $("#recordDialog").close(); toast("Registro excluído do sistema."); render();
}

function csvValue(value) { return `"${String(value ?? "").replace(/"/g, '""')}"`; }
function exportCsv(module) {
  if (module === "axiagro" && state.axiagroTab === "pedidos") {
    const columns=["requestNumber","equipmentName","model","quantity","requester","requestedAt","supplier","orderNumber","expectedDate","status","notes"];
    const rows=stored(AXIAGRO_PURCHASE_ORDERS_KEY,[]);
    const labels={requestNumber:"Número interno",equipmentName:"Equipamento",model:"Modelo",quantity:"Quantidade",requester:"Solicitante",requestedAt:"Data do pedido",supplier:"Fornecedor",orderNumber:"Número OC",expectedDate:"Previsão de chegada",status:"Andamento",notes:"Observações"};
    const csv="\ufeff"+[columns.map(column=>csvValue(labels[column])).join(";"),...rows.map(row=>columns.map(column=>csvValue(row[column])).join(";"))].join("\r\n");
    download(new Blob([csv],{type:"text/csv;charset=utf-8"}),`pedidos-axiagro-${new Date().toISOString().slice(0,10)}.csv`);return;
  }
  if (module === "axiagro") module = state.axiagroTab === "controle" ? "axiagroControle" : "axiagroEstoque";
  const config = MODULES[module]; if (!config?.columns) return;
  const rows = module==="gpsMonitoramento" ? stored(GPS_EQUIPMENT_KEY,[]) : filteredRows(module); const columns = config.columns;
  const csv = "\ufeff" + [columns.map(column => csvValue(LABELS[column] || column)).join(";"), ...rows.map(row => columns.map(column => csvValue(row[column])).join(";"))].join("\r\n");
  download(new Blob([csv], { type: "text/csv;charset=utf-8" }), `${module}-${new Date().toISOString().slice(0, 10)}.csv`);
}
function download(blob, name) { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); }
function backup() {
  const payload = { version: 4, generatedAt: new Date().toISOString(), source: state.data.meta, patches: stored(PATCH_KEY, {}), additions: stored(NEW_KEY, {}), deleted: stored(DELETE_KEY, []), teams: stored(TEAMS_KEY, []), axiagroInstallations: stored(AXIAGRO_INSTALLATIONS_KEY, []), axiagroPurchaseOrders: stored(AXIAGRO_PURCHASE_ORDERS_KEY, []), gpsEquipment: stored(GPS_EQUIPMENT_KEY, []), audit: stored(AUDIT_KEY, []) };
  download(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }), `backup-entressafra-${new Date().toISOString().slice(0, 10)}.json`); toast("Backup dos dados gerado.");
}
function toast(message, duration = 3000) { const el = document.createElement("div"); el.className = "toast"; el.textContent = message; $("#toastRegion").append(el); setTimeout(() => el.remove(), duration); }

function bindGlobalEvents() {
  $("#mainNav").addEventListener("click", event => { const button = event.target.closest("[data-route]"); if (button) navigate(button.dataset.route); });
  $("#menuButton").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#newRecordButton").addEventListener("click", () => openForm());
  $("#themeButton").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next; localStorage.setItem("entressafra-theme", next); toast(`Tema ${next === "dark" ? "escuro" : "claro"} ativado.`);
  });
  $("#notificationButton").addEventListener("click", () => {
    const popover=$("#notificationPopover"); const opening=popover.classList.contains("hidden"); popover.classList.toggle("hidden",!opening); $("#notificationButton").setAttribute("aria-expanded",String(opening));
    if(opening)markAllNotificationsRead();
  });
  $("#notificationPopover").addEventListener("click", event => {
    if(event.target.closest("[data-notifications-read-all]")){markAllNotificationsRead();return;}
    if(event.target.closest("[data-notifications-history]")){ $("#notificationPopover").classList.add("hidden"); $("#notificationButton").setAttribute("aria-expanded","false"); navigate("activity"); return; }
    const itemButton=event.target.closest("[data-notification-id]"); if(!itemButton)return;
    const item=relevantNotifications().find(entry=>String(entry.id)===itemButton.dataset.notificationId); if(!item)return;
    const seen=readSeenNotifications();seen.add(String(item.id));saveSeenNotifications(seen);$("#notificationPopover").classList.add("hidden");$("#notificationButton").setAttribute("aria-expanded","false");
    const route=MODULES[item.module]?item.module:item.module?.startsWith("axiagro")?"axiagro":"activity"; navigate(route);
    if(item.entityId&&MODULES[item.module]?.columns)setTimeout(()=>{if(findRecord(item.module,item.entityId))openDetails(item.module,item.entityId);},80);
  });
  document.addEventListener("click",event=>{if(!event.target.closest("#notificationWrap")){ $("#notificationPopover").classList.add("hidden");$("#notificationButton").setAttribute("aria-expanded","false"); }});
  window.addEventListener("storage",event=>{if(event.key===AUDIT_KEY||event.key?.includes("notifications-seen"))renderNotificationCenter();});
  $("#recordForm").addEventListener("submit", persistForm);
  $("#teamForm").addEventListener("submit", saveTeam);
  $("#installationForm").addEventListener("submit", saveInstallation);
  $("#purchaseOrderForm").addEventListener("submit", savePurchaseOrder);
  $("#gpsEquipmentForm").addEventListener("submit", saveGpsEquipment);
  $("#tacographForm").addEventListener("submit", saveTacograph);
  $("#axiagroItemForm").addEventListener("submit", saveAxiagroItem);
  $("#axiagroItemStock").addEventListener("change", updateAxiagroIdentificationFields);
  $("#axiagroReturnForm").addEventListener("submit", removeAxiagroItem);
  $("#deleteButton").addEventListener("click", deleteSelected);
  $$('[data-close-detail]').forEach(button => button.addEventListener("click", () => $("#detailDialog").close()));
  $("#editFromDetail").addEventListener("click", () => { const selected = { ...state.selected }; $("#detailDialog").close(); openForm(selected.module, selected.id); });
  $("#sidebar").addEventListener("click", event => { if (event.target.closest('[data-action="open-backup"]')) backup(); });
  $("#globalSearch").addEventListener("input", event => { state.query = event.target.value; state.route = state.query.trim() ? "search" : "dashboard"; state.page = 1; nav(); render(); });
  document.addEventListener("keydown", event => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("#globalSearch").focus(); } });
  window.addEventListener("hashchange", () => { const route = location.hash.slice(1); if (MODULES[route] && route !== state.route) navigate(route); });
}

async function init() {
  try {
    document.documentElement.dataset.theme = localStorage.getItem("entressafra-theme") || "light";
    const authenticated = await Promise.race([window.firebaseAuthReady || Promise.resolve(false), new Promise(resolve => setTimeout(() => resolve(false), 7000))]);
    if (!authenticated) {
      window.__entressafraAuthLocked = true;
      $("#app").innerHTML = `<div class="auth-required"><div class="auth-required-icon">🔒</div><span class="eyebrow">Acesso restrito</span><h1>Entre para acessar o sistema</h1><p>Os dados e as alterações ficam disponíveis somente para usuários autenticados.</p><button class="primary-button" data-open-auth>Entrar no sistema</button></div>`;
      $("#authDialog")?.showModal();
      $("#app")?.addEventListener("click", event => { if (event.target.closest("[data-open-auth]")) $("#authDialog")?.showModal(); });
      return;
    }
    if (window.__ENTRESSAFRA_DATA__) {
      state.data = window.__ENTRESSAFRA_DATA__;
    } else {
      const response = await fetch("data.json");
      if (!response.ok) throw new Error("Falha ao carregar data.json");
      state.data = await response.json();
    }
    try { const fleetResponse = await fetch("frotas_busca.json"); if (fleetResponse.ok) state.data.modules.frotasBusca = await fleetResponse.json(); } catch { state.data.modules.frotasBusca = []; }
    await Promise.race([window.firebaseSyncReady || Promise.resolve(false), new Promise(resolve => setTimeout(() => resolve(false), 5000))]);
    applyLocalChanges();
    ensureAxiagroPhoneStock();
    migrateAxiagroControlsToStock();
    state.route = MODULES[location.hash.slice(1)] ? location.hash.slice(1) : "dashboard";
    initializeNotificationCenter(); bindGlobalEvents(); nav(); render(); window.__entressafraAppReady = true;
  } catch (error) {
    $("#app").innerHTML = `<div class="empty-state"><strong>Não foi possível abrir os dados</strong>Inicie o sistema pelo servidor local para carregar a base da planilha.<br><small>${escapeHtml(error.message)}</small></div>`;
  }
}

init();
