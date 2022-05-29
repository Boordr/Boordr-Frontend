<template>
    <div>
        <NuxtLayout name="header"></NuxtLayout>

        <main>
            <div class="container md:border border-[#d0d7de] rounded md:drop-shadow-sm mt-4 mx-auto bg-white">
                <div class="mx-auto lg:py-3 lg:px-8">
                    <div class="flex  md:mt-0 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                clip-rule="evenodd" />
                        </svg>
                        <h2 class="text-3xl mx-1 font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">
                            Browse
                            our
                            popular boords.</h2>
                    </div>

                    <!-- boords -->
                    <div class="py-5 px-5 md:px-0 grid grid-cols-3 md:flex md:flex-wrap">
                        <NuxtLink to="/board/default">
                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white hover:bg-orange-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-orange-400">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Art</div>
                        </div>
                        </NuxtLink>
                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-sky-400 hover:bg-sky-700 ">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Anime</div>
                        </div>

                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-rose-400 hover:bg-rose-700">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Programming</div>
                        </div>

                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-emerald-400 hover:bg-emerald-700">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Coom</div>
                        </div>

                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white hover:bg-orange-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-orange-400">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Art</div>
                        </div>
                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-sky-400 hover:bg-sky-700 ">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Anime</div>
                        </div>

                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-rose-400 hover:bg-rose-700">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Programming</div>
                        </div>

                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-emerald-400 hover:bg-emerald-700">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Coom</div>
                        </div>

                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white hover:bg-orange-700 font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-orange-400">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Art</div>
                        </div>
                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-sky-400 hover:bg-sky-700 ">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Anime</div>
                        </div>

                        <div
                            class="md:flex md:space-x-1 text-sm text-center text-white font-medium py-3 px-3 mx-1 my-1 rounded cursor-pointer bg-rose-400 hover:bg-rose-700">
                            <div class="rounded-full hidden md:inline">
                                <img src="https://placewaifu.com/image/25/25" class="rounded-full" alt="boord-icon">
                            </div>
                            <div class=""> Programming</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Thread Tab Options -->
            <div id="thread-tab-options" class="px-5 md:px-0">
                <div class="container mt-6 mx-auto flex space-x-2 ">
                    <a class="text-gray-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 cursor-pointer"
                        title="refresh threads">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            title="refresh" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </a>
                    <NuxtLink
                        class="text-indigo-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-800 duration-300 cursor-pointer"
                        title="Create" to="/submit">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            title="Create" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </NuxtLink>
                </div>

                <div class="container mx-auto pb-5 border-b border-gray-200 sm:pb-0">
                    <div class="mt-3 sm:mt-4">
                        <div class="sm:hidden">
                            <label for="current-tab" class="sr-only">Select a tab</label>
                            <select id="current-tab" name="current-tab"
                                class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}
                                </option>
                            </select>
                        </div>
                        <div class="hidden sm:block">
                            <nav class="-mb-px flex space-x-8">
                                <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
                                    :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm']"
                                    :aria-current="tab.current ? 'page' : undefined">
                                    {{ tab.name }}
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Threads -->
            <div class="my-2 mx-2 px-2 thread-container md:grid md:grid-cols-6">
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
               <Thread></Thread>
            </div>
        </main>

\
        <Footer></Footer>
    </div>
</template>

<script setup>
import Footer from '../components/footer.vue';
import Thread from '../components/thread.vue';

definePageMeta({
    title: 'Boorder - The modern imageboord'
})

const tabs = [
    { name: 'Trending', href: '#', current: true },
    { name: 'New', href: '#', current: false },
    { name: 'Bookmarked', href: '#', current: false },
]
</script>
