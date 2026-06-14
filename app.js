/* =====================================================================
   AuraFlow AI Portal — Demo Prop
   All data is simulated. No backend, no persistence (resets on refresh).
   ===================================================================== */

const STOCK_IMAGES = [
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&auto=format&fit=crop&q=60'
];

const KANBAN_STAGES = ['briefing', 'scripting', 'storyboard', 'rendering', 'delivered'];

const STAGE_LABELS = {
  briefing: 'Client Briefing',
  scripting: 'AI Scripting',
  storyboard: 'Storyboard & Mockup',
  rendering: 'Ops Synthesis & Render',
  delivered: 'Delivered'
};

const state = {
  activeTab: 'overview',
  campaigns: [
    {
      id: 'c1',
      name: 'FitTrack Pro Active Ad',
      desc: 'Smartwatch fitness tracker highlighting the heartbeat sensor and sleep quality tracking features.',
      platform: 'Instagram Reel / TikTok (9:16)',
      tone: 'Energetic & Bold',
      progress: 100, status: 'Delivered', stage: 'delivered',
      script: '[SCENE 1 - 0:00-0:03]\nHOOK: A high-energy workout clip. The screen flashes neon pink.\nVO: "Ready to push past your limits? Meet the FitTrack Pro."\n\n[SCENE 2 - 0:03-0:08]\nVISUAL: Close-up on the watch bezel glowing, displaying heartbeat tracking spikes.\nVO: "Advanced heart-rate tracking that reacts as fast as you do."\n\n[SCENE 3 - 0:08-0:15]\nCTA: A runner crossing a finish line, watch displaying New Personal Best.\nVO: "Track, beat, repeat. Get yours today with 20% off using code FTRACK20."',
      storyboard: [
        { scene: 1, desc: 'High-energy runner starting a sprint in dark neon lighting.', img: STOCK_IMAGES[0] },
        { scene: 2, desc: 'Close up view of smartwatch face tracking heart rate spikes.', img: STOCK_IMAGES[1] },
        { scene: 3, desc: 'Runner crossing the finish line, watch text overlaying stats.', img: STOCK_IMAGES[2] }
      ]
    },
    {
      id: 'c2',
      name: 'EcoSip Thermal Bottle Launch',
      desc: 'Stainless steel eco-friendly travel bottle keeping drinks ice cold for 24 hours.',
      platform: 'YouTube Ad (16:9)',
      tone: 'Sophisticated & Premium',
      progress: 65, status: 'In Progress', stage: 'rendering',
      script: '[SCENE 1]\nHOOK: Dynamic macro shot of water droplets forming on sleek matte black stainless steel.\nVO: "Purity in every detail. Discover the EcoSip."\n\n[SCENE 2]\nVISUAL: Ice cube dropping into the flask in slow motion.\nVO: "Keeps drinks frosty for up to 24 hours."',
      storyboard: [
        { scene: 1, desc: 'Close-up of premium metal drink flask with water droplets.', img: STOCK_IMAGES[3] },
        { scene: 2, desc: 'Slow motion shot of ice cubes dropping into clear water.', img: STOCK_IMAGES[4] }
      ]
    },
    {
      id: 'c3',
      name: 'NovaGlow Skincare Serum',
      desc: 'Vitamin-C brightening serum targeting a premium skincare demographic.',
      platform: 'Facebook / LinkedIn (4:5)',
      tone: 'Sophisticated & Premium',
      progress: 30, status: 'In Progress', stage: 'scripting',
      script: '', storyboard: []
    },
    {
      id: 'c4',
      name: 'BoltCharge GaN Adapter',
      desc: 'Compact 100W gallium-nitride fast charger for travellers and professionals.',
      platform: 'Instagram Reel / TikTok (9:16)',
      tone: 'Informative & Trustworthy',
      progress: 10, status: 'Briefing', stage: 'briefing',
      script: '', storyboard: []
    }
  ],
  activityLog: [
    { type: 'creative', text: 'Creative Director AI finished script rewrite for "EcoSip Thermal Bottle Launch"', time: '10m ago' },
    { type: 'visual', text: 'Art Director AI generated scene 2 storyboard mockup for "EcoSip Thermal Bottle Launch"', time: '14m ago' },
    { type: 'audio', text: 'Audio Producer AI finished selecting background score for "FitTrack Pro Active Ad"', time: '1h ago' }
  ],
  agents: [
    { name: 'Concept & Scripting', role: 'Creative Director', workload: 72, health: 96, rating: 4.8, cls: 'creative' },
    { name: 'Storyboard & Visual', role: 'Art Director', workload: 84, health: 91, rating: 4.6, cls: 'visual' },
    { name: 'Voiceover & Music', role: 'Audio Producer', workload: 45, health: 99, rating: 4.9, cls: 'audio' },
    { name: 'Video Compilation', role: 'Video Editor', workload: 90, health: 88, rating: 4.7, cls: 'compiler' }
  ],
  ops: { nodes: 2, priority: 'balanced' },
  selectedLabAgent: 'creative',
  labChats: {
    creative: [{ sender: 'agent', text: 'Hello MD! I am your Creative Concept and Scripting Agent. Send me a product name and brief description, and I will brainstorm three creative ad concepts!' }],
    visual: [{ sender: 'agent', text: 'Hello MD! I translate concepts into storyboards and generate image prompt scripts. Let me know what scenes you want to visualize.' }],
    audio: [{ sender: 'agent', text: 'Hello! I handle VO accents, pacing, and music composition descriptions. Ready to refine your ad audio parameters.' }],
    compiler: [{ sender: 'agent', text: 'Hi! I stitch your visual assets and audio transcripts together, applying captions, transitions, and timeline sync.' }]
  }
};

