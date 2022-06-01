<template>
    <div>
        <NuxtLayout name="header"></NuxtLayout>
        <div>
            <div>
                <img class="h-32 w-full object-cover lg:h-48" :src="boord.backgroundImage" alt="Boord Cover Image" />
            </div>
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border rounded-br rounded-bl">
                <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div class="flex">
                        <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" :src="boord.avatar"
                            alt="" />
                    </div>
                    <div class="mt-6 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div class="flex">
                            <div title="Sponsered Boord">
                                <BadgeCheckIcon class="w-6 h-6 mt-1 text-indigo-500"></BadgeCheckIcon>
                            </div>
                            <div>
                                <h1 class="text-2xl font-bold text-gray-900 break-words">
                                    Anime - Lorem ipsum dolor sit amet consectetur.
                                </h1>
                            </div>
                        </div>
                        <div class="flex flex-col justify-stretch sm:flex-row sm:space-y-0 sm:space-x-2">
                            <button type="button" title="Bookmark Boord"
                                class="inline-flex justify-center px-2 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-1 md:my-0">
                                <span>
                                    <BookmarkIcon class="w-5 h-5 text-gray-500"></BookmarkIcon>
                                </span>
                            </button>
                            <button type="button" title="Manage Boord"
                                class="inline-flex justify-center px-2 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-2 md:my-0">
                                <span>
                                    <CogIcon class="w-5 h-5 text-gray-500"></CogIcon>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto my-8">
            <div class="md:grid md:grid-cols-6 md:gap-2 mx-auto ml-8 my-2">
                <div class="col-span-5">
                    <div class="thread-container md:grid md:grid-cols-5">
                        <button type="button"
                            class="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
                            <PhotographIcon class="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                            New thread
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto my-3">
            <div class="md:grid md:grid-cols-6 md:gap-2">
                <div class="col-span-5">
                    <div class="my-2 mx-2 px-2 thread-container md:grid md:grid-cols-5">
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
                </div>
                <div class="invisible md:visible">
                    <div class="my-2 mx-2 px-2 border">
                        Boord rules :^)
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { BookmarkIcon, BadgeCheckIcon, CogIcon, ReplyIcon, PhotographIcon } from '@heroicons/vue/outline'
import Thread from '../../components/thread.vue';
import Footer from '../../components/footer.vue';

const boord = {
    avatar:
        'https://placewaifu.com/image/1024/1024',
    backgroundImage:
        'https://pbs.twimg.com/media/FRlXO67VEAAe__I.jpg:large',
}
</script>