<template>
  <ion-page>
    <ion-router-outlet></ion-router-outlet>
  </ion-page>
</template>

<script>
import { IonPage, IonRouterOutlet } from '@ionic/vue';

export default {
  name: 'Tabs',
  components: { IonPage, IonRouterOutlet },
  data() {
    return {
    }
  }
}
</script>