const TAB_TITLES = {
  overview:     { title: 'Overview',        sub: "Welcome back, Managing Director. Here is your agency's performance today." },
  kanban:       { title: 'Kanban Board',    sub: 'Live production pipeline across every active client campaign.' },
  pipeline:     { title: 'Production Lab',  sub: 'Initiate, monitor, and compile automated video advertising runs.' },
  assets:       { title: 'Asset Library',   sub: 'Generated scripts, storyboards, and rendered video ad previews.' },
  'hr-hub':     { title: 'HR Hub',          sub: 'Agent workforce roster and performance tuning (Pooja Shah).' },
  operations:   { title: 'Ops Control',     sub: 'Render cluster allocation and production queues (Dhrushil Brahmbhatt).' },
  analytics:    { title: 'Ad Performance',  sub: 'Simulated post-launch campaign metrics and conversion analytics.' },
  'agent-labs': { title: 'Agent Chat Labs', sub: 'Directly brief individual AI agents to iterate on campaign parts.' }
};

function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === 'tab-' + tabId);
  });
  const t = TAB_TITLES[tabId];
  if (t) {
    document.getElementById('page-title').textContent = t.title;
    document.getElementById('page-subtitle').textContent = t.sub;
  }
  switch (tabId) {
    case 'overview':    renderOverview();   break;
    case 'kanban':      renderKanban();     break;
    case 'assets':      renderAssets();     break;
    case 'hr-hub':      renderRoster();     break;
    case 'operations':  renderOps();        break;
    case 'analytics':   renderAnalytics();  break;
    case 'agent-labs':  renderLabChat();    break;
  }
}

