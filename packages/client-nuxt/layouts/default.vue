<template>
  <div class="flex flex-col bg-yellow-50">
    <DefaultNavbar> </DefaultNavbar>

    <slot name="header"> </slot>
    <slot name="breadcrumbs"></slot>
    <div class="container mx-auto p-3 justify-center">
      <slot></slot>
    </div>
  </div>
</template>
