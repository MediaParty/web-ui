<style lang="scss">
  @import "Home";
</style>

<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Great%20Vibes" rel="stylesheet">
    <title>{$_("appName")}</title>
</svelte:head>

<script lang="ts">
    import {_} from 'svelte-i18n';
</script>

<div class="home-container">
    <h1 class="home-title">{$_("appName")}</h1>
    <h3 class="home-subtitle">{$_("home.subtitle")}</h3>
    <div class="home-buttons-group">
        <span class="home-button">{$_("home.joinParty")}</span>
        <span class="home-button">{$_("home.createParty")}</span>
    </div>
</div>