function renderOverview() {
  const list = document.getElementById('overview-campaigns-list');
  if (list) {
    list.innerHTML = '';
    state.campaigns.forEach(c => {
      const item = document.createElement('div');
      item.className = 'campaign-item';
      item.innerHTML =
        '<div class="camp-details"><h4>' + escapeHtml(c.name) + '</h4>' +
        '<p>' + escapeHtml(c.platform) + ' • Tone: ' + escapeHtml(c.tone) + '</p></div>' +
        '<div class="camp-progress"><div class="progress-text"><span>' + escapeHtml(c.status) + '</span>' +
        '<span>' + c.progress + '%</span></div>' +
        '<div class="progress-bar-bg"><div class="progress-bar-fill" style="width:' + c.progress + '%"></div></div></div>';
      list.appendChild(item);
    });
  }
  const feed = document.getElementById('mini-feed');
  if (feed) {
    feed.innerHTML = '';
    const colorMap = { visual: 'blue', audio: 'green', editor: 'purple', creative: '' };
    state.activityLog.slice(0, 6).forEach(log => {
      const entry = document.createElement('div');
      entry.className = 'activity-item';
      entry.innerHTML =
        '<div class="act-bullet ' + (colorMap[log.type] || '') + '"></div>' +
        '<div class="act-content"><p>' + escapeHtml(log.text) + '</p><span>' + escapeHtml(log.time) + '</span></div>';
      feed.appendChild(entry);
    });
  }
  const briefEl = document.getElementById('stat-active-briefs');
  if (briefEl) briefEl.textContent = state.campaigns.filter(c => c.stage !== 'delivered').length;
}

function renderKanban() {
  KANBAN_STAGES.forEach(stage => {
    const col = document.getElementById('cards-' + stage);
    const count = document.getElementById('count-' + stage);
    if (!col) return;
    col.innerHTML = '';
    const inStage = state.campaigns.filter(c => c.stage === stage);
    if (count) count.textContent = inStage.length;
    inStage.forEach(c => {
      const card = document.createElement('div');
      card.className = 'kanban-card';
      card.innerHTML =
        '<div class="kc-top"><span class="kc-tag ' + stage + '">' + STAGE_LABELS[stage] + '</span>' +
        '<span class="kc-platform">' + shortPlatform(c.platform) + '</span></div>' +
        '<h4 class="kc-title">' + escapeHtml(c.name) + '</h4>' +
        '<p class="kc-desc">' + escapeHtml(truncate(c.desc, 80)) + '</p>' +
        '<div class="kc-foot"><div class="kc-avatars">' +
        '<span class="kc-avatar creative"><i class="fa-solid fa-lightbulb"></i></span>' +
        '<span class="kc-avatar visual"><i class="fa-solid fa-palette"></i></span>' +
        '<span class="kc-avatar audio"><i class="fa-solid fa-microphone-lines"></i></span></div>' +
        '<span class="kc-progress">' + c.progress + '%</span></div>';
      col.appendChild(card);
    });
  });
}

let assetFilter = 'all';

function renderAssets() {
  const grid = document.getElementById('asset-library-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const assets = buildAssetList();
  const filtered = assetFilter === 'all' ? assets : assets.filter(a => a.type === assetFilter);
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><i class="fa-solid fa-folder-open"></i><p>No assets in this category yet.</p></div>';
    return;
  }
  filtered.forEach(a => {
    const card = document.createElement('div');
    card.className = 'asset-card';
    let media;
    if (a.type === 'script') {
      media = '<div class="asset-thumb script-thumb"><i class="fa-solid fa-file-lines"></i></div>';
    } else {
      media = '<div class="asset-thumb" style="background-image:url(\'' + a.img + '\')">' +
              '<div class="asset-overlay"><i class="fa-solid fa-' + (a.type === 'video' ? 'play' : 'image') + '"></i></div></div>';
    }
    card.innerHTML = media +
      '<div class="asset-info"><span class="asset-type-tag ' + a.type + '">' + a.type.toUpperCase() + '</span>' +
      '<h4>' + escapeHtml(a.title) + '</h4><p>' + escapeHtml(a.campaign) + '</p></div>';
    grid.appendChild(card);
  });
}

function buildAssetList() {
  const assets = [];
  state.campaigns.forEach(c => {
    if (c.script) assets.push({ type: 'script', title: 'Ad Script', campaign: c.name, img: null });
    if (c.storyboard && c.storyboard.length) assets.push({ type: 'storyboard', title: 'Storyboard (' + c.storyboard.length + ' scenes)', campaign: c.name, img: c.storyboard[0].img });
    if (c.stage === 'delivered') assets.push({ type: 'video', title: 'Rendered Video Ad', campaign: c.name, img: (c.storyboard[0] && c.storyboard[0].img) || STOCK_IMAGES[0] });
  });
  return assets;
}

