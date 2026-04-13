---
layout: default
title: About
permalink: /
---

<!-- ========== HERO ========== -->
<section class="hero" id="about">
  <div class="hero__bg">
    <div class="hero__visual">
      <img src="{{ '/assets/img/visuals/antibody.svg' | relative_url }}" alt="">
    </div>
  </div>
  <div class="hero__content">
    <h1 class="hero__title">Ada Fang</h1>

    <div class="hero__profile">
      <div class="hero__photo">
        <img src="{{ '/assets/img/Ada_profile_pic.jpeg' | relative_url }}" alt="Ada Fang">
        <div class="hero__links">
          <a href="https://scholar.google.com/citations?user={{ site.google_scholar_id }}" target="_blank" rel="noopener" aria-label="Google Scholar">
            <svg viewBox="0 0 24 24"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
          </a>
          <a href="https://x.com/{{ site.twitter }}" target="_blank" rel="noopener" aria-label="X">
            <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://linkedin.com/in/{{ site.linkedin }}" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
          </a>
          <a href="mailto:ada_fang@g.harvard.edu" aria-label="Email">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </div>
      <div class="hero__bio">
        <p>I am a PhD candidate at Harvard in the Department of Chemistry and Chemical Biology, advised by Prof. <a href="https://zitniklab.hms.harvard.edu/">Marinka Zitnik</a>. I am a graduate student fellow at the <a href="https://www.harvard.edu/kempner-institute/leadership/#students">Kempner Institute for the Study of Natural and Artificial Intelligence</a>.</p>
        <p>My research lies at the intersection of biology and AI. I work on developing better AI models to understand molecules and the AI scientists to empower autonomous discovery.</p>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"><div></div></div>

