<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
        <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
</template>

<style>
@import "~/assets/css/styles.css";
</style>