function renderRoster() {
  const body = document.getElementById('roster-table-body');
  if (!body) return;
  body.innerHTML = '';
  state.agents.forEach(a => {
    const healthCls = a.health >= 95 ? 'green' : a.health >= 90 ? 'blue' : 'warning';
    const tr = document.createElement('tr');
    tr.innerHTML =
      '<td><div class="roster-agent"><span class="agent-avatar-sm ' + a.cls + '"><i class="fa-solid fa-robot"></i></span>' + escapeHtml(a.name) + '</div></td>' +
      '<td>' + escapeHtml(a.role) + '</td>' +
      '<td><div class="load-bar mini"><div class="load-fill" style="width:' + a.workload + '%; background-color:' + workloadColor(a.workload) + ';"></div></div></td>' +
      '<td><span class="health-dot ' + healthCls + '"></span>' + a.health + '%</td>' +
      '<td><i class="fa-solid fa-star" style="color:#f5b301;"></i> ' + a.rating.toFixed(1) + '</td>';
    body.appendChild(tr);
  });
}

function renderOps() {
  const nodeEl = document.getElementById('node-count');
  if (nodeEl) nodeEl.textContent = state.ops.nodes + ' Nodes';
  const timeline = document.getElementById('render-timeline');
  if (!timeline) return;
  timeline.innerHTML = '';
  const active = state.campaigns.filter(c => c.stage !== 'delivered');
  if (active.length === 0) {
    timeline.innerHTML = '<div class="empty-state"><i class="fa-solid fa-server"></i><p>Render queue is empty. All campaigns delivered.</p></div>';
    return;
  }
  const etaFactor = state.ops.priority === 'express' ? 0.6 : 1;
  active.forEach((c, idx) => {
    const baseEta = (100 - c.progress) / 10;
    const eta = Math.max(1, Math.round(baseEta * etaFactor / Math.max(1, state.ops.nodes / 2)));
    const row = document.createElement('div');
    row.className = 'render-row';
    row.innerHTML =
      '<div class="render-node-badge">Node ' + ((idx % state.ops.nodes) + 1) + '</div>' +
      '<div class="render-info"><h4>' + escapeHtml(c.name) + '</h4>' +
      '<span>Stage: ' + STAGE_LABELS[c.stage] + ' • ETA ~' + eta + ' min</span>' +
      '<div class="load-bar"><div class="load-fill" style="width:' + c.progress + '%; background-color:var(--color-primary);"></div></div></div>';
    timeline.appendChild(row);
  });
}