<!-- ========== PUBLICATIONS ========== -->
<section class="section" id="publications">
  <div class="container" style="position:relative;">
    <div class="bg-visual bg-visual--right" style="top: 5%; width: 900px;">
      <img src="{{ '/assets/img/visuals/protein-dna.png' | relative_url }}" alt="">
    </div>
    <div class="section__header">
      <h2>Featured Research</h2>
    </div>
    <div class="pub-list">
      <div class="pub-item">
        <div class="pub-item__image"><img src="{{ '/assets/research/clawinstitute.png' | relative_url }}" alt="ClawInstitute"></div>
        <div class="pub-item__body">
          <div class="pub-item__tags"><span class="pub-tag pub-tag--year">2026</span></div>
          <div class="pub-item__title">ClawInstitute: A Research Exchange for AI Scientists</div>
          <div class="pub-item__authors">Shanghua Gao*, <strong>Ada Fang</strong>*, Marinka Zitnik</div>
          <div class="pub-item__venue">preprint coming soon</div>
          <div class="pub-item__links">
            <a href="https://clawinstitute.aiscientist.tools/blog" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>Project</a>
          </div>
        </div>
      </div>

      <div class="pub-item">
        <div class="pub-item__image"><img src="{{ '/assets/research/rel.png' | relative_url }}" alt="REL"></div>
        <div class="pub-item__body">
          <div class="pub-item__tags"><span class="pub-tag pub-tag--year">2026</span></div>
          <div class="pub-item__title">Exploring Relational Reasoning Capabilities in LLMs with REL</div>
          <div class="pub-item__authors">Lukas Fesser*, Yasha Ektefaie*, <strong>Ada Fang</strong>*, Marinka Zitnik</div>
          <div class="pub-item__venue">preprint coming soon</div>
          <div class="pub-item__links">
            <a href="https://zitniklab.hms.harvard.edu/REL/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>Project</a>
            <a href="https://github.com/ada-f/rel" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>Code</a>
            <a href="https://huggingface.co/datasets/ada-f/rel" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.5 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7.5 14.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5"/></svg>Dataset</a>
          </div>
        </div>
      </div>

      <div class="pub-item">
        <div class="pub-item__image"><img src="{{ '/assets/research/igloo.png' | relative_url }}" alt="IGLOO"></div>
        <div class="pub-item__body">
          <div class="pub-item__tags"><span class="pub-tag pub-tag--year">2026</span></div>
          <div class="pub-item__title">Tokenizing Loops of Antibodies</div>
          <div class="pub-item__authors"><strong>Ada Fang</strong>, Robert G. Alberstein, Simon Kelow, Frédéric A. Dreyer</div>
          <div class="pub-item__venue">mAbs</div>
          <div class="pub-item__links">
            <a href="https://www.tandfonline.com/doi/full/10.1080/19420862.2026.2645271" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-3 8h4v2h-4v-2zm0 4h4v2h-4v-2zm-2-4h1v2H8v-2zm0 4h1v2H8v-2z"/></svg>Paper</a>
            <a href="https://github.com/prescient-design/igloo" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>Code</a>
          </div>
        </div>
      </div>

      <div class="pub-item">
        <div class="pub-item__image"><img src="{{ '/assets/research/atomica.png' | relative_url }}" alt="ATOMICA"></div>
        <div class="pub-item__body">
          <div class="pub-item__tags"><span class="pub-tag pub-tag--year">2025</span></div>
          <div class="pub-item__title">Learning Universal Representations of Intermolecular Interactions with ATOMICA</div>
          <div class="pub-item__authors"><strong>Ada Fang</strong>, Michael Desgagné, Zaixi Zhang, Andrew Zhou, Joseph Loscalzo, Bradley L. Pentelute, Marinka Zitnik</div>
          <div class="pub-item__venue">bioRxiv</div>
          <div class="pub-item__award">Selected for Oral at ICML 2025, GenBio Workshop</div>
          <div class="pub-item__links">
            <a href="https://www.biorxiv.org/content/10.1101/2025.04.02.646906" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-3 8h4v2h-4v-2zm0 4h4v2h-4v-2zm-2-4h1v2H8v-2zm0 4h1v2H8v-2z"/></svg>Paper</a>
            <a href="https://github.com/mims-harvard/ATOMICA" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>Code</a>
            <a href="https://huggingface.co/ada-f/ATOMICA" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.5 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7.5 14.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5"/></svg>Model</a>
            <a href="https://doi.org/10.7910/DVN/4DUBJX" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg>Dataset</a>
          </div>
        </div>
      </div>

      <div class="pub-item">
        <div class="pub-item__image"><img src="{{ '/assets/research/ai-agents.png' | relative_url }}" alt="AI Agents"></div>
        <div class="pub-item__body">
          <div class="pub-item__tags"><span class="pub-tag pub-tag--year">2024</span></div>
          <div class="pub-item__title">Empowering biomedical discovery with AI agents</div>
          <div class="pub-item__authors">Shanghua Gao, <strong>Ada Fang</strong>*, Yepeng Huang*, Valentina Giunchiglia*, Ayush Noori*, Jonathan Richard Schwarz, Yasha Ektefaie, Jovana Kondic, Marinka Zitnik</div>
          <div class="pub-item__venue">Cell</div>
          <div class="pub-item__links">
            <a href="https://www.cell.com/cell/fulltext/S0092-8674(24)01070-5" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-3 8h4v2h-4v-2zm0 4h4v2h-4v-2zm-2-4h1v2H8v-2zm0 4h1v2H8v-2z"/></svg>Paper</a>
          </div>
        </div>
      </div>

      <div class="pub-item">
        <div class="pub-item__image"><img src="{{ '/assets/research/ai-for-science-review.png' | relative_url }}" alt="AI for Science"></div>
        <div class="pub-item__body">
          <div class="pub-item__tags"><span class="pub-tag pub-tag--year">2023</span></div>
          <div class="pub-item__title">Artificial intelligence for science in quantum, atomistic, and continuum systems</div>
          <div class="pub-item__authors">Xuan Zhang, Limei Wang, Jacob Helwig, ... <strong>Ada Fang</strong>, ... Shuiwang Ji</div>
          <div class="pub-item__venue">Foundations and Trends in Machine Learning</div>
          <div class="pub-item__links">
            <a href="https://arxiv.org/abs/2307.08423" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-3 8h4v2h-4v-2zm0 4h4v2h-4v-2zm-2-4h1v2H8v-2zm0 4h1v2H8v-2z"/></svg>Paper</a>
          </div>
        </div>
      </div>

      <div class="pub-item">
        <div class="pub-item__image"><img src="{{ '/assets/research/molinteract.png' | relative_url }}" alt="Molecular Interactions"></div>
        <div class="pub-item__body">
          <div class="pub-item__tags"><span class="pub-tag pub-tag--year">2023</span></div>
          <div class="pub-item__title">Mapping the intermolecular interaction universe through self-supervised learning on molecular crystals</div>
          <div class="pub-item__authors"><strong>Ada Fang</strong>, Zaixi Zhang, Marinka Zitnik</div>
          <div class="pub-item__venue">NeurIPS 2023 AI for Science Workshop</div>
          <div class="pub-item__links">
            <a href="https://openreview.net/forum?id=PVOhNEqO72&noteId=dNXL06qgpw" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-3 8h4v2h-4v-2zm0 4h4v2h-4v-2zm-2-4h1v2H8v-2zm0 4h1v2H8v-2z"/></svg>Paper</a>
          </div>
        </div>
      </div>

      <div class="pub-item">
        <div class="pub-item__image"><img src="{{ '/assets/research/mof.png' | relative_url }}" alt="MOF"></div>
        <div class="pub-item__body">
          <div class="pub-item__tags"><span class="pub-tag pub-tag--year">2022</span></div>
          <div class="pub-item__title">Quantification of Photocyclization Kinetics and Its Temperature Dependence in a Cofacial Metal–Organic Framework</div>
          <div class="pub-item__authors">Eleanor R. Kearns, Jack K. Clegg, William Lewis, <strong>Ada Fang</strong>, Bun Chan, Deanna M. D'Alessandro</div>
          <div class="pub-item__venue">Chemistry of Materials</div>
          <div class="pub-item__links">
            <a href="https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.2c02528" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-3 8h4v2h-4v-2zm0 4h4v2h-4v-2zm-2-4h1v2H8v-2zm0 4h1v2H8v-2z"/></svg>Paper</a>
          </div>
        </div>
      </div>

      <div class="pub-item">
        <div class="pub-item__image"><img src="{{ '/assets/research/cannabinoid.png' | relative_url }}" alt="Cannabinoid"></div>
        <div class="pub-item__body">
          <div class="pub-item__tags"><span class="pub-tag pub-tag--year">2020</span></div>
          <div class="pub-item__title">Synthesis and in Vitro Cannabinoid Receptor 1 Activity of Recently Detected Synthetic Cannabinoids</div>
          <div class="pub-item__authors">Annelies Cannaert, Eric Sparkes, Edward Pike, Jia Lin Luo, <strong>Ada Fang</strong>, Richard C. Kevin, Ross Ellison, Roy Gerona, Samuel D. Banister*, Christophe P. Stove</div>
          <div class="pub-item__venue">ACS Chemical Neuroscience</div>
          <div class="pub-item__links">
            <a href="https://pubs.acs.org/doi/abs/10.1021/acschemneuro.0c00644" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zm-3 8h4v2h-4v-2zm0 4h4v2h-4v-2zm-2-4h1v2H8v-2zm0 4h1v2H8v-2z"/></svg>Paper</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"><div></div></div>

