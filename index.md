---
layout: default
title: Made by Connor.
image: '/assets/cloud.jpg'
---

<nav>
  {% include navigation.html %}
</nav> 
<header class="header">
  <div class="header-background" style="background-image: url('{{ site.baseurl }}{{ page.image }}')">
    <svg class="header-large" viewBox="0 0 450 75">
      <defs>
        <g id="text-large">
          <text class="header-text" text-anchor="middle" x="225" y="55">Made by Connor.</text>
        </g>
        <mask id="mask-large" x="0" y="0" width="450" height="75">
          <rect x="0" y="0" width="450" height="75" fill="#fff"/>
          <use xlink:href="#text-large" />
        </mask>
      </defs>
      <rect x="0" y="0" width="450" height="75" mask="url(#mask-large)" fill="white" fill-opacity="1"/>
      <use xlink:href="#text-large" mask="url(#mask-large)" />
    </svg>
    <svg class="header-small" viewBox="0 0 245 150">
      <defs>
        <g id="text-top">
          <text class="header-text" x="15" y="53">Made by</text>
        </g>
        <mask id="mask-top" x="0" y="0" width="245" height="75" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="245" height="75" fill="#fff"/>
          <use xlink:href="#text-top" />
        </mask>
        <g id="text-bottom">
          <text class="header-text" x="15" y="128">Connor.</text>
        </g>
        <mask id="mask-bottom" x="0" y="75" width="225" height="75" maskUnits="userSpaceOnUse">
          <rect x="0" y="75" width="225" height="75" fill="#fff"/>
          <use xlink:href="#text-bottom" />
        </mask>
      </defs>
      <rect x="0" y="0" width="245" height="75" mask="url(#mask-top)" fill="white" fill-opacity="1"/>
      <use xlink:href="#text-top" mask="url(#mask-top)" />
      <rect x="0" y="75" width="225" height="75" mask="url(#mask-bottom)" fill="white" fill-opacity="1"/>
      <use xlink:href="#text-bottom" mask="url(#mask-bottom)" />
    </svg>
  </div>
</header>

<!-- <section id="about" class="section">
  <h3 class="section-title">About</h3>
  <article>
    <h1 class="section-header">I love people who love making things… and sushi!</h1>
    <h4 class="section-body large">{{ site.tagline }}</h4>
    <a class="section-link" href="/process">Learn about my work process →</a>
  </article>
</section> -->

<section id="creating" class="section">
  <h3 class="section-title">creating</h3>
  <div class="section-creating">
    {% assign projects = site.data.projects | sort: 'order' %}
    {% for project in projects %}
      <div class="section-project">
        <h2 class="section-header">{{ project.title }}</h2>
        <p class="section-body">{{ project.description }}</p>
        <a href="{{ project.url }}" class="section-link" target="_blank" rel="noopener noreferrer">{{ project.cta }} →</a>
      </div>
    {% endfor %}
  </div>
</section>

<section id="writing" class="section">
  <h3 class="section-title">Writing</h3>
  <div class="section-writing">
    {% for post in site.posts | limit: 3 %}
    <article>
      <a href="{{ post.medium }}" class="post-link" target="_blank" rel="noopener noreferrer">
        <h2 class="section-header post-header">{{ post.title }}</h2>
        <div class="section-post">
          <p class="section-body post-body">{{ post.content | strip_html | truncatewords: 30 }}</p>
          {% if post.thumb %}
          <div class="post-image" style="background-image: url('{{ site.baseurl }}{{ post.thumb }}')"></div>
          {% endif %}
        </div>
      </a>
    </article>
    {% endfor %}
  </div>
  <a href="https://blog.connorbaer.io/" class="section-link post-medium" target="_blank" rel="noopener noreferrer">Read more on Medium →</a>
</section>

<section id="contact" class="section">
  <h3 class="section-title">Contact</h3>
  <form action="//formspree.io/hello@connorbaer.io" method="POST">
    <div class="section-inputs">
      <div class="section-input">
        <label for="name">What’s your name?</label>
        <input type="text" name="name" placeholder="Jane" required>
      </div>
      <div class="section-input">
        <label for="_replyto">What’s your email address?</label>
        <input type="email" name="_replyto" placeholder="jane@example.com" required pattern="[^ @]*@[^ @]*\.[a-zA-Z]{2,}">
      </div>
    </div>
    <label for="message">What can I do for you?</label>
    <textarea rows="4" name="message" placeholder="Hi Connor! I have a question…" required></textarea>
    <input type="hidden" name="_subject" value="Someone wants to say hello" />
    <input type="hidden" name="_next" value="//connorbaer.io/success/" />
    <input type="text" name="_gotcha" style="display:none" />
    <button class="section-link button" type="submit">Send and smile →</button>
  </form>
</section>