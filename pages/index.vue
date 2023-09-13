<template>
    <div>
        <div class="d-md-none">
            <LpSidebar />
        </div>
        <div class="d-none d-md-block">
            <LpHeader />
        </div>
         <div>
            <LpExplore />
        </div>
        <div>
            <LpKnowUs />
        </div>
        <div>
            <LpEventCategories />
        </div>
        <div>
            <LpVirtualEvent />
        </div>
        <div>
            <LpCheckEvent />
        </div>
        <div>
            <LpCreators />
        </div>
        <div>
            <LpUsers />
        </div>
        <!-- <div>
            <LpInform />
        </div> -->
        <div>
            <LpContactUs />
        </div>
        <div>
            <LpFooter />
        </div> 
    </div>
</template>
<script setup>
 import LpExplore from '~/components/Landing-page/LpExplore.vue'
 import LpKnowUs from '~/components/Landing-page/LpKnowUs.vue';
 import LpEventCategories from '~/components/Landing-page/LpEventCategories.vue';
 import LpVirtualEvent from '~/components/Landing-page/LpVirtualEvent.vue';
 import LpCheckEvent from '~/components/Landing-page/LpCheckEvent.vue';
 import LpCreators from '~/components/Landing-page/LpCreators.vue';
 import LpUsers from '~/components/Landing-page/LpUsers.vue';
 import LpInform from '~/components/Landing-page/LpInform.vue';
 import LpContactUs from '~/components/Landing-page/LpContactUs.vue';
 import LpFooter from '~/components/Landing-page/LpFooter.vue';
 import LpHeader from '~/components/Landing-page/LpHeader.vue';
 import LpSidebar from '~/components/Landing-page/LpSidebar.vue';
</script>
<style scoped>

</style>