<!-- ========== EXPERIENCE ========== -->
<section class="section" id="experience" style="position:relative;overflow:hidden;">
  <div class="bg-visual bg-visual--right" style="top: 0; width: 400px;">
    <img src="{{ '/assets/img/visuals/protein-peptide.png' | relative_url }}" alt="">
  </div>
  <div class="container">
    <div class="section__header">
      <h2>Experience</h2>
    </div>

    <div class="logo-row-list">
      <div class="logo-row">
        <div class="logo-row__icon">
          <img src="{{ '/assets/img/logos/deepmind.png' | relative_url }}" alt="Google DeepMind">
        </div>
        <div class="logo-row__body">
          <div class="logo-row__main">
            <div>
              <div class="logo-row__title">Google DeepMind</div>
              <div class="logo-row__details"><span>Student Researcher, AlphaGenome Team</span></div>
            </div>
            <div class="logo-row__meta">
              <div class="logo-row__location">London, UK</div>
              <div class="logo-row__date">2025</div>
            </div>
          </div>
        </div>
      </div>

      <div class="logo-row">
        <div class="logo-row__icon">
          <img src="{{ '/assets/img/logos/genentech.png' | relative_url }}" alt="Genentech">
        </div>
        <div class="logo-row__body">
          <div class="logo-row__main">
            <div>
              <div class="logo-row__title">Genentech, Prescient Design</div>
              <div class="logo-row__details"><span>Internship</span></div>
            </div>
            <div class="logo-row__meta">
              <div class="logo-row__location">New York City, US</div>
              <div class="logo-row__date">2025</div>
            </div>
          </div>
        </div>
      </div>

      <div class="logo-row">
        <div class="logo-row__icon">
          <img src="{{ '/assets/img/logos/mckinsey.svg' | relative_url }}" alt="McKinsey">
        </div>
        <div class="logo-row__body">
          <div class="logo-row__main">
            <div>
              <div class="logo-row__title">McKinsey &amp; Company, QuantumBlack</div>
              <div class="logo-row__details"><span>Data Science Fellow</span></div>
            </div>
            <div class="logo-row__meta">
              <div class="logo-row__location">Sydney, Australia</div>
              <div class="logo-row__date">2022</div>
            </div>
          </div>
        </div>
      </div>

      <div class="logo-row">
        <div class="logo-row__icon">
          <img src="{{ '/assets/img/logos/optiver.png' | relative_url }}" alt="Optiver">
        </div>
        <div class="logo-row__body">
          <div class="logo-row__main">
            <div>
              <div class="logo-row__title">Optiver</div>
              <div class="logo-row__details"><span>Quantitative Trader Intern</span></div>
            </div>
            <div class="logo-row__meta">
              <div class="logo-row__location">Sydney, Australia</div>
              <div class="logo-row__date">2021</div>
            </div>
          </div>
        </div>
      </div>

      <div class="logo-row">
        <div class="logo-row__icon">
          <img src="{{ '/assets/img/logos/google.png' | relative_url }}" alt="Google">
        </div>
        <div class="logo-row__body">
          <div class="logo-row__main">
            <div>
              <div class="logo-row__title">Google</div>
              <div class="logo-row__details"><span>Software Engineering Intern</span></div>
            </div>
            <div class="logo-row__meta">
              <div class="logo-row__location">Sydney, Australia</div>
              <div class="logo-row__date">2020</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"><div></div></div>

