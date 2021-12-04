<template>
  <div class="container app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/status">Status</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/playlist">Playlist</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/album">Album</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
h1, h2, h3 {
  font-family: 'Lato', sans-serif;
}
.app {
  font-family: 'Titillium Web', sans-serif;
}
</style>
