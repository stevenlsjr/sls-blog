<template>
  <div>
    <DefaultNavbar> </DefaultNavbar>

    <slot name="header"> </slot>
    <slot name="breadcrumbs"></slot>
    <div class="container columns is-centered">
      <div class="column">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