<!-- ========== EDUCATION ========== -->
<section class="section" id="education" style="position:relative;overflow:hidden;">
  <div class="bg-visual bg-visual--left" style="top: 10%; width: 380px;">
    <img src="{{ '/assets/img/visuals/gfp-structure.png' | relative_url }}" alt="">
  </div>
  <div class="container">
    <div class="section__header">
      <h2>Education</h2>
    </div>

    <div class="logo-row-list">
      <div class="logo-row">
        <div class="logo-row__icon">
          <img src="{{ '/assets/img/logos/harvard.png' | relative_url }}" alt="Harvard">
        </div>
        <div class="logo-row__body">
          <div class="logo-row__main">
            <div>
              <div class="logo-row__title">Harvard University</div>
              <div class="logo-row__details"><span>PhD in Chemistry. Advisor: Prof. Marinka Zitnik</span></div>
            </div>
            <div class="logo-row__meta">
              <div class="logo-row__location">Cambridge, MA</div>
              <div class="logo-row__date">2022 – 2027 (expected)</div>
            </div>
          </div>
        </div>
      </div>

      <div class="logo-row">
        <div class="logo-row__icon">
          <img src="{{ '/assets/img/logos/mit.png' | relative_url }}" alt="MIT">
        </div>
        <div class="logo-row__body">
          <div class="logo-row__main">
            <div>
              <div class="logo-row__title">Massachusetts Institute of Technology</div>
              <div class="logo-row__details"><span>Cross-Registered Student</span></div>
            </div>
            <div class="logo-row__meta">
              <div class="logo-row__location">Cambridge, MA</div>
              <div class="logo-row__date">2022 – 2023</div>
            </div>
          </div>
        </div>
      </div>

      <div class="logo-row">
        <div class="logo-row__icon">
          <img src="{{ '/assets/img/logos/sydney.png' | relative_url }}" alt="University of Sydney">
        </div>
        <div class="logo-row__body">
          <div class="logo-row__main">
            <div>
              <div class="logo-row__title">University of Sydney</div>
              <div class="logo-row__details"><span>B.Sc. (Honours), Chemistry &amp; Mathematics. University Medal</span></div>
            </div>
            <div class="logo-row__meta">
              <div class="logo-row__location">Sydney, Australia</div>
              <div class="logo-row__date">2018 – 2021</div>
            </div>
          </div>
        </div>
      </div>

      <div class="logo-row">
        <div class="logo-row__icon">
          <img src="{{ '/assets/img/logos/berkeley.png' | relative_url }}" alt="UC Berkeley">
        </div>
        <div class="logo-row__body">
          <div class="logo-row__main">
            <div>
              <div class="logo-row__title">University of California, Berkeley</div>
              <div class="logo-row__details"><span>Exchange Semester. 4.00 GPA</span></div>
            </div>
            <div class="logo-row__meta">
              <div class="logo-row__location">Berkeley, CA</div>
              <div class="logo-row__date">Fall 2019</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"><div></div></div>