function renderAnalytics() {
  const grid = document.getElementById('metrics-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const delivered = state.campaigns.filter(c => c.stage === 'delivered');
  if (delivered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><i class="fa-solid fa-chart-column"></i><p>No delivered campaigns to report on yet.</p></div>';
    return;
  }
  delivered.forEach(c => {
    const seed = c.name.length;
    const impressions = (0.8 + (seed % 5) * 0.6).toFixed(1);
    const ctr = (3 + (seed % 4) * 0.7).toFixed(2);
    const conv = (1.2 + (seed % 3) * 0.5).toFixed(2);
    const cpa = (4 + (seed % 6)).toFixed(2);
    const card = document.createElement('div');
    card.className = 'metric-card';
    card.innerHTML =
      '<h4>' + escapeHtml(c.name) + '</h4>' +
      '<span class="metric-platform">' + escapeHtml(c.platform) + '</span>' +
      '<div class="metric-row"><span>Impressions</span><strong>' + impressions + 'M</strong></div>' +
      '<div class="metric-row"><span>CTR</span><strong>' + ctr + '%</strong></div>' +
      '<div class="metric-row"><span>Conversion</span><strong>' + conv + '%</strong></div>' +
      '<div class="metric-row"><span>CPA</span><strong>$' + cpa + '</strong></div>' +
      '<div class="metric-bar"><div class="metric-bar-fill" style="width:' + Math.min(100, ctr * 18) + '%"></div></div>';
    grid.appendChild(card);
  });
}

let simTimer = null;

function runSimulation(name, desc, platform, tone) {
  const log = document.getElementById('console-log');
  const badge = document.getElementById('sim-status-badge');
  const visOutput = document.getElementById('visualizer-output');
  log.innerHTML = '';
  visOutput.style.display = 'none';
  badge.textContent = 'Active';
  badge.className = 'badge badge-pulse';

  const camp = {
    id: 'c' + (state.campaigns.length + 1) + '-' + Date.now(),
    name: name, desc: desc, platform: platform, tone: tone,
    progress: 5, status: 'Briefing', stage: 'briefing', script: '', storyboard: []
  };
  state.campaigns.unshift(camp);
  renderKanban();

  const generatedScript =
    '[SCENE 1]\nHOOK: Hyper-focused view showing ' + name + '.\nVO: "This changes everything. Introducing ' + name + '."\n\n' +
    '[SCENE 2]\nVISUAL: Fast transition to product in action. ' + truncate(desc, 90) + '\nVO: "Designed to meet your active requirements."\n\n' +
    '[SCENE 3]\nCTA: Clean product layout on white backdrop, flashing promo code.';

  const generatedStoryboard = [
    { scene: 1, desc: 'Introductory scene focusing on branding elements.', img: STOCK_IMAGES[0] },
    { scene: 2, desc: 'Visual representing the product use case and features.', img: STOCK_IMAGES[1] },
    { scene: 3, desc: 'End card showing Call To Action logo elements.', img: STOCK_IMAGES[2] }
  ];

  const steps = [
    { agent: 'system',   text: 'Initializing multi-agent workflow for project: ' + name, delay: 1000, stage: 'briefing', prog: 8 },
    { agent: 'system',   text: 'Brief received. Target: ' + platform + ' | Tone: ' + tone, delay: 1000, stage: 'briefing', prog: 12 },
    { agent: 'creative', text: 'Analyzing brief & demographic profiles... Concept draft initialized.', delay: 1800, stage: 'scripting', prog: 25 },
    { agent: 'creative', text: 'Synthesizing script variants. Hooks aligned with 3-second attention models.', delay: 2000, stage: 'scripting', prog: 38 },
    { agent: 'creative', text: 'SCRIPT COMPLETED. Dispatched to Storyboard and Voiceover agents.', delay: 1500, stage: 'scripting', prog: 45, script: true },
    { agent: 'visual',   text: 'Script received. Mapping scene partitions to visual art styles.', delay: 1800, stage: 'storyboard', prog: 58 },
    { agent: 'visual',   text: 'Generating AI-assisted visual mockups for scenes 1, 2, and 3.', delay: 2000, stage: 'storyboard', prog: 68, storyboard: true },
    { agent: 'audio',    text: 'Voiceover inflection mapped to tone: ' + tone, delay: 1500, stage: 'storyboard', prog: 74 },
    { agent: 'editor',   text: 'Received script, storyboards, and audio. Beginning render sync.', delay: 1800, stage: 'rendering', prog: 85 },
    { agent: 'editor',   text: 'Smart-cropping for ratio: ' + platform + ', stitching keyframes, adding captions.', delay: 2000, stage: 'rendering', prog: 94 },
    { agent: 'editor',   text: 'VIDEO ASSEMBLY COMPLETED. Rendering preview output.', delay: 1500, stage: 'rendering', prog: 98, video: true },
    { agent: 'system',   text: 'Campaign production successfully finalized!', delay: 1000, stage: 'delivered', prog: 100 }
  ];

  let i = 0;
  function next() {
    if (i >= steps.length) {
      badge.textContent = 'Finished';
      badge.className = 'badge badge-success';
      camp.status = 'Delivered'; camp.stage = 'delivered'; camp.progress = 100;
      camp.script = generatedScript; camp.storyboard = generatedStoryboard;
      state.activityLog.unshift({ type: 'editor', text: 'Video Compilation Agent finished production for "' + name + '"', time: 'Just now' });
      renderKanban();
      if (state.activeTab === 'assets') renderAssets();
      return;
    }
    const s = steps[i];
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML =
      '<span class="log-time">[' + new Date().toLocaleTimeString() + ']</span>' +
      '<span class="log-agent ' + s.agent + '">' + s.agent.toUpperCase() + ':</span>' +
      '<span class="log-text">' + escapeHtml(s.text) + '</span>';
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;

    camp.stage = s.stage; camp.progress = s.prog;
    camp.status = s.stage === 'delivered' ? 'Delivered' : titleCase(s.stage);
    renderKanban();

    if (s.script) {
      camp.script = generatedScript;
      visOutput.style.display = 'flex';
      document.getElementById('out-script').innerHTML = '<pre style="font-family:inherit; white-space:pre-wrap;">' + escapeHtml(generatedScript) + '</pre>';
      switchOutputTab('script');
    }
    if (s.storyboard) {
      camp.storyboard = generatedStoryboard;
      let html = '';
      generatedStoryboard.forEach(sb => {
        html += '<div class="storyboard-scene"><strong>Scene ' + sb.scene + '</strong><p>' + escapeHtml(sb.desc) + '</p><img src="' + sb.img + '" alt="scene ' + sb.scene + '"></div>';
      });
      document.getElementById('out-storyboard').innerHTML = html;
      switchOutputTab('storyboard');
    }
    if (s.video) {
      document.getElementById('out-video').innerHTML =
        '<div class="video-preview-box">' +
        '<div id="video-sim-frame" class="video-simulation-view" style="background-image:url(\'' + generatedStoryboard[0].img + '\')"></div>' +
        '<div id="video-sim-caption" class="video-caption">This changes everything. Introducing ' + escapeHtml(name) + '.</div></div>';
      switchOutputTab('video');
      startVideoSimulation(generatedStoryboard, name);
    }
    i++;
    simTimer = setTimeout(next, s.delay);
  }
  next();
}

function switchOutputTab(outId) {
  document.querySelectorAll('.out-tab').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-out') === outId);
  });
  document.querySelectorAll('.out-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === 'out-' + outId);
  });
}

