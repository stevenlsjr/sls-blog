<template>
  <div class="">
    <DefaultNavbar> </DefaultNavbar>

    <slot name="header"> </slot>
    <slot name="breadcrumbs"></slot>
    <div class="container mx-auto p-3">
      <slot></slot>
    </div>
  </div>
</template>
