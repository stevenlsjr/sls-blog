<template>
  <div class="">
    <DefaultNavbar> </DefaultNavbar>

    <slot name="header"> </slot>
    <slot name="breadcrumbs"></slot>
    <div class="conainer mx-auto">
      <slot></slot>
    </div>
  </div>
</template>
