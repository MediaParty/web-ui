<style global lang="scss">
  @import "styles/App";

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<script lang="ts">
    import Router from "svelte-spa-router";
    import {routes} from "./Routes";
    import {i18nConfig} from "./i18n";

    i18nConfig();

</script>

<main>
    <Router {routes}/>
</main>
