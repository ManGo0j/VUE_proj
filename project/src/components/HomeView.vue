<template>
  <main>
    <h1>Main</h1>
    <section>
      <ul>
        <li>
          <router-link :to="{ name: 'settings' }">To settings</router-link>
          <ul>
            <li>
              <router-link :to="{ name: 'settings-profile' }"
                >To profile settings</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <router-link :to="{ name: 'user', params: { id: 123 } }"
            >To User ID</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'homework' }">To HomeWork</router-link>
        </li> <li>
          <router-link :to="{ name: 'theme' }">To Theme</router-link>
        </li> 
      </ul>
    </section>
  </main>
</template>
