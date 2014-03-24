
<?php $theme_root = drupal_get_path('theme', 'autodesign'); ?>
<div id="wrapper">
<div id="container">
<div id="header">
    <img src="/<?php print $theme_root; ?>/images/logo2.png" alt="PLACEHOLDER" />
</div>
<div id="navigation">
<?php 
$nav = render($page['navigation']); 
if (!empty($nav)) : ?>
<?php print $nav; ?>
<?php endif; ?>
</div>

<?php
$sub_nav = render($page['navigation_secondary']);
if (!empty($sub_nav)) : ?>
<div id="prodnav">
<?php print $sub_nav; ?>
<div class="clearer"></div>
</div>
<?php endif; ?>

        <div id="main-content-holder">

      <a id="main-content"></a>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <div id="editorLinks">
        <?php print render($tabs); ?>
        </div>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <?php print render($page['help']); ?>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>

        <div class="clearer"></div>
  </div>
</div>
<div id="widefooter">
  <span id="footer">
        <?php print render($page['footer']); ?>
  </span>
</div>
</div>