let videoSimTimeout = null;
function startVideoSimulation(scenes, name) {
  if (videoSimTimeout) clearTimeout(videoSimTimeout);
  const frame = document.getElementById('video-sim-frame');
  const caption = document.getElementById('video-sim-caption');
  if (!frame || !caption) return;
  let idx = 0;
  const captions = [
    'This changes everything. Introducing ' + name + '.',
    'Designed to meet your active requirements.',
    'Order now and save 15%.'
  ];
  function tick() {
    idx = (idx + 1) % scenes.length;
    frame.style.backgroundImage = "url('" + scenes[idx].img + "')";
    caption.textContent = captions[idx] || 'AuraFlow AI Video Agency';
    videoSimTimeout = setTimeout(tick, 3000);
  }
  videoSimTimeout = setTimeout(tick, 3000);
}

function selectLabAgent(agentId) {
  state.selectedLabAgent = agentId;
  document.querySelectorAll('.lab-agent-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-agent') === agentId);
  });
  const titles = {
    creative: 'Concept & Scripting Agent',
    visual: 'Storyboard & Visual Agent',
    audio: 'Voiceover & Music Agent',
    compiler: 'Video Compilation Agent'
  };
  document.getElementById('lab-chat-title').textContent = 'Chat with ' + titles[agentId];
  renderLabChat();
}

function renderLabChat() {
  const container = document.getElementById('lab-chat-messages');
  if (!container) return;
  container.innerHTML = '';
  (state.labChats[state.selectedLabAgent] || []).forEach(msg => {
    const el = document.createElement('div');
    el.className = 'chat-msg ' + msg.sender;
    el.innerHTML = '<div class="msg-bubble">' + escapeHtml(msg.text) + '</div>';
    container.appendChild(el);
  });
  container.scrollTop = container.scrollHeight;
}

