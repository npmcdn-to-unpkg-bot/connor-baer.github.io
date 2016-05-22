---
layout: home
title: Projects
---

<div class="feed">
  <div class="feed-header ctnr-wide">
    <h1 id="projects" class="feed-headline">Projects</h1>
    <div class="feed-more">
      <h1 id="feed-left" class="feed-arrow">&#10092;</h1>
      <h1 id="feed-right" class="feed-arrow">&#10093;</h1>
    </div>
  </div>
  <div class="feed-content">
    <div class="cards js-slick">
      {% assign projects = site.data.projects | sort: 'order' %}
      {% for project in projects %}
        <div class="card">
          <a href="{{ project.url }}">
            <div class="card-header">
              <div class="card-tag"><p>{{ project.category }}</p></div>
              <div class="card-image" style="background-image: url('{{ site.baseurl }}/img/{{project.image}}.jpg')"></div>
              </div>
            <div class="card-content">
              <h2 class="card-headline">{{ project.title }}</h2>
              <p class="card-description">{{ project.description }}</p>
            </div>
          </a>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="feed">
  <div class="feed-header ctnr-wide">
    <h1 id="contact" class="feed-headline">Get in touch!</h1>
  </div>
  <div class="ctnr-golden">
    <form action="//formspree.io/hello@connorbaer.io" method="POST">
      <label for="name">What’s your name?</label>
      <input type="text" name="name" placeholder="Jane" required="true">
      <label for="_replyto">What’s your email address?</label>
      <input type="email" name="_replyto" placeholder="jane@example.com" required="true">
      <label for="message">What can I do for you?</label>
      <textarea rows="4" type="text" name="message" placeholder="Hi Connor! I have a question…" required="true"></textarea>
      <input type="hidden" name="_subject" value="Someone wants to say hello" />
      <input type="hidden" name="_next" value="//connorbaer.io/success.html" />
      <input type="text" name="_gotcha" style="display:none" />
      <button class="button" type="submit">Send and smile!</button>
    </form>
  </div>
</div>
<!-- <div class="ctnr-wide">
<a id="typeform-button" class="typeform-share" href="https://connorbaer.typeform.com/to/KrxW5z" data-mode="1" target="_blank">Get in touch!</a>
<script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}id=id+'_';if(!gi.call(d,id)){qs=ce.call(d,'link');qs.rel='stylesheet';qs.id=id;qs.href=b+'share-button.css';s=gt.call(d,'head')[0];s.appendChild(qs,s)}})()</script>
</div> -->

<!-- <div class="posts">
  {% for post in site.posts %}
  <div class="post">
    <a name="{{ post.title | downcase | url_encode }}"><h1 class="post-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h1>
    
    {{ post.content }}
  </div></a>
  {% endfor %}
</div> -->