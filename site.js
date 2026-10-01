(() => {
  'use strict';
  const translations = {
    fr: {
      viewPoster:'Voir l’affiche scientifique',viewAward:'Voir le premier prix',navHome:'Accueil',skip:'Aller au contenu',navLabel:'Navigation principale',navResearch:'Recherche',navTeaching:'Enseignement',navAbout:'Parcours',navContact:'Contact',languageLabel:'Langue du site',heroEyebrow:'Économie · Recherche · Enseignement',heroRole:'Doctorant en économie<br>Université de Sherbrooke',heroIntro:'J’étudie comment les chocs macroéconomiques influencent les émissions et comment les politiques climatiques peuvent accompagner le développement.',explore:'Explorer mes recherches',getInTouch:'Me contacter',location:'Sherbrooke, Québec · Français & anglais',researchWindowLabel:'Aperçu des recherches',windowHeading:'Au cœur de ma recherche',windowTitle:'Chocs macroéconomiques<br>& changement climatique.',windowIntro:'Trois terrains pour une même question : comment l’économie et l’environnement évoluent-ils ensemble ?',tablistLabel:'Terrain de recherche',us:'États-Unis',ca:'Canada',ssa:'Afrique subsaharienne',readProject:'Lire le projet',inProgress:'Recherche doctorale en cours',researchLabel:'Recherche',researchTitle:'Des mécanismes aux<br>enjeux de politique.',researchLead:'Mes travaux associent modèles macroéconomiques et analyse empirique pour étudier les liens entre cycles économiques, émissions et transition climatique.',focus1:'Macroéconomie environnementale',focus2:'Économie du développement',focus3:'Politiques climatiques',projectUsTitle:'Investissement résidentiel et émissions',projectUsText:'Ce projet étudie la place du logement dans la relation entre activité économique et émissions de gaz à effet de serre. Un modèle macroéconomique environnemental intégrant le secteur résidentiel permet d’analyser la propagation des chocs et de comparer les effets d’une taxe carbone et d’une taxe foncière.',approach:'Approche',projectUsMethod:'Modèle E-DSGE · Analyse des séries temporelles',status:'Statut',thesisProject:'Projet de thèse · En cours',projectCaTitle:'Prix des énergies fossiles et émissions',projectCaText:'Comment les chocs de prix du pétrole et du gaz se transmettent-ils aux émissions canadiennes ? Ce projet mobilise l’économétrie des séries temporelles pour étudier les réponses dynamiques des émissions et leur lien avec les marchés de l’énergie.',projectCaMethod:'SVAR · BVAR · Projections locales',projectSsaTitle:'Termes de l’échange et déforestation',projectSsaText:'Ce projet examine les liens entre chocs extérieurs, activité économique et déforestation dans une petite économie ouverte. Il inscrit les enjeux environnementaux dans une perspective de développement, avec un intérêt particulier pour l’Afrique subsaharienne.',projectSsaMethod:'Modèle DSGE de petite économie ouverte',methodsTitle:'Méthodes & outils',methodsIntro:'Relier les données aux mécanismes économiques.',methodsText:'Modèles DSGE environnementaux, estimation par la méthode des moments simulés, modèles vectoriels autorégressifs structurels et bayésiens, projections locales.',toolsLabel:'Outils de recherche',teachingLabel:'Enseignement',teachingTitle:'Rendre l’économie<br>accessible et rigoureuse.',teachingLead:'J’aide les étudiants à comprendre les concepts, à construire leur raisonnement et à relier les modèles à des situations concrètes. Une place centrale est donnée aux explications claires et à la rétroaction constructive.',remote:'À distance',tutor:'Tuteur',microAnalysis:'Analyse microéconomique',microDates:'Depuis 2025',macroAnalysis:'Analyse macroéconomique',macroDates:'Automne 2026',teluqNote:'Encadrement à distance et soutien à l’apprentissage en microéconomie et en macroéconomie.',lecturer:'Chargé de cours',principles:'Principes économiques',principlesDates:'Hiver 2023 · Baccalauréat',assistant:'Assistant d’enseignement',assistantText:'Théorie macroéconomique (ECN 704), économie de l’environnement (ECN 432), théorie microéconomique (ECN 700) et statistiques pour l’économétrie (ECN 323).',aboutLabel:'Parcours',aboutTitle:'Le développement<br>comme point de départ.',aboutText:'Formé en économie du développement au CERDI, je poursuis mon doctorat à l’Université de Sherbrooke sous la direction de Jean-François Rouillard. Ma recherche se situe à l’intersection de la macroéconomie environnementale, des cycles économiques et des politiques climatiques.',current:'En cours',phd:'Doctorat en économie du développement',thesis:'Thèse : Chocs macroéconomiques et changement climatique.',masters:'Maîtrise en analyse économique du développement',mastersThesis:'Mémoire sur les chocs des prix des matières premières et le développement financier en Afrique subsaharienne.',awardTitle:'1er prix · Affiche scientifique',awardText:'Catégorie doctorat et postdoctorat, concours de l’École de gestion de l’Université de Sherbrooke.',contactLabel:'Contact',contactTitle:'Échangeons autour<br>de l’économie et du climat.',contactText:'Pour discuter d’un projet de recherche, d’enseignement ou d’analyse des politiques climatiques.',emailMe:'M’écrire',linkedin:'Profil LinkedIn',cvFrench:'CV en français (PDF)',cvEnglish:'CV en anglais (PDF)',footerLocation:'Sherbrooke, Québec, Canada',backTop:'Retour en haut',pageTitle:'Khadim Rassoul Gueye · Économie & climat',description:'Khadim Rassoul Gueye, doctorant en économie à l’Université de Sherbrooke. Recherche en macroéconomie environnementale, politiques climatiques et développement.',ogDescription:'Recherche, enseignement et méthodes quantitatives à l’intersection de la macroéconomie, du climat et du développement.'
    },
    en: {
      viewPoster:'View the scientific poster',viewAward:'View the first-prize award',navHome:'Home',skip:'Skip to content',navLabel:'Main navigation',navResearch:'Research',navTeaching:'Teaching',navAbout:'Background',navContact:'Contact',languageLabel:'Site language',heroEyebrow:'Economics · Research · Teaching',heroRole:'PhD candidate in economics<br>Université de Sherbrooke',heroIntro:'I study how macroeconomic shocks shape emissions and how climate policies can support development.',explore:'Explore my research',getInTouch:'Get in touch',location:'Sherbrooke, Québec · French & English',researchWindowLabel:'Research overview',windowHeading:'At the heart of my research',windowTitle:'Macroeconomic shocks<br>& climate change.',windowIntro:'Three settings, one question: how do the economy and the environment evolve together?',tablistLabel:'Research setting',us:'United States',ca:'Canada',ssa:'Sub-Saharan Africa',readProject:'Read about the project',inProgress:'Doctoral research in progress',researchLabel:'Research',researchTitle:'From economic mechanisms<br>to policy questions.',researchLead:'My work combines macroeconomic models and empirical analysis to study the links between business cycles, emissions and the climate transition.',focus1:'Environmental macroeconomics',focus2:'Development economics',focus3:'Climate policy',projectUsTitle:'Residential investment and emissions',projectUsText:'This project studies the role of housing in the relationship between economic activity and greenhouse gas emissions. An environmental macroeconomic model with a residential sector provides a framework to examine shock propagation and compare the effects of carbon and property taxes.',approach:'Approach',projectUsMethod:'E-DSGE model · Time-series analysis',status:'Status',thesisProject:'Thesis project · In progress',projectCaTitle:'Fossil fuel prices and emissions',projectCaText:'How do oil and gas price shocks affect Canadian emissions? This project uses time-series econometrics to examine the dynamic responses of emissions and their relationship with energy markets.',projectCaMethod:'SVAR · BVAR · Local projections',projectSsaTitle:'Terms of trade and deforestation',projectSsaText:'This project examines the links between external shocks, economic activity and deforestation in a small open economy. It approaches environmental questions through the lens of development, with a particular focus on Sub-Saharan Africa.',projectSsaMethod:'Small open economy DSGE model',methodsTitle:'Methods & tools',methodsIntro:'Connecting data to economic mechanisms.',methodsText:'Environmental DSGE models, simulated method of moments estimation, structural and Bayesian vector autoregressions, and local projections.',toolsLabel:'Research tools',teachingLabel:'Teaching',teachingTitle:'Making economics<br>accessible and rigorous.',teachingLead:'I help students understand concepts, develop their reasoning and connect economic models to concrete situations. Clear explanations and constructive feedback are central to my approach.',remote:'Remote',tutor:'Tutor',microAnalysis:'Microeconomic analysis',microDates:'Since 2025',macroAnalysis:'Macroeconomic analysis',macroDates:'Fall 2026',teluqNote:'Remote tutoring and learning support in microeconomics and macroeconomics.',lecturer:'Course lecturer',principles:'Economic principles',principlesDates:'Winter 2023 · Undergraduate',assistant:'Teaching assistant',assistantText:'Macroeconomic theory (ECN 704), environmental economics (ECN 432), microeconomic theory (ECN 700) and statistics for econometrics (ECN 323).',aboutLabel:'Background',aboutTitle:'Development<br>as a starting point.',aboutText:'After training in development economics at CERDI, I am pursuing my PhD at Université de Sherbrooke under the supervision of Jean-François Rouillard. My research lies at the intersection of environmental macroeconomics, business cycles and climate policy.',current:'In progress',phd:'PhD in development economics',thesis:'Thesis: Macroeconomic Shocks and Climate Change.',masters:'Master’s in development economics',mastersThesis:'Master’s thesis on commodity price shocks and financial development in Sub-Saharan Africa.',awardTitle:'1st prize · Scientific poster',awardText:'PhD and postdoctoral category, School of Management poster competition, Université de Sherbrooke.',contactLabel:'Contact',contactTitle:'Let’s talk about<br>economics and climate.',contactText:'For conversations about research, teaching or climate policy analysis.',emailMe:'Email me',linkedin:'LinkedIn profile',cvFrench:'CV in French (PDF)',cvEnglish:'CV in English (PDF)',footerLocation:'Sherbrooke, Québec, Canada',backTop:'Back to top',pageTitle:'Khadim Rassoul Gueye · Economics & climate',description:'Khadim Rassoul Gueye, PhD candidate in economics at Université de Sherbrooke. Research in environmental macroeconomics, climate policy and development.',ogDescription:'Research, teaching and quantitative methods at the intersection of macroeconomics, climate and development.'
    }
  };
  Object.assign(translations.fr, {
    emailMe:'Ouvrir une messagerie',
    emailAddressLabel:'Adresse de courriel',
    copyEmail:'Copier l’adresse',
    contactHint:'Copiez l’adresse pour m’écrire depuis votre messagerie.',
    copySuccess:'Adresse copiée.',
    copyManual:'L’adresse est sélectionnée. Copiez-la avec Ctrl+C ou Commande+C, ou le menu Copier sur mobile.',
    portraitAlt:'Portrait de Khadim Rassoul Gueye',
    assistantMacroTitle:'Théorie macroéconomique avancée II',
    assistantMacroDates:'Hivers 2022, 2023, 2024 et 2025 · Maîtrise et 1re année de doctorat',
    assistantEnvTitle:'Économie de l’environnement',
    assistantEnvDates:'Automne 2024 · Baccalauréat',
    assistantMicroTitle:'Théorie microéconomique',
    assistantMicroDates:'Automne 2021 · Maîtrise et 1re année de doctorat',
    assistantStatsTitle:'Statistiques pour l’économétrie',
    assistantStatsDates:'Automne 2021 · Baccalauréat'
  });
  Object.assign(translations.en, {
    emailMe:'Open an email app',
    emailAddressLabel:'Email address',
    copyEmail:'Copy email address',
    contactHint:'Copy the address to write to me from your email service.',
    copySuccess:'Email address copied.',
    copyManual:'The address is selected. Copy it with Ctrl+C or Command+C, or the Copy menu on mobile.',
    portraitAlt:'Portrait of Khadim Rassoul Gueye',
    assistantMacroTitle:'Advanced macroeconomic theory II',
    assistantMacroDates:'Winter 2022, 2023, 2024 and 2025 · Master’s and first-year PhD',
    assistantEnvTitle:'Environmental economics',
    assistantEnvDates:'Fall 2024 · Undergraduate',
    assistantMicroTitle:'Microeconomic theory',
    assistantMicroDates:'Fall 2021 · Master’s and first-year PhD',
    assistantStatsTitle:'Statistics for econometrics',
    assistantStatsDates:'Fall 2021 · Undergraduate'
  });
  const projectCopy = {
    fr:{us:['Logement & émissions','Le rôle de l’investissement résidentiel dans la transmission des chocs et les émissions de gaz à effet de serre.'],ca:['Énergie & émissions','Les effets des chocs de prix du pétrole et du gaz sur la dynamique des émissions canadiennes.'],ssa:['Développement & forêts','Les liens entre termes de l’échange, activité économique et déforestation en Afrique subsaharienne.']},
    en:{us:['Housing & emissions','The role of residential investment in shock transmission and greenhouse gas emissions.'],ca:['Energy & emissions','The effects of oil and gas price shocks on the dynamics of Canadian emissions.'],ssa:['Development & forests','The links between terms of trade, economic activity and deforestation in Sub-Saharan Africa.']}
  };
  let language = 'fr';
  let copyState = 'idle';
  let selectedProject = 'us';
  const tabButtons = Array.from(document.querySelectorAll('[data-project]'));
  const htmlKeys = new Set(['heroRole','windowTitle','researchTitle','teachingTitle','aboutTitle','contactTitle']);
  function renderProject() {
    if (!document.getElementById('research-panel')) return;
    const copy = projectCopy[language][selectedProject];
    document.getElementById('panel-kicker').textContent = copy[0];
    document.getElementById('panel-description').textContent = copy[1];
    document.getElementById('panel-link').setAttribute('href','recherche.html#project-' + selectedProject);
    document.getElementById('research-panel').setAttribute('aria-labelledby','tab-' + selectedProject);
    tabButtons.forEach(button => {
      const selected = button.dataset.project === selectedProject;
      button.setAttribute('aria-selected',String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
  }
  function renderContactStatus() {
    if (!document.getElementById('copy-status')) return;
    const key = copyState === 'copied' ? 'copySuccess' : copyState === 'manual' ? 'copyManual' : 'contactHint';
    document.getElementById('copy-status').textContent = translations[language][key];
  }
  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'fr';
    document.documentElement.lang = language;
    const dictionary = translations[language];
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (htmlKeys.has(key)) element.innerHTML = dictionary[key];
      else element.textContent = dictionary[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => element.setAttribute('aria-label',dictionary[element.dataset.i18nAria]));
    document.querySelectorAll('[data-i18n-alt]').forEach(element => element.setAttribute('alt',dictionary[element.dataset.i18nAlt]));
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.lang === language)));
    const pageKey = {recherche:'navResearch',enseignement:'navTeaching',parcours:'navAbout',contact:'navContact'}[document.body.dataset.page];
    document.title = pageKey ? dictionary[pageKey] + ' · Khadim Rassoul Gueye' : dictionary.pageTitle;
    document.querySelector('meta[name="description"]').content = dictionary.description;
    document.querySelector('meta[property="og:title"]').content = dictionary.pageTitle;
    document.querySelector('meta[property="og:description"]').content = dictionary.ogDescription;
    document.querySelector('.wordmark').setAttribute('aria-label',language === 'fr' ? 'Khadim Rassoul Gueye — accueil' : 'Khadim Rassoul Gueye — home');
    try { localStorage.setItem('krg-language',language); } catch {}
    renderProject();
    renderContactStatus();
  }
  document.getElementById('copy-email')?.addEventListener('click',async () => {
    const address = document.getElementById('contact-address');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(address.value);
      copyState = 'copied';
    } catch {
      address.focus({preventScroll:true});
      address.select();
      address.setSelectionRange(0,address.value.length);
      copyState = 'manual';
    }
    renderContactStatus();
  });
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => setLanguage(button.dataset.lang)));
  tabButtons.forEach((button,index) => {
    button.addEventListener('click',() => { selectedProject = button.dataset.project; renderProject(); });
    button.addEventListener('keydown',event => {
      let target;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') target = (index + 1) % tabButtons.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') target = (index - 1 + tabButtons.length) % tabButtons.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabButtons.length - 1;
      if (target !== undefined) { event.preventDefault(); selectedProject = tabButtons[target].dataset.project; renderProject(); tabButtons[target].focus(); }
    });
  });
  document.getElementById('panel-link')?.addEventListener('click',() => {
    const detail = document.getElementById('project-' + selectedProject);
    if (!detail) return;
    detail.open = true;
    detail.querySelector('summary').focus({preventScroll:true});
  });
  function revealHash() { const detail = document.getElementById(location.hash.slice(1)); if (detail?.tagName === 'DETAILS') detail.open = true; }
  window.addEventListener('hashchange',revealHash);
  revealHash();
  try { const stored = localStorage.getItem('krg-language'); if (stored === 'en') language = 'en'; } catch {}
  setLanguage(language);
})();