<!-- ========== AWARDS ========== -->
<section class="section" id="awards">
  <div class="container">
    <div class="section__header">
      <h2>Fellowships &amp; Awards</h2>
    </div>

    <div class="awards-section">
      <div class="awards-year-group">
        <div class="awards-year-group__label">2023</div>
        <ul class="awards-year-group__items">
          <li>Kempner Institute Fellow, Harvard University (Chan Zuckerberg Initiative)</li>
        </ul>
      </div>
      <div class="awards-year-group">
        <div class="awards-year-group__label">2022</div>
        <ul class="awards-year-group__items">
          <li>University Medal for Honours in Chemistry, University of Sydney</li>
          <li>$250,000 XPRIZE Student Prize for Carbon Removal (Elon Musk Foundation)</li>
          <li>Janet Elspeth Crawford Prize in Chemistry</li>
        </ul>
      </div>
      <div class="awards-year-group">
        <div class="awards-year-group__label">2019</div>
        <ul class="awards-year-group__items">
          <li>Australian Gov. Endeavour Leadership Program Mobility Grant</li>
          <li>Charles E Fawsitt Prize for Chemistry</li>
          <li>Dean's List of Excellence in Academic Performance</li>
          <li>Mrs Elva Rae Award for highest achieving female student in mathematics</li>
        </ul>
      </div>
      <div class="awards-year-group">
        <div class="awards-year-group__label">2018</div>
        <ul class="awards-year-group__items">
          <li>Vice Chancellor Scholarship (top 0.05% in New South Wales, Australia)</li>
          <li>Liversidge Chemistry Scholarship</li>
          <li>49th International Chemistry Olympiad Bronze Medal</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"><div></div></div>

<!-- ========== COMMUNITY ========== -->
<section class="section" id="community">
  <div class="container">
    <div class="section__header">
      <h2>Community Engagement</h2>
    </div>

    <div class="community-list">
      <div class="community-item">
        <div>
          <div class="community-item__role">Conference Workshop Organizer</div>
          <div class="community-item__desc">AI for Science Workshop at NeurIPS 2025 and ICML 2024</div>
        </div>
        <div class="community-item__date">2024 – 2025</div>
      </div>
      <div class="community-item">
        <div>
          <div class="community-item__role">Competition Organizer</div>
          <div class="community-item__desc">AI for Science Dataset Proposal Competition, Sponsored by Renaissance Philanthropy</div>
        </div>
        <div class="community-item__date">2024</div>
      </div>
      <div class="community-item">
        <div>
          <div class="community-item__role">Student Volunteer</div>
          <div class="community-item__desc">New Frontiers of AI for Drug Discovery and Development at NeurIPS 2023</div>
        </div>
        <div class="community-item__date">2023</div>
      </div>
      <div class="community-item">
        <div>
          <div class="community-item__role">House Tutor</div>
          <div class="community-item__desc">Harvard College, Lowell House</div>
        </div>
        <div class="community-item__date">2024 – Present</div>
      </div>
    </div>
  </div>
</section>

<script>
const sections = document.querySelectorAll('section[id]');
const sidebarLinks = document.querySelectorAll('.sidebar__nav a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sidebarLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-20% 0px -60% 0px' });

sections.forEach(section => observer.observe(section));

// Close mobile sidebar on link click
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
  });
});
</script>