function handleSendMessage() {
  const input = document.getElementById('lab-chat-input');
  const text = input.value.trim();
  if (!text) return;
  state.labChats[state.selectedLabAgent].push({ sender: 'user', text: text });
  input.value = '';
  renderLabChat();
  setTimeout(() => {
    let reply = 'Received! Compiling details to refine the campaign parameters. Coordinating with operations.';
    if (state.selectedLabAgent === 'creative') reply = 'Brainstorming angles for "' + truncate(text, 60) + '". How about a bold, narrative-driven storyboard showing direct results of using the product?';
    else if (state.selectedLabAgent === 'visual') reply = 'Adjusting camera angles and lighting prompts. Modified to: "cinematic studio portrait, hyper-realistic, 8k".';
    else if (state.selectedLabAgent === 'audio') reply = 'Mapping voiceover pacing and selecting a background track to match your brief.';
    else if (state.selectedLabAgent === 'compiler') reply = 'Queuing the timeline sync — captions, transitions, and ratio crop applied.';
    state.labChats[state.selectedLabAgent].push({ sender: 'agent', text: reply });
    renderLabChat();
  }, 1100);
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function truncate(str, n) {
  str = String(str);
  return str.length > n ? str.slice(0, n).trimEnd() + '…' : str;
}
function titleCase(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function shortPlatform(p) {
  if (p.indexOf('9:16') > -1) return '9:16';
  if (p.indexOf('16:9') > -1) return '16:9';
  if (p.indexOf('4:5') > -1) return '4:5';
  return p;
}
function workloadColor(w) {
  if (w >= 85) return 'var(--color-warning)';
  if (w >= 60) return 'var(--color-primary)';
  return 'var(--color-secondary)';
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
  });
  document.querySelectorAll('.lab-agent-item').forEach(item => {
    item.addEventListener('click', () => selectLabAgent(item.getAttribute('data-agent')));
  });
  document.getElementById('lab-send-btn').addEventListener('click', handleSendMessage);
  document.getElementById('lab-chat-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleSendMessage();
  });
  document.querySelectorAll('.out-tab').forEach(tab => {
    tab.addEventListener('click', () => switchOutputTab(tab.getAttribute('data-out')));
  });
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      assetFilter = btn.getAttribute('data-filter');
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
      renderAssets();
    });
  });
  document.getElementById('new-campaign-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('campaign-name').value.trim();
    const desc = document.getElementById('product-desc').value.trim();
    const platform = document.getElementById('ad-platform').value;
    const tone = document.getElementById('ad-tone').value;
    if (!name || !desc) return;
    runSimulation(name, desc, platform, tone);
    e.target.reset();
  });
  const slider = document.getElementById('agent-speed-slider');
  const sliderVal = document.getElementById('slider-val');
  if (slider && sliderVal) {
    const label = v => {
      v = +v;
      if (v <= 750) return 'Turbo (0.75s step)';
      if (v <= 1500) return 'Normal (1.5s step)';
      if (v <= 2250) return 'Relaxed (2.25s step)';
      return 'Deep (3s step)';
    };
    slider.addEventListener('input', () => { sliderVal.textContent = label(slider.value); });
  }
  const nodeDown = document.getElementById('btn-node-down');
  const nodeUp = document.getElementById('btn-node-up');
  if (nodeUp) nodeUp.addEventListener('click', () => { state.ops.nodes = Math.min(8, state.ops.nodes + 1); renderOps(); });
  if (nodeDown) nodeDown.addEventListener('click', () => { state.ops.nodes = Math.max(1, state.ops.nodes - 1); renderOps(); });
  const opsPriority = document.getElementById('ops-priority');
  if (opsPriority) opsPriority.addEventListener('change', () => { state.ops.priority = opsPriority.value; renderOps(); });
  renderOverview();
});
