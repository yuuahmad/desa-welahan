<!-- ini adalah tampilan utama (router /) -->
<template>
    <!-- bagian utamanya telah diletakkan bg utama dan warna teks putih -->
    <div>
        <!-- bagian tampilan gambar dan propoerti diatasnya -->
        <div>
            <div class="object-cover w-full aspect-video bg-center p-24"
                style="background-image: url(assets/images/tanamIkan.jpg);">
                <div class="bg-backgroundPrimer capitalize text-2xl specialbg">
                    selamat datang di website tidak resmi desa welahan jepara
                </div>
            </div>
            <!-- <img class="object-cover w-full aspect-video" src="~/assets/images/tanamIkan.jpg" /> -->

        </div>
    </div>
    <!-- isi konten -->
    <div class="container mx-auto ">
        <!-- konten pertama -->
        <div>
            ini adalah isi konten pertama saya
        </div>
        <!-- konten kedua -->
        <div>
            ini adalah konten kedua
        </div>

        <!-- konten ketiga -->
        <div>konten ketiga</div>
    </div>
</template>
<script setup>
// ini adalah cara menambahkan gambar dengan benar
// const logo = require('../assets/images/tanamIkan.jpg')
</script>

<style style lang="css" scoped>
.orange-text {
    color: orange;
    font-weight: bold;
}

.specialbg {
    /* linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(26, 29, 45, 0.37) 42.19%, #1A1D2D 100%); */
}
</style>    