<template>
    <q-layout>
        <q-header class="bg-blue-grey-9 responsiveHeader">
            <q-toolbar>
                <q-btn-toggle color="red" text-color="white"
                    v-model="display" outline no-caps :options="[
                        {label: 'Desktop', value: 'desktop'},
                        {label: 'Tablet', value: 'tablet'},
                        {label: 'Tablet (Portrait)', value: 'tabletp'},
                        {label: 'Mobile', value: 'mobile'},
                        // {label: 'Mobile (Landscape)', value: 'mobilel'}
                    ]" />
            </q-toolbar>
        </q-header>
        <q-page-container :class="display" class="framed">
            <iframe src="."></iframe>
        </q-page-container>
    </q-layout>
</template>

<script>
    import { ref } from 'vue'
    export default {
        setup () {
            return {
                display: ref('desktop')
            }
        }
    }
</script>

<style>
:root {
    --tabletWidth: 1040px;
    --tabletHeight: 768px;
    --mobileWidth: 350px;
    --mobileHeight: 568px;
}
/* .responsiveHeader {} */
@media only screen and (max-width: 1199px) {
    .responsiveHeader {
        display: none;
    }
}
.framed {
    box-shadow: 0 0 0 29px #555, 0 0 0 30px #dee0e3;
    border-radius: 10px;
}
iframe {
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
}
@media only screen and (max-width: 1199px) {
    iframe {
        height: 100%;
    }
}
/* .desktop {} */
.tablet, .tabletp {
    padding-top: 0px !important;
    margin-top: 25px;
    position: fixed;
}
.tablet {
    width: var(--tabletWidth);
    height: var(--tabletHeight);
    margin-left: calc(50vw - var(--tabletWidth)/2);
    margin-top: calc(50vh - var(--tabletHeight)/2 + 25px);
}
.tabletp {
    width: var(--tabletHeight);
    height: var(--tabletWidth);
    margin-left: calc(50vw - var(--tabletHeight)/2);
    margin-top: calc(50vh - var(--tabletWidth)/2 + 25px);
}
.mobile, .mobilel {
    padding-top: 0px !important;
    margin-top: 25px;
    position: fixed;
}
.mobile {
    width: var(--mobileWidth);
    height: var(--mobileHeight);
    margin-left: calc(50vw - var(--mobileWidth)/2);
    margin-top: calc(50vh - var(--mobileHeight)/2 + 25px);
}
.mobilel {
    width: var(--mobileHeight);
    height: var(--mobileWidth);
    margin-left: calc(50vw - var(--mobileHeight)/2);
    margin-top: calc(50vh - var(--mobileWidth)/2 + 25px);
}
.tablet iframe, .tabletp iframe, .mobile iframe, .mobilel iframe {
    height: 100%;
}
</style